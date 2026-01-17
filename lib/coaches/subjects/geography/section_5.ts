import { StudentProfile } from '../../../types';

export const getSection5Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'geo-nigeria-physical') {
    return `${base}
**TOPIC: NIGERIA - PHYSICAL SETTING**
**CONTENT:**
- Location, position, size, political divisions.
- Physical setting: Geology, Relief, Drainage, Climate, Vegetation, Soils.
- Population: Size, distribution, migration.
- Natural Resources: Minerals, Water, Vegetation.

**OBJECTIVES:**
Candidates should be able to:
i. Describe Nigeria's location and political divisions.
ii. Relate physical setting to human activities.
iii. Account for population distribution patterns.
iv. Identify natural resources and conservation needs.
`;
  }
  if (topic === 'geo-nigeria-economic') {
    return `${base}
**TOPIC: NIGERIA - ECONOMIC & HUMAN GEOGRAPHY**
**CONTENT:**
- Agriculture: Systems, crops, problems.
- Manufacturing: Location factors, products, problems.
- Transportation & Communication.
- Trade: Regional/International.
- Tourism.

**OBJECTIVES:**
Candidates should be able to:
i. Compare farming systems.
ii. Identify manufacturing industries and location factors.
iii. Relate transport modes to advantages/disadvantages.
iv. Classify trade commodities.
v. Identify tourist centers and problems.
`;
  }
  if (topic === 'geo-ecowas') {
    return `${base}
**TOPIC: ECOWAS**
**CONTENT:**
- Meaning, objectives, member states.
- Mandate, advantages, disadvantages.
- Problems and solutions.

**OBJECTIVES:**
Candidates should be able to:
i. State meaning and objectives.
ii. Locate member countries.
iii. Evaluate prospects and problems.
`;
  }
  return null;
};