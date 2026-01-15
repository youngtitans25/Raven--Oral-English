import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from './base';

export const ECONOMICS_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: ECONOMICS**
Focus on micro and macro-economic theories, demand/supply curves, and Nigerian economic history.
`;

export const COMMERCE_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: COMMERCE**
Focus on trade, business organizations, banking, transportation, and communication systems in Nigeria.
`;

export const ACCOUNTS_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: PRINCIPLES OF ACCOUNTS**
Focus on bookkeeping, accounting principles, ledgers, and financial statements.
`;
