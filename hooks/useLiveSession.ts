import { useState, useRef, useCallback } from 'react';
import { SessionStatus, Provider } from '../types';
import { decodeAudioData } from '../utils/audio';
import { GeminiClient } from '../api/gemini';
import { DeepSeekClient } from '../api/deepseek';
import { LiveClient } from '../api/types';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export const useLiveSession = () => {
  const [status, setStatus] = useState<SessionStatus>(SessionStatus.IDLE);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const [currentProvider, setCurrentProvider] = useState<Provider>('gemini');
  
  // Chat State
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
    // 1. Close API Session
    if (clientRef.current) {
      clientRef.current.disconnect();
      clientRef.current = null;
    }

    // 2. Stop Microphone
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }

    // 3. Stop Audio Processing
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }

    // 4. Close Audio Contexts
    if (inputAudioContextRef.current) {
      inputAudioContextRef.current.close();
      inputAudioContextRef.current = null;
    }
    if (outputAudioContextRef.current) {
      outputAudioContextRef.current.close();
      outputAudioContextRef.current = null;
    }

    // 5. Reset State
    activeSourcesRef.current.clear();
    nextStartTimeRef.current = 0;
    setAnalyser(null);
    setStatus(SessionStatus.ENDED);
    // Note: We intentionally don't clear messages immediately to allow user to review chat after end
  }, []);

  const sendText = useCallback(async (text: string) => {
    if (clientRef.current && status === SessionStatus.CONNECTED) {
        await clientRef.current.sendText(text);
    }
  }, [status]);

  const startSession = useCallback(async (provider: Provider) => {
    try {
      setCurrentProvider(provider);
      setStatus(SessionStatus.CONNECTING);
      setErrorMessage(null);
      setMessages([]); // Clear previous chat

      // 1. Initialize Audio Contexts (Only needed for Gemini or playback)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      inputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({
        sampleRate: 16000,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      outputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({
        sampleRate: 24000,
      });

      // Setup Analyser for visualization
      const analyserNode = inputAudioContextRef.current.createAnalyser();
      analyserNode.fftSize = 256;
      setAnalyser(analyserNode);

      // 2. Initialize Client based on Provider
      if (provider === 'gemini') {
        clientRef.current = new GeminiClient();
      } else {
        clientRef.current = new DeepSeekClient();
      }
      
      // 3. Connect
      await clientRef.current.connect({
        onOpen: async () => {
          console.log(`${provider} Connected`);
          setStatus(SessionStatus.CONNECTED);
          
          // Only start Mic for Gemini
          if (provider === 'gemini') {
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
            } catch (err) {
                console.error("Mic Error:", err);
                setErrorMessage("Could not access microphone.");
                setStatus(SessionStatus.ERROR);
                disconnect();
            }
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
                 content
             }]);
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
          console.error("Session Error:", err);
          setErrorMessage(err.message || "Connection lost.");
          setStatus(SessionStatus.ERROR);
          disconnect();
        }
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
    currentProvider,
    messages,
    startSession,
    sendText,
    disconnect
  };
};
