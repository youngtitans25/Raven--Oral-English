import { StudentProfile } from '../../../types';

export const getSectionFInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phe-recreation') {
    return `${base}
**TOPIC: RECREATION AND LEISURE**
**CONTENT:**
- Concepts: Recreation, Leisure, Work, Rest.
- Outdoor activities: Jogging, camping, hiking, swimming.
- Indoor activities: Chess, draught, ayo, billiards.
- Recreation vs Competitive Sports.
- Safety measures.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate among recreation, leisure, work, and rest;
ii. Mention types of activities (Indoor/Outdoor);
iii. Differentiate recreational activities from competitive sports;
iv. State safety measures.
`;
  }
  if (topic === 'phe-dance') {
    return `${base}
**TOPIC: DANCE**
**CONTENT:**
- Definition and importance.
- Traditional dances and steps from Nigeria (e.g., Atilogwu, Bata, Koroso, Swange).
- Costumes.

**OBJECTIVES:**
Candidates should be able to:
i. Define dance and its importance;
ii. Identify traditional dances and steps;
iii. Identify costumes for various dances.
`;
  }
  return null;
};