import { StudentProfile } from '../../../types';

export const getSection2Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'geo-planet') {
    return `${base}
**TOPIC: THE EARTH AS A PLANET**
**CONTENT:**
- Earth in the solar system (Rotation, Revolution).
- Shape and size of the earth (Proofs).
- Latitudes (Distances) and Longitudes (Time).

**OBJECTIVES:**
Candidates should be able to:
i. Identify positions of planets.
ii. Explain effects of rotation and revolution.
iii. Provide proofs for the earth's shape.
iv. Calculate distances using latitude and time using longitude.
`;
  }
  if (topic === 'geo-structure') {
    return `${base}
**TOPIC: STRUCTURE OF THE EARTH**
**CONTENT:**
- Internal (Crust, Mantle, Core) and External structure (Spheres).
- Rocks: Types (Igneous, Sedimentary, Metamorphic), characteristics, formation, uses.
- Tectonic forces (Tensional, Compressional).
- Major Landforms: Mountains, Plateaux, Plains, Karst, Desert.

**OBJECTIVES:**
Candidates should be able to:
i. Compare internal and external components.
ii. Differentiate rock types and modes of formation.
iii. Analyze resultant landforms from tectonic forces.
`;
  }
  if (topic === 'geo-volcanism') {
    return `${base}
**TOPIC: VOLCANISM AND EARTHQUAKES**
**CONTENT:**
- Origin and types of Volcanoes.
- Landforms of Igneous Rocks (Intrusive/Extrusive).
- Earthquakes: Causes and effects.

**OBJECTIVES:**
Candidates should be able to:
i. Explain processes of volcanism and earthquakes.
ii. Describe associated landforms (Dykes, Sills, Batholiths, Calderas).
iii. Cite examples of major eruptions and quakes.
`;
  }
  if (topic === 'geo-denudation') {
    return `${base}
**TOPIC: DENUDATION PROCESSES**
**CONTENT:**
- Weathering (Physical, Chemical, Biological).
- Erosion, Mass movement, Deposition.
- Agents: Water, Wind, Waves.

**OBJECTIVES:**
Candidates should be able to:
i. Identify agents of denudation.
ii. Identify landforms associated with weathering, erosion, and deposition.
`;
  }
  if (topic === 'geo-water') {
    return `${base}
**TOPIC: WATER BODIES**
**CONTENT:**
- Oceans and Seas: Distribution, Salinity, Uses.
- Ocean Currents: Types, Causes, Effects.
- Lakes: Types, Distribution, Uses.
- Rivers: Action of running water (upper, middle, lower courses).

**OBJECTIVES:**
Candidates should be able to:
i. Locate oceans and seas.
ii. Classify ocean currents and their effects.
iii. Identify types of lakes and river landforms (Deltas, Meanders, etc.).
`;
  }
  return null;
};