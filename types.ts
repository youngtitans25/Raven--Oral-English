export enum SessionStatus {
  IDLE = 'IDLE',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  ERROR = 'ERROR',
  ENDED = 'ENDED'
}

export interface AudioConfig {
  sampleRate: number;
  inputChannels: number;
}

export interface BlobData {
  data: string;
  mimeType: string;
}

export type Provider = 'gemini' | 'deepseek';