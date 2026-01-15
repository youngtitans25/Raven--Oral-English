import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const CRS_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: CHRISTIAN RELIGIOUS STUDIES**
Focus on biblical narratives, significant characters, and moral lessons as per the JAMB syllabus.
`;
