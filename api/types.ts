export interface LiveClientCallbacks {
  onOpen: () => void;
  onAudioData: (base64Audio: string) => void;
  // New: Handle incoming text messages (for Chat mode)
  onMessage: (content: string, role: 'user' | 'assistant') => void; 
  onInterrupted: () => void;
  onClose: () => void;
  onError: (error: Error) => void;
}

export interface LiveClient {
  connect(callbacks: LiveClientCallbacks): Promise<void>;
  sendAudio(audioData: Float32Array): void;
  // New: Allow sending text input (for Chat mode)
  sendText(text: string): Promise<void>;
  disconnect(): void;
}
