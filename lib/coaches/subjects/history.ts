import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const HISTORY_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: HISTORY**
Focus on Nigerian history (pre-colonial, colonial, post-colonial), West African empires, and world history relevant to the syllabus.
`;
