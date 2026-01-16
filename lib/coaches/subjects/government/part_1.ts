import { StudentProfile } from '../../../types';

export const getPart1Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'gov-definition') {
    return `${base}
**TOPIC: DEFINITION AND SCOPE OF GOVERNMENT**
**OBJECTIVES:**
Candidates should be able to:
i. define Government as an institution;
ii. state the characteristics of Government;
iii. explain the functions of Government.
`;
  }
  if (topic === 'gov-concepts') {
    return `${base}
**TOPIC: BASIC CONCEPTS OF GOVERNMENT**
**OBJECTIVES:**
Candidates should be able to:
i. identify the fundamental concepts in governance (Power, Authority, Legitimacy, Sovereignty);
ii. analyse various political processes;
iii. explain the relationship of the state to Government.
`;
  }
  if (topic === 'gov-forms') {
    return `${base}
**TOPIC: FORMS OF GOVERNMENT**
**OBJECTIVES:**
Candidates should be able to:
i. distinguish between different forms (Monarchy, Aristocracy, Oligarchy, Autocracy, Republicanism, Democracy);
ii. discuss the features, merits, and demerits of each form.
`;
  }
  if (topic === 'gov-arms') {
    return `${base}
**TOPIC: ARMS OF GOVERNMENT**
**OBJECTIVES:**
Candidates should be able to:
i. identify the duties and obligations of the Legislature, Executive, and Judiciary;
ii. relate each arm to its functions;
iii. appreciate how these arms interrelate (Checks and Balances).
`;
  }
  if (topic === 'gov-structures') {
    return `${base}
**TOPIC: STRUCTURES OF GOVERNANCE**
**OBJECTIVES:**
Candidates should be able to:
i. compare Unitary, Federal, and Confederal structures;
ii. understand the reasons for the adoption of any of these structures;
iii. analyse features, merits, and demerits.
`;
  }
  if (topic === 'gov-systems') {
    return `${base}
**TOPIC: SYSTEMS OF GOVERNANCE**
**OBJECTIVES:**
Candidates should be able to:
i. distinguish between Presidential, Parliamentary, and Monarchical systems;
ii. analyse the features, merits, and demerits of each system.
`;
  }
  if (topic === 'gov-ideologies') {
    return `${base}
**TOPIC: POLITICAL IDEOLOGIES**
**OBJECTIVES:**
Candidates should be able to:
i. differentiate between major ideologies (Communalism, Feudalism, Capitalism, Socialism, Communism, Fascism, Nazism, Liberalism);
ii. contrast their modes of production and state control.
`;
  }
  if (topic === 'gov-constitution') {
    return `${base}
**TOPIC: CONSTITUTION**
**OBJECTIVES:**
Candidates should be able to:
i. define and identify sources and functions of constitutions;
ii. compare the nature of constitutions (Written, Unwritten, Rigid, Flexible).
`;
  }
  if (topic === 'gov-principles') {
    return `${base}
**TOPIC: PRINCIPLES OF DEMOCRATIC GOVERNMENT**
**OBJECTIVES:**
Candidates should be able to:
i. identify principles (Rule of Law, Separation of Powers, Representative Govt);
ii. determine the application of these principles in governance.
`;
  }
  if (topic === 'gov-citizenship') {
    return `${base}
**TOPIC: CITIZENSHIP**
**OBJECTIVES:**
Candidates should be able to:
i. differentiate between various methods of acquiring citizenship;
ii. specify the rights, duties, and obligations of a citizen;
iii. assess the obligations of the state.
`;
  }
  if (topic === 'gov-electoral') {
    return `${base}
**TOPIC: ELECTORAL PROCESS**
**OBJECTIVES:**
Candidates should be able to:
i. distinguish different types of franchise (Suffrage);
ii. identify and explain types of electoral systems;
iii. analyse various electoral processes.
`;
  }
  if (topic === 'gov-parties') {
    return `${base}
**TOPIC: POLITICAL PARTIES & PARTY SYSTEMS**
**OBJECTIVES:**
Candidates should be able to:
i. assess the role and functions of political parties;
ii. distinguish between types of party systems (Multi-party, Two-party, etc.).
`;
  }
  if (topic === 'gov-pressure-groups') {
    return `${base}
**TOPIC: PRESSURE GROUPS**
**OBJECTIVES:**
Candidates should be able to:
i. evaluate the functions and modus operandi of pressure groups;
ii. distinguish between pressure groups and political parties.
`;
  }
  if (topic === 'gov-public-opinion') {
    return `${base}
**TOPIC: PUBLIC OPINION**
**OBJECTIVES:**
Candidates should be able to:
i. compare methods of assessing public opinion;
ii. assess the functions and limitations of public opinion.
`;
  }
  if (topic === 'gov-civil-service') {
    return `${base}
**TOPIC: CIVIL SERVICE / PUBLIC SERVICE**
**OBJECTIVES:**
Candidates should be able to:
i. analyse the significance of civil service in governance;
ii. distinguish between the civil service and public service;
iii. discuss structure, control, and problems.
`;
  }
  return null;
};