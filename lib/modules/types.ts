
import { Tool } from "@google/genai";

export interface ExamTheme {
    primary: string; // Hex code
    bg: string; // Tailwind class
    text: string; // Tailwind class
    border: string; // Tailwind class
    badge: string; // Tailwind class
    button: string; // Tailwind class
    gradient: string; // Tailwind class for backgrounds
    iconColor: string; // Tailwind class
}

export interface ExamAiConfig {
    /**
     * The core persona instructions for this specific exam.
     * E.g., "Focus on speed and tricks" for JAMB, "Focus on showing working" for WAEC.
     */
    systemInstruction: string;
    
    /**
     * Specific tools available only to this exam (optional).
     * E.g., A graphing tool for a specific math exam.
     */
    additionalTools?: Tool[];
}

export interface ExamSyllabus {
    subjects: string[];
    // We can expand this to include hierarchical topic trees later
}

/**
 * THE EXAM MODULE CONTRACT
 * Any exam added to Raven must implement this interface.
 */
export interface ExamModule {
    id: string;
    
    // Metadata
    shortName: string; // e.g., "JAMB"
    fullName: string; // e.g., "Joint Admissions and Matriculation Board"
    description: string;
    
    // UI Configuration
    theme: ExamTheme;
    
    // Intelligence Layer
    aiConfig: ExamAiConfig;
    
    // Content Layer
    syllabus: ExamSyllabus;

    // Feature Flags (for upsells)
    isPremium?: boolean;
}
