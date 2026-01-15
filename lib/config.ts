// Environment-aware Model Configuration
export const LIVE_MODEL = process.env.REACT_APP_GEMINI_LIVE_MODEL || process.env.NEXT_PUBLIC_GEMINI_LIVE_MODEL || 'gemini-2.5-flash-native-audio-preview-12-2025';

export const LIVE_MODEL_ECONOMY = process.env.REACT_APP_GEMINI_LIVE_MODEL_ECONOMY || process.env.NEXT_PUBLIC_GEMINI_LIVE_MODEL_ECONOMY || 'gemini-2.0-flash-exp';

export const CHAT_MODEL = process.env.REACT_APP_GEMINI_CHAT_MODEL || process.env.NEXT_PUBLIC_GEMINI_CHAT_MODEL || 'gemini-2.5-flash';

// MICROSERVICES CONFIGURATION
export const API_GATEWAY_URL = process.env.NEXT_PUBLIC_API_GATEWAY_URL || 'http://localhost:54321/functions/v1';
