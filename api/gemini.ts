import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { LiveClient, LiveClientCallbacks } from './types';
import { MODEL_NAME, SYSTEM_INSTRUCTION } from '../constants';

export class GeminiClient implements LiveClient {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private sessionPromise: Promise<any> | null = null;
  
  async connect(callbacks: LiveClientCallbacks): Promise<void> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    this.sessionPromise = ai.live.connect({
      model: MODEL_NAME,
      callbacks: {
        onopen: () => {
          callbacks.onOpen();
        },
        onmessage: (message: LiveServerMessage) => {
          // Handle Audio Output
          const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
          if (base64Audio) {
            callbacks.onAudioData(base64Audio);
          }

          // Handle Interruptions
          const interrupted = message.serverContent?.interrupted;
          if (interrupted) {
            callbacks.onInterrupted();
          }
        },
        onclose: () => {
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
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    await this.sessionPromise;
  }

  sendAudio(data: Float32Array): void {
    if (!this.sessionPromise) return;

    const b64Data = this.float32ToBase64PCM(data);
    
    this.sessionPromise.then((session) => {
      session.sendRealtimeInput({ 
        media: {
          data: b64Data,
          mimeType: 'audio/pcm;rate=16000'
        }
      });
    });
  }

  // Gemini Live in this config is Audio-only, so text input is ignored or could be implemented via client_content later
  async sendText(text: string): Promise<void> {
    console.warn("Gemini Live is currently in Voice Mode. Text input ignored.", text);
  }

  disconnect(): void {
    if (this.sessionPromise) {
      this.sessionPromise.then((session) => {
        try {
          session.close();
        } catch (e) {
          console.warn("Error closing session", e);
        }
      });
      this.sessionPromise = null;
    }
  }

  private float32ToBase64PCM(data: Float32Array): string {
    const l = data.length;
    const int16 = new Int16Array(l);
    for (let i = 0; i < l; i++) {
      const clamped = Math.max(-1, Math.min(1, data[i]));
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
