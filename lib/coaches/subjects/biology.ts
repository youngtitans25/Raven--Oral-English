import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSectionAInstruction } from './biology/section_a';
import { getSectionBInstruction } from './biology/section_b';
import { getSectionCInstruction } from './biology/section_c';
import { getSectionDInstruction } from './biology/section_d';
import { getSectionEInstruction } from './biology/section_e';

export const BIOLOGY_SECTIONS = [
  {
    id: 'bio-section-a',
    title: 'Section A: Variety of Organisms',
    description: 'Characteristics of life, cell structure, evolution, and adaptations.',
    image: 'https://images.unsplash.com/photo-1530032582449-e2567c3b99ac?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'bio-living-organisms', title: 'Living Organisms', description: 'Cell structure, functions, and levels of organization.', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop' },
      { id: 'bio-evolution-organisms', title: 'Evolution of Organisms', description: 'Monera, Protista, Fungi, and Plantae (Thallophyta & Bryophyta).', image: 'https://images.unsplash.com/photo-1463123081278-ccdd0598f526?q=80&w=1000&auto=format&fit=crop' },
      { id: 'bio-adaptations', title: 'Adaptations', description: 'Structural, functional, and behavioural adaptations for survival.', image: 'https://images.unsplash.com/photo-1543169107-19297387d402?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'bio-section-b',
    title: 'Section B: Structure & Functions',
    description: 'Anatomy, physiology, and life processes in plants and animals.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'bio-internal-structure', title: 'Internal Structure', description: 'Anatomy of flowering plants and mammals.', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop' },
      { id: 'bio-nutrition', title: 'Nutrition', description: 'Photosynthesis, food classes, dentition, and digestive systems.', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1000&auto=format&fit=crop' },
      { id: 'bio-transport', title: 'Transport System', description: 'Circulatory systems, vascular bundles, diffusion and osmosis.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1000&auto=format&fit=crop' },
      { id: 'bio-respiration', title: 'Respiration', description: 'Aerobic/Anaerobic respiration and gaseous exchange mechanisms.', image: 'https://images.unsplash.com/photo-1529604278261-8bfcd30a3821?q=80&w=1000&auto=format&fit=crop' },
      { id: 'bio-excretion', title: 'Excretion', description: 'Kidneys, skin, lungs and plant excretory products.', image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=1000&auto=format&fit=crop' },
      { id: 'bio-support-movement', title: 'Support & Movement', description: 'Skeletons, joints, and plant tropisms.', image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1000&auto=format&fit=crop' },
      { id: 'bio-reproduction-growth', title: 'Reproduction & Growth', description: 'Sexual/Asexual reproduction, flower parts, and germination.', image: 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?q=80&w=1000&auto=format&fit=crop' },
      { id: 'bio-coordination', title: 'Co-ordination & Control', description: 'Nervous system, sense organs, hormones, and homeostasis.', image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'bio-section-c',
    title: 'Section C: Ecology',
    description: 'Interactions, habitats, biomes, soil, and environmental management.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'bio-ecology-factors', title: 'Distribution Factors', description: 'Abiotic factors affecting organism distribution.', image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=1000&auto=format&fit=crop' },
        { id: 'bio-interactions-cycles', title: 'Interactions & Cycles', description: 'Symbiosis, food webs, and nutrient cycles.', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1000&auto=format&fit=crop' },
        { id: 'bio-habitats-biomes', title: 'Habitats & Biomes', description: 'Aquatic/Terrestrial habitats and Nigerian biomes.', image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1000&auto=format&fit=crop' },
        { id: 'bio-population-ecology', title: 'Population Ecology', description: 'Density, overcrowding, and succession.', image: 'https://images.unsplash.com/photo-1535940342957-2f3b976294cc?q=80&w=1000&auto=format&fit=crop' },
        { id: 'bio-soil-science', title: 'Soil Ecology', description: 'Soil types, components, and conservation.', image: 'https://images.unsplash.com/photo-1629806954203-3da70b749339?q=80&w=1000&auto=format&fit=crop' },
        { id: 'bio-humans-environment', title: 'Humans & Environment', description: 'Diseases, pollution, and conservation efforts.', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'bio-section-d',
    title: 'Section D: Heredity and Variations',
    description: 'Genetics, evolution, morphological/physiological variation, and biotechnology.',
    image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'bio-variation', title: 'Variation in Population', description: 'Morphological and physiological variations (blood groups, fingerprints).', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1000&auto=format&fit=crop' },
        { id: 'bio-heredity', title: 'Heredity & Genetics', description: 'Chromosomes, DNA, Sex-linkage, and Mendelian inheritance.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1000&auto=format&fit=crop' },
        { id: 'bio-biotech', title: 'Biotechnology', description: 'Applications in agriculture, medicine, and food industries.', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'bio-section-e',
    title: 'Section E: Evolution',
    description: 'Theories of evolution, evidence, and modern evolutionary concepts.',
    image: 'https://images.unsplash.com/photo-1516900557549-41557d405adf?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'bio-evolution-theories', title: 'Theories of Evolution', description: 'Lamarck, Darwin, and the concept of organic evolution.', image: 'https://images.unsplash.com/photo-1598337774970-d84e5b323c3b?q=80&w=1000&auto=format&fit=crop' },
        { id: 'bio-evolution-evidence', title: 'Evidence of Evolution', description: 'Fossils, anatomy, embryology, and genetic evidence.', image: 'https://images.unsplash.com/photo-1615485925763-867864754854?q=80&w=1000&auto=format&fit=crop' }
    ]
  }
];

export const BIOLOGY_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: BIOLOGY**\n**FOCUS:** General revision across Variety of Organisms, Form and Function, Ecology, Heredity, and Evolution.`;

  const instructionA = getSectionAInstruction(profile, topic, base);
  if (instructionA) return instructionA;

  const instructionB = getSectionBInstruction(profile, topic, base);
  if (instructionB) return instructionB;

  const instructionC = getSectionCInstruction(profile, topic, base);
  if (instructionC) return instructionC;

  const instructionD = getSectionDInstruction(profile, topic, base);
  if (instructionD) return instructionD;

  const instructionE = getSectionEInstruction(profile, topic, base);
  if (instructionE) return instructionE;

  return `${base}
**SUBJECT: BIOLOGY**
**FOCUS:** General revision.
`;
};