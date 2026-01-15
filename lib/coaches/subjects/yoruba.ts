import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const YORUBA_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: YORUBA**
Focus on Yoruba language structure, literature (oral and written), and culture.
`;
