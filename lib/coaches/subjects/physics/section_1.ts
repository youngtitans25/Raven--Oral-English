import { StudentProfile } from '../../../types';

export const getSection1Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phys-measurements') {
    return `${base}
**TOPIC: MEASUREMENTS AND UNITS**
**CONTENT:**
- Fundamental vs Derived quantities and units.
- Measuring Instruments: Vernier caliper, Micrometer screw gauge, Beam balance.
- Dimensions of physical quantities.
- Limitations: Accuracy, Errors, Significant figures.

**OBJECTIVES:**
Candidates should be able to:
i. Identify units of length, area, volume, mass, time;
ii. Use measuring instruments (vernier, micrometer);
iii. Determine dimensions of quantities;
iv. Estimate errors and express measurements in standard form.
`;
  }
  if (topic === 'phys-scalars-vectors') {
    return `${base}
**TOPIC: SCALARS AND VECTORS**
**CONTENT:**
- Definition and examples.
- Relative velocity.
- Resolution of vectors into perpendicular components.
- Resultant of vectors.

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between scalars and vectors;
ii. Determine resultant of vectors;
iii. Resolve vectors into components;
iv. Solve relative velocity problems.
`;
  }
  if (topic === 'phys-motion-concepts') {
    return `${base}
**TOPIC: MOTION CONCEPTS (POSITION, DISTANCE, DISPLACEMENT)**
**CONTENT:**
- Concept of position, coordinates, and frame of reference.
- Distance vs Displacement.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate distance and displacement;
ii. Use Cartesian systems to locate positions;
iii. Plot graphs and draw inferences.
`;
  }
  return null;
};