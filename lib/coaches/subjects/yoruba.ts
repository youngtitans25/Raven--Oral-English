import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSectionAInstruction } from './yoruba/section_a';
import { getSectionBInstruction } from './yoruba/section_b';
import { getSectionCInstruction } from './yoruba/section_c';

export const YORUBA_SECTIONS = [
  {
    id: 'yoruba-section-a',
    title: 'Section A: Ede (Language)',
    description: 'Comprehension, Essay, Sound System, and Grammar.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'yoruba-comprehension', title: 'Auna Oye (Comprehension)', description: 'Prose and Verse comprehension.' },
      { id: 'yoruba-essay', title: 'Aroko (Essay Writing)', description: 'Narrative, Descriptive, Argumentative, Letters.' },
      { id: 'yoruba-sound-system', title: 'Imo Iro (Sound System)', description: 'Sounds, Tones, Syllables.' },
      { id: 'yoruba-grammar', title: 'Grama (Grammar)', description: 'Word classes, Syntax, Morphology.' }
    ]
  },
  {
    id: 'yoruba-section-b',
    title: 'Section B: Agumagu (Literature)',
    description: 'Oral and Written Literature (Prose, Poetry, Drama).',
    image: 'https://images.unsplash.com/photo-1519682337058-a6fabd63a396?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'yoruba-oral-lit', title: 'Agumagu Alohun (Oral Lit)', description: 'Alo Ijapa, Eegun Alare.' },
      { id: 'yoruba-written-lit', title: 'Agumagu Apileko (Written Lit)', description: 'Ogun Omode, Ade Abinibi, Oye.' }
    ]
  },
  {
    id: 'yoruba-section-c',
    title: 'Section C: Asa (Culture)',
    description: 'Beliefs, Governance, Customs, and Vocations.',
    image: 'https://images.unsplash.com/photo-1590955559496-503457008569?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'yoruba-beliefs', title: 'Ero ati Igbabo (Beliefs)', description: 'Deities, Supernatural beings.' },
      { id: 'yoruba-governance', title: 'Eto Iselu (Governance)', description: 'Chieftaincy, Peace-keeping.' },
      { id: 'yoruba-burial', title: 'Eto Isinku (Burial)', description: 'Funeral rites, Inheritance.' },
      { id: 'yoruba-numerals', title: 'Oka Yoruba (Numerals)', description: 'Counting 1-20,000.' },
      { id: 'yoruba-marriage', title: 'Eto Igbeyawo (Marriage)', description: 'Marriage and Naming ceremonies.' },
      { id: 'yoruba-health', title: 'Eto Iwosan (Health)', description: 'Traditional healthcare.' },
      { id: 'yoruba-games', title: 'Ere Idaraya (Games)', description: 'Traditional games (Ayo, etc.).' },
      { id: 'yoruba-vocations', title: 'Ise Abinibi (Vocations)', description: 'Traditional professions and Food.' },
      { id: 'yoruba-ethics', title: 'Eko Ile (Ethics)', description: 'Character and behaviour.' }
    ]
  }
];

export const YORUBA_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: YORUBA**\n**FOCUS:** General revision across Language (Ede), Literature (Agumagu), and Culture (Asa).`;

  const instructionA = getSectionAInstruction(profile, topic, base);
  if (instructionA) return instructionA;

  const instructionB = getSectionBInstruction(profile, topic, base);
  if (instructionB) return instructionB;

  const instructionC = getSectionCInstruction(profile, topic, base);
  if (instructionC) return instructionC;

  return `${base}
**SUBJECT: YORUBA**
**FOCUS:** General revision.
`;
};