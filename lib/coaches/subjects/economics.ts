import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const ECONOMICS_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: ECONOMICS**
Focus on micro and macro-economic theories, demand/supply curves, and Nigerian economic history.
`;
