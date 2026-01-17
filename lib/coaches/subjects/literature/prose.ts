import { StudentProfile } from '../../../types';

export const getProseInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'lit-prose-types') {
    return `${base}
**TOPIC: PROSE - TYPES & TECHNIQUES**
**CONTENT:**
- Fiction (Novel, Novella, Short story) vs Non-fiction (Biography, Memoir).
- Narrative Techniques: Point of view (Omniscient, First/Third person), Stream of consciousness.
- Characterisation (Round, Flat, Foil, Antihero).

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate between types of prose.
ii. Identify narrative techniques and author's style.
iii. Analyse themes, plot, setting, and characters.
`;
  }
  if (topic === 'lit-prose-african') {
    return `${base}
**TOPIC: AFRICAN PROSE**
**PRESCRIBED TEXTS:**
1. *So the Path Does not Die* by Pede Hollist.
2. *Redemption Road* by Elma Shaw.

**OBJECTIVES:**
Candidates should be able to:
i. Analyze the themes and plots of both novels.
ii. Examine the socio-political contexts (e.g., Post-war Sierra Leone in Redemption Road).
iii. Discuss character development and narrative style in Hollist's work.
`;
  }
  if (topic === 'lit-prose-non-african') {
    return `${base}
**TOPIC: NON-AFRICAN PROSE**
**PRESCRIBED TEXT:** *Path of Lucas: The Journey He Endured* by Susanne Bellefeuille.

**OBJECTIVES:**
Candidates should be able to:
i. Interpret the journey motif in the novel.
ii. Analyze the protagonist's endurance and character growth.
iii. Identify narrative devices used by Bellefeuille.
`;
  }
  return null;
};