import { GoogleGenAI } from '@google/genai';
import { LiveClient, LiveClientCallbacks } from './types';
import { SYSTEM_INSTRUCTION } from '../constants';

const DEEPSEEK_API_KEY = process.env.REACT_APP_DEEPSEEK_API_KEY || process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY || 'sk-f3d3370993574589a47bfee646626abc';

export class DeepSeekClient implements LiveClient {
  private history: { role: string; content: string }[] = [];
  private callbacks: LiveClientCallbacks | null = null;
  private isProcessing = false;
  private useFallback = false;

  async connect(callbacks: LiveClientCallbacks): Promise<void> {
    this.callbacks = callbacks;
    this.history = [{ role: 'system', content: SYSTEM_INSTRUCTION }];
    
    // Simulate connection delay
    setTimeout(() => {
        callbacks.onOpen();
        // Initial greeting
        this.processMessage("Hello Raven, I'm ready to start my Oral English practice.", true);
    }, 500);
  }

  sendAudio(audioData: Float32Array): void {
    // DeepSeek Chat Mode does not accept raw audio streams
  }

  async sendText(text: string): Promise<void> {
      await this.processMessage(text);
  }

  disconnect(): void {
    if (this.callbacks) {
        this.callbacks.onClose();
    }
  }

  private async processMessage(text: string, isHiddenInit: boolean = false) {
    if (this.isProcessing && !isHiddenInit) return;
    this.isProcessing = true;

    // 1. Update Local History & UI
    // Always add to history context, even if hidden from UI
    this.history.push({ role: 'user', content: text });

    if (!isHiddenInit) {
        this.callbacks?.onMessage(text, 'user');
    }

    try {
        let aiResponse: string | undefined;

        if (!this.useFallback) {
            try {
                const response = await fetch("https://api.deepseek.com/chat/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${DEEPSEEK_API_KEY}`
                    },
                    body: JSON.stringify({
                        model: "deepseek-chat",
                        messages: this.history,
                        stream: false,
                        temperature: 0.7,
                        max_tokens: 150
                    })
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    // If we get an auth/billing error, switch to fallback permanently for this session
                    if (response.status === 402 || response.status === 401) {
                         console.warn(`DeepSeek API Error (${response.status}). Switching to Gemini Fallback.`);
                         this.useFallback = true;
                         // Throw to trigger catch block which handles fallback
                         throw new Error("Switching to fallback");
                    }
                    throw new Error(`DeepSeek Error: ${response.status} - ${errorText}`);
                }

                const data = await response.json();
                aiResponse = data.choices?.[0]?.message?.content;

            } catch (err) {
                // If it was a network/api error and we decided to fallback, proceed. 
                console.warn("DeepSeek attempt failed, trying fallback...", err);
                this.useFallback = true;
            }
        }

        if (this.useFallback) {
             aiResponse = await this.generateWithGeminiFallback(this.history);
        }
        
        if (!aiResponse) {
             throw new Error("Both DeepSeek and Fallback failed to generate response");
        }
        
        // 2. Update History & UI with AI Response
        this.history.push({ role: 'assistant', content: aiResponse });
        this.callbacks?.onMessage(aiResponse, 'assistant');

    } catch (error) {
        console.error("Chat Req Error:", error);
        // Remove failed user message from history to allow retry
        this.history.pop();

        if (this.callbacks) {
             const err = error instanceof Error ? error : new Error(String(error));
             this.callbacks.onError(err);
        }
    } finally {
        this.isProcessing = false;
    }
  }

  private async generateWithGeminiFallback(history: { role: string; content: string }[]): Promise<string> {
      try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          // Map history to Gemini format
          // System instruction is set in config, so we filter it out of contents
          const contents = history
              .filter(msg => msg.role !== 'system')
              .map(msg => ({
                  role: msg.role === 'assistant' ? 'model' : 'user',
                  parts: [{ text: msg.content }]
              }));
          
          // Safety check: contents must not be empty
          if (contents.length === 0) {
              console.warn("Gemini Fallback: No content to generate from.");
              return "I'm ready. What would you like to practice?";
          }

          const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash', // Use flash for fast chat
              contents: contents,
              config: {
                  systemInstruction: SYSTEM_INSTRUCTION,
                  maxOutputTokens: 150,
              }
          });

          return response.text || "I'm having trouble connecting right now.";
      } catch (e) {
          console.error("Gemini Fallback Error:", e);
          throw new Error("Service temporarily unavailable.");
      }
  }
}