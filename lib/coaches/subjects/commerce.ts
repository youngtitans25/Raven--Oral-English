import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const COMMERCE_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: COMMERCE**
Focus on trade, business organizations, banking, transportation, and communication systems in Nigeria.
`;
