import { StudentProfile } from '../../../types';

export const getSectionHInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phe-national-sports') {
    return `${base}
**TOPIC: NATIONAL SPORTS COMPETITIONS**
**CONTENT:**
- Competitions by Federations/Associations.
- Competitions by Corporate Organizations.
- National Sports Festival (Importance).
- Organization and administration structure.

**OBJECTIVES:**
Candidates should be able to:
i. Identify competitions by name;
ii. State importance of National Sports Festival;
iii. Highlight organizational structures.
`;
  }
  if (topic === 'phe-institutional-games') {
    return `${base}
**TOPIC: INSTITUTIONAL GAMES**
**CONTENT:**
- NUGA (University).
- NIPOGA (Polytechnic).
- NATCEGA (Colleges of Education).
- NSSF (School Sports).

**OBJECTIVES:**
Candidates should be able to:
i. State the names and roles of different institutional games.
`;
  }
  if (topic === 'phe-international-sports') {
    return `${base}
**TOPIC: INTERNATIONAL SPORTS COMPETITIONS**
**CONTENT:**
- All Africa Games (History, Evolution, Aims).
- International Governing Bodies: SCSA, IOC, FIFA, IAAF, ISSF, FIBA, ITTF, BWF.

**OBJECTIVES:**
Candidates should be able to:
i. Narrate history of All Africa Games;
ii. Identify international governing bodies and their structures.
`;
  }
  return null;
};