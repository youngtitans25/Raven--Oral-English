import { StudentProfile } from '../../../types';

export const getSectionCInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'history-colonial-rule') {
    return `${base}
**TOPIC: ESTABLISHMENT OF COLONIAL RULE (UP TO 1914)**
**CONTENT:**
- Pacification and occupation of territories.
- Resistance: Ekumeku Movement (Asaba), Satiru Uprising (1906).
- Administration of Protectorates.

**OBJECTIVES:**
Candidates should be able to:
i. Outline features/methods of British pacification.
ii. Examine administrative set-up of Protectorates.
`;
  }
  if (topic === 'history-amalgamation') {
    return `${base}
**TOPIC: AMALGAMATION OF 1914**
**CONTENT:**
- Reasons for amalgamation.
- Effects of amalgamation.

**OBJECTIVES:**
Candidates should be able to:
i. Examine reasons for the 1914 Amalgamation and its effects.
`;
  }
  if (topic === 'history-colonial-admin') {
    return `${base}
**TOPIC: COLONIAL ADMINISTRATION AFTER AMALGAMATION**
**CONTENT:**
- Central Administration: Legislative and Executive Councils.
- Indirect Rule: Reasons, working, and effects.
- Anti-colonial movements.

**OBJECTIVES:**
Candidates should be able to:
i. Relate central admin set-up to consequences.
ii. Identify reasons for/workings of Indirect Rule.
iii. Assess effects of Indirect Rule.
iv. Account for anti-colonial movements.
`;
  }
  if (topic === 'history-colonial-economy') {
    return `${base}
**TOPIC: THE COLONIAL ECONOMY**
**CONTENT:**
- Currency, taxation, forced labour.
- Infrastructure (transport, post/telecoms).
- Agriculture, Mining, Industry, Commerce, Banking.

**OBJECTIVES:**
Candidates should be able to:
i. Examine the nature of the economy as it affected society under colonial rule.
`;
  }
  if (topic === 'history-social-dev') {
    return `${base}
**TOPIC: SOCIAL DEVELOPMENT UNDER COLONIAL RULE**
**CONTENT:**
- Western education.
- Urbanization and social integration.
- Improvement unions and Health institutions.

**OBJECTIVES:**
Candidates should be able to:
i. Identify scope of social development.
ii. Examine impact of urbanization and social integration.
`;
  }
  if (topic === 'history-nationalism-independence') {
    return `${base}
**TOPIC: CONSTITUTIONAL DEVELOPMENTS & INDEPENDENCE**
**CONTENT:**
- Clifford Constitution (1922) & first political party.
- World War II impact.
- Nationalist movements.
- Richards (1946), Macpherson (1951), Lyttleton (1954) Constitutions.
- Constitutional Conferences (1957, 1958).
- 1959 Elections and Independence (1960).

**OBJECTIVES:**
Candidates should be able to:
i. Highlight significance of Clifford constitution.
ii. Trace emergence of nationalist movement.
iii. Assess roles of different constitutions.
iv. Trace development of party politics, regionalism, and minority question.
v. Determine factors aiding attainment of independence.
`;
  }
  return null;
};