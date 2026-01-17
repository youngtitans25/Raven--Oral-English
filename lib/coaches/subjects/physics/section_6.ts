import { StudentProfile } from '../../../types';

export const getSection6Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phys-light-energy') {
    return `${base}
**TOPIC: LIGHT ENERGY**
**CONTENT:**
- Sources (Luminous/Non-luminous).
- Propagation (Shadows, Eclipse).
- Pinhole camera.

**OBJECTIVES:**
Candidates should be able to:
i. Relate speed, frequency, wavelength;
ii. Solve problems on pinhole camera.
`;
  }
  if (topic === 'phys-reflection') {
    return `${base}
**TOPIC: REFLECTION OF LIGHT**
**CONTENT:**
- Plane, Concave, Convex mirrors.
- Laws of reflection.
- Mirror formula: $1/f = 1/u + 1/v$.

**OBJECTIVES:**
Candidates should be able to:
i. Apply mirror formula;
ii. Determine magnification;
iii. Draw ray diagrams.
`;
  }
  if (topic === 'phys-refraction') {
    return `${base}
**TOPIC: REFRACTION OF LIGHT**
**CONTENT:**
- Snell's law and Refractive index.
- Total internal reflection (Critical angle).
- Glass Prism (Minimum deviation).
- Lenses (Converging/Diverging) and Lens formula.

**OBJECTIVES:**
Candidates should be able to:
i. Determine refractive index;
ii. Apply lens formula;
iii. Solve problems on prisms.
`;
  }
  if (topic === 'phys-optical-inst') {
    return `${base}
**TOPIC: OPTICAL INSTRUMENTS**
**CONTENT:**
- Microscope, Telescope, Camera, Human Eye.
- Defects of vision (Myopia, Hypermetropia) and corrections.

**OBJECTIVES:**
Candidates should be able to:
i. Apply principles of optical instruments;
ii. Detect sight defects and corrections.
`;
  }
  if (topic === 'phys-dispersion') {
    return `${base}
**TOPIC: DISPERSION AND COLOURS**
**CONTENT:**
- Spectrum of white light.
- Primary and Secondary colours.
- Electromagnetic spectrum.

**OBJECTIVES:**
Candidates should be able to:
i. Analyze colours and filters;
ii. Analyze electromagnetic spectrum sources and uses.
`;
  }
  return null;
};