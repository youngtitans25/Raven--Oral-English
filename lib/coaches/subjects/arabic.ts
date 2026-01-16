import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSectionAInstruction } from './arabic/section_a';
import { getSectionBInstruction } from './arabic/section_b';
import { getSectionCInstruction } from './arabic/section_c';
import { getSectionDInstruction } from './arabic/section_d';
import { getSectionEInstruction } from './arabic/section_e';

export const ARABIC_SECTIONS = [
  {
    id: 'arabic-section-a',
    title: 'Section A: Comprehension',
    description: 'Reading comprehension and understanding of Arabic texts.',
    image: 'https://images.unsplash.com/photo-1555431189-0fabf2667795?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'arabic-comprehension', title: 'Comprehension', description: 'Reading passages and answering questions.', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'arabic-section-b',
    title: 'Section B: Translation',
    description: 'Translation skills between Arabic and English, including key words and idiomatic expressions.',
    image: 'https://images.unsplash.com/photo-1589330694653-4a8b243e3d4c?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'arabic-trans-eng-ara', title: 'English to Arabic', description: 'Translating sentences and key phrases into Arabic.', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop' },
      { id: 'arabic-trans-ara-eng', title: 'Arabic to English', description: 'Translating Arabic text into English.', image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1000&auto=format&fit=crop' },
      { id: 'arabic-idioms', title: 'Idiomatic Expressions', description: 'Interpreting idioms in both languages.', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'arabic-section-c',
    title: 'Section C: Grammar',
    description: 'Comprehensive study of Arabic grammar rules (Nahw and Sarf).',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'arabic-pronouns-nouns', title: 'Nouns & Pronouns', description: 'Demonstrative, Relative, Gender, Dual, Plurals.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop' },
        { id: 'arabic-verbs', title: 'Verbs & Tenses', description: 'Perfect, Imperfect, Imperative, Transitive/Intransitive.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop' },
        { id: 'arabic-sentence-structure', title: 'Sentence Structure', description: 'Subject/Predicate, Construct Phrase, Conditional, Active/Passive.', image: 'https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=1000&auto=format&fit=crop' },
        { id: 'arabic-modifiers', title: 'Modifiers (Nawasikh)', description: 'Kana, Inna, Zanna and their associates.', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop' },
        { id: 'arabic-appendants', title: 'Appendants (Tawabi)', description: 'Adjectives, Conjunctions, Permutatives, Emphasis.', image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop' },
        { id: 'arabic-derivatives', title: 'Derivatives', description: 'Participles, Comparative, Nouns of place/time, Hyperbole.', image: 'https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=1000&auto=format&fit=crop' },
        { id: 'arabic-numerals', title: 'Numerals', description: 'Numbers 1-1000 and their rules.', image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop' },
        { id: 'arabic-accusative', title: 'Accusative Nouns', description: 'Direct object, Adverbs, Specification, Vocative.', image: 'https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'arabic-section-d',
    title: 'Section D: Composition',
    description: 'Writing skills on subjects relating to life and environment.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'arabic-composition-themes', title: 'Composition Themes', description: 'Education, culture, health, politics, economy, sports.', image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop' },
        { id: 'arabic-composition-skills', title: 'Writing Skills & Idioms', description: 'Effective communication and use of proverbs.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'arabic-section-e',
    title: 'Section E: Literature',
    description: 'Literary figures, works, and periods including West African contributions.',
    image: 'https://images.unsplash.com/photo-1519682337058-a6fabd63a396?q=80&w=1000&auto=format&fit=crop',
    subModules: [
        { id: 'arabic-lit-intro', title: 'Introduction to Literature', description: 'Essence, Pre-Islamic traditions, Poetry & Prose.', image: 'https://images.unsplash.com/photo-1478737270239-2f02b77ac618?q=80&w=1000&auto=format&fit=crop' },
        { id: 'arabic-lit-modern', title: 'The Modern Period', description: 'Literature from 1978 to date.', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop' },
        { id: 'arabic-lit-west-africa', title: 'Literature in West Africa', description: 'Arabic novels, drama and contributions from West Africa.', image: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=1000&auto=format&fit=crop' }
    ]
  }
];

export const ARABIC_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: ARABIC**\n**FOCUS:** General revision across Translation, Grammar, Composition, and Literature.`;

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
**SUBJECT: ARABIC**
**FOCUS:** General revision.
`;
};