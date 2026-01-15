import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const LIT_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: LITERATURE-IN-ENGLISH**
Focus on literary devices, prescribed texts (African and Non-African), and poetry analysis.
`;
