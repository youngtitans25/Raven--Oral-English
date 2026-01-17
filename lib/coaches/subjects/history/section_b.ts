import { StudentProfile } from '../../../types';

export const getSectionBInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'history-sokoto-caliphate') {
    return `${base}
**TOPIC: THE SOKOTO CALIPHATE**
**CONTENT:**
- The Sokoto Jihad: Causes, course, and consequences.
- Factors leading to the rise of the caliphate.
- Administrative set-up and relations with neighbours.
- Collapse of the caliphate.

**OBJECTIVES:**
Candidates should be able to:
i. Examine causes and course of the Jihad.
ii. Determine factors for the rise of the caliphate.
iii. Examine administrative set-up and relations.
iv. Trace internal/external factors leading to collapse.
`;
  }
  if (topic === 'history-kanem-borno') {
    return `${base}
**TOPIC: KANEM-BORNO (19TH CENTURY)**
**CONTENT:**
- Saifawa dynasty: Survival and collapse.
- Borno under the Shehus.
- Borno under Rabeh.
- Relations with Sokoto Caliphate.

**OBJECTIVES:**
Candidates should be able to:
i. Highlight factors for Saifawa dynasty survival/collapse.
ii. Examine Borno under Shehus and Rabeh.
`;
  }
  if (topic === 'history-yorubaland') {
    return `${base}
**TOPIC: YORUBALAND (19TH CENTURY)**
**CONTENT:**
- Fall of Old Oyo Empire.
- Yoruba wars and their impact.
- Peace treaty of 1886 and aftermath.

**OBJECTIVES:**
Candidates should be able to:
i. Examine causes/implications of Old Oyo fall.
ii. Examine causes/effects of Yoruba wars.
iii. Assess impact of the 1886 peace treaty.
`;
  }
  if (topic === 'history-benin') {
    return `${base}
**TOPIC: BENIN (19TH CENTURY)**
**CONTENT:**
- Internal political and cultural development.
- Relations with neighbours and Europeans.

**OBJECTIVES:**
Candidates should be able to:
i. Examine internal political/cultural development.
ii. Assess relations with neighbours and Europeans.
`;
  }
  if (topic === 'history-nupe') {
    return `${base}
**TOPIC: NUPE (19TH CENTURY)**
**CONTENT:**
- Internal political and cultural development.
- Relations with neighbours.
- Nupe Imperialism.

**OBJECTIVES:**
Candidates should be able to:
i. Examine internal development.
ii. Highlight scope and nature of Nupe Imperialism.
`;
  }
  if (topic === 'history-igbo') {
    return `${base}
**TOPIC: IGBO (19TH CENTURY)**
**CONTENT:**
- Internal political and cultural development.
- Relations with neighbours.

**OBJECTIVES:**
Candidates should be able to:
i. Examine Igbo internal political/cultural development.
ii. Assess relations with neighbours.
`;
  }
  if (topic === 'history-efik') {
    return `${base}
**TOPIC: EFIK (19TH CENTURY)**
**CONTENT:**
- Internal political and cultural development.
- Relations with neighbours.

**OBJECTIVES:**
Candidates should be able to:
i. Examine Efik internal political/cultural development.
ii. Assess relations with neighbours.
`;
  }
  if (topic === 'history-european-penetration') {
    return `${base}
**TOPIC: EUROPEAN PENETRATION AND IMPACT**
**CONTENT:**
- Exploration of interior.
- Suppression of slave trade.
- Commodity trade and consular authority.
- Missionary activities and trading companies.

**OBJECTIVES:**
Candidates should be able to:
i. Examine motives for exploration.
ii. Trace development of commodity trade.
iii. Assess activities of trading companies and missionaries.
`;
  }
  if (topic === 'history-british-conquest') {
    return `${base}
**TOPIC: BRITISH CONQUEST OF NIGERIA**
**CONTENT:**
- First phase (1851-1900): Bombardment of Lagos.
- Second phase: Motives and methods.
- Resistance and aftermath.

**OBJECTIVES:**
Candidates should be able to:
i. Highlight factors for annexation of Lagos.
ii. Determine reasons/methods for conquest.
iii. Examine resistance and evaluate results.
`;
  }
  return null;
};