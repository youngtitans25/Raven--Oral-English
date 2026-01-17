import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSection1Instruction } from './geography/section_1';
import { getSection2Instruction } from './geography/section_2';
import { getSection3Instruction } from './geography/section_3';
import { getSection4Instruction } from './geography/section_4';
import { getSection5Instruction } from './geography/section_5';

export const GEOGRAPHY_SECTIONS = [
  {
    id: 'geo-section-1',
    title: 'Section 1: Practical Geography',
    description: 'Map reading, statistical data, surveying, and GIS.',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'geo-maps', title: 'Map Reading', description: 'Scale, bearings, profiles, interpretation.' },
      { id: 'geo-stats', title: 'Statistical Data', description: 'Charts, graphs, and quantitative analysis.' },
      { id: 'geo-surveying', title: 'Surveying', description: 'Chain and Prismatic compass techniques.' },
      { id: 'geo-gis', title: 'GIS', description: 'Geographic Information Systems concepts.' }
    ]
  },
  {
    id: 'geo-section-2',
    title: 'Section 2: Physical Geography I',
    description: 'Planetary earth, structure, rocks, and water bodies.',
    image: 'https://images.unsplash.com/photo-1614730341194-75c60740a270?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'geo-planet', title: 'Earth as a Planet', description: 'Solar system, rotation, revolution, lat/long.' },
      { id: 'geo-structure', title: 'Structure of the Earth', description: 'Crust, mantle, core, and rocks.' },
      { id: 'geo-volcanism', title: 'Volcanism & Earthquakes', description: 'Processes and associated landforms.' },
      { id: 'geo-denudation', title: 'Denudation', description: 'Weathering, erosion, and mass movement.' },
      { id: 'geo-water', title: 'Water Bodies', description: 'Oceans, seas, currents, lakes, and rivers.' }
    ]
  },
  {
    id: 'geo-section-3',
    title: 'Section 3: Physical Geography II',
    description: 'Climate, vegetation, soils, and environmental resources.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'geo-weather', title: 'Weather & Climate', description: 'Elements, classification, climate change.' },
      { id: 'geo-vegetation', title: 'Vegetation', description: 'Plant communities and biomes.' },
      { id: 'geo-soils', title: 'Soils', description: 'Formation, profile, types, and conservation.' },
      { id: 'geo-environment', title: 'Environment', description: 'Resources, hazards, and conservation.' }
    ]
  },
  {
    id: 'geo-section-4',
    title: 'Section 4: Human Geography',
    description: 'Population, settlement, and economic activities.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'geo-population', title: 'Population', description: 'Distribution, growth, migration.' },
      { id: 'geo-settlement', title: 'Settlement', description: 'Rural, urban, and urbanization.' },
      { id: 'geo-economic-activities', title: 'Economic Activities', description: 'Agriculture, industry, transport, trade.' }
    ]
  },
  {
    id: 'geo-section-5',
    title: 'Section 5: Regional Geography',
    description: 'Geography of Nigeria and ECOWAS.',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'geo-nigeria-physical', title: 'Nigeria: Physical', description: 'Location, relief, climate, resources.' },
      { id: 'geo-nigeria-economic', title: 'Nigeria: Economic', description: 'Agriculture, industry, transport, tourism.' },
      { id: 'geo-ecowas', title: 'ECOWAS', description: 'Objectives, members, benefits.' }
    ]
  }
];

export const GEOGRAPHY_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: GEOGRAPHY**\n**FOCUS:** General revision across Practical, Physical, Human, and Regional Geography.`;

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

  return `${base}
**SUBJECT: GEOGRAPHY**
**FOCUS:** General revision.
`;
};