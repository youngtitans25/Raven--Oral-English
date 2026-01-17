import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSection1Instruction } from './physics/section_1';
import { getSection2Instruction } from './physics/section_2';
import { getSection3Instruction } from './physics/section_3';
import { getSection4Instruction } from './physics/section_4';
import { getSection5Instruction } from './physics/section_5';
import { getSection6Instruction } from './physics/section_6';
import { getSection7Instruction } from './physics/section_7';
import { getSection8Instruction } from './physics/section_8';

export const PHYSICS_SECTIONS = [
  {
    id: 'phys-section-1',
    title: 'Section 1: Measurements & Units',
    description: 'Fundamental units, Dimensions, Vectors, and scalars.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phys-measurements', title: 'Measurements & Units', description: 'Fundamental/Derived quantities, Dimensions, Errors.', image: '/phys-measure.jpg' },
      { id: 'phys-scalars-vectors', title: 'Scalars & Vectors', description: 'Vector resolution, Resultants, Relative velocity.', image: '/phys-vectors.jpg' },
      { id: 'phys-motion-concepts', title: 'Position & Displacement', description: 'Frames of reference, Distance vs Displacement.', image: '/phys-pos.jpg' }
    ]
  },
  {
    id: 'phys-section-2',
    title: 'Section 2: Mechanics',
    description: 'Motion, Gravity, Equilibrium, Friction, Energy.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phys-motion', title: 'Motion', description: 'Newton\'s Laws, Projectiles, SHM, Circular Motion.', image: '/phys-motion.jpg' },
      { id: 'phys-gravity', title: 'Gravitational Field', description: 'Universal Gravitation, Escape Velocity, Satellites.', image: '/phys-gravity.jpg' },
      { id: 'phys-equilibrium', title: 'Equilibrium of Forces', description: 'Moments, Stability, Lami\'s Theorem.', image: '/phys-equil.jpg' },
      { id: 'phys-friction', title: 'Friction & Viscosity', description: 'Static/Dynamic friction, Terminal velocity.', image: '/phys-friction.jpg' },
      { id: 'phys-energy', title: 'Work, Energy & Power', description: 'Conservation, Solar energy, Photoelectric effect.', image: '/phys-energy.jpg' }
    ]
  },
  {
    id: 'phys-section-3',
    title: 'Section 3: Properties of Matter',
    description: 'Machines, Elasticity, Pressure, and Liquids.',
    image: 'https://images.unsplash.com/photo-1581093196277-9f608be3d403?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phys-machines', title: 'Simple Machines', description: 'Levers, Pulleys, Mechanical Advantage, Efficiency.' },
      { id: 'phys-elasticity', title: 'Elasticity', description: 'Hooke\'s Law, Young\'s Modulus, Springs.' },
      { id: 'phys-pressure', title: 'Pressure', description: 'Atmospheric pressure, Barometers, Pascal\'s Principle.' },
      { id: 'phys-liquids-rest', title: 'Liquids at Rest', description: 'Density, Upthrust, Archimedes\' Principle, Floatation.' },
      { id: 'phys-temperature', title: 'Temperature', description: 'Thermometers, Scales (Celsius, Kelvin), Calibration.' }
    ]
  },
  {
    id: 'phys-section-4',
    title: 'Section 4: Heat & Thermodynamics',
    description: 'Heat capacity, Expansion, Gas Laws, Heat Transfer.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phys-heat-quantity', title: 'Quantity of Heat', description: 'Specific Heat Capacity, Method of Mixtures.' },
      { id: 'phys-change-state', title: 'Change of State', description: 'Latent Heat, Melting, Boiling, Evaporation.' },
      { id: 'phys-expansion', title: 'Thermal Expansion', description: 'Linear/Volume expansivity, Anomalous expansion.' },
      { id: 'phys-gas-laws', title: 'Gas Laws', description: 'Boyle\'s, Charles\', Pressure Law, Ideal Gas Equation.' },
      { id: 'phys-heat-transfer', title: 'Heat Transfer', description: 'Conduction, Convection, Radiation, Thermos flask.' }
    ]
  },
  {
    id: 'phys-section-5',
    title: 'Section 5: Waves & Sound',
    description: 'Wave motion, Sound propagation, Musical notes.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phys-waves', title: 'Waves', description: 'Types, Equation, Interference, Polarization.' },
      { id: 'phys-sound-prop', title: 'Propagation of Sound', description: 'Speed, Echoes, Reverberation.' },
      { id: 'phys-sound-char', title: 'Characteristics of Sound', description: 'Pitch, Loudness, Quality, Resonance, Pipes.' }
    ]
  },
  {
    id: 'phys-section-6',
    title: 'Section 6: Light & Optics',
    description: 'Reflection, Refraction, Lenses, Optical Instruments.',
    image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phys-light-energy', title: 'Light Energy', description: 'Sources, Shadows, Eclipse, Pinhole Camera.' },
      { id: 'phys-reflection', title: 'Reflection', description: 'Mirrors, Laws, Mirror Formula, Images.' },
      { id: 'phys-refraction', title: 'Refraction', description: 'Snell\'s Law, Total Internal Reflection, Prisms, Lenses.' },
      { id: 'phys-optical-inst', title: 'Optical Instruments', description: 'Microscope, Telescope, Eye, Camera, Defects.' },
      { id: 'phys-dispersion', title: 'Dispersion & Colour', description: 'Spectrum, Rainbow, Colour Mixing, Filters.' }
    ]
  },
  {
    id: 'phys-section-7',
    title: 'Section 7: Electricity & Magnetism',
    description: 'Electrostatics, Circuits, Magnetism, Induction.',
    image: 'https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phys-electrostatics', title: 'Electrostatics', description: 'Charges, Coulomb\'s Law, Capacitors.' },
      { id: 'phys-current-elec', title: 'Current Electricity', description: 'Ohm\'s Law, Resistors, Energy, Power.' },
      { id: 'phys-magnetism', title: 'Magnetism', description: 'Fields, Electromagnets, Transformers, Induction.' },
      { id: 'phys-ac-circuits', title: 'A.C. Circuits', description: 'Peak/RMS, Reactance, Impedance, Resonance.' }
    ]
  },
  {
    id: 'phys-section-8',
    title: 'Section 8: Modern Physics & Electronics',
    description: 'Atomic models, Radioactivity, Semiconductors, Lasers.',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phys-conduction', title: 'Conduction of Electricity', description: 'Electrolysis (Liquids) and Discharge through Gases.' },
      { id: 'phys-modern', title: 'Elementary Modern Physics', description: 'Atomic models, X-rays, Radioactivity, Wave-particle duality.' },
      { id: 'phys-electronics', title: 'Introductory Electronics', description: 'Semiconductors, Diodes, Transistors.' },
      { id: 'phys-optics-lasers', title: 'Fibre Optics & Lasers', description: 'Principles, types, applications, and dangers.' }
    ]
  }
];

export const PHYSICS_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: PHYSICS**\n**FOCUS:** General revision across Mechanics, Heat, Waves, Optics, Electricity, and Modern Physics.`;

  const instruction1 = getSection1Instruction(profile, topic, base);
  if (instruction1) return instruction1;

  const instruction2 = getSection2Instruction(profile, topic, base);
  if (instruction2) return instruction2;

  const instruction3 = getSection3Instruction(profile, topic, base);
  if (instruction3) return instruction3;

  const instruction4 = getSection4Instruction(profile, topic, base);
  if (instruction4) return instruction4;

  const instruction5 = getSection5Instruction(profile, topic, base);
  if (instruction5) return instruction5;

  const instruction6 = getSection6Instruction(profile, topic, base);
  if (instruction6) return instruction6;

  const instruction7 = getSection7Instruction(profile, topic, base);
  if (instruction7) return instruction7;

  const instruction8 = getSection8Instruction(profile, topic, base);
  if (instruction8) return instruction8;

  return `${base}
**SUBJECT: PHYSICS**
**FOCUS:** General revision.
`;
};