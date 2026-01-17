import { StudentProfile } from '../../../types';

export const getSectionDInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'history-first-republic') {
    return `${base}
**TOPIC: FIRST REPUBLIC & MILITARY INTERVENTION**
**CONTENT:**
- Struggle for centre, Revenue allocation, 1962/63 Census.
- 1963 Republican Constitution.
- Minority agitations, Action Group crisis, 1964/65 Elections.
- 1966 Coups and Ironsi Regime.

**OBJECTIVES:**
Candidates should be able to:
i. Account for controversies (census, revenue, elections).
ii. Highlight features of 1963 Constitution.
iii. Analyze consequences of 1966 military intervention.
`;
  }
  if (topic === 'history-civil-war') {
    return `${base}
**TOPIC: THE NIGERIAN CIVIL WAR**
**CONTENT:**
- Causes (Remote and Immediate).
- Course of the war.
- Effects.

**OBJECTIVES:**
Candidates should be able to:
i. Examine causes, course, and effects of the war.
`;
  }
  if (topic === 'history-military-regimes-1') {
    return `${base}
**TOPIC: MILITARY REGIMES (GOWON, MURTALA/OBASANJO)**
**CONTENT:**
- Gowon Regime: Challenges and achievements.
- Murtala/Obasanjo Regime: Challenges and achievements.

**OBJECTIVES:**
Candidates should be able to:
i. Assess challenges and achievements of these regimes.
`;
  }
  if (topic === 'history-second-republic') {
    return `${base}
**TOPIC: THE SECOND REPUBLIC**
**CONTENT:**
- Challenges and achievements.

**OBJECTIVES:**
Candidates should be able to:
i. Evaluate challenges and achievements of the Second Republic.
`;
  }
  if (topic === 'history-military-regimes-2') {
    return `${base}
**TOPIC: MILITARY REGIMES (BUHARI, BABANGIDA)**
**CONTENT:**
- Buhari Regime.
- Babangida Regime.

**OBJECTIVES:**
Candidates should be able to:
i. Assess challenges and achievements of these regimes.
`;
  }
  if (topic === 'history-ing-abacha') {
    return `${base}
**TOPIC: INTERIM GOVT & ABACHA REGIME**
**CONTENT:**
- Interim National Government (ING).
- Abacha Regime.

**OBJECTIVES:**
Candidates should be able to:
i. Examine role/challenges of ING.
ii. Assess challenges/achievements of Abacha regime.
`;
  }
  if (topic === 'history-fourth-republic') {
    return `${base}
**TOPIC: TRANSITION TO FOURTH REPUBLIC**
**CONTENT:**
- Abdulsalami Regime.
- Transition process and key actors.
- Growth and development of Fourth Republic.

**OBJECTIVES:**
Candidates should be able to:
i. Assess Abdulsalami regime.
ii. Examine roles of actors in transition and subsequent growth.
`;
  }
  if (topic === 'history-international-orgs') {
    return `${base}
**TOPIC: NIGERIA IN INTERNATIONAL ORGANIZATIONS**
**CONTENT:**
- ECOWAS, AU, Commonwealth, OPEC, UN.
- Role in conflict resolution (Congo, Chad, Liberia, Sierra Leone, etc.).

**OBJECTIVES:**
Candidates should be able to:
i. Examine/Assess Nigeria's role in ECOWAS, AU, Commonwealth, OPEC, UN.
ii. Examine Nigeria's role in conflict resolution.
`;
  }
  return null;
};