import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const IGBO_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: IGBO**
Focus on Igbo grammar, literature (oral and written), and customs.
`;
