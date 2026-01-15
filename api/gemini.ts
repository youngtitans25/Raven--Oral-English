import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { LiveClient, LiveClientCallbacks, LiveConnectionConfig } from './types';
import { LIVE_MODEL, TOOLS } from '../lib/constants';

export class GeminiClient implements LiveClient {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private sessionPromise: Promise<any> | null = null;
  private currentInputTranscript = '';
  private currentOutputTranscript = '';
  private audioSampleRate = 16000; // Default
  private isConnected = false;
  private isPaused = false;
  
  async connect(callbacks: LiveClientCallbacks, config: LiveConnectionConfig): Promise<void> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Use the actual sample rate from the browser context, or fallback to 16000
    this.audioSampleRate = config.audioSampleRate || 16000;
    this.isConnected = true;
    this.isPaused = false;

    this.sessionPromise = ai.live.connect({
      model: config.modelId || LIVE_MODEL,
      callbacks: {
        onopen: () => {
          if (this.isConnected) callbacks.onOpen();
        },
        onmessage: (message: LiveServerMessage) => {
          if (!this.isConnected || this.isPaused) return;

          // Handle Audio Output
          const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
          if (base64Audio) {
            callbacks.onAudioData(base64Audio);
          }

          // Handle Transcriptions
          // Accumulate input (user) transcription
          const inputTx = message.serverContent?.inputTranscription?.text;
          if (inputTx) {
            this.currentInputTranscript += inputTx;
          }

          // Accumulate output (model) transcription
          const outputTx = message.serverContent?.outputTranscription?.text;
          if (outputTx) {
            this.currentOutputTranscript += outputTx;
          }

          // Handle Turn Completion (Commit transcripts)
          if (message.serverContent?.turnComplete) {
            if (this.currentInputTranscript.trim()) {
                callbacks.onMessage(this.currentInputTranscript, 'user');
                this.currentInputTranscript = '';
            }
            if (this.currentOutputTranscript.trim()) {
                callbacks.onMessage(this.currentOutputTranscript, 'assistant');
                this.currentOutputTranscript = '';
            }
          }

          // Handle Tool Call - OPTIMIZED FOR PARALLEL EXECUTION
          if (message.toolCall) {
            // 1. FAST PATH: Immediately acknowledge to server to unblock audio generation.
            // We do not wait for the UI to render. We batch responses for efficiency.
            const functionResponses = message.toolCall.functionCalls.map(fc => ({
                id: fc.id,
                name: fc.name,
                response: { result: 'OK' } // Simple ACK for display tools
            }));

            // Fire and forget the network response
            this.sessionPromise?.then(session => {
                if (this.isConnected) session.sendToolResponse({ functionResponses });
            }).catch(e => {
                console.warn("Tool response delivery failed:", e);
            });

            // 2. UI UPDATE PATH: Trigger the UI update callback asynchronously
            // This ensures the visual board updates "in parallel" with the AI resuming speech
            setTimeout(() => {
                if (this.isConnected) callbacks.onToolCall?.(message.toolCall!.functionCalls);
            }, 0);
          }

          // Handle Interruptions
          const interrupted = message.serverContent?.interrupted;
          if (interrupted) {
            callbacks.onInterrupted();
            this.currentInputTranscript = '';
            this.currentOutputTranscript = '';
          }
        },
        onclose: () => {
          this.isConnected = false;
          callbacks.onClose();
        },
        onerror: (err) => {
          callbacks.onError(new Error(err.message || "Unknown error"));
        }
      },
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Puck' } },
        },
        systemInstruction: config.systemInstruction, // INJECTED CONTEXT
        tools: TOOLS,
        inputAudioTranscription: {},
        outputAudioTranscription: {},
      },
    });

    await this.sessionPromise;
  }

  sendAudio(data: Float32Array): void {
    if (!this.sessionPromise || !this.isConnected || this.isPaused) return;

    const b64Data = this.float32ToBase64PCM(data);
    
    this.sessionPromise.then((session) => {
      try {
        if (this.isConnected && !this.isPaused) {
            session.sendRealtimeInput({ 
                media: {
                data: b64Data,
                mimeType: `audio/pcm;rate=${this.audioSampleRate}`
                }
            });
        }
      } catch (e) {
          console.warn("Failed to send audio frame - session might be closed", e);
      }
    });
  }

  async sendText(text: string): Promise<void> {
    if (!this.sessionPromise || !this.isConnected) return;
    try {
        const session = await this.sessionPromise;
        // Check if send method exists to prevent crashes if session object is invalid or closed
        if (this.isConnected && typeof session.send === 'function') {
            session.send({ parts: [{ text: text }], turnComplete: true });
        } else {
            console.warn("Session does not support text input or is not ready.");
        }
    } catch (e) {
        console.warn("Failed to send text input", e);
    }
  }

  pause(): void {
    this.isPaused = true;
  }

  resume(): void {
    this.isPaused = false;
  }

  disconnect(): void {
    this.isConnected = false;
    if (this.sessionPromise) {
      this.sessionPromise.then((session) => {
        try {
          session.close();
        } catch (e) {
          console.warn("Error closing session", e);
        }
      });
      this.sessionPromise = null;
      this.currentInputTranscript = '';
      this.currentOutputTranscript = '';
    }
  }

  private float32ToBase64PCM(data: Float32Array): string {
    const l = data.length;
    const int16 = new Int16Array(l);
    for (let i = 0; i < l; i++) {
      // 1. Sanitize NaN or Infinity which can cause backend crashes
      let val = data[i];
      if (!Number.isFinite(val)) val = 0;
      
      // 2. Clamp
      const clamped = Math.max(-1, Math.min(1, val));
      
      // 3. Convert
      int16[i] = clamped * 32768;
    }
    
    const bytes = new Uint8Array(int16.buffer);
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
}