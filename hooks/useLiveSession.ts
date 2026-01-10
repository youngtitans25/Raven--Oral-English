import { useState, useRef, useCallback } from 'react';
import { SessionStatus, Provider, StudentProfile } from '../types';
import { decodeAudioData } from '../utils/audio';
import { GeminiClient } from '../api/gemini';
import { LiveClient } from '../api/types';
import { generateSystemInstruction } from '../utils/context';
import { MOCK_ANALYTICS } from '../lib/mockData';
import { LIVE_MODEL, LIVE_MODEL_ECONOMY } from '../lib/constants';

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
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // Audio Contexts
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  
  // Output Audio Queue Management
  const nextStartTimeRef = useRef<number>(0);
  const activeSourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  
  // Client Abstraction
  const clientRef = useRef<LiveClient | null>(null);

  const disconnect = useCallback(() => {
    if (clientRef.current) {
      clientRef.current.disconnect();
      clientRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }
    if (inputAudioContextRef.current) {
      inputAudioContextRef.current.close();
      inputAudioContextRef.current = null;
    }
    if (outputAudioContextRef.current) {
      outputAudioContextRef.current.close();
      outputAudioContextRef.current = null;
    }
    activeSourcesRef.current.clear();
    nextStartTimeRef.current = 0;
    setAnalyser(null);
    setVisualContent(null);
    setStatus(SessionStatus.ENDED);
  }, []);

  const sendText = useCallback(async (text: string) => {
    if (clientRef.current && status === SessionStatus.CONNECTED) {
        await clientRef.current.sendText(text);
    }
  }, [status]);

  const startSession = useCallback(async (studentProfile: StudentProfile, subject: string, topic?: string) => {
    try {
      setStatus(SessionStatus.CONNECTING);
      setErrorMessage(null);
      setMessages([]); 
      setVisualContent(null);

      // 1. Initialize Audio Contexts
      // NOTE: We request 16000, but the browser may ignore this and use 44100/48000.
      // We must check the .sampleRate property after creation to be sure.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      inputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({
        sampleRate: 16000,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      outputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({
        sampleRate: 24000,
      });

      const actualSampleRate = inputAudioContextRef.current.sampleRate;
      console.log(`Audio Context initialized. Requested: 16000, Actual: ${actualSampleRate}`);

      const analyserNode = inputAudioContextRef.current.createAnalyser();
      analyserNode.fftSize = 256;
      setAnalyser(analyserNode);

      // 2. Generate Context-Aware Instruction using REAL profile AND Subject AND Topic
      const systemInstruction = generateSystemInstruction(studentProfile, MOCK_ANALYTICS, subject, topic);

      // 3. Select Model based on User Tier (Placeholder Logic)
      const modelId = LIVE_MODEL; 

      // 4. Initialize Client
      clientRef.current = new GeminiClient();
      
      // 5. Connect
      await clientRef.current.connect({
        onOpen: async () => {
          // If the user cancelled during connection, clientRef.current will be null.
          if (!clientRef.current) {
             console.log("Connection aborted by user.");
             return;
          }

          console.log(`Gemini Connected for ${subject} - ${topic} using ${modelId}`);
          setStatus(SessionStatus.CONNECTED);
          
          try {
                streamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
                
                if (!inputAudioContextRef.current) return;

                const source = inputAudioContextRef.current.createMediaStreamSource(streamRef.current);
                source.connect(analyserNode);

                processorRef.current = inputAudioContextRef.current.createScriptProcessor(4096, 1, 1);
                processorRef.current.onaudioprocess = (e) => {
                    const inputData = e.inputBuffer.getChannelData(0);
                    clientRef.current?.sendAudio(inputData);
                };

                source.connect(processorRef.current);
                processorRef.current.connect(inputAudioContextRef.current.destination);

                // --- TRIGGER WELCOME MESSAGE ---
                // Send a hidden prompt to the AI to initiate the conversation immediately
                setTimeout(() => {
                    clientRef.current?.sendText("Hello Raven! I am ready to start my session. Please welcome me warmly and introduce the topic.");
                }, 500);

            } catch (err) {
                console.error("Mic Error:", err);
                setErrorMessage("Could not access microphone.");
                setStatus(SessionStatus.ERROR);
                disconnect();
            }
        },
        onAudioData: async (base64Audio: string) => {
          const outputContext = outputAudioContextRef.current;
          if (!outputContext) return;

          try {
            nextStartTimeRef.current = Math.max(
              nextStartTimeRef.current,
              outputContext.currentTime
            );
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
             setMessages(prev => [...prev, {
                 id: Date.now().toString() + Math.random(),
                 role,
                 content,
                 source: 'gemini'
             }]);
        },
        onToolCall: (toolCalls: any[]) => {
            toolCalls.forEach(call => {
                if (call.name === 'display_content') {
                    setVisualContent({
                        data: call.args.text,
                        title: call.args.title
                    });
                } else if (call.name === 'end_session') {
                    // Calculate remaining audio duration in the queue
                    const outputCtx = outputAudioContextRef.current;
                    let waitTime = 500; // Minimal buffer

                    if (outputCtx) {
                        // nextStartTimeRef.current represents the timestamp when the LAST scheduled chunk finishes
                        const remainingTime = nextStartTimeRef.current - outputCtx.currentTime;
                        
                        // If audio is still playing (remainingTime > 0), wait for it + small buffer
                        if (remainingTime > 0) {
                            waitTime = (remainingTime * 1000) + 500; // Convert to ms + 500ms buffer
                        }
                    }

                    console.log(`AI requested session end. Disconnecting in ${Math.round(waitTime)}ms...`);
                    setTimeout(() => {
                        disconnect();
                    }, waitTime);
                }
            });
        },
        onInterrupted: () => {
          activeSourcesRef.current.forEach((source) => {
            try { source.stop(); } catch (e) { /* ignore */ }
          });
          activeSourcesRef.current.clear();
          nextStartTimeRef.current = 0;
        },
        onClose: () => {
          console.log("Session Closed");
          if (status !== SessionStatus.ENDED) {
            setStatus(SessionStatus.ENDED);
          }
        },
        onError: (err) => {
          setErrorMessage(err.message || "Connection lost.");
          setStatus(SessionStatus.ERROR);
          disconnect();
        }
      }, {
          systemInstruction, // Pass generated instruction here
          modelId, // Pass selected model ID
          audioSampleRate: actualSampleRate // Pass actual hardware sample rate
      });

    } catch (error) {
      console.error("Initialization Error:", error);
      setErrorMessage("Failed to start session.");
      setStatus(SessionStatus.ERROR);
    }
  }, [status, disconnect]);

  return {
    status,
    errorMessage,
    analyser,
    messages,
    startSession,
    sendChat: sendText,
    disconnect,
    visualContent
  };
};