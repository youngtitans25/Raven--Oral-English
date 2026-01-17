import { StudentProfile } from '../../../types';

export const getSection4Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'geo-population') {
    return `${base}
**TOPIC: POPULATION**
**CONTENT:**
- World population (Amazon, USA, India, Japan, Southern Africa).
- Characteristics: Birth/Death rates, Age/Sex structure.
- Distribution patterns and growth problems.
- Migration: Types, causes, effects.

**OBJECTIVES:**
Candidates should be able to:
i. Define population concepts.
ii. Determine factors of distribution.
iii. Identify problems of growth.
iv. Relate migration types to causes/effects.
`;
  }
  if (topic === 'geo-settlement') {
    return `${base}
**TOPIC: SETTLEMENT**
**CONTENT:**
- Types: Rural vs Urban.
- Patterns: Dispersed, Nucleated, Linear.
- Functions and factors of location.
- Urbanization problems.
- Interrelationship between rural and urban areas.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate settlement types and patterns.
ii. Classify functions of settlements.
iii. Identify problems of urban centers.
`;
  }
  if (topic === 'geo-economic-activities') {
    return `${base}
**TOPIC: ECONOMIC ACTIVITIES**
**CONTENT:**
- Types: Primary, Secondary, Tertiary, Quaternary.
- Agriculture: Systems, factors, problems.
- Manufacturing: Types, location factors, distribution.
- Transportation & Communication: Modes, importance, problems.
- World Trade & Tourism.

**OBJECTIVES:**
Candidates should be able to:
i. Identify and differentiate economic activities.
ii. Assess importance/problems of agriculture and industry.
iii. Analyze transport modes and trade patterns.
iv. Identify problems of tourism.
`;
  }
  return null;
};