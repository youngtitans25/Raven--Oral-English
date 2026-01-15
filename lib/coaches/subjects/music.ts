import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const MUSIC_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: MUSIC**
Focus on music theory, history of music (Western and African), and musical instruments.
`;
