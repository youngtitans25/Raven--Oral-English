import { StudentProfile } from '../../../types';

export const getPart2Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'gov-pre-colonial') {
    return `${base}
**TOPIC: PRE-COLONIAL POLITICS**
**OBJECTIVES:**
Candidates should be able to:
i. appreciate the effectiveness of pre-colonial systems (Hausa/Fulani, Yoruba, Igbo);
ii. compare pre-colonial systems of governance;
iii. analyse structural organizations and functions of political institutions.
`;
  }
  if (topic === 'gov-colonial') {
    return `${base}
**TOPIC: IMPERIALIST PENETRATION & COLONIALISM**
**OBJECTIVES:**
Candidates should be able to:
i. trace the processes of imperialist penetration (British/French);
ii. assess the impact of British (Indirect Rule) and French (Assimilation/Association) policies;
iii. distinguish between British and French colonial practices.
`;
  }
  if (topic === 'gov-nationalism') {
    return `${base}
**TOPIC: PROCESS OF DECOLONIZATION**
**OBJECTIVES:**
Candidates should be able to:
i. evaluate the process of decolonization and rise of Nationalism;
ii. assess the roles of nationalist leaders (Macaulay, Azikiwe, Awolowo, etc.) and parties;
iii. assess the impact of external factors (WWII, Pan-Africanism).
`;
  }
  if (topic === 'gov-const-dev') {
    return `${base}
**TOPIC: CONSTITUTIONAL DEVELOPMENT IN NIGERIA**
**OBJECTIVES:**
Candidates should be able to:
i. compare various constitutional developments (Clifford, Richards, Macpherson, Lyttleton, Independence);
ii. analyse the features, merits, and demerits of each constitution.
`;
  }
  if (topic === 'gov-post-ind-const') {
    return `${base}
**TOPIC: POST-INDEPENDENCE CONSTITUTIONS**
**OBJECTIVES:**
Candidates should be able to:
i. assess the workings of the 1963, 1979, 1989, and 1999 Constitutions;
ii. analyse their characteristics and shortcomings.
`;
  }
  if (topic === 'gov-federalism') {
    return `${base}
**TOPIC: STRUCTURE AND WORKINGS OF NIGERIAN FEDERALISM**
**OBJECTIVES:**
Candidates should be able to:
i. examine the workings of Nigerian federalism and state creation;
ii. identify its problems (Revenue Allocation, Minority issues);
iii. evaluate corrective measures (Federal Character Principle).
`;
  }
  if (topic === 'gov-local-govt') {
    return `${base}
**TOPIC: LOCAL GOVERNMENT**
**OBJECTIVES:**
Candidates should be able to:
i. trace the evolution and structure of Local Government (1976 Reforms);
ii. identify major problems (Finance, Autonomy);
iii. analyse the roles of Traditional Rulers.
`;
  }
  if (topic === 'gov-military') {
    return `${base}
**TOPIC: THE MILITARY IN NIGERIAN POLITICS**
**OBJECTIVES:**
Candidates should be able to:
i. evaluate reasons for military intervention;
ii. assess the achievements and structure of military regimes;
iii. determine conditions necessitating withdrawal to civil rule.
`;
  }
  return null;
};