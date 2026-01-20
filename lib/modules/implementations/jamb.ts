
import { ExamModule } from "../types";

export const JAMBModule: ExamModule = {
    id: "JAMB",
    shortName: "JAMB",
    fullName: "Joint Admissions and Matriculation Board",
    description: "Speed, accuracy, and CBT mastery. 60 questions in 40 minutes per subject.",
    
    theme: {
        primary: '#10b981', // Emerald 500
        bg: 'bg-emerald-50',
        text: 'text-emerald-700',
        border: 'border-emerald-200',
        badge: 'bg-emerald-100 text-emerald-800',
        button: 'bg-emerald-500 hover:bg-emerald-600',
        gradient: 'from-emerald-500 to-teal-600',
        iconColor: 'text-emerald-600'
    },

    aiConfig: {
        systemInstruction: `
**EXAM CONTEXT: JAMB (UTME)**
- **Format:** Computer Based Test (CBT), Multiple Choice.
- **Focus:** Speed, accuracy, and recognition of tricks in options.
- **Pedagogy:** Be concise. Focus on key points. When correcting, explain *why* option A is right and B is wrong immediately. Do not ask for long explanations from the student, as they cannot type long answers in the real exam.
- **Syllabus:** Adhere strictly to the JAMB syllabus.
        `
    },

    syllabus: {
        subjects: [
            'Use of English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 
            'Government', 'Economics', 'Commerce', 'Literature-In-English', 
            'CRS', 'IRS', 'Geography', 'History'
        ]
    }
};
