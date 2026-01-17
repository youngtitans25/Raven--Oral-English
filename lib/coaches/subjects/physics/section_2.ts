import { StudentProfile } from '../../../types';

export const getSection2Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phys-motion') {
    return `${base}
**TOPIC: MOTION (MECHANICS)**
**CONTENT:**
- Newton's Laws of Motion (Inertia, F=ma, Action/Reaction).
- Linear Motion: Equations of uniformly accelerated motion ($v=u+at$, etc.).
- Projectiles: Range, Max height, Time of flight.
- Circular Motion: Centripetal force/acceleration.
- Simple Harmonic Motion (SHM).

**OBJECTIVES:**
Candidates should be able to:
i. Apply Newton's laws;
ii. Solve problems using motion equations;
iii. Calculate projectile parameters;
iv. Analyze energy changes in SHM.
`;
  }
  if (topic === 'phys-gravity') {
    return `${base}
**TOPIC: GRAVITATIONAL FIELD**
**CONTENT:**
- Newton's law of universal gravitation.
- Gravitational potential and Acceleration due to gravity (g).
- Escape velocity and Parking orbits.

**OBJECTIVES:**
Candidates should be able to:
i. Apply Newton's law of gravitation;
ii. Differentiate mass and weight;
iii. Determine escape velocity;
iv. Explain variation of g on earth's surface.
`;
  }
  if (topic === 'phys-equilibrium') {
    return `${base}
**TOPIC: EQUILIBRIUM OF FORCES**
**CONTENT:**
- Conditions for equilibrium (Coplanar forces).
- Triangle/Polygon of forces, Lami's theorem.
- Moment of a force and Torque.
- Centre of gravity and Stability (Stable, Unstable, Neutral).

**OBJECTIVES:**
Candidates should be able to:
i. Apply conditions of equilibrium;
ii. Solve problems using Lami's theorem and Moments;
iii. Determine centre of gravity.
`;
  }
  if (topic === 'phys-friction') {
    return `${base}
**TOPIC: FRICTION**
**CONTENT:**
- Static vs Dynamic friction.
- Coefficient of limiting friction ($\mu$).
- Viscosity and Terminal velocity (Stoke's law).

**OBJECTIVES:**
Candidates should be able to:
i. Determine coefficient of friction;
ii. Analyze advantages/disadvantages of friction;
iii. Apply Stoke's law to viscosity.
`;
  }
  if (topic === 'phys-energy') {
    return `${base}
**TOPIC: WORK, ENERGY AND POWER**
**CONTENT:**
- Definitions ($W=Fs$, $P=W/t$).
- Forms of energy and Conservation law.
- Energy sources: Renewable (Solar, Wind) vs Non-renewable.
- Solar energy (Photoelectric effect, $E=hf$).
- Dams and Nuclear energy.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate work, energy, power;
ii. Solve numerical problems;
iii. Explain photoelectric effect and calculate Work function.
`;
  }
  return null;
};