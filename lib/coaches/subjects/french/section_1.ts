import { StudentProfile } from '../../../types';

export const getSection1Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'french-comprehension') {
    return `${base}
**TOPIC: WRITTEN COMPREHENSION**
**CONTENT:**
- Topics of general and emergent interest: Love, life, death, politics, marriage, health, communication, child trafficking, cultism, travel, corruption, money-laundering.

**OBJECTIVES:**
Candidates should be able to:
i. Understand the logical meaning of texts;
ii. Answer inference questions based on the text;
iii. Identify key ideas and supporting details in passages.
`;
  }
  return null;
};