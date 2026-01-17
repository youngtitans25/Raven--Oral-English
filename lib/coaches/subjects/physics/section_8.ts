import { StudentProfile } from '../../../types';

export const getSection8Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phys-conduction') {
    return `${base}
**TOPIC: CONDUCTION OF ELECTRICITY**
**CONTENT:**
- Liquids: Electrolytes vs Non-electrolytes, Electrolysis, Faraday's Laws.
- Gases: Discharge through gases (qualitative).
- Applications: Electroplating, calibration.

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish electrolytes;
ii. Analyze electrolysis processes;
iii. Apply Faraday's laws to solve problems;
iv. Analyze discharge through gases.
`;
  }
  if (topic === 'phys-modern') {
    return `${base}
**TOPIC: ELEMENTARY MODERN PHYSICS**
**CONTENT:**
- Atomic Models: Bohr, Rutherford (limitations).
- Structure: Protons, Neutrons, Electrons.
- Energy levels and Spectra.
- Emissions: Thermionic and Photoelectric (Einstein's equation).
- X-rays: Production and applications.
- Radioactivity: Alpha, Beta, Gamma rays, Half-life, Binding energy.
- Wave-particle duality (Uncertainty principle).

**OBJECTIVES:**
Candidates should be able to:
i. Describe atomic models;
ii. Differentiate energy levels;
iii. Solve problems on Photoelectric effect and Stopping potential;
iv. Explain X-ray production;
v. Relate half-life and decay constant;
vi. Calculate binding energy and mass defect.
`;
  }
  if (topic === 'phys-electronics') {
    return `${base}
**TOPIC: INTRODUCTORY ELECTRONICS**
**CONTENT:**
- Materials: Metals, Semiconductors, Insulators (Band gap).
- Semiconductors: Intrinsic/Extrinsic, n-type/p-type.
- Components: Diodes (Rectification), Transistors (Amplification).

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate conductors, semiconductors, insulators;
ii. Distinguish n-type and p-type semiconductors;
iii. Analyze diode and transistor functions (rectification/amplification).
`;
  }
  if (topic === 'phys-optics-lasers') {
    return `${base}
**TOPIC: FIBRE OPTICS AND LASERS**
**CONTENT:**
- Fibre Optics: Principle of light transmission, Applications (LAN, Medicine).
- Lasers: Meaning, Types (Solid, Gas, Liquid, Semiconductor), Applications, Dangers.

**OBJECTIVES:**
Candidates should be able to:
i. Explain fibre optics principles;
ii. Apply fibre optics to LAN/Medicine;
iii. Identify laser types and applications;
iv. Identify dangers of using lasers.
`;
  }
  return null;
};