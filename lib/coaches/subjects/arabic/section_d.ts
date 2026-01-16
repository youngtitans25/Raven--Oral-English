import { StudentProfile } from '../../../types';

export const getSectionDInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'arabic-composition-themes') {
    return `${base}
**TOPIC: COMPOSITION THEMES**
**SCOPE:**
- Subjects relating to the candidate's environment: Education, Culture, Health, Politics, Economy, Sports, and Current Affairs.

**OBJECTIVES:**
Candidates should be able to:
i. express ideas clearly in Arabic on these topics;
ii. use appropriate words for specific thoughts;
iii. communicate effectively in standard Arabic.
`;
  }
  if (topic === 'arabic-composition-skills') {
    return `${base}
**TOPIC: COMPOSITION SKILLS & IDIOMS**
**OBJECTIVES:**
Candidates should be able to:
i. use correct idiomatic expressions in Arabic;
ii. demonstrate the use of common Arabic idioms and proverbs to enrich writing;
iii. organize thoughts logically and coherently.
`;
  }
  return null;
};