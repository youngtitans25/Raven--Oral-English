
import { ExamMode } from "../types";

export interface ExamConfig {
    id: ExamMode;
    fullName: string;
    shortName: string;
    description: string;
    theme: {
        primary: string; // Hex for inline styles if needed
        bg: string; // Tailwind class
        text: string; // Tailwind class
        border: string; // Tailwind class
        badge: string; // Tailwind class for badges
        button: string; // Tailwind class for buttons
        gradient: string; // Tailwind class for hero sections
    };
    aiContext: string; // Specific instructions for the AI
}

export const EXAM_CONTEXTS: Record<ExamMode, ExamConfig> = {
    'JAMB': {
        id: 'JAMB',
        fullName: 'Joint Admissions and Matriculation Board',
        shortName: 'JAMB',
        description: 'Speed and accuracy. 60 questions in 40 minutes per subject. Multiple choice focus.',
        theme: {
            primary: '#10b981', // Emerald 500
            bg: 'bg-emerald-50',
            text: 'text-emerald-700',
            border: 'border-emerald-200',
            badge: 'bg-emerald-100 text-emerald-800',
            button: 'bg-emerald-500 hover:bg-emerald-600',
            gradient: 'from-emerald-500 to-teal-600'
        },
        aiContext: `
        **EXAM CONTEXT: JAMB (UTME)**
        - **Format:** Multiple Choice Questions (CBT).
        - **Focus:** Speed, accuracy, and recognition of tricks in options.
        - **Style:** Be concise. Focus on key points. When correcting, explain *why* option A is right and B is wrong.
        - **Syllabus:** Adhere strictly to the JAMB syllabus.
        `
    },
    'WAEC': {
        id: 'WAEC',
        fullName: 'West African Senior School Certificate Examination',
        shortName: 'WAEC',
        description: 'Theory and Practical focus. Step-by-step working and essay writing required.',
        theme: {
            primary: '#3b82f6', // Blue 500
            bg: 'bg-blue-50',
            text: 'text-blue-700',
            border: 'border-blue-200',
            badge: 'bg-blue-100 text-blue-800',
            button: 'bg-blue-500 hover:bg-blue-600',
            gradient: 'from-blue-500 to-indigo-600'
        },
        aiContext: `
        **EXAM CONTEXT: WAEC (WASSCE)**
        - **Format:** Theory (Essay) and Objectives.
        - **Focus:** Depth of understanding, showing working (for calculations), and correct terminology.
        - **Style:** Encourage the student to explain their reasoning. Teach them how to structure essay answers.
        - **Syllabus:** Adhere to the WAEC syllabus.
        `
    },
    'NECO': {
        id: 'NECO',
        fullName: 'National Examinations Council',
        shortName: 'NECO',
        description: 'National standard. Similar to WAEC but often requires specific local context.',
        theme: {
            primary: '#f43f5e', // Rose 500
            bg: 'bg-rose-50',
            text: 'text-rose-700',
            border: 'border-rose-200',
            badge: 'bg-rose-100 text-rose-800',
            button: 'bg-rose-500 hover:bg-rose-600',
            gradient: 'from-rose-500 to-pink-600'
        },
        aiContext: `
        **EXAM CONTEXT: NECO**
        - **Format:** Theory and Objective.
        - **Focus:** Comprehensive understanding.
        - **Style:** Similar to WAEC. Emphasize clarity and handwriting (metaphorically).
        `
    },
    'POST-UTME': {
        id: 'POST-UTME',
        fullName: 'Post Unified Tertiary Matriculation Examination',
        shortName: 'Post-UTME',
        description: 'University specific screening. High difficulty, aptitude based.',
        theme: {
            primary: '#8b5cf6', // Violet 500
            bg: 'bg-violet-50',
            text: 'text-violet-700',
            border: 'border-violet-200',
            badge: 'bg-violet-100 text-violet-800',
            button: 'bg-violet-500 hover:bg-violet-600',
            gradient: 'from-violet-500 to-purple-600'
        },
        aiContext: `
        **EXAM CONTEXT: POST-UTME**
        - **Format:** Aptitude tests, often harder than JAMB.
        - **Focus:** Critical thinking, logic, and general knowledge alongside core subjects.
        - **Style:** Challenge the student. Ask deeper questions.
        `
    },
    'JUPEB': {
        id: 'JUPEB',
        fullName: 'Joint Universities Preliminary Examinations Board',
        shortName: 'JUPEB',
        description: 'Advanced Level foundation. Bridge to 200 Level.',
        theme: {
            primary: '#f59e0b', // Amber 500
            bg: 'bg-amber-50',
            text: 'text-amber-700',
            border: 'border-amber-200',
            badge: 'bg-amber-100 text-amber-800',
            button: 'bg-amber-500 hover:bg-amber-600',
            gradient: 'from-amber-500 to-orange-600'
        },
        aiContext: `
        **EXAM CONTEXT: JUPEB (A-LEVEL)**
        - **Format:** Advanced Level.
        - **Focus:** University-level foundation concepts.
        - **Style:** Academic, rigorous, and detailed. Treat the student like a university freshman.
        `
    }
};
