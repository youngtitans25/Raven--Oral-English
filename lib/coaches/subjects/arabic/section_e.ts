import { StudentProfile } from '../../../types';

export const getSectionEInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'arabic-lit-intro') {
    return `${base}
**TOPIC: INTRODUCTION TO ARABIC LITERATURE**
**SCOPE:**
- Essence of Arabic literature: Poetry and Prose.
- Periods of Arabic literature.
- Pre-Islamic poetic and prosaic traditions (Al-Jahiliyyah).

**OBJECTIVES:**
Candidates should be able to:
i. identify the essence of Arabic literature;
ii. identify pre-Islamic Arabic poetic and prosaic traditions and conventions;
iii. identify and analyse the style of figurative expressions.
`;
  }
  if (topic === 'arabic-lit-modern') {
    return `${base}
**TOPIC: THE MODERN PERIOD (1978 TO DATE)**
**OBJECTIVES:**
Candidates should be able to:
i. identify notable literary figures and their works in the modern period;
ii. describe the aesthetic features in literary texts;
iii. assess modern cultural values in these texts.
`;
  }
  if (topic === 'arabic-lit-west-africa') {
    return `${base}
**TOPIC: ARABIC LITERATURE IN WEST AFRICA**
**OBJECTIVES:**
Candidates should be able to:
i. evaluate the successful use of Arabic as a medium for West African novels and drama;
ii. analyse the contents of West African Arabic literature;
iii. describe major characteristics and plots of these works.
`;
  }
  return null;
};