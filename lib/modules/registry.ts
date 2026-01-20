
import { ExamModule } from "./types";
import { JAMBModule } from "./implementations/jamb";
import { WAECModule } from "./implementations/waec";

// --- REGISTRY ---
// To add a new exam, import it and add it to this map.
// The rest of the application will automatically adapt.

export const EXAM_REGISTRY: Record<string, ExamModule> = {
    [JAMBModule.id]: JAMBModule,
    [WAECModule.id]: WAECModule,
    
    // Future placeholders can be added easily
    'NECO': {
        ...WAECModule, // Inherits WAEC structure for now
        id: 'NECO',
        shortName: 'NECO',
        fullName: 'National Examinations Council',
        theme: {
             primary: '#f43f5e', // Rose 500
             bg: 'bg-rose-50',
             text: 'text-rose-700',
             border: 'border-rose-200',
             badge: 'bg-rose-100 text-rose-800',
             button: 'bg-rose-500 hover:bg-rose-600',
             gradient: 'from-rose-500 to-pink-600',
             iconColor: 'text-rose-600'
        },
        aiConfig: {
            systemInstruction: `**EXAM CONTEXT: NECO**\nSimilar to WAEC but emphasizes local Nigerian context examples.`
        }
    },
    'POST-UTME': {
        ...JAMBModule,
        id: 'POST-UTME',
        shortName: 'Post-UTME',
        fullName: 'University Screening',
        theme: {
            primary: '#8b5cf6', // Violet 500
            bg: 'bg-violet-50',
            text: 'text-violet-700',
            border: 'border-violet-200',
            badge: 'bg-violet-100 text-violet-800',
            button: 'bg-violet-500 hover:bg-violet-600',
            gradient: 'from-violet-500 to-purple-600',
            iconColor: 'text-violet-600'
        },
        aiConfig: {
             systemInstruction: `**EXAM CONTEXT: POST-UTME**\nHigh difficulty aptitude tests. Focus on critical thinking and logic.`
        },
        isPremium: true
    }
};

export const getExamModule = (examId: string): ExamModule => {
    return EXAM_REGISTRY[examId] || JAMBModule; // Default to JAMB
};

export const getAllExams = (): ExamModule[] => {
    return Object.values(EXAM_REGISTRY);
};
