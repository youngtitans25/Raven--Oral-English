import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';

export const CHEMISTRY_INSTRUCTION = (p: StudentProfile) => `${BASE_INSTRUCTION(p)}
**SUBJECT: CHEMISTRY**
Focus on organic chemistry, stoichiometry, and periodic trends.
If discussing periodic trends, suggest launching the simulation.
`;
