import { useState, useRef, useCallback, useEffect } from 'react';
import { SessionStatus, Provider, StudentProfile } from '../types';
import { decodeAudioData } from '../utils/audio';
import { GeminiClient } from '../api/gemini';
import { LiveClient } from '../api/types';
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const [visualContent, setVisualContent] = useState<VisualContent | null>(null);
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isProcessingText, setIsProcessingText] = useState(false);

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
  const isFatalErrorRef = useRef<boolean>(false); // NEW: Track fatal errors to stop retry loop
  const MAX_RECONNECT_ATTEMPTS = 3;
  
  const sessionParamsRef = useRef<{
      profile: StudentProfile;
      subject: string;
      topic?: string;
  } | null>(null);

  // --- 1. ROBUST AUDIO CLEANUP ---
  // This isolates audio teardown to prevent "Different Audio Context" errors
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
        if (inputAudioContextRef.current?.state === 'suspended') await inputAudioContextRef.current.resume();
        if (outputAudioContextRef.current?.state === 'suspended') await outputAudioContextRef.current.resume();
        setStatus(SessionStatus.CONNECTED);
    }
  }, [status]);

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

  // --- 2. INITIALIZE AUDIO STACK ---
  // Separated from connection logic to allow retries on "InvalidAccessError"
  const initializeAudio = async () => {
      cleanupAudio(); // Ensure clean slate

      // Create new contexts
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      inputAudioContextRef.current = new AudioContextClass({ sampleRate: 16000 });
      outputAudioContextRef.current = new AudioContextClass({ sampleRate: 24000 });

      // Setup Analyser
      const analyserNode = inputAudioContextRef.current.createAnalyser();
      analyserNode.fftSize = 256;
      setAnalyser(analyserNode);

      // Get Microphone
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      // Connect Nodes (Strictly using the NEW inputAudioContext)
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
      isReconnect: boolean
  ) => {
    try {
        let systemInstruction = generateSystemInstruction(profile, MOCK_ANALYTICS, subject, topic);

        if (!isReconnect) {
            setStatus(SessionStatus.CONNECTING);
            setErrorMessage(null);
            setMessages([]); 
            messagesRef.current = [];
            setVisualContent(null);
            visualContentRef.current = null;
            setActiveSimulation(null);
            reconnectAttemptsRef.current = 0;
            isFatalErrorRef.current = false;
            setIsProcessingText(false);
            
            const newSessionId = await memoryService.startSession(profile.id, subject, topic);
            sessionIdRef.current = newSessionId;
        } else {
            setStatus(SessionStatus.RECONNECTING);
            console.log(`Reconnecting (Attempt ${reconnectAttemptsRef.current + 1}/${MAX_RECONNECT_ATTEMPTS})...`);
            
            // Context Restoration
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

        // Initialize Audio (with internal retry for hardware errors)
        let audioSetup;
        try {
            audioSetup = await initializeAudio();
        } catch (audioErr) {
            console.error("Audio Hardware Initialization Failed:", audioErr);
            throw new Error("Microphone access failed. Please check permissions.");
        }

        const { inputContext, outputContext, processor } = audioSetup;

        // --- GEMINI CLIENT SETUP ---
        clientRef.current = new GeminiClient();
        
        // Wire up processor *after* client creation
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
                reconnectAttemptsRef.current = 0; // Reset attempts on success
                isFatalErrorRef.current = false;
            },
            onAudioData: async (base64Audio: string) => {
                // Unlock text input when Raven starts speaking (acknowledgement)
                setIsProcessingText(false);

                if (!outputContext || outputContext.state === 'closed') return;
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
                // If assistant responds via text, unlock
                if (role === 'assistant') {
                    setIsProcessingText(false);
                }

                // For user messages, we deduplicate against what we already optimistically added in sendText
                // This prevents the echo from the server (if any) from doubling up the chat
                if (role === 'user') {
                    // Check if last message was identical content from user
                    const lastMsg = messagesRef.current[messagesRef.current.length - 1];
                    if (lastMsg && lastMsg.role === 'user' && lastMsg.content === content) {
                        return; 
                    }
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
                // Unblock text input if tool call happens (Raven is acting on it)
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
                    // STOP RETRY IF:
                    // 1. User manually disconnected
                    // 2. Fatal error occurred (e.g. invalid model, 403 Forbidden)
                    if (status !== SessionStatus.ENDED && status !== SessionStatus.ERROR) {
                        setStatus(isFatalErrorRef.current ? SessionStatus.ERROR : SessionStatus.ENDED);
                    }
                } else {
                    // AUTO-RECONNECT LOGIC
                    cleanupResources();
                    
                    if (reconnectAttemptsRef.current < MAX_RECONNECT_ATTEMPTS) {
                        reconnectAttemptsRef.current += 1;
                        const delay = Math.min(1000 * reconnectAttemptsRef.current, 5000); // Exponential backoff
                        
                        console.log(`Scheduling reconnect in ${delay}ms...`);
                        setTimeout(() => {
                            if (sessionParamsRef.current && !isUserDisconnectingRef.current) {
                                connectInternal(
                                    sessionParamsRef.current.profile, 
                                    sessionParamsRef.current.subject, 
                                    sessionParamsRef.current.topic, 
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
                // If we get an error, check if it's fatal to prevent loops
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
        
        // If it was a mic error on the very first try, fail fast
        if (!isReconnect) {
            setErrorMessage(error.message || "Failed to start session.");
            setStatus(SessionStatus.ERROR);
            cleanupResources();
            return;
        }

        // If error during reconnect, let the retry logic in onClose handle it (by forcing cleanup)
        // or trigger a manual retry if we haven't reached the limit
        if (reconnectAttemptsRef.current < MAX_RECONNECT_ATTEMPTS) {
             cleanupResources();
             reconnectAttemptsRef.current += 1;
             setTimeout(() => {
                if (sessionParamsRef.current) {
                    connectInternal(sessionParamsRef.current.profile, sessionParamsRef.current.subject, sessionParamsRef.current.topic, true);
                }
             }, 2000);
        } else {
            setStatus(SessionStatus.IDLE);
            setErrorMessage("Could not restore session.");
        }
    }
  }, [disconnect, cleanupResources, initializeAudio]);

  const startSession = useCallback((studentProfile: StudentProfile, subject: string, topic?: string) => {
      isUserDisconnectingRef.current = false;
      sessionParamsRef.current = { profile: studentProfile, subject, topic };
      connectInternal(studentProfile, subject, topic, false);
  }, [connectInternal]);

  return {
    status,
    errorMessage,
    analyser,
    messages,
    startSession,
    sendChat: sendText,
    disconnect,
    togglePause,
    visualContent,
    activeSimulation,
    setActiveSimulation,
    isProcessingText
  };
};