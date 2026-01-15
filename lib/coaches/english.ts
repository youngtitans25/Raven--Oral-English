import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from './base';

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

  // --- SECTION A ---
  if (topic === 'english-section-a-lekki-headmaster') {
    return `${base}
**TOPIC: THE LEKKI HEADMASTER (Novel)**
- Focus on characters, the setting, and themes.
- Ask questions about the plot and key events.
- Ask specific questions to test if the student has read the book.
- Discuss moral lessons and character analysis relevant to the JAMB syllabus.
`;
  }
  if (topic === 'english-section-a-comprehension') {
    return `${base}
**TOPIC: COMPREHENSION PASSAGES**
- Use 'display_content' to show a short paragraph (150-200 words).
- Ask the student to identify the **Main Idea**.
- Ask for **Implied Meanings** (Inference).
- Ask for the meaning of specific words based on context.
`;
  }
  if (topic === 'english-section-a-summary') {
    return `${base}
**TOPIC: SUMMARY WRITING**
- Teach synthesis: combining distinct pieces of information.
- Give the student a paragraph and ask them to summarize it in ONE sentence.
- Focus on removing adjectives and examples, keeping only the core point.
`;
  }

  // --- SECTION B ---
  if (topic === 'english-section-b-synonyms') {
    return `${base}
**TOPIC: SYNONYMS**
- Use 'display_content' to show a sentence with a bolded word.
- Ask the student to choose the word nearest in meaning from a list you provide verbally or visually.
- Explain *why* the answer fits the specific context.
`;
  }
  if (topic === 'english-section-b-antonyms') {
    return `${base}
**TOPIC: ANTONYMS**
- Focus on words opposite in meaning.
- Remember: In JAMB, the answer must be the *most direct* opposite in the given context.
`;
  }
  if (topic === 'english-section-b-concord') {
    return `${base}
**TOPIC: CONCORD & AGREEMENT**
- Focus on Subject-Verb agreement.
- tricky cases: "The teacher, as well as the students, _____ (is/are) coming." (Answer: is).
- Test question tags: "He is a boy, _____?" (isn't he?).
`;
  }
  if (topic === 'english-section-b-idioms') {
    return `${base}
**TOPIC: IDIOMS & FIGURATIVE USAGE**
- Focus on Standard British English idioms.
- Example: "To kick the bucket" (To die). "To let the cat out of the bag" (To reveal a secret).
- Use 'display_content' to show an idiom and ask for its interpretation.
`;
  }
  if (topic === 'english-section-b-mechanics') {
    return `${base}
**TOPIC: MECHANICS (SPELLING)**
- Test commonly misspelled words in JAMB (e.g., 'Embarrassment', 'Accommodation', 'Privilege').
- Pronounce a word and ask the student to spell it, or display two spellings and ask which is correct.
`;
  }

  // --- SECTION B ---
  if (topic === 'english-section-b-structure') {
    return `${base}
**TOPIC: SENTENCE STRUCTURE & CLAUSES**
- Focus on identifying phrases and clauses (Noun, Adjectival, Adverbial).
- Teach sentence types: Simple, Compound, Complex, Compound-Complex.
- Analyze grammatical functions of words in sentences.
`;
  }

  // --- SECTION C ---
  if (topic === 'english-section-c-vowels') {
    return `${base}
**TOPIC: VOWEL SOUNDS**
- Focus on distinguishing Monothongs (short vs long vowels) and Diphthongs.
- Example: bit /ɪ/ vs beat /i:/.
- Use 'display_content' to show a word and the phonetic symbol.
- Ask the student to pronounce words to verify they can make the distinction.
`;
  }
  if (topic === 'english-section-c-consonants') {
    return `${base}
**TOPIC: CONSONANT SOUNDS**
- Focus on silent letters (e.g., 'Comb' - b is silent) and clusters.
- Focus on difficult sounds like /θ/ (think) vs /ð/ (this).
`;
  }
  if (topic === 'english-section-c-rhymes') {
    return `${base}
**TOPIC: RHYMES**
- Present a word and ask which option rhymes with it.
- Example: "Plough" rhymes with "Cow", not "Rough".
`;
  }
  if (topic === 'english-section-c-stress') {
    return `${base}
**TOPIC: WORD STRESS**
- Teach the rules for 2-syllable nouns (stress on 1st) vs verbs (stress on 2nd).
- Example: PRE-sent (gift) vs pre-SENT (to give).
- Use 'display_content' to show the word and ask where the stress lies.
`;
  }
  if (topic === 'english-section-c-emphatic') {
    return `${base}
**TOPIC: EMPHATIC STRESS**
- Explain that the word written in CAPITAL letters is the one being emphasized.
- The correct question to an emphatic statement is the one that questions the *emphasized word*.
- Example Statement: "JOHN stole the book." -> Question: "Did Mary steal the book?" (Correct).
`;
  }

  // Generic fallback for the Section parents if selected directly
  if (topic === 'english-section-a') return `${base} **FOCUS:** General overview of Section A (Comprehension & The Lekki Headmaster). Ask the student what specific part they want to practice.`;
  if (topic === 'english-section-b') return `${base} **FOCUS:** General overview of Section B (Lexis & Structure). Ask the student to pick a topic (Synonyms, Idioms, etc.).`;
  if (topic === 'english-section-c') return `${base} **FOCUS:** General overview of Section C (Oral Forms). Ask the student if they want to practice Vowels, Consonants, or Stress.`;

  return `${base} **FOCUS:** General English Revision.`;
};
