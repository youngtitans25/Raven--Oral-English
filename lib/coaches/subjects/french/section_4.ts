import { StudentProfile } from '../../../types';

export const getSection4Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'french-expressions') {
    return `${base}
**TOPIC: SET EXPRESSIONS & SPEECH ACTS**
**CONTENT:**
- Proverbs: e.g. "Tel père tel fils", "Petit à petit l'oiseau fait son nid".
- Idioms: "Avoir une faim de loup", "Crier sur le toit".
- Conventional structures: "Enchanté", "C'est dommage", "Stationnement interdit".
- Figures of speech: Metaphor, Simile, Hyperbole.

**OBJECTIVES:**
Candidates should be able to:
i. Interpret the meaning of proverbs and idioms;
ii. Use appropriate expressions for social interactions;
iii. Identify figures of speech in sentences.
`;
  }
  return null;
};