import { StudentProfile } from '../../../types';

export const getSectionEInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phe-fitness') {
    return `${base}
**TOPIC: PHYSICAL FITNESS**
**CONTENT:**
- Definition of physical fitness.
- Components: Health-related (strength, endurance, flexibility) vs Performance/Skill-related (speed, agility, balance, power).
- Benefits of physical activity.

**OBJECTIVES:**
Candidates should be able to:
i. Define physical fitness;
ii. Outline and explain components;
iii. Give examples of health vs skill-related components;
iv. State benefits of exercise.
`;
  }
  if (topic === 'phe-conditioning') {
    return `${base}
**TOPIC: CONDITIONING PROGRAMME**
**CONTENT:**
- Aerobic vs Anaerobic programmes.
- Strength vs Endurance training programmes.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate between aerobic and anaerobic programmes;
ii. Differentiate between strength and endurance training.
`;
  }
  return null;
};