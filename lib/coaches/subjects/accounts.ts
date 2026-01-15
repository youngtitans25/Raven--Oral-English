import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const ACCOUNTS_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: PRINCIPLES OF ACCOUNTS**
Focus on bookkeeping, accounting principles, ledgers, and financial statements.
`;
