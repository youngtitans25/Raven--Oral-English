import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const GEOGRAPHY_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: GEOGRAPHY**
Focus on physical geography, human geography, and map reading skills, with specific attention to Nigeria.
`;
