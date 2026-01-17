import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSectionAInstruction } from './history/section_a';
import { getSectionBInstruction } from './history/section_b';
import { getSectionCInstruction } from './history/section_c';
import { getSectionDInstruction } from './history/section_d';
import { getPart2SectionAInstruction } from './history/part_2_section_a';
import { getPart2SectionBInstruction } from './history/part_2_section_b';
import { getPart2SectionCInstruction } from './history/part_2_section_c';

export const HISTORY_SECTIONS = [
  // --- PART I: THE NIGERIA AREA ---
  {
    id: 'history-section-a',
    title: 'Part I (A): Nigeria Area up to 1800',
    description: 'Land, Peoples, Early Centers, State Formation, and Economy.',
    image: 'https://images.unsplash.com/photo-1599401738722-e42b6b0b005e?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'history-land-peoples', title: 'Land & Peoples', description: 'Geography, environment, and inter-group relations.' },
      { id: 'history-early-centers', title: 'Early Civilization', description: 'Nok, Ife, Benin, Igbo Ukwu, and Monuments.' },
      { id: 'history-state-formation', title: 'State Formation', description: 'Origins of Hausa and Kanuri states.' },
      { id: 'history-economic-activities', title: 'Economy & Growth', description: 'Agriculture, Industries, Trade routes.' },
      { id: 'history-external-influences', title: 'External Influences', description: 'Islam, Trans-Saharan trade, Early European contact.' }
    ]
  },
  {
    id: 'history-section-b',
    title: 'Part I (B): Nigeria Area 1800-1900',
    description: 'The Jihad, Yoruba Wars, European Penetration, and Conquest.',
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'history-sokoto-caliphate', title: 'Sokoto Caliphate', description: 'Jihad causes, administration, and collapse.' },
      { id: 'history-kanem-borno', title: 'Kanem-Borno', description: 'Saifawa dynasty, Shehus, and Rabeh.' },
      { id: 'history-yorubaland', title: 'Yorubaland', description: 'Fall of Oyo, Wars, and 1886 Treaty.' },
      { id: 'history-benin', title: 'Benin Kingdom', description: 'Politics, relations, and European contact.' },
      { id: 'history-nupe', title: 'Nupe Kingdom', description: 'Development and Imperialism.' },
      { id: 'history-igbo', title: 'Igbo Societies', description: 'Internal development and relations.' },
      { id: 'history-efik', title: 'Efik Kingdom', description: 'Politics and relations.' },
      { id: 'history-european-penetration', title: 'European Impact', description: 'Exploration, trade, and missionaries.' },
      { id: 'history-british-conquest', title: 'British Conquest', description: 'Phases, resistance, and aftermath.' }
    ]
  },
  {
    id: 'history-section-c',
    title: 'Part I (C): Nigeria 1900-1960',
    description: 'Colonial Rule, Amalgamation, Economy, and Independence.',
    image: 'https://images.unsplash.com/photo-1532153354457-5fbe1a3bb0b4?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'history-colonial-rule', title: 'Establishment of Rule', description: 'Pacification, resistance, and protectorates.' },
      { id: 'history-amalgamation', title: '1914 Amalgamation', description: 'Reasons and effects.' },
      { id: 'history-colonial-admin', title: 'Colonial Admin', description: 'Indirect Rule, Central admin, Anti-colonialism.' },
      { id: 'history-colonial-economy', title: 'Colonial Economy', description: 'Currency, infrastructure, agriculture, mining.' },
      { id: 'history-social-dev', title: 'Social Development', description: 'Education, urbanization, unions.' },
      { id: 'history-nationalism-independence', title: 'Nationalism & Independence', description: 'Constitutions (1922-1960) and movement.' }
    ]
  },
  {
    id: 'history-section-d',
    title: 'Part I (D): Nigeria Since Independence',
    description: 'Republics, Civil War, Military Regimes, and Int. Relations.',
    image: 'https://images.unsplash.com/photo-1605218427368-25b4274968e7?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'history-first-republic', title: 'First Republic', description: 'Politics, Census, Crisis, 1966 Coup.' },
      { id: 'history-civil-war', title: 'Civil War', description: 'Causes, course, and effects.' },
      { id: 'history-military-regimes-1', title: 'Military Regimes I', description: 'Gowon and Murtala/Obasanjo.' },
      { id: 'history-second-republic', title: 'Second Republic', description: 'Challenges and achievements.' },
      { id: 'history-military-regimes-2', title: 'Military Regimes II', description: 'Buhari and Babangida.' },
      { id: 'history-ing-abacha', title: 'ING & Abacha', description: 'Interim Govt and Abacha Regime.' },
      { id: 'history-fourth-republic', title: 'Fourth Republic', description: 'Transition and Abdulsalami.' },
      { id: 'history-international-orgs', title: 'International Orgs', description: 'ECOWAS, AU, UN, OPEC roles.' }
    ]
  },
  
  // --- PART II: AFRICA AND THE WIDER WORLD ---
  {
    id: 'history-part2-section-a',
    title: 'Part II (A): West & North Africa',
    description: 'Islamic Reforms, Missionaries, and Egypt in 19th Century.',
    image: 'https://images.unsplash.com/photo-1547471080-7541fbe936cc?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'history-part2-islamic-reform', title: 'Islamic Reforms', description: 'Seku Ahmadu, Al-Hajj Umar, Samori Toure.' },
      { id: 'history-part2-sierra-leone-liberia', title: 'Sierra Leone & Liberia', description: 'Foundation and Christian Missionaries.' },
      { id: 'history-part2-egypt', title: 'Egypt (19th Century)', description: 'Mohammed Ali, Khedive Ismail, British Occupation.' }
    ]
  },
  {
    id: 'history-part2-section-b',
    title: 'Part II (B): Horn & Southern Africa',
    description: 'Ethiopia, Mfecane, and The Great Trek.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'history-part2-ethiopia', title: 'Ethiopia (19th Century)', description: 'Theodore II, Menelik II, Independence.' },
      { id: 'history-part2-mfecane', title: 'The Mfecane', description: 'Zulu Nation, Shaka, and consequences.' },
      { id: 'history-part2-great-trek', title: 'The Great Trek', description: 'Frontier wars, British intervention, Trek consequences.' }
    ]
  },
  {
    id: 'history-part2-section-c',
    title: 'Part II (C): Imperialism & Nation Building',
    description: 'Colonial Rule, Decolonization, Apartheid, and Modern Challenges.',
    image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'history-part2-imperialism', title: 'New Imperialism', description: 'Scramble for Africa, Berlin Conference, Resistance.' },
      { id: 'history-part2-colonial-rule', title: 'Patterns of Rule', description: 'British, French, Portuguese, etc.' },
      { id: 'history-part2-decolonization', title: 'Decolonization', description: 'World Wars impact, Nationalism, Independence.' },
      { id: 'history-part2-apartheid', title: 'Apartheid', description: 'South Africa, Laws, Resistance, Dismantling.' },
      { id: 'history-part2-nation-building', title: 'Nation Building', description: 'Political/Economic challenges, Civil wars, Globalization.' }
    ]
  }
];

export const HISTORY_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: HISTORY**\n**FOCUS:** General revision of Nigerian and African History.`;

  // Part I
  const instructionA = getSectionAInstruction(profile, topic, base);
  if (instructionA) return instructionA;

  const instructionB = getSectionBInstruction(profile, topic, base);
  if (instructionB) return instructionB;

  const instructionC = getSectionCInstruction(profile, topic, base);
  if (instructionC) return instructionC;

  const instructionD = getSectionDInstruction(profile, topic, base);
  if (instructionD) return instructionD;

  // Part II
  const instruction2A = getPart2SectionAInstruction(profile, topic, base);
  if (instruction2A) return instruction2A;

  const instruction2B = getPart2SectionBInstruction(profile, topic, base);
  if (instruction2B) return instruction2B;

  const instruction2C = getPart2SectionCInstruction(profile, topic, base);
  if (instruction2C) return instruction2C;

  return `${base}
**SUBJECT: HISTORY**
**FOCUS:** General revision.
`;
};