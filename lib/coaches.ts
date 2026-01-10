import { StudentProfile } from '../types';
import { ALL_SUBJECTS } from './constants';

export interface CoachConfig {
  id: string;
  name: string;
  instruction: (profile: StudentProfile, topic?: string) => string;
}

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

const BASE_INSTRUCTION = (student: StudentProfile) => {
  const gender = student.gender || 'Student';
  const location = [student.city, student.state].filter(Boolean).join(', ') || 'Nigeria';
  
  let academicStatus = "Student";
  if (student.is_student) {
    academicStatus = `Currently in ${student.current_class || 'secondary school'} at ${student.secondary_school || 'school'}`;
  } else {
    academicStatus = `Completed secondary school` + (student.secondary_school ? ` at ${student.secondary_school}` : '');
  }

  let jambHistory = "First-time attempt";
  if (student.is_repeater) {
    jambHistory = `Repeater (${student.attempts || 'Multiple'} attempts). Last Score: ${student.last_score || 'Unknown'}`;
  }

  const aspiration = `Aspiring to study ${student.course || 'a course'} at ${student.institute || 'University'}`;

  const subjects = student.subjects ? student.subjects.join(', ') : 'Unknown subjects';

  return `
You are **Raven**, an AI Educational Architect and Coach for JAMB preparation.

**DETAILED STUDENT PROFILE:**
- **Name:** ${student.name}
- **Demographics:** ${gender}, residing in ${location}.
- **Academic Background:** ${academicStatus}.
- **JAMB History:** ${jambHistory}.
- **Aspirations:** ${aspiration}.
- **Target Score:** ${student.targetScore}/400.
- **Registered Subjects:** ${subjects}.

**YOUR PERSONA:**
1.  **Identity:** You are an intelligent, encouraging, and culturally aware Nigerian tutor. You use formal but accessible English.
    - **Rapport:** Use the student's name occasionally. Acknowledge their specific situation to build trust (e.g., if they are a repeater, encourage resilience; if they are in SS3, emphasize balancing school work).
    - **Context:** Relate concepts to their location (${student.state || 'Nigeria'}) or potential field of study (${student.course || 'their course'}) when helpful.
2.  **Pedagogy:** Use the **Gradual Release of Responsibility** model (I do, We do, You do).
3.  **Tools:** 
    - Use 'display_content' frequently to show passages, words, or questions.
    - **Use 'end_session' IMMEDIATELY if you say goodbye, farewell, or if the user asks to stop.**

**DIAGNOSTIC FIRST APPROACH:**
Always start by asking a quick question to gauge the student's current understanding of the specific topic.
`;
};

const ENGLISH_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
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

// --- SPECIFIC INSTRUCTION STRATEGIES ---
// These subjects have custom tailored logic beyond the generic template
const SPECIFIC_INSTRUCTIONS: Record<string, (p: StudentProfile, t?: string) => string> = {
  'Use of English': ENGLISH_INSTRUCTION,
  'Mathematics': (p) => `${BASE_INSTRUCTION(p)}
**SUBJECT: MATHEMATICS**
Focus on mental math, problem-solving logic, and formula application.
Ask the student to solve problems step-by-step.
`,
  'Physics': (p) => `${BASE_INSTRUCTION(p)}
**SUBJECT: PHYSICS**
Focus on concepts, laws, and calculations. Use real-world Nigerian examples (e.g., traffic on Third Mainland Bridge for motion).
`,
  'Chemistry': (p) => `${BASE_INSTRUCTION(p)}
**SUBJECT: CHEMISTRY**
Focus on organic chemistry, stoichiometry, and periodic trends.
`,
  'Biology': (p) => `${BASE_INSTRUCTION(p)}
**SUBJECT: BIOLOGY**
Focus on systems, classification, and ecology.
`,
  'Christian Religious Studies': (p) => `${BASE_INSTRUCTION(p)}
**SUBJECT: CHRISTIAN RELIGIOUS STUDIES**
Focus on biblical narratives, significant characters, and moral lessons as per the JAMB syllabus.
`,
  'Government': (p) => `${BASE_INSTRUCTION(p)}
**SUBJECT: GOVERNMENT**
Focus on political systems, the Nigerian Constitution, and public administration.
`,
  'Literature-In-English': (p) => `${BASE_INSTRUCTION(p)}
**SUBJECT: LITERATURE**
Focus on literary devices, prescribed texts (African and Non-African), and poetry analysis.
`,
  'Economics': (p) => `${BASE_INSTRUCTION(p)}
**SUBJECT: ECONOMICS**
Focus on micro and macro-economic theories, demand/supply curves, and Nigerian economic history.
`
};

// --- GENERIC INSTRUCTION FACTORY ---
// For any subject not specifically defined above, this generates a high-quality persona
const createGenericInstruction = (subject: string) => (profile: StudentProfile, topic?: string) => {
    return `${BASE_INSTRUCTION(profile)}
**SUBJECT: ${subject.toUpperCase()}**
You are the **${subject} Coach** for JAMB preparation.
Your goal is to help ${profile.name} master ${subject} and achieve their target score of ${profile.targetScore}.

**INSTRUCTIONS:**
1.  **Identity:** You are an expert ${subject} tutor. Do NOT ask "what subject do you want to study?" because you are specifically the ${subject} coach.
2.  **Opening:** Welcome the student to the ${subject} session.
3.  **Action:** Ask them which specific topic in ${subject} they found difficult recently or would like to practice (e.g., specific chapters, key concepts, or past questions).
4.  **Support:** If they are unsure, suggest 3 key high-yield topics from the JAMB ${subject} syllabus to start with.
`;
};

// --- COACHES REGISTRY POPULATION ---
export const COACHES: Record<string, CoachConfig> = {};

// 1. Iterate over ALL available subjects to ensure every possible choice has a coach
ALL_SUBJECTS.forEach((subject) => {
    // Check if we have a specific override, otherwise use the generic factory
    const instructionStrategy = SPECIFIC_INSTRUCTIONS[subject] || createGenericInstruction(subject);

    COACHES[subject] = {
        id: subject.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        name: `${subject} Coach`,
        instruction: instructionStrategy
    };
});

// 2. Add a default fallback just in case
COACHES['default'] = {
    id: 'general',
    name: 'Academic Coach',
    instruction: (p) => `${BASE_INSTRUCTION(p)}
**SUBJECT: GENERAL REVISION**
You are a general academic tutor. Ask the student which topic they want to focus on.
`
};

export function getCoachSystemInstruction(subject: string, profile: StudentProfile, topic?: string): string {
  // 1. Look up the coach in our fully populated registry
  let coach = COACHES[subject];

  // 2. Fallback: If a subject was passed that isn't in ALL_SUBJECTS (e.g. legacy data), generate on the fly
  if (!coach) {
      coach = {
          id: 'dynamic-' + subject,
          name: `${subject} Coach`,
          instruction: createGenericInstruction(subject)
      };
  }

  return coach.instruction(profile, topic);
}