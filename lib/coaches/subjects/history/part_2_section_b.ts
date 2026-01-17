import { StudentProfile } from '../../../types';

export const getPart2SectionBInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'history-part2-ethiopia') {
    return `${base}
**TOPIC: ETHIOPIA IN THE 19TH CENTURY**
**CONTENT:**
- Rise of Theodore II and unification attempts.
- Menelik II and Ethiopian independence (Battle of Adwa).

**OBJECTIVES:**
Candidates should be able to:
i. Examine factors leading to the rise of Theodore II.
ii. Analyze strategies for unification.
iii. Assess the role of Menelik II in maintaining independence.
`;
  }
  if (topic === 'history-part2-mfecane') {
    return `${base}
**TOPIC: THE MFECANE**
**CONTENT:**
- Rise of the Zulu Nation (Shaka).
- Causes, Course, and Consequences of the Mfecane.

**OBJECTIVES:**
Candidates should be able to:
i. Trace events in Nguniland before the Mfecane.
ii. Determine factors leading to Shaka's rise.
iii. Examine causes, course, and consequences of the Mfecane.
`;
  }
  if (topic === 'history-part2-great-trek') {
    return `${base}
**TOPIC: THE GREAT TREK**
**CONTENT:**
- Frontier wars.
- British intervention in Boer-African relations.
- The Great Trek and its consequences.

**OBJECTIVES:**
Candidates should be able to:
i. Determine factors leading to frontier wars.
ii. Account for British intervention.
iii. Describe the nature and consequences of the Great Trek.
`;
  }
  return null;
};