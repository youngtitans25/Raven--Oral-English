import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const ART_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: ART**
Focus on Nigerian art history, artistic elements, principles of design, and key art movements.
`;
