import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const GOVERNMENT_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: GOVERNMENT**
Focus on political systems, the Nigerian Constitution, and public administration.
`;
