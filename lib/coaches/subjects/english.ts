import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSectionAInstruction } from './english/section_a';
import { getSectionBInstruction } from './english/section_b';
import { getSectionCInstruction } from './english/section_c';

export const ENGLISH_SECTIONS = [
  {
    id: 'english-section-a',
    title: 'Section A: Comprehension & Summary',
    description: 'Master reading techniques, The Lekki Headmaster, and summary writing.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      {
        id: 'english-section-a-lekki-headmaster',
        title: 'The Lekki Headmaster',
        description: 'Comprehensive analysis of the novel: Characters, Plot, and Themes.',
        image: '/lekki-headmaster.png'
      },
      {
        id: 'english-section-a-comprehension',
        title: 'Comprehension Passages',
        description: 'Practice finding main ideas, implied meanings, and identifying mood/attitude in passages.',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'english-section-a-summary',
        title: 'Summary Writing',
        description: 'Learn to synthesize ideas and remove fluff to create concise summaries.',
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'english-section-b',
    title: 'Section B: Lexis & Structure',
    description: 'Grammar mechanics, vocabulary, and sentence structure mastery.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      {
        id: 'english-section-b-synonyms',
        title: 'Synonyms',
        description: 'Identify words with similar meanings in context.',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'english-section-b-antonyms',
        title: 'Antonyms',
        description: 'Determine opposite meanings of words in sentences.',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'english-section-b-concord',
        title: 'Concord & Agreement',
        description: 'Master Subject-Verb agreement, mood, tense, and aspect.',
        image: 'https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'english-section-b-idioms',
        title: 'Idioms & Figurative Usage',
        description: 'Decode Standard British English idioms and figurative expressions.',
        image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'english-section-b-mechanics',
        title: 'Mechanics (Spelling)',
        description: 'Differentiate between correct and incorrect spellings.',
        image: 'https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'english-section-b-structure',
        title: 'Sentence Patterns & Clauses',
        description: 'Understand clauses, sentence types, and word classes.',
        image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'english-section-c',
    title: 'Section C: Oral Forms',
    description: 'Pronunciation, stress patterns, and phonetic mastery.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77ac618?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      {
        id: 'english-section-c-vowels',
        title: 'Vowels',
        description: 'Distinguish between Monothongs, Diphthongs, and Triphthongs.',
        image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'english-section-c-consonants',
        title: 'Consonants & Clusters',
        description: 'Master consonant sounds and clusters.',
        image: 'https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'english-section-c-rhymes',
        title: 'Rhymes & Homophones',
        description: 'Identify words that rhyme and words that sound alike.',
        image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'english-section-c-stress',
        title: 'Word Stress',
        description: 'Identify primary stress in monosyllabic and polysyllabic words.',
        image: 'https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'english-section-c-emphatic',
        title: 'Emphatic Stress',
        description: 'Understand stress placement for emphasis in sentences.',
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  }
];

export const ENGLISH_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);
  
  if (!topic) return `${base} **FOCUS:** General English Revision. Ask the student which section they would like to focus on.`;

  // Delegate to modular instruction handlers
  const instructionA = getSectionAInstruction(profile, topic, base);
  if (instructionA) return instructionA;

  const instructionB = getSectionBInstruction(profile, topic, base);
  if (instructionB) return instructionB;

  const instructionC = getSectionCInstruction(profile, topic, base);
  if (instructionC) return instructionC;

  // Generic fallback for Section parents if selected directly
  if (topic === 'english-section-a') return `${base} **FOCUS:** General overview of Section A (Comprehension & The Lekki Headmaster). Ask the student what specific part they want to practice.`;
  if (topic === 'english-section-b') return `${base} **FOCUS:** General overview of Section B (Lexis & Structure). Ask the student to pick a topic (Synonyms, Idioms, etc.).`;
  if (topic === 'english-section-c') return `${base} **FOCUS:** General overview of Section C (Oral Forms). Ask the student if they want to practice Vowels, Consonants, or Stress.`;

  return `${base} **FOCUS:** General English Revision.`;
};