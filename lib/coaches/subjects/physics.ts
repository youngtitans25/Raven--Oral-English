import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const PHYSICS_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: PHYSICS**
Focus on concepts, laws, and calculations. Use real-world Nigerian examples (e.g., traffic on Third Mainland Bridge for motion).
`;
