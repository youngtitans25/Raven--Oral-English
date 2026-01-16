import { StudentProfile } from '../../../types';

export const getTopic7Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-air') {
    return `${base}
**TOPIC: AIR COMPOSITION AND PROPERTIES**
**CONTENT:**
- Natural gaseous constituents and their proportions (nitrogen, oxygen, water vapour, carbon dioxide, noble gases).
- Factors responsible for variation in air composition.
- Air as a mixture; uses of noble gases.

**OBJECTIVES:**
Candidates should be able to:
i. Give reason(s) for the existence of air as a mixture.
ii. Identify the principle involved in the separation of air components.
iii. State reasons for the variation in the composition of air in the environment.
iv. Specify the uses of some of the constituents of air.
`;
  }
  if (topic === 'chem-pollution') {
    return `${base}
**TOPIC: ENVIRONMENTAL POLLUTION (AIR, WATER, SOIL)**
**CONTENT:**
- Air pollutants: H₂S, CO, SO₂, oxides of nitrogen, chlorofluorocarbons, dust.
- Sources and effects of pollutants.
- Water pollution: Sewage and oil pollution.
- Soil pollution: Oil spillage, biodegradable and non-biodegradable pollutants.

**OBJECTIVES:**
Candidates should be able to:
i. Identify the different types of pollution and pollutants.
ii. Specify different sources of pollutants.
iii. Classify pollutants as biodegradable and non-biodegradable.
iv. Specify the effects of pollution on the environment.
v. Identify measures for control of environmental pollution.
`;
  }
  return null;
};