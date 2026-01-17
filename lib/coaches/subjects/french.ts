import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSection1Instruction } from './french/section_1';
import { getSection2Instruction } from './french/section_2';
import { getSection3Instruction } from './french/section_3';
import { getSection4Instruction } from './french/section_4';
import { getSection5Instruction } from './french/section_5';

export const FRENCH_SECTIONS = [
  {
    id: 'french-section-1',
    title: 'Section 1: Written Comprehension',
    description: 'Reading strategies for general and emergent interest topics.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'french-comprehension', title: 'Comprehension Texts', description: 'Love, Politics, Health, Corruption, etc.', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'french-section-2',
    title: 'Section 2: Principles of Written French',
    description: 'Identification and use of basic form classes (Grammar I).',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'french-nouns', title: 'Nouns (Noms)', description: 'Gender, Number, Simple/Compound.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop' },
      { id: 'french-pronouns', title: 'Pronouns (Pronoms)', description: 'Personal, Demonstrative, Relative, etc.', image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1000&auto=format&fit=crop' },
      { id: 'french-verbs', title: 'Verbs (Verbes)', description: 'Moods, Tenses, Reflexive verbs.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop' },
      { id: 'french-adjectives', title: 'Adjectives', description: 'Qualifying, Possessive, Demonstrative.', image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop' },
      { id: 'french-adverbs', title: 'Adverbs', description: 'Formation, Types (Manner, Time, Place).', image: 'https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=1000&auto=format&fit=crop' },
      { id: 'french-prepositions', title: 'Prepositions', description: 'Simple and Compound.', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop' },
      { id: 'french-conjunctions', title: 'Conjunctions', description: 'Coordination and Subordination.', image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop' },
      { id: 'french-articles', title: 'Articles', description: 'Definite, Indefinite, Partitive.', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop' },
      { id: 'french-vocab', title: 'Vocabulary & Faux Amis', description: 'Contextual usage and false friends.', image: 'https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'french-section-3',
    title: 'Section 3: Language Structures',
    description: 'Word order and basic language processes (Grammar II).',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'french-word-order', title: 'Word Order', description: 'Affirmative, Interrogative, Imperative, Passive.', image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop' },
      { id: 'french-processes', title: 'Basic Processes', description: 'Conjugation, Negation, Agreement, Pluralisation.', image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop' },
      { id: 'french-derivation', title: 'Derivation', description: 'Forming nouns, adverbs, and comparisons.', image: 'https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'french-section-4',
    title: 'Section 4: Expressions & Speech Acts',
    description: 'Proverbs, idioms, and conventional structures.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77ac618?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'french-expressions', title: 'Expressions & Idioms', description: 'Proverbs, idioms, speech acts, figures of speech.', image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'french-section-5',
    title: 'Section 5: Oral French & Culture',
    description: 'Sounds, pronunciation, and Francophone civilization.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'french-sounds', title: 'Oral French (Sounds)', description: 'Discrimination, liaison, syllabification.', image: 'https://images.unsplash.com/photo-1511195325603-9df382b9a786?q=80&w=1000&auto=format&fit=crop' },
      { id: 'french-culture', title: 'Culture & Civilization', description: 'Francophone Africa, France and Nigeria.', image: 'https://images.unsplash.com/photo-1550340499-a6c603072b20?q=80&w=1000&auto=format&fit=crop' }
    ]
  }
];

export const FRENCH_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: FRENCH**\n**FOCUS:** General revision across Written Comprehension, Grammar, Structures, Expressions, and Oral French.`;

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
**SUBJECT: FRENCH**
**FOCUS:** General revision.
`;
};