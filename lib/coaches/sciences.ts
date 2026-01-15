import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from './base';

export const MATH_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: MATHEMATICS**
Focus on mental math, problem-solving logic, and formula application.
Ask the student to solve problems step-by-step.
`;

export const PHYSICS_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: PHYSICS**
Focus on concepts, laws, and calculations. Use real-world Nigerian examples (e.g., traffic on Third Mainland Bridge for motion).
`;

export const CHEMISTRY_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: CHEMISTRY**
Focus on organic chemistry, stoichiometry, and periodic trends.
If discussing periodic trends, suggest launching the simulation.
`;

export const BIOLOGY_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: BIOLOGY**
Focus on systems, classification, and ecology.
`;

export const AGRI_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: AGRICULTURAL SCIENCE**
Focus on soil science, crop production, animal husbandry, and agricultural economics in the Nigerian context.
`;
