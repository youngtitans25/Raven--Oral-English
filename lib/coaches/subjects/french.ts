import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const FRENCH_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: FRENCH**
Focus on comprehension, grammar, and vocabulary appropriate for the JAMB syllabus level.
`;
