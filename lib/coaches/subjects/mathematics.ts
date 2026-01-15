import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const MATH_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: MATHEMATICS**
Focus on mental math, problem-solving logic, and formula application.
Ask the student to solve problems step-by-step.
`;
