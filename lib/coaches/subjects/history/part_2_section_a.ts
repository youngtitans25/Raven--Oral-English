import { StudentProfile } from '../../../types';

export const getPart2SectionAInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'history-part2-islamic-reform') {
    return `${base}
**TOPIC: ISLAMIC REFORM MOVEMENTS & STATE BUILDING (WEST AFRICA)**
**CONTENT:**
- Relationship between Sokoto and other Jihads.
- Jihads of Seku Ahmadu and Al-Hajj Umar.
- Activities of Samori Toure.

**OBJECTIVES:**
Candidates should be able to:
i. Analyze the connections between the Sokoto Jihad and other movements.
ii. Examine the jihads of Seku Ahmadu and Al-Hajj Umar.
iii. Assess Samori Toure's role in state-building and resistance.
`;
  }
  if (topic === 'history-part2-sierra-leone-liberia') {
    return `${base}
**TOPIC: SIERRA LEONE, LIBERIA & MISSIONARY ACTIVITIES**
**CONTENT:**
- Foundation of Sierra Leone and Liberia.
- Spread of Christianity.
- Impact of Christian missionaries.

**OBJECTIVES:**
Candidates should be able to:
i. Determine factors leading to the founding of Sierra Leone and Liberia.
ii. Examine their importance in the spread of Christianity.
iii. Assess the impact of Christian missionary activities in West Africa.
`;
  }
  if (topic === 'history-part2-egypt') {
    return `${base}
**TOPIC: EGYPT UNDER MOHAMMED ALI & KHEDIVE ISMAIL**
**CONTENT:**
- Rise of Mohammad Ali and his reforms.
- Relations with Europeans.
- Ismail's fiscal policies.
- British occupation of Egypt.

**OBJECTIVES:**
Candidates should be able to:
i. Determine factors aiding Mohammad Ali's rise and reforms.
ii. Establish relationships with Europeans.
iii. Account for Ismail's fiscal policies.
iv. Examine reasons for the British occupation.
`;
  }
  return null;
};