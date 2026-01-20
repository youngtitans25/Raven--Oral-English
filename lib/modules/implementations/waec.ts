
import { ExamModule } from "../types";

export const WAECModule: ExamModule = {
    id: "WAEC",
    shortName: "WAEC",
    fullName: "West African Senior School Certificate Examination",
    description: "Theory and Practical focus. Step-by-step working and essay writing required.",
    
    theme: {
        primary: '#3b82f6', // Blue 500
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        border: 'border-blue-200',
        badge: 'bg-blue-100 text-blue-800',
        button: 'bg-blue-500 hover:bg-blue-600',
        gradient: 'from-blue-500 to-indigo-600',
        iconColor: 'text-blue-600'
    },

    aiConfig: {
        systemInstruction: `
**EXAM CONTEXT: WAEC (WASSCE)**
- **Format:** Theory (Essay) and Objectives.
- **Focus:** Depth of understanding, showing working (for calculations), and correct terminology.
- **Pedagogy:** Encourage the student to explain their reasoning step-by-step. Ask "How did you arrive at that?" often. Focus on keywords that examiners look for in marking schemes.
- **Syllabus:** Adhere to the WAEC syllabus.
        `
    },

    syllabus: {
        subjects: [
            'English Language', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 
            'Government', 'Economics', 'Commerce', 'Literature-In-English', 
            'CRS', 'IRS', 'Geography', 'History', 'Civic Education'
        ]
    }
};
