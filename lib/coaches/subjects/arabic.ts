import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const ARABIC_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: ARABIC**
Focus on grammar (Nahw and Sarf), comprehension, and translation skills relevant to the JAMB syllabus.
`;
