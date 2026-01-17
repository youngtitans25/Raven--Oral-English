import { StudentProfile } from '../../../types';

export const getSectionJInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phe-personal-health') {
    return `${base}
**TOPIC: PERSONAL HEALTH**
**CONTENT:**
- Meaning and importance.
- Personal Hygiene (Teeth, Skin, Hands, etc.).
- Promotion methods: Exercise, Nutrition, Check-ups.
- Screening: Eye (Myopia, etc.), Ear (Deafness), Dental (Caries).

**OBJECTIVES:**
Candidates should be able to:
i. State importance of personal health;
ii. Differentiate care for body parts;
iii. State outcomes of health screening.
`;
  }
  if (topic === 'phe-community-health') {
    return `${base}
**TOPIC: COMMUNITY HEALTH**
**CONTENT:**
- Services: Orthodox vs Traditional (Bone setters, Birth attendants).
- Family Health: Maternal/Child health (Ante-natal, Immunization, ORT, Breastfeeding).
- Aging: Characteristics of elderly, relating with elderly.
- Death education: Common causes.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate orthodox and traditional services;
ii. Identify aspects of maternal/child health;
iii. Identify characteristics of elderly persons.
`;
  }
  if (topic === 'phe-environmental-health') {
    return `${base}
**TOPIC: ENVIRONMENTAL HEALTH**
**CONTENT:**
- Housing (Ventilation, Sanitation, Regulations).
- Water Supply (Sources, Purification).
- Waste Disposal (Refuse, Sewage).
- Pollution (Types, Prevention).
- Pest and Vector Control.

**OBJECTIVES:**
Candidates should be able to:
i. State characteristics of good housing;
ii. Explain water purification methods;
iii. Differentiate waste disposal methods;
iv. Define pollution and control measures;
v. Explain harmful effects of pests/vectors and control.
`;
  }
  return null;
};