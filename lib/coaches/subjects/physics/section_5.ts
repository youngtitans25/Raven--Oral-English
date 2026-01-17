import { StudentProfile } from '../../../types';

export const getSection5Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phys-waves') {
    return `${base}
**TOPIC: WAVES**
**CONTENT:**
- Production and Propagation.
- Longitudinal vs Transverse.
- Equation: $V=f\\lambda$ and $Y=A \\sin(2\\pi/\\lambda)(vt \\pm x)$.
- Reflection, Refraction, Diffraction, Polarization, Interference.

**OBJECTIVES:**
Candidates should be able to:
i. Relate frequency, wavelength, and velocity;
ii. Use progressive wave equation;
iii. Differentiate wave properties (reflection, refraction, etc.).
`;
  }
  if (topic === 'phys-sound-prop') {
    return `${base}
**TOPIC: PROPAGATION OF SOUND**
**CONTENT:**
- Necessity of material medium.
- Speed in solids, liquids, air.
- Echoes and reverberation.

**OBJECTIVES:**
Candidates should be able to:
i. Compare speed of sound in different media;
ii. Solve problems on echoes.
`;
  }
  if (topic === 'phys-sound-char') {
    return `${base}
**TOPIC: CHARACTERISTICS OF SOUND**
**CONTENT:**
- Noise vs Musical notes.
- Pitch, Loudness, Quality/Timbre.
- Resonance and Harmonics.
- Vibration in strings and pipes (open/closed).

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate noise and music;
ii. Analyze pitch, intensity, and quality;
iii. Determine frequencies in pipes and strings.
`;
  }
  return null;
};