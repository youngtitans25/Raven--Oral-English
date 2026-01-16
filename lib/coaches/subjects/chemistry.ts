import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getTopic1Instruction } from './chemistry/topic_1';
import { getTopic2Instruction } from './chemistry/topic_2';
import { getTopic3Instruction } from './chemistry/topic_3';
import { getTopic4Instruction } from './chemistry/topic_4';
import { getTopic5Instruction } from './chemistry/topic_5';
import { getTopic6Instruction } from './chemistry/topic_6';
import { getTopic7Instruction } from './chemistry/topic_7';
import { getTopic8Instruction } from './chemistry/topic_8';
import { getTopic9Instruction } from './chemistry/topic_9';
import { getTopic10Instruction } from './chemistry/topic_10';
import { getTopic11Instruction } from './chemistry/topic_11';
import { getTopic12Instruction } from './chemistry/topic_12';
import { getTopic13Instruction } from './chemistry/topic_13';
import { getTopic14Instruction } from './chemistry/topic_14';
import { getTopic15Instruction } from './chemistry/topic_15';
import { getTopic16Instruction } from './chemistry/topic_16';
import { getTopic17Instruction } from './chemistry/topic_17';
import { getTopic18Instruction } from './chemistry/topic_18';

export const CHEMISTRY_SECTIONS = [
  {
    id: 'chem-topic-1',
    title: 'Topic 1: Separation of Mixtures',
    description: 'Purification methods, purity criteria, and changes of state.',
    image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'chem-elements-compounds', title: 'Elements, Compounds & Mixtures', description: 'Distinguish between pure substances and mixtures.', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop' },
      { id: 'chem-chemical-physical-changes', title: 'Chemical & Physical Changes', description: 'Reversible vs Irreversible changes.', image: 'https://images.unsplash.com/photo-1564325724739-bae0bd08762c?q=80&w=1000&auto=format&fit=crop' },
      { id: 'chem-pure-impure', title: 'Purity Criteria', description: 'MP/BP, Density, and Pure vs Impure substances.', image: 'https://images.unsplash.com/photo-1622359679659-3b946823907c?q=80&w=1000&auto=format&fit=crop' },
      { id: 'chem-separation-processes', title: 'Separation Processes', description: 'Distillation, Chromatography, Filtration techniques.', image: 'https://images.unsplash.com/photo-1575503802870-45de6a6217c8?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'chem-topic-2',
    title: 'Topic 2: Chemical Combination',
    description: 'Laws of chemical combination, Stoichiometry, and the Mole Concept.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'chem-chemical-laws', title: 'Laws of Chemical Combination', description: 'Definite, Multiple, and Reciprocal proportions.', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-stoichiometry', title: 'Stoichiometry & Mole Concept', description: 'Calculations, Formulae, and Equations.', image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'chem-topic-3',
    title: 'Topic 3: Kinetic Theory & Gas Laws',
    description: 'States of matter, molecular motion, and gas behavior.',
    image: 'https://images.unsplash.com/photo-1581093196277-9f608be3d403?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'chem-kinetic-theory', title: 'Kinetic Theory of Matter', description: 'Melting, boiling, and Brownian motion.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-gas-laws', title: 'Gas Laws', description: 'Boyle, Charles, Dalton, and Ideal Gas Equation.', image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'chem-topic-4',
    title: 'Topic 4: Atomic Structure & Bonding',
    description: 'Structure of the atom, periodicity, and chemical bonds.',
    image: 'https://images.unsplash.com/photo-1614730341194-75c60740a270?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'chem-atomic-structure', title: 'Atomic Structure', description: 'Subatomic particles, isotopes, and quantum numbers.', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-periodicity', title: 'Periodic Table & Trends', description: 'Groups, periods, and periodic properties.', image: 'https://images.unsplash.com/photo-1574352067721-72d5913ef35c?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-bonding', title: 'Chemical Bonding', description: 'Ionic, Covalent, Metallic bonding.', image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-shapes', title: 'Shapes of Molecules', description: 'Linear, Non-linear, Tetrahedral, Pyramidal.', image: 'https://images.unsplash.com/photo-1623949904331-404129114ab0?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'chem-topic-5',
    title: 'Topic 5: Nuclear Chemistry',
    description: 'Radioactivity, decay, fusion, and fission.',
    image: 'https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'chem-radioactivity', title: 'Radioactivity', description: 'Types of radiation, half-life, and nuclear reactions.', image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'chem-topic-6',
    title: 'Topic 6: Solubility',
    description: 'Solutions, solubility curves, and colloids.',
    image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'chem-solutions', title: 'Types of Solutions', description: 'Saturated solutions and solubility curves.', image: 'https://images.unsplash.com/photo-1622359679659-3b946823907c?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-solvents', title: 'Solvents', description: 'Applications of solvents for fats, oils, and paints.', image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-colloids', title: 'True & False Solutions', description: 'Suspensions and colloids (emulsions, aerosols).', image: 'https://images.unsplash.com/photo-1551817958-c5b51e77f52b?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'chem-topic-7',
    title: 'Topic 7: Environmental Pollution',
    description: 'Air, water, and soil pollution causes and control.',
    image: 'https://images.unsplash.com/photo-1611273426761-53c8577a3c18?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'chem-air', title: 'Air Composition', description: 'Constituents of air and noble gases.', image: 'https://images.unsplash.com/photo-1534081333815-ae5019106622?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-pollution', title: 'Pollution', description: 'Pollutants, effects, and control measures.', image: 'https://images.unsplash.com/photo-1569163139599-0f4517e36b51?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'chem-topic-8',
    title: 'Topic 8: Acids, Bases and Salts',
    description: 'Properties, pH, titrations, and hydrolysis.',
    image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'chem-acids-bases-salts', title: 'General Characteristics', description: 'Properties, indicators, and salt preparation.', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-conductance', title: 'Conductance', description: 'Strong/weak electrolytes and dissociation.', image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-ph', title: 'pH and Buffers', description: 'pH scale, calculations, and buffer solutions.', image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-titration', title: 'Titrations & Hydrolysis', description: 'Acid-base titrations and salt hydrolysis.', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'chem-topic-9',
    title: 'Topic 9: Oxidation & Reduction (Redox)',
    description: 'Redox reactions, oxidation numbers, and agents.',
    image: 'https://images.unsplash.com/photo-1624823183492-36c4b2672727?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'chem-redox-concepts', title: 'Redox Concepts', description: 'Definitions and electron transfer.', image: 'https://images.unsplash.com/photo-1576329437199-6338b24479e0?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-oxidation-numbers', title: 'Oxidation Numbers & IUPAC', description: 'Balancing and nomenclature.', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-redox-agents', title: 'Oxidizing & Reducing Agents', description: 'Tests and identification.', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'chem-topic-10',
    title: 'Topic 10: Electrolysis',
    description: 'Faraday\'s laws, electrochemical cells, and corrosion.',
    image: 'https://images.unsplash.com/photo-1535581652167-3d6b98c36f01?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'chem-electrolysis-fundamentals', title: 'Fundamentals', description: 'Electrolytes and Faraday\'s Laws.', image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-electrolysis-processes', title: 'Processes', description: 'Specific examples and discharge factors.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-electrolysis-uses', title: 'Uses of Electrolysis', description: 'Purification and production.', image: 'https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-electrochemical-cells', title: 'Electrochemical Cells', description: 'Series, half-cells, and potentials.', image: 'https://images.unsplash.com/photo-1622359679659-3b946823907c?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-corrosion', title: 'Corrosion & Protection', description: 'Mechanism and prevention methods.', image: 'https://images.unsplash.com/photo-1516214104703-d2a079820a0c?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'chem-topic-11',
    title: 'Topic 11: Energy Changes',
    description: 'Endothermic/Exothermic reactions, Entropy, and Spontaneity.',
    image: 'https://images.unsplash.com/photo-1504913659239-5ad602652a92?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'chem-energy-changes', title: 'Energy Changes', description: 'Heat changes (ΔH) in physical and chemical processes.', image: 'https://images.unsplash.com/photo-1514332977535-77983808246d?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-entropy', title: 'Entropy', description: 'Order vs Disorder in systems.', image: 'https://images.unsplash.com/photo-1618588507085-c79565432917?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-spontaneity', title: 'Spontaneity', description: 'Gibbs Free Energy and feasibility of reactions.', image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'chem-topic-12',
    title: 'Topic 12: Rates of Reaction',
    description: 'Kinetics, factors affecting rates, and collision theory.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'chem-reaction-factors', title: 'Factors Affecting Rates', description: 'Temperature, Concentration, Surface Area, Catalyst.', image: 'https://images.unsplash.com/photo-1605632126233-b9dc8c4d2621?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-rate-curves', title: 'Rate Curves & Collision Theory', description: 'Activation energy, Arrhenius law, and graphs.', image: 'https://images.unsplash.com/photo-1559757175-0e7d0f95b524?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'chem-topic-13',
    title: 'Topic 13: Chemical Equilibria',
    description: 'Reversible reactions, Equilibrium constant, Le Chatelier\'s principle.',
    image: 'https://images.unsplash.com/photo-1574976695277-28d844223293?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'chem-equilibria', title: 'Chemical Equilibria', description: 'Factors affecting equilibrium and Le Chatelier\'s principle.', image: 'https://images.unsplash.com/photo-1633649520697-3f9c3c0c0e52?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'chem-topic-14',
    title: 'Topic 14: Non-metals & Compounds',
    description: 'Hydrogen, Halogens, Oxygen, Sulphur, Nitrogen, Carbon.',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'chem-hydrogen', title: 'Hydrogen', description: 'Preparation, properties, and uses.', image: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-halogens', title: 'Halogens (Chlorine)', description: 'Chlorine, HCl, and Chlorides.', image: 'https://images.unsplash.com/photo-1596706900223-9993305c6c64?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-oxygen-water', title: 'Oxygen & Water', description: 'Oxides, Water treatment, Hardness.', image: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-sulphur', title: 'Sulphur', description: 'Allotropes, H2SO4, SO2, H2S.', image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-nitrogen', title: 'Nitrogen', description: 'Ammonia, HNO3, Nitrogen Cycle.', image: 'https://images.unsplash.com/photo-1596706900223-9993305c6c64?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-carbon', title: 'Carbon', description: 'Allotropes, CO2, CO, Coal, Coke.', image: 'https://images.unsplash.com/photo-1517430816045-df4b7de8db2b?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'chem-topic-15',
    title: 'Topic 15: Metals & Compounds',
    description: 'Sodium, Calcium, Aluminium, Tin, Transition Metals, Iron.',
    image: 'https://images.unsplash.com/photo-1622358463287-e2c7c0062630?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'chem-metals-general', title: 'General Properties', description: 'Physical/chemical properties and extraction methods.', image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-alkali-sodium', title: 'Alkali Metals (Sodium)', description: 'NaOH, NaCl, Na2CO3, and Flame test.', image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-alkaline-calcium', title: 'Alkaline-Earth (Calcium)', description: 'CaO, Cement, Hardness, Flame test.', image: 'https://images.unsplash.com/photo-1622359679659-3b946823907c?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-aluminium', title: 'Aluminium', description: 'Bauxite, Extraction, Alloys, Uses.', image: 'https://images.unsplash.com/photo-1563823251941-b07242703e3e?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-tin', title: 'Tin', description: 'Extraction from Cassiterite and uses.', image: 'https://images.unsplash.com/photo-1619551739228-48b593f06d5c?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-transition-metals', title: 'Transition Metals', description: 'Properties, Complex ions, Catalysis.', image: 'https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-iron', title: 'Iron', description: 'Blast furnace, Steel, Rusting.', image: 'https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'chem-topic-16',
    title: 'Topic 16: Organic Compounds',
    description: 'Hydrocarbons, Alkanols, Acids, Amines, Biomolecules, Polymers.',
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'chem-organic-intro', title: 'Introduction', description: 'Tetravalency, functional groups, isomerism.', image: 'https://images.unsplash.com/photo-1632151829678-7f9202167d46?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-hydrocarbons', title: 'Hydrocarbons', description: 'Alkanes, Alkenes, Alkynes, Benzene.', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-alkanols', title: 'Alkanols', description: 'Ethanol, Glycerol, Lucas test.', image: 'https://images.unsplash.com/photo-1605632126233-b9dc8c4d2621?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-carbonyls', title: 'Alkanals & Alkanones', description: 'Chemical tests and differentiation.', image: 'https://images.unsplash.com/photo-1596706900223-9993305c6c64?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-acids-esters', title: 'Acids & Esters', description: 'Alkanoic acids, Soaps, Detergents.', image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-amines', title: 'Amines', description: 'Primary, secondary, tertiary amines.', image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-biomolecules', title: 'Carbohydrates & Proteins', description: 'Sugars, Enzymes, Hydrolysis.', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop' },
        { id: 'chem-polymers', title: 'Polymers', description: 'Plastics, Rubber, Polymerization.', image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'chem-topic-17',
    title: 'Topic 17: Chemistry and Industry',
    description: 'Chemical industries, raw materials, and biotechnology.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'chem-industries', title: 'Chemical Industries', description: 'Types, materials, heavy vs fine chemicals, and biotechnology.', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'chem-topic-18',
    title: 'Topic 18: Astronomical Chemistry',
    description: 'Solar system, planets, satellites, and Earth structure.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'chem-astronomy', title: 'The Solar System & Earth', description: 'Planets, satellites, atmosphere, lithosphere, hydrosphere.', image: 'https://images.unsplash.com/photo-1614730341194-75c60740a270?q=80&w=1000&auto=format&fit=crop' }
    ]
  }
];

export const CHEMISTRY_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: CHEMISTRY**\n**FOCUS:** General revision across Separation of Mixtures, Chemical Combination, Gas Laws, Atomic Structure, Nuclear Chemistry, Solubility, Pollution, Acids/Bases, Redox, Electrolysis, Energy Changes, Reaction Rates, Equilibria, Non-metals, Metals, Organic Chemistry, Industry, and Astronomy.`;

  const instruction1 = getTopic1Instruction(profile, topic, base);
  if (instruction1) return instruction1;

  const instruction2 = getTopic2Instruction(profile, topic, base);
  if (instruction2) return instruction2;

  const instruction3 = getTopic3Instruction(profile, topic, base);
  if (instruction3) return instruction3;

  const instruction4 = getTopic4Instruction(profile, topic, base);
  if (instruction4) return instruction4;

  const instruction5 = getTopic5Instruction(profile, topic, base);
  if (instruction5) return instruction5;

  const instruction6 = getTopic6Instruction(profile, topic, base);
  if (instruction6) return instruction6;

  const instruction7 = getTopic7Instruction(profile, topic, base);
  if (instruction7) return instruction7;

  const instruction8 = getTopic8Instruction(profile, topic, base);
  if (instruction8) return instruction8;

  const instruction9 = getTopic9Instruction(profile, topic, base);
  if (instruction9) return instruction9;

  const instruction10 = getTopic10Instruction(profile, topic, base);
  if (instruction10) return instruction10;

  const instruction11 = getTopic11Instruction(profile, topic, base);
  if (instruction11) return instruction11;

  const instruction12 = getTopic12Instruction(profile, topic, base);
  if (instruction12) return instruction12;

  const instruction13 = getTopic13Instruction(profile, topic, base);
  if (instruction13) return instruction13;

  const instruction14 = getTopic14Instruction(profile, topic, base);
  if (instruction14) return instruction14;

  const instruction15 = getTopic15Instruction(profile, topic, base);
  if (instruction15) return instruction15;

  const instruction16 = getTopic16Instruction(profile, topic, base);
  if (instruction16) return instruction16;

  const instruction17 = getTopic17Instruction(profile, topic, base);
  if (instruction17) return instruction17;

  const instruction18 = getTopic18Instruction(profile, topic, base);
  if (instruction18) return instruction18;

  return `${base}
**SUBJECT: CHEMISTRY**
**FOCUS:** General revision.
If discussing periodic trends, suggest launching the simulation.
`;
};