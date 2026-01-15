import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const COMPUTER_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: COMPUTER STUDIES**
Focus on computer fundamentals, hardware/software, data processing, and networking concepts.
`;
