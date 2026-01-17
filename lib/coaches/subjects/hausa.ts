import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSection1Instruction } from './hausa/section_1';
import { getSection2Instruction } from './hausa/section_2';
import { getSection3Instruction } from './hausa/section_3';
import { getSection4Instruction } from './hausa/section_4';
import { getSection5Instruction } from './hausa/section_5';

export const HAUSA_SECTIONS = [
  {
    id: 'hausa-section-1',
    title: 'Section 1: Harshe I (Language Basics)',
    description: 'Orthography, Comprehension, and Composition techniques.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'hausa-orthography', title: "Ka'idojin Rubutu", description: 'Spelling, punctuation, and writing rules.' },
      { id: 'hausa-comprehension', title: 'Auna Fahimta', description: 'Reading comprehension and textual analysis.' },
      { id: 'hausa-composition', title: "Tsarin Rubutun Insha'i", description: 'Essay writing techniques.' }
    ]
  },
  {
    id: 'hausa-section-2',
    title: 'Section 2: Harshe II (Language Structure)',
    description: 'Translation, Phonology, Morphology, and Syntax.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'hausa-translation', title: 'Fassara', description: 'Translation techniques and problems.' },
      { id: 'hausa-phonology', title: 'Tsarin Sauti', description: 'Consonants, vowels, and tone.' },
      { id: 'hausa-morphology', title: 'Kirar Kalma', description: 'Word formation, roots, and affixes.' },
      { id: 'hausa-syntax', title: 'Ginin Jumla', description: 'Sentence structure and grammar.' }
    ]
  },
  {
    id: 'hausa-section-3',
    title: "Section 3: Al'adu I (Culture & Society)",
    description: 'Customs, Social Institutions, and Occupations.',
    image: 'https://images.unsplash.com/photo-1590955559496-503457008569?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'hausa-customs', title: 'Rayuwar Hausawa', description: 'Birth, Marriage, and Death customs.' },
      { id: 'hausa-social', title: 'Zamantakewa', description: 'Family, neighbors, and social relations.' },
      { id: 'hausa-occupations', title: "Sana'o'in Gargajiya", description: 'Traditional farming, crafts, and trades.' },
      { id: 'hausa-material-culture', title: "Kayayyakin Bu'atu", description: 'Housing, food, and clothing.' }
    ]
  },
  {
    id: 'hausa-section-4',
    title: "Section 4: Al'adu II (Traditions & Beliefs)",
    description: 'Festivities, Beliefs, Authority, and Medicine.',
    image: 'https://images.unsplash.com/photo-1547922657-b382d6330ce7?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'hausa-festivities', title: 'Bukukuwa da Wasanni', description: 'Festivals and traditional games.' },
      { id: 'hausa-beliefs', title: 'Camfe-camfe da Bauta', description: 'Traditional beliefs and worship.' },
      { id: 'hausa-authority', title: 'Sarautun Gargajiya', description: 'Traditional rulers and hierarchy.' },
      { id: 'hausa-medicine', title: 'Magungunan Gargajiya', description: 'Traditional healing methods.' }
    ]
  },
  {
    id: 'hausa-section-5',
    title: 'Section 5: Adabi (Literature)',
    description: 'Oral and Written Literature (Prose, Poetry, Drama).',
    image: 'https://images.unsplash.com/photo-1519682337058-a6fabd63a396?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'hausa-oral-lit', title: 'Adabin Baka', description: 'Folktales, proverbs, and songs.' },
      { id: 'hausa-written-prose', title: 'Zube (Prose)', description: 'Analysis of "Maraya".' },
      { id: 'hausa-written-poetry', title: "Wa'ka (Poetry)", description: 'Analysis of "Wako\'in Wayar Da kai".' },
      { id: 'hausa-written-drama', title: 'Wasan Kwaikwayo', description: 'Analysis of "Malam Zalimu".' }
    ]
  }
];

export const HAUSA_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: HAUSA**\n**FOCUS:** General revision across Language (Harshe), Culture (Al'adu), and Literature (Adabi).`;

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
**SUBJECT: HAUSA**
**FOCUS:** General revision.
`;
};