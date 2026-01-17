import { StudentProfile } from '../../../types';

export const getPart2SectionCInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'history-part2-imperialism') {
    return `${base}
**TOPIC: NEW IMPERIALISM & EUROPEAN OCCUPATION**
**CONTENT:**
- New Imperialism concept and justifications.
- European scramble for Africa.
- Berlin Conference.
- Occupation and African resistance.

**OBJECTIVES:**
Candidates should be able to:
i. Understand New Imperialism concepts.
ii. Assess justifications and examine causes of the scramble.
iii. Account for the significance of the Berlin Conference.
iv. Highlight African resistance.
`;
  }
  if (topic === 'history-part2-colonial-rule') {
    return `${base}
**TOPIC: PATTERNS OF COLONIAL RULE**
**CONTENT:**
- British, French, Portuguese, Belgian, German, and Spanish systems.

**OBJECTIVES:**
Candidates should be able to:
i. Examine and compare patterns of colonial rule by various European powers.
`;
  }
  if (topic === 'history-part2-decolonization') {
    return `${base}
**TOPIC: POLITICS OF DECOLONIZATION**
**CONTENT:**
- Colonial policies and African discontent.
- Impact of World Wars.
- Nationalist activities, parties, and associations.
- Strategies for independence.

**OBJECTIVES:**
Candidates should be able to:
i. Examine colonial policies and discontent.
ii. Assess impact of World Wars.
iii. Determine strategies for attaining independence.
`;
  }
  if (topic === 'history-part2-apartheid') {
    return `${base}
**TOPIC: APARTHEID IN SOUTH AFRICA**
**CONTENT:**
- Origin, Afrikaner Nationalism, Apartheid laws.
- Internal/External reactions (Frontline States, UN, OAU).
- Dismantling of Apartheid and Post-Apartheid developments.

**OBJECTIVES:**
Candidates should be able to:
i. Trace origins and reasons for Apartheid.
ii. Highlight laws and reactions.
iii. Relate contributions of international organizations.
iv. Identify steps to dismantling Apartheid and assess post-Apartheid era.
`;
  }
  if (topic === 'history-part2-nation-building') {
    return `${base}
**TOPIC: PROBLEMS OF NATION-BUILDING IN AFRICA**
**CONTENT:**
- Political, economic, physical, environmental challenges.
- Ethnic/religious pluralism, Military intervention.
- Neo-colonialism, Boundary disputes, Civil wars, Refugees.
- Terrorism and Globalisation.

**OBJECTIVES:**
Candidates should be able to:
i. Examine political/economic constraints.
ii. Assess effects of natural disasters and ethnic/religious problems.
iii. Examine military intervention, neo-colonialism, and boundary disputes.
iv. Establish relationship between civil wars and refugees.
v. Examine consequences of terrorism and effects of globalisation.
`;
  }
  return null;
};