import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from './base';

export const CRS_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: CHRISTIAN RELIGIOUS STUDIES**
Focus on biblical narratives, significant characters, and moral lessons as per the JAMB syllabus.
`;

export const GOVERNMENT_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: GOVERNMENT**
Focus on political systems, the Nigerian Constitution, and public administration.
`;

export const LIT_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: LITERATURE-IN-ENGLISH**
Focus on literary devices, prescribed texts (African and Non-African), and poetry analysis.
`;

export const HISTORY_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: HISTORY**
Focus on Nigerian history (pre-colonial, colonial, post-colonial), West African empires, and world history relevant to the syllabus.
`;
