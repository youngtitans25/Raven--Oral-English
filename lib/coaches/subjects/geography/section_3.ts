import { StudentProfile } from '../../../types';

export const getSection3Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'geo-weather') {
    return `${base}
**TOPIC: WEATHER AND CLIMATE**
**CONTENT:**
- Elements and factors (Pressure, Air mass, Altitude, etc.).
- Classification: Greek and Koppen system.
- Measurement instruments.
- Climate Change: Science, causes, effects, remedies.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate weather and climate.
ii. Identify climate types according to Koppen.
iii. Relate instruments to weather parameters.
iv. Understand causes and remedies of climate change.
`;
  }
  if (topic === 'geo-vegetation') {
    return `${base}
**TOPIC: VEGETATION**
**CONTENT:**
- Factors controlling growth.
- Plant communities and succession.
- Major vegetation types (Forests, Grasslands, Deserts).
- Impact of human activities.

**OBJECTIVES:**
Candidates should be able to:
i. Trace factors controlling plant growth.
ii. Analyze vegetation development.
iii. Identify characteristics and distribution of vegetation types.
`;
  }
  if (topic === 'geo-soils') {
    return `${base}
**TOPIC: SOILS**
**CONTENT:**
- Definition, properties, and formation factors.
- Soil profiles (Horizons).
- Major tropical soil types.
- Conservation and human impact.

**OBJECTIVES:**
Candidates should be able to:
i. Classify soils and identify formation factors.
ii. Differentiate soil horizons.
iii. Compare tropical soil types and uses.
`;
  }
  if (topic === 'geo-environment') {
    return `${base}
**TOPIC: ENVIRONMENTAL RESOURCES & HAZARDS**
**CONTENT:**
- Resources: Renewable/Non-renewable (Atmospheric, Land, Mineral).
- Interaction: Ecosystem balance.
- Hazards: Natural (Drought, Earthquake) vs Man-induced (Erosion, Pollution, Desertification).
- Conservation: Need, resources, methods.

**OBJECTIVES:**
Candidates should be able to:
i. Relate resources to uses.
ii. Analyze human effects on ecosystems.
iii. Identify causes and control of environmental hazards.
iv. Discuss conservation methods.
`;
  }
  return null;
};