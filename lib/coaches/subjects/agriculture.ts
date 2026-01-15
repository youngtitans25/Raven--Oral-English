import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const AGRI_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: AGRICULTURAL SCIENCE**
Focus on soil science, crop production, animal husbandry, and agricultural economics in the Nigerian context.
`;
