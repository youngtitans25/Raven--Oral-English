import { StudentProfile } from '../../../types';

export const getSection3Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phys-machines') {
    return `${base}
**TOPIC: SIMPLE MACHINES**
**CONTENT:**
- Definition and types (Lever, Pulley, Inclined plane, etc.).
- Mechanical advantage, Velocity ratio, and Efficiency.

**OBJECTIVES:**
Candidates should be able to:
i. Identify different types of simple machines;
ii. Solve problems involving mechanical advantage, velocity ratio, and efficiency.
`;
  }
  if (topic === 'phys-elasticity') {
    return `${base}
**TOPIC: ELASTICITY**
**CONTENT:**
- Hooke's Law and Young's Modulus.
- Elastic limit, yield point, breaking point.
- Work done in springs and elastic strings.

**OBJECTIVES:**
Candidates should be able to:
i. Interpret force-extension curves;
ii. Apply Hooke's law and calculate Young's modulus;
iii. Determine work done in springs.
`;
  }
  if (topic === 'phys-pressure') {
    return `${base}
**TOPIC: PRESSURE**
**CONTENT:**
- Atmospheric Pressure (Barometer, Manometer).
- Pressure in liquids ($P = \\rho gh$).
- Pascal's Principle (Transmission of pressure).

**OBJECTIVES:**
Candidates should be able to:
i. Recognize units of pressure (Pa);
ii. Relate variation of pressure to height;
iii. Apply Pascal's principle to solve problems.
`;
  }
  if (topic === 'phys-liquids-rest') {
    return `${base}
**TOPIC: LIQUIDS AT REST**
**CONTENT:**
- Density and Relative Density.
- Upthrust and Archimedes' Principle.
- Law of Floatation (Ships, Hydrometers).

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between density and relative density;
ii. Determine upthrust;
iii. Apply Archimedes' principle and law of floatation.
`;
  }
  if (topic === 'phys-temperature') {
    return `${base}
**TOPIC: TEMPERATURE AND ITS MEASUREMENT**
**CONTENT:**
- Concept of temperature and thermometric properties.
- Calibration of thermometers.
- Temperature scales (Celsius, Kelvin).

**OBJECTIVES:**
Candidates should be able to:
i. Identify thermometric properties;
ii. Convert between temperature scales.
`;
  }
  return null;
};