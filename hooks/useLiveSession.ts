
// ... imports
import { useState, useRef, useCallback, useEffect } from 'react';
import { SessionStatus, Provider, StudentProfile, ExamMode, SessionMode } from '../types';
import { decodeAudioData } from '../utils/audio';
import { GeminiClient } from '../api/gemini';
import { LiveClient, TokenUsage } from '../api/types';
import { generateSystemInstruction } from '../utils/context';
import { MOCK_ANALYTICS } from '../lib/mockData';
import { LIVE_MODEL } from '../lib/constants';
import { memoryService } from '../services/memoryService';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  source: Provider;
}

export interface VisualContent {
  data: string;
  title: string;
}

export const useLiveSession = () => {
  const [status, setStatus] = useState<SessionStatus>(SessionStatus.IDLE);
  const [sessionMode, setSessionMode] = useState<SessionMode>('voice');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const [visualContent, setVisualContent] = useState<VisualContent | null>(null);
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isProcessingText, setIsProcessingText] = useState(false);
  const [tokenUsage, setTokenUsage] = useState<TokenUsage>({ totalTokens: 0, inputTokens: 0, outputTokens: 0 });
  const [currentTranscript, setCurrentTranscript] = useState<string>('');

  // Refs for State Persistence
  const messagesRef = useRef<ChatMessage[]>([]);
  const visualContentRef = useRef<VisualContent | null>(null);

  // Audio Contexts & Nodes
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  
  // Output Audio Queue Management
  const nextStartTimeRef = useRef<number>(0);
  const activeSourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  
  // Client Abstraction
  const clientRef = useRef<LiveClient | null>(null);

  // Connection & Recovery State
  const sessionIdRef = useRef<string | null>(null);
  const isUserDisconnectingRef = useRef<boolean>(false);
  const reconnectAttemptsRef = useRef<number>(0);
  const isFatalErrorRef = useRef<boolean>(false); 
  const MAX_RECONNECT_ATTEMPTS = 3;
  
  const sessionParamsRef = useRef<{
      profile: StudentProfile;
      subject: string;
      topic?: string;
      examMode: ExamMode;
      initialMode: SessionMode;
  } | null>(null);

  // --- 1. ROBUST AUDIO CLEANUP ---
  const cleanupAudio = useCallback(() => {
    // Stop all microphone tracks explicitly
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }

    // Disconnect and clean up input nodes
    if (sourceRef.current) {
        try { sourceRef.current.disconnect(); } catch (e) { /* ignore */ }
        sourceRef.current = null;
    }
    if (processorRef.current) {
        try { processorRef.current.disconnect(); } catch (e) { /* ignore */ }
        processorRef.current = null;
    }

    // Close contexts
    if (inputAudioContextRef.current) {
      try { inputAudioContextRef.current.close(); } catch (e) { /* ignore */ }
      inputAudioContextRef.current = null;
    }
    if (outputAudioContextRef.current) {
      try { outputAudioContextRef.current.close(); } catch (e) { /* ignore */ }
      outputAudioContextRef.current = null;
    }

    // Clear output queue
    activeSourcesRef.current.forEach(source => {
        try { source.stop(); } catch (e) { /* ignore */ }
    });
    activeSourcesRef.current.clear();
    nextStartTimeRef.current = 0;
    setAnalyser(null);
  }, []);

  const cleanupResources = useCallback(() => {
    if (clientRef.current) {
      clientRef.current.disconnect();
      clientRef.current = null;
    }
    cleanupAudio();
  }, [cleanupAudio]);

  const disconnect = useCallback(() => {
    isUserDisconnectingRef.current = true;
    
    if (sessionIdRef.current) {
        memoryService.endSession(sessionIdRef.current);
        sessionIdRef.current = null;
    }

    cleanupResources();
    setVisualContent(null);
    visualContentRef.current = null;
    setActiveSimulation(null);
    setMessages([]);
    messagesRef.current = [];
    sessionParamsRef.current = null;
    reconnectAttemptsRef.current = 0;
    isFatalErrorRef.current = false;
    setIsProcessingText(false);
    setCurrentTranscript('');
    setTokenUsage({ totalTokens: 0, inputTokens: 0, outputTokens: 0 });
    
    setStatus(SessionStatus.ENDED);
  }, [cleanupResources]);

  const togglePause = useCallback(async () => {
    if (status === SessionStatus.CONNECTED) {
        // Pause
        if (clientRef.current) clientRef.current.pause();
        if (inputAudioContextRef.current?.state === 'running') await inputAudioContextRef.current.suspend();
        if (outputAudioContextRef.current?.state === 'running') await outputAudioContextRef.current.suspend();
        setStatus(SessionStatus.PAUSED);
    } else if (status === SessionStatus.PAUSED) {
        // Resume
        if (clientRef.current) clientRef.current.resume();
        if (sessionMode === 'voice') {
            if (inputAudioContextRef.current?.state === 'suspended') await inputAudioContextRef.current.resume();
            if (outputAudioContextRef.current?.state === 'suspended') await outputAudioContextRef.current.resume();
        }
        setStatus(SessionStatus.CONNECTED);
    }
  }, [status, sessionMode]);

  const toggleSessionMode = useCallback(async () => {
    if (status !== SessionStatus.CONNECTED && status !== SessionStatus.PAUSED) return;

    if (sessionMode === 'voice') {
        // Switch to TEXT mode: Mute Audio
        try {
            if (inputAudioContextRef.current?.state === 'running') await inputAudioContextRef.current.suspend();
            if (outputAudioContextRef.current?.state === 'running') await outputAudioContextRef.current.suspend();
            setSessionMode('text');
        } catch (e) {
            console.error("Failed to switch to text mode", e);
        }
    } else {
        // Switch to VOICE mode: Resume Audio
        try {
             if (inputAudioContextRef.current?.state === 'suspended') await inputAudioContextRef.current.resume();
             if (outputAudioContextRef.current?.state === 'suspended') await outputAudioContextRef.current.resume();
             setSessionMode('voice');
        } catch (e) {
             console.error("Failed to switch to voice mode", e);
        }
    }
  }, [sessionMode, status]);

  const sendText = useCallback(async (text: string) => {
    if (clientRef.current && (status === SessionStatus.CONNECTED || status === SessionStatus.RECONNECTING || status === SessionStatus.PAUSED)) {
        
        // 1. Lock Input
        setIsProcessingText(true);

        // 2. Optimistic UI Update
        const newMessage: ChatMessage = {
            id: Date.now().toString() + Math.random(),
            role: 'user',
            content: text,
            source: 'gemini'
        };
        setMessages(prev => [...prev, newMessage]);
        messagesRef.current.push(newMessage);

        // 3. Send to Backend/API
        await clientRef.current.sendText(text);
        
        // 4. Log
        if (sessionIdRef.current) {
            memoryService.logInteraction({
                session_id: sessionIdRef.current,
                role: 'user',
                content: text
            });
        }
    }
  }, [status]);

  const sendSystemContext = useCallback(async (text: string) => {
    if (clientRef.current && (status === SessionStatus.CONNECTED || status === SessionStatus.RECONNECTING)) {
        console.log("Sending System Context:", text);
        await clientRef.current.sendText(text);
    }
  }, [status]);

  // --- 2. INITIALIZE AUDIO STACK ---
  const initializeAudio = async () => {
      cleanupAudio(); 

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      inputAudioContextRef.current = new AudioContextClass({ sampleRate: 16000 });
      outputAudioContextRef.current = new AudioContextClass({ sampleRate: 24000 });

      const analyserNode = inputAudioContextRef.current.createAnalyser();
      analyserNode.fftSize = 256;
      setAnalyser(analyserNode);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const source = inputAudioContextRef.current.createMediaStreamSource(stream);
      sourceRef.current = source;
      
      const processor = inputAudioContextRef.current.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;

      source.connect(analyserNode);
      source.connect(processor);
      processor.connect(inputAudioContextRef.current.destination);

      return {
          inputContext: inputAudioContextRef.current,
          outputContext: outputAudioContextRef.current,
          processor
      };
  };

  const connectInternal = useCallback(async (
      profile: StudentProfile, 
      subject: string, 
      topic: string | undefined, 
      examMode: ExamMode,
      initialMode: SessionMode,
      isReconnect: boolean
  ) => {
    try {
        let systemInstruction = generateSystemInstruction(profile, MOCK_ANALYTICS, subject, topic, examMode);

        if (!isReconnect) {
            setStatus(SessionStatus.CONNECTING);
            setSessionMode(initialMode); // Set mode immediately
            setErrorMessage(null);
            setMessages([]); 
            messagesRef.current = [];
            setVisualContent(null);
            visualContentRef.current = null;
            setActiveSimulation(null);
            setTokenUsage({ totalTokens: 0, inputTokens: 0, outputTokens: 0 });
            setCurrentTranscript('');
            reconnectAttemptsRef.current = 0;
            isFatalErrorRef.current = false;
            setIsProcessingText(false);
            
            const newSessionId = await memoryService.startSession(profile.id, subject, topic);
            sessionIdRef.current = newSessionId;
        } else {
            setStatus(SessionStatus.RECONNECTING);
            console.log(`Reconnecting (Attempt ${reconnectAttemptsRef.current + 1}/${MAX_RECONNECT_ATTEMPTS})...`);
            
            const recentHistory = messagesRef.current.slice(-15);
            const historyText = recentHistory.map(m => `${m.role.toUpperCase()}: ${m.content}`).join('\n');
            const boardState = visualContentRef.current 
                ? `CURRENT BOARD: "${visualContentRef.current.title}" showing "${visualContentRef.current.data}"`
                : "CURRENT BOARD: Empty";

            systemInstruction += `
\n\n*** SYSTEM NOTICE: CONNECTION RESTORED ***
The session was interrupted. RESUME immediately from the last context.
${boardState}

RECENT CONVERSATION HISTORY:
${historyText}
*** END OF RESTORED CONTEXT ***
`;
        }

        // Initialize Audio 
        // We initialize it even for text mode to have the socket ready for switching,
        // but we suspend it immediately if mode is 'text'.
        let audioSetup;
        try {
            audioSetup = await initializeAudio();
        } catch (audioErr) {
            console.error("Audio Hardware Initialization Failed:", audioErr);
            throw new Error("Microphone access failed. Please check permissions.");
        }

        const { inputContext, outputContext, processor } = audioSetup;

        // Apply initial mode setting to audio contexts
        if (initialMode === 'text') {
             await inputContext.suspend();
             await outputContext.suspend();
        }

        // --- GEMINI CLIENT SETUP ---
        clientRef.current = new GeminiClient();
        
        processor.onaudioprocess = (e) => {
            if (!clientRef.current) return;
            const inputData = e.inputBuffer.getChannelData(0);
            clientRef.current.sendAudio(inputData);
        };

        await clientRef.current.connect({
            onOpen: async () => {
                if (!clientRef.current) return;
                console.log(`Gemini Connected for ${subject}`);
                setStatus(SessionStatus.CONNECTED);
                reconnectAttemptsRef.current = 0; 
                isFatalErrorRef.current = false;
            },
            onTokenUsage: (usage) => {
                setTokenUsage(usage);
            },
            onTranscriptUpdate: (text) => {
                setCurrentTranscript(text);
            },
            onAudioData: async (base64Audio: string) => {
                setIsProcessingText(false);
                // Important: Don't play if output context is suspended (text mode)
                if (!outputContext || outputContext.state === 'closed' || outputContext.state === 'suspended') return;
                
                try {
                    nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputContext.currentTime);
                    const audioBuffer = await decodeAudioData(base64Audio, outputContext, 24000, 1);
                    const source = outputContext.createBufferSource();
                    source.buffer = audioBuffer;
                    source.connect(outputContext.destination);
                    source.addEventListener('ended', () => {
                        activeSourcesRef.current.delete(source);
                    });
                    source.start(nextStartTimeRef.current);
                    nextStartTimeRef.current += audioBuffer.duration;
                    activeSourcesRef.current.add(source);
                } catch (decodeErr) {
                    console.error("Audio Decode Error:", decodeErr);
                }
            },
            onMessage: (content: string, role: 'user' | 'assistant') => {
                if (role === 'assistant') setIsProcessingText(false);
                if (role === 'user') {
                    const lastMsg = messagesRef.current[messagesRef.current.length - 1];
                    if (lastMsg && lastMsg.role === 'user' && lastMsg.content === content) return; 
                }

                const newMessage: ChatMessage = {
                    id: Date.now().toString() + Math.random(),
                    role,
                    content,
                    source: 'gemini'
                };
                setMessages(prev => [...prev, newMessage]);
                messagesRef.current.push(newMessage);

                if (sessionIdRef.current) {
                    memoryService.logInteraction({
                        session_id: sessionIdRef.current,
                        role,
                        content
                    });
                }
            },
            onToolCall: (toolCalls: any[]) => {
                setIsProcessingText(false);
                toolCalls.forEach(call => {
                    if (call.name === 'display_content') {
                        const newVisual: VisualContent = { data: call.args.text, title: call.args.title };
                        setVisualContent(newVisual);
                        visualContentRef.current = newVisual;
                        setActiveSimulation(null);
                    } else if (call.name === 'launch_simulation') {
                        setActiveSimulation(call.args.simulation_id);
                        setVisualContent(null);
                        visualContentRef.current = null;
                    } else if (call.name === 'end_session') {
                        isUserDisconnectingRef.current = true;
                        setTimeout(() => disconnect(), 1000);
                    }
                });
            },
            onInterrupted: () => {
                setIsProcessingText(false);
                activeSourcesRef.current.forEach((s) => { try { s.stop(); } catch(e){} });
                activeSourcesRef.current.clear();
                nextStartTimeRef.current = 0;
            },
            onClose: () => {
                console.log("Session connection closed");
                if (isUserDisconnectingRef.current || isFatalErrorRef.current) {
                    if (status !== SessionStatus.ENDED && status !== SessionStatus.ERROR) {
                        setStatus(isFatalErrorRef.current ? SessionStatus.ERROR : SessionStatus.ENDED);
                    }
                } else {
                    cleanupResources();
                    if (reconnectAttemptsRef.current < MAX_RECONNECT_ATTEMPTS) {
                        reconnectAttemptsRef.current += 1;
                        const delay = Math.min(1000 * reconnectAttemptsRef.current, 5000);
                        setTimeout(() => {
                            if (sessionParamsRef.current && !isUserDisconnectingRef.current) {
                                connectInternal(
                                    sessionParamsRef.current.profile, 
                                    sessionParamsRef.current.subject, 
                                    sessionParamsRef.current.topic,
                                    sessionParamsRef.current.examMode,
                                    sessionParamsRef.current.initialMode,
                                    true
                                );
                            }
                        }, delay);
                    } else {
                        setStatus(SessionStatus.IDLE);
                        setErrorMessage("Session lost due to unstable connection.");
                    }
                }
            },
            onError: (err) => {
                const msg = err.message || "";
                if (msg.includes('400') || msg.includes('404') || msg.includes('Found') || msg.includes('not found')) {
                    isFatalErrorRef.current = true;
                    setErrorMessage("Configuration Error: The AI model is currently unavailable.");
                } else if (msg.includes('403') || msg.includes('401')) {
                    isFatalErrorRef.current = true;
                    setErrorMessage("Authentication Error: Please check your API key.");
                }
                console.warn("Socket Error:", err);
                setIsProcessingText(false);
                if (clientRef.current) clientRef.current.disconnect(); 
            }
        }, {
            systemInstruction, 
            modelId: LIVE_MODEL, 
            audioSampleRate: inputContext.sampleRate 
        });

    } catch (error: any) {
        console.error("Initialization Fatal Error:", error);
        if (!isReconnect) {
            setErrorMessage(error.message || "Failed to start session.");
            setStatus(SessionStatus.ERROR);
            cleanupResources();
            return;
        }
        if (reconnectAttemptsRef.current < MAX_RECONNECT_ATTEMPTS) {
             cleanupResources();
             reconnectAttemptsRef.current += 1;
             setTimeout(() => {
                if (sessionParamsRef.current) {
                    connectInternal(
                        sessionParamsRef.current.profile, 
                        sessionParamsRef.current.subject, 
                        sessionParamsRef.current.topic, 
                        sessionParamsRef.current.examMode,
                        sessionParamsRef.current.initialMode,
                        true
                    );
                }
             }, 2000);
        } else {
            setStatus(SessionStatus.IDLE);
            setErrorMessage("Could not restore session.");
        }
    }
  }, [disconnect, cleanupResources, initializeAudio]);

  const startSession = useCallback((
      studentProfile: StudentProfile, 
      subject: string, 
      topic?: string, 
      examMode: ExamMode = 'JAMB',
      initialMode: SessionMode = 'voice'
    ) => {
      isUserDisconnectingRef.current = false;
      sessionParamsRef.current = { profile: studentProfile, subject, topic, examMode, initialMode };
      connectInternal(studentProfile, subject, topic, examMode, initialMode, false);
  }, [connectInternal]);

  return {
    status,
    sessionMode,
    errorMessage,
    analyser,
    messages,
    startSession,
    sendChat: sendText,
    sendSystemContext,
    disconnect,
    togglePause,
    toggleSessionMode,
    visualContent,
    activeSimulation,
    setActiveSimulation,
    isProcessingText,
    tokenUsage,
    currentTranscript
  };
};
