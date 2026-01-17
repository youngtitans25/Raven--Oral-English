import { StudentProfile } from '../../../types';

export const getSectionAInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'history-land-peoples') {
    return `${base}
**TOPIC: LAND AND PEOPLES OF THE NIGERIA AREA (UP TO 1800)**
**CONTENT:**
- Geographical zones and the people.
- People’s relationship with the environment.
- Main physical features and impact on human activity (hunting, fishing, farming).
- Relations and integration among peoples of different zones.

**OBJECTIVES:**
Candidates should be able to:
i. Identify geographical zones and people within them.
ii. Establish relationship between people and environment.
iii. Relate impact of geography on human activity.
iv. Comprehend relationships among various peoples.
`;
  }
  if (topic === 'history-early-centers') {
    return `${base}
**TOPIC: EARLY CENTRES OF CIVILIZATION**
**CONTENT:**
- Nok, Daima, Ife, Benin, Igbo Ukwu, and Iwo Eleru.
- Monuments and shelter systems (Kuyambana, Durbi-ta-Kusheyi, city walls, moats, palaces).

**OBJECTIVES:**
Candidates should be able to:
i. Highlight main features of early centres of civilization.
ii. Examine the significance of various centres.
iii. Establish historical significance of monuments like caves and rocky formations.
`;
  }
  if (topic === 'history-state-formation') {
    return `${base}
**TOPIC: ORIGINS AND FORMATION OF STATES**
**CONTENT:**
- Central Sudan: Kanuri and Hausa states.

**OBJECTIVES:**
Candidates should be able to:
i. Relate different groups to their traditions of origin.
ii. Determine inter-state relations.
iii. Account for social and political organizations.
iv. Highlight differences between centralized and non-centralized (acephalous) states.
`;
  }
  if (topic === 'history-economic-activities') {
    return `${base}
**TOPIC: ECONOMIC ACTIVITIES AND GROWTH OF STATES**
**CONTENT:**
- Agriculture: Hunting, farming, fishing, animal husbandry, horticulture.
- Industries: Pottery, salt-making, iron-smelting, blacksmithing, leather-working, etc.
- Trade routes: Local, regional, long distance, slave trade, trans-Sahara trade.
- Expansion of states.

**OBJECTIVES:**
Candidates should be able to:
i. Identify various economic activities.
ii. Differentiate economic activities and specialties.
iii. Relate trade and economic activities to the growth of states.
`;
  }
  if (topic === 'history-external-influences') {
    return `${base}
**TOPIC: EXTERNAL INFLUENCES**
**CONTENT:**
- North Africans/Arabs/Tuaregs: Islam spread/impact, trans-Saharan trade.
- Europeans: Early coastal trade, trans-Atlantic slave trade (origin, impact), missionary activities.

**OBJECTIVES:**
Candidates should be able to:
i. Assess impact of contact with North Africa.
ii. Highlight role of Tuaregs in trans-Sahara trade.
iii. Examine impact of early European contact.
iv. Outline impact of early missionary activities.
v. Trace origin, organization, and impact of trans-Atlantic slave trade.
`;
  }
  return null;
};