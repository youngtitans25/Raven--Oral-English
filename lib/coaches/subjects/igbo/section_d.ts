import { StudentProfile } from '../../../types';

export const getSectionDInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'igbo-general') {
    return `${base}
**TOPIC: GENERAL & CURRENT AFFAIRS**
**CONTENT:**
- Lectures: Ahiajioku, Odenigbo.
- Organizations: Ohaneze Ndị Igbo, Igbo Studies Association (ISA).
- Authors and Publishers of Igbo works.
- Current Issues: HIV/AIDS, Drug Abuse, Cultism, Rights of Women/Children, Kidnapping.

**OBJECTIVES:**
Candidates should be able to:
i. Identify themes/functions of major Igbo lectures and associations;
ii. Identify authors and publishers;
iii. Discuss current social issues and suggest remedies.
`;
  }
  return null;
};