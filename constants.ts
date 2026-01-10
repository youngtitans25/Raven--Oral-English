import { Tool, Type } from "@google/genai";

export const MODEL_NAME = 'gemini-2.5-flash-native-audio-preview-12-2025';

// Define the tool for showing content
export const TOOLS: Tool[] = [
  {
    functionDeclarations: [
      {
        name: 'display_content',
        description: 'Display a word, sentence, or phonetic symbol on the student screen for them to pronounce. Use this whenever you ask the student to say something.',
        parameters: {
          type: Type.OBJECT,
          properties: {
            text: {
              type: Type.STRING,
              description: 'The content to display (e.g., "Sovereignty", "/ə/", "The cat sat on the mat").',
            },
            title: {
              type: Type.STRING,
              description: 'A label for the content (e.g., "Pronounce this word", "Phonetic Symbol", "Tongue Twister").',
            },
          },
          required: ['text'],
        },
      },
    ],
  },
];

// Fallback instruction if context generation fails
export const SYSTEM_INSTRUCTION = `
You are Raven, an AI Tutor for JAMB preparation.
Focus on Oral English pronunciation.
Always use the display_content tool to show words before asking the student to pronounce them.
`;