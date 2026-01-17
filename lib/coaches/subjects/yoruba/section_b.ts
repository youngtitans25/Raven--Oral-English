import { StudentProfile } from '../../../types';

export const getSectionBInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'yoruba-oral-lit') {
    return `${base}
**TOPIC: ORAL LITERATURE (AGUMAGU ALOHUN)**
**PRESCRIBED TEXTS:**
- Prose: *Akojopo Alo Ijapa (Apa Keji)* by A. Babalola.
- Drama: *Eegun Alare* by L. Ogunniran.

**OBJECTIVES:**
Candidates should be able to:
i. Identify central issues and moral lessons;
ii. Identify figurative and idiomatic expressions;
iii. Extract narrative techniques in drama;
iv. Interpret themes in accordance with societal principles.
`;
  }
  if (topic === 'yoruba-written-lit') {
    return `${base}
**TOPIC: WRITTEN LITERATURE (AGUMAGU APILEKO)**
**PRESCRIBED TEXTS:**
- Prose: *Ogun Omode* by A. Isola.
- Poetry: *Ade Abinibi Ait Awon Arojo Miiran* by O. Adewole.
- Drama: *Oye* by O. Fadiya.

**OBJECTIVES:**
Candidates should be able to:
i. Demonstrate knowledge of ideas and draw moral lessons;
ii. Identify narrative techniques and figurative expressions;
iii. Deduce the import of written works;
iv. Identify central themes and interpret them.
`;
  }
  return null;
};