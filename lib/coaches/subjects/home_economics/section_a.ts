import { StudentProfile } from '../../../types';

export const getSectionAInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'home-ec-meaning-scope') {
    return `${base}
**TOPIC: MEANING, SCOPE & OBJECTIVES**
- Discuss Meaning, Scope and Importance of Home Economics.
- Explain Objectives and Ideals of Home Economics.
`;
  }
  if (topic === 'home-ec-careers') {
    return `${base}
**TOPIC: AREAS & CAREERS**
- Home Management: Interior decoration, Credit management, Florist.
- Foods & Nutrition: Catering, Dietetics, Nutritionist, Public Health.
- Clothing & Textile: Textile designing.
- Family/Child Development: Early childhood education.
- Others: Teaching, Counseling, Media, Research.
`;
  }
  if (topic === 'home-ec-interrelationships') {
    return `${base}
**TOPIC: INTERRELATIONSHIPS**
- Link to Biology, Geography, Chemistry, Physics, Agric Science, Fine Arts, Economics, Mathematics.
`;
  }
  return null;
};