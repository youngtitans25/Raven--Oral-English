import { StudentProfile } from '../../../types';

export const getSection2Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'hausa-translation') {
    return `${base}
**TOPIC: FASSARA (TRANSLATION)**
**CONTENT:**
- Types, rules, problems, and techniques of translation.

**OBJECTIVES:**
Candidates should be able to:
i. Translate proverbial/idiomatic expressions and new words from English to Hausa;
ii. Identify translation types and problems;
iii. Apply basic translation techniques.
`;
  }
  if (topic === 'hausa-phonology') {
    return `${base}
**TOPIC: TSARIN SAUTI (PHONOLOGY)**
**CONTENT:**
- Consonants (Phonation, place/manner of articulation).
- Vowels (Tongue/lip position, monophthongs, diphthongs).
- Tone (High, Low, Falling).
- Syllable structure (Open/Close, Light/Heavy).
- Phonological processes (Palatalization, Labialization, Vowel harmony, Insertion, Deletion).

**OBJECTIVES:**
Candidates should be able to:
i. Analyze sound production and combination;
ii. Distinguish phonetic attributes;
iii. Analyze phonological processes in Hausa.
`;
  }
  if (topic === 'hausa-morphology') {
    return `${base}
**TOPIC: KIRAR KALMA (MORPHOLOGY)**
**CONTENT:**
- Roots and stems.
- Affixation (Prefix, Infix, Suffix) - Derivational & Inflectional.
- Gender and number inflections.
- Derivation of nouns/adjectives from verbs and vice versa.

**OBJECTIVES:**
Candidates should be able to:
i. Explain roots, stems, and inflectional/derivational processes;
ii. Differentiate between morphological processes.
`;
  }
  if (topic === 'hausa-syntax') {
    return `${base}
**TOPIC: GININ JUMLA (SYNTAX)**
**CONTENT:**
- Word classes (Nouns, Pronouns, Verbs, Adverbs, etc.).
- Sentence structure types (Nominal/Verbal phrases).
- Tenses, Gender, and Number usage.

**OBJECTIVES:**
Candidates should be able to:
i. Detect grammatical errors;
ii. Construct grammatical sentences;
iii. Distinguish between phrase and sentence types;
iv. Analyze mechanisms of generating meaning.
`;
  }
  return null;
};