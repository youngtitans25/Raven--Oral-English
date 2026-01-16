import { StudentProfile } from '../../../types';

export const getTopic18Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-astronomy') {
    return `${base}
**TOPIC: ASTRONOMICAL CHEMISTRY**
**CONTENT:**
- Solar system: Composition, planets, satellites.
- Composition of the Earth: Atmosphere, lithosphere, and hydrosphere.

**OBJECTIVES:**
Candidates should be able to:
i. State the composition of the solar system.
ii. List the planets in order.
iii. Identify the segments of the Earth (Atmosphere, Lithosphere, Hydrosphere).
iv. Name the natural satellite of the Earth.
v. Identify the smallest planet that is also the farthest from the sun.
`;
  }
  return null;
};