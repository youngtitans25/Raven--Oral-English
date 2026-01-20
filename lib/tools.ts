
import { Tool, Type } from "@google/genai";

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
      {
        name: 'launch_simulation',
        description: 'Launch an interactive simulation on the student screen. Use this when you want to demonstrate a complex concept visually (e.g., Periodic Trends, Spreadsheets).',
        parameters: {
          type: Type.OBJECT,
          properties: {
            simulation_id: {
              type: Type.STRING,
              description: 'The ID of the simulation to launch. Supported: "periodic-table-trends", "spreadsheet-training".',
              enum: ['periodic-table-trends', 'spreadsheet-training']
            },
            context: {
              type: Type.STRING,
              description: 'A brief explanation of why you are showing this.',
            },
          },
          required: ['simulation_id'],
        },
      },
      {
        name: 'end_session',
        description: 'Ends the voice session. Call this tool immediately when you say goodbye, farewell, or when the user indicates they want to stop, regardless of the language used.',
        parameters: {
          type: Type.OBJECT,
          properties: {},
        },
      },
    ],
  },
];
