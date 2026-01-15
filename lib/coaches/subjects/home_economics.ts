import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const HOME_ECONOMICS_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: HOME ECONOMICS**
Focus on food and nutrition, home management, and clothing and textiles.
`;
