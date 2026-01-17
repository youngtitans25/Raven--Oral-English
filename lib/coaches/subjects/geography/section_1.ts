import { StudentProfile } from '../../../types';

export const getSection1Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'geo-maps') {
    return `${base}
**TOPIC: MAP READING AND INTERPRETATION**
**CONTENT:**
- Scale measurement (distances, areas, reduction/enlargement).
- Directions, bearings, and gradients on topographical maps.
- Profile drawing (cross profiles) and intervisibility.
- Interpretation of physical and human features.

**OBJECTIVES:**
Candidates should be able to:
i. Apply scale to distance and area measurement.
ii. Convert scales and apply them to gradients/map reduction.
iii. Determine direction and bearings.
iv. Draw cross profiles to illustrate relief.
v. Interpret features on topographical maps.
`;
  }
  if (topic === 'geo-stats') {
    return `${base}
**TOPIC: STATISTICAL DATA AND DIAGRAMS**
**CONTENT:**
- Interpretation of statistical data.
- Maps and diagrams (Pie charts, Bar graphs, Dot maps, etc.).

**OBJECTIVES:**
Candidates should be able to:
i. Compute quantitative information from data.
ii. Interpret statistical data presented in maps and diagrams.
`;
  }
  if (topic === 'geo-surveying') {
    return `${base}
**TOPIC: ELEMENTARY SURVEYING**
**CONTENT:**
- Chain and Prismatic Compass surveying.
- Open and Closed Traverse.
- Procedures, problems, advantages, and disadvantages.

**OBJECTIVES:**
Candidates should be able to:
i. Analyse principles and procedures of chain and prismatic surveying.
ii. Compare advantages and disadvantages of techniques.
`;
  }
  if (topic === 'geo-gis') {
    return `${base}
**TOPIC: GEOGRAPHIC INFORMATION SYSTEM (GIS)**
**CONTENT:**
- Components, techniques, and data sources (Remote sensing, GPS).
- Applications (Defense, Agriculture, Rural Development).
- GIS implementation problems in Nigeria.

**OBJECTIVES:**
Candidates should be able to:
i. Understand basic GIS concepts and components.
ii. Express location using lat/long/zipcodes.
iii. Identify data sources like remote sensing and digitizing.
iv. Explain areas of GIS application and associated problems.
`;
  }
  return null;
};