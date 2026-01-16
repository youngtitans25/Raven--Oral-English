import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSectionAInstruction } from './agriculture/section_a';
import { getSectionBInstruction } from './agriculture/section_b';
import { getSectionCInstruction } from './agriculture/section_c';
import { getSectionDInstruction } from './agriculture/section_d';
import { getSectionEInstruction } from './agriculture/section_e';

export const AGRICULTURE_SECTIONS = [
  {
    id: 'agri-section-a',
    title: 'Section A: General Agriculture',
    description: 'Foundations, ecology, genetics, and history of agricultural development.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'agri-meaning-scope', title: 'Meaning & Scope', description: 'Definition, branches, and types of agriculture.', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-importance', title: 'Importance of Agriculture', description: 'Economic contributions and raw materials.', image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-ecology', title: 'Agricultural Ecology', description: 'Ecological zones and production factors.', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-genetics', title: 'Genetics & Improvement', description: 'Mendel, breeding systems, and improvement methods.', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-inputs', title: 'Farm Inputs', description: 'Planting materials and agrochemicals.', image: 'https://images.unsplash.com/photo-1530507629858-e49769949609?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-history', title: 'History & Development', description: 'Systems, problems, research institutes, and programmes.', image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-govt-roles', title: 'Government & NGOs', description: 'Policies, loans, and extension services.', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'agri-section-b',
    title: 'Section B: Agronomy',
    description: 'Soil science, crop production, husbandry, and forestry.',
    image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'agri-rocks-soil', title: 'Rocks & Soil Formation', description: 'Rock types, weathering, and soil profiles.', image: 'https://images.unsplash.com/photo-1518117622935-7a4bd4337d42?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-soil-water', title: 'Soil Water & Conservation', description: 'Irrigation, drainage, and erosion control.', image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-soil-fertility', title: 'Soil Fertility', description: 'Nutrients, cycles, and fertilizers.', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-land-prep', title: 'Land Preparation', description: 'Tillage methods and practices.', image: 'https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-plant-forms', title: 'Plant Forms & Functions', description: 'Monocot vs Dicot anatomy.', image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-growth-repro', title: 'Growth & Reproduction', description: 'Pollination, fertilization, and development.', image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-propagation', title: 'Plant Propagation', description: 'Sexual and asexual methods, nursery management.', image: 'https://images.unsplash.com/photo-1591857177580-dc82b9e4e171?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-cropping-systems', title: 'Cropping Systems', description: 'Monocropping, mixed cropping, and plant densities.', image: 'https://images.unsplash.com/photo-1625246333195-5848b42814b3?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-crop-husbandry', title: 'Crop Husbandry', description: 'Cereals, legumes, tubers, beverages, oils, etc.', image: 'https://images.unsplash.com/photo-1595123550441-d377e017de6a?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-pasture', title: 'Pasture & Forage', description: 'Grasses, legumes, and range management.', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-floriculture', title: 'Floriculture', description: 'Ornamental trees, shrubs, and flowers.', image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-weeds', title: 'Weeds', description: 'Identification, dispersal, and control methods.', image: 'https://images.unsplash.com/photo-1628718413643-4cb2a78440a3?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-diseases', title: 'Crop Diseases', description: 'Pathogens, symptoms, and control.', image: 'https://images.unsplash.com/photo-1594498653385-d5175575a263?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-pests', title: 'Crop Pests', description: 'Insects, life cycles, and control.', image: 'https://images.unsplash.com/photo-1629737275850-2029d479366d?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-forestry', title: 'Forest Management', description: 'Silviculture, conservation, and agro-forestry.', image: 'https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'agri-section-c',
    title: 'Section C: Animal Production',
    description: 'Livestock management, nutrition, health, fisheries, and apiculture.',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'agri-animal-forms', title: 'Forms & Classification', description: 'Breeds, distribution, and external features.', image: 'https://images.unsplash.com/photo-1545468860-245e3c3b0162?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-animal-terms', title: 'Terminologies', description: 'Common terms in animal husbandry.', image: 'https://images.unsplash.com/photo-1596733430284-f74377bc2184?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-animal-anatomy', title: 'Anatomy & Physiology', description: 'Body systems and environmental effects.', image: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-animal-repro', title: 'Reproduction', description: 'Cycles, gestation, and egg formation.', image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-animal-nutrition', title: 'Animal Nutrition', description: 'Feeds, rations, and nutrient deficiencies.', image: 'https://images.unsplash.com/photo-1589923158776-0d3090874431?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-livestock-mgmt', title: 'Livestock Management', description: 'Housing, feeding, and care practices.', image: 'https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-animal-health', title: 'Animal Health', description: 'Diseases, parasites, and control.', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-fisheries-wildlife', title: 'Fisheries & Wildlife', description: 'Fish farming and wildlife conservation.', image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-apiculture', title: 'Bee-keeping', description: 'Apiculture methods and equipment.', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'agri-section-d',
    title: 'Section D: Economics & Extension',
    description: 'Factors of production, economic principles, farm management, and extension.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'agri-factors-production', title: 'Factors of Production', description: 'Land, Labour, Capital, and Entrepreneurship.', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-economic-principles', title: 'Economic Principles', description: 'Demand, Supply, and Production functions.', image: 'https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-labour-mgmt', title: 'Labour Management', description: 'Efficiency, types of labour, and regulations.', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-farm-management', title: 'Farm Management & Finance', description: 'Records, accounts, insurance, and financing.', image: 'https://images.unsplash.com/photo-1554224154-260327c00c42?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-marketing', title: 'Agricultural Marketing', description: 'Channels, agents, and marketing problems.', image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1000&auto=format&fit=crop' },
      { id: 'agri-extension', title: 'Agricultural Extension', description: 'Methods, agencies, and rural development.', image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'agri-section-e',
    title: 'Section E: Agricultural Technology',
    description: 'Mechanization, processing, biotechnology, ICT, and research statistics.',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'agri-surveying', title: 'Farm Surveying', description: 'Equipment, methods, and farmstead planning.', image: 'https://images.unsplash.com/photo-1581093196277-9f608be3d403?q=80&w=1000&auto=format&fit=crop' },
        { id: 'agri-simple-tools', title: 'Simple Farm Tools', description: 'Identification, use, and maintenance.', image: 'https://images.unsplash.com/photo-1589923158776-0d3090874431?q=80&w=1000&auto=format&fit=crop' },
        { id: 'agri-machinery', title: 'Farm Machinery', description: 'Tractors, implements, and maintenance.', image: 'https://images.unsplash.com/photo-1530267981375-2734618239eb?q=80&w=1000&auto=format&fit=crop' },
        { id: 'agri-mechanization', title: 'Mechanization & Power', description: 'Sources of power, problems, and prospects.', image: 'https://images.unsplash.com/photo-1527847263472-aa5338d178b8?q=80&w=1000&auto=format&fit=crop' },
        { id: 'agri-processing', title: 'Processing & Storage', description: 'Food processing methods and storage techniques.', image: 'https://images.unsplash.com/photo-1605000797499-95a05f577276?q=80&w=1000&auto=format&fit=crop' },
        { id: 'agri-biotech', title: 'Biotechnology', description: 'Genetic engineering, tissue culture, and applications.', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop' },
        { id: 'agri-ict', title: 'ICT in Agriculture', description: 'Computers, forecasting, and communication gadgets.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop' },
        { id: 'agri-research', title: 'Research & Statistics', description: 'Experiments, hypothesis, and data interpretation.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop' }
    ]
  }
];

export const AGRI_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: AGRICULTURAL SCIENCE**\n**FOCUS:** General revision across General Agriculture, Agronomy, Animal Production, Economics, and Technology.`;

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

  // Fallback
  return `${base}
**SUBJECT: AGRICULTURAL SCIENCE**
**FOCUS:** General revision.
`;
};