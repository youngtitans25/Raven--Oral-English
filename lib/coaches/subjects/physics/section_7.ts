import { StudentProfile } from '../../../types';

export const getSection7Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phys-electrostatics') {
    return `${base}
**TOPIC: ELECTROSTATICS**
**CONTENT:**
- Charges, Induction, Friction.
- Coulomb's Law.
- Electric field intensity and potential.
- Capacitors ($C = \\epsilon A/d$).

**OBJECTIVES:**
Candidates should be able to:
i. Apply Coulomb's law;
ii. Determine capacitance and energy stored in capacitors.
`;
  }
  if (topic === 'phys-current-elec') {
    return `${base}
**TOPIC: CURRENT ELECTRICITY**
**CONTENT:**
- EMF, Potential Difference, Current.
- Ohm's Law ($V=IR$).
- Resistivity and Conductivity.
- Resistors in Series and Parallel.
- Electrical Energy and Power.

**OBJECTIVES:**
Candidates should be able to:
i. Apply Ohm's law;
ii. Calculate effective resistance;
iii. Calculate electrical energy and power.
`;
  }
  if (topic === 'phys-magnetism') {
    return `${base}
**TOPIC: MAGNETS AND MAGNETIC FIELDS**
**CONTENT:**
- Properties of magnets.
- Magnetic fields (Earth, Conductors, Solenoids).
- Force on current-carrying conductor (Fleming's Left Hand Rule).
- Transformers and Induction coil.

**OBJECTIVES:**
Candidates should be able to:
i. Determine flux patterns;
ii. Calculate force on conductors;
iii. Explain principles of transformers.
`;
  }
  if (topic === 'phys-ac-circuits') {
    return `${base}
**TOPIC: SIMPLE A.C. CIRCUITS**
**CONTENT:**
- Peak and R.M.S values.
- Reactance and Impedance (R-L-C circuits).
- Resonance.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate peak and rms values;
ii. Calculate reactance and impedance;
iii. Determine resonant frequency.
`;
  }
  return null;
};