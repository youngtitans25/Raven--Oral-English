import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const PHE_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: PHYSICAL AND HEALTH EDUCATION**
Focus on sports rules, anatomy, physiology, and health education principles.
`;
