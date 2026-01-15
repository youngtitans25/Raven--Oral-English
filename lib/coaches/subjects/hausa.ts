import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const HAUSA_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: HAUSA**
Focus on Hausa language structure, literature, and culture as required by the JAMB syllabus.
`;
