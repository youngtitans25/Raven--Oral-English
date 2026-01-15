import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const BIOLOGY_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: BIOLOGY**
Focus on systems, classification, and ecology.
`;
