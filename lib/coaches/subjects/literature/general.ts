import { StudentProfile } from '../../../types';

export const getGeneralLitInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'lit-general-terms') {
    return `${base}
**TOPIC: GENERAL LITERARY TERMS & PRINCIPLES**
**CONTENT:**
- Terms: Foreshadowing, suspense, monologue, dialogue, soliloquy, symbolism, protagonist, antagonist, satire, stream of consciousness, synecdoche, metonymy.

**OBJECTIVES:**
Candidates should be able to:
i. Identify literary terms specific to drama, prose, and poetry.
ii. Identify areas of overlap (e.g., verse in drama).
`;
  }
  if (topic === 'lit-appreciation') {
    return `${base}
**TOPIC: LITERARY APPRECIATION (UNSEEN)**
**CONTENT:**
- Unseen passages/extracts from Drama, Prose, and Poetry.

**OBJECTIVES:**
Candidates should be able to:
i. Identify literary devices in a given passage.
ii. Provide an interpretation of the passage.
iii. Relate the extract to true life experiences.
`;
  }
  return null;
};