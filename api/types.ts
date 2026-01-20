
export interface LiveClientCallbacks {
  onOpen: () => void;
  onAudioData: (base64Audio: string) => void;
  onMessage: (content: string, role: 'user' | 'assistant') => void; 
  onInterrupted: () => void;
  onClose: () => void;
  onError: (error: Error) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onToolCall?: (toolCalls: any[]) => void;
  onTokenUsage?: (usage: TokenUsage) => void;
  onTranscriptUpdate?: (transcript: string) => void;
}

export interface TokenUsage {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
}

export interface LiveConnectionConfig {
  systemInstruction: string;
  modelId?: string;
  audioSampleRate?: number;
}

export interface LiveClient {
  connect(callbacks: LiveClientCallbacks, config: LiveConnectionConfig): Promise<void>;
  sendAudio(audioData: Float32Array): void;
  sendText(text: string): Promise<void>;
  disconnect(): void;
  pause(): void;
  resume(): void;
}
