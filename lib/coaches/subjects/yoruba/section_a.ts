import { StudentProfile } from '../../../types';

export const getSectionAInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'yoruba-comprehension') {
    return `${base}
**TOPIC: COMPREHENSION (AUNA OYE)**
**CONTENT:**
- Prose (Itan) and Verse (Ewi).
- Identification of central issues and drawing conclusions.
- Determining basic assumptions.
- Meaning and functions of phrases/sentences.

**OBJECTIVES:**
Candidates should be able to:
i. Identify central issues in a passage;
ii. Draw appropriate conclusions;
iii. Identify meanings and functions of phrases/sentences.
`;
  }
  if (topic === 'yoruba-essay') {
    return `${base}
**TOPIC: ESSAY WRITING (AROKO)**
**CONTENT:**
- Types: Argumentative, Descriptive, Narrative, Letter Writing (Formal/Informal).

**OBJECTIVES:**
Candidates should be able to:
i. Identify different types of essay;
ii. Apply techniques associated with each type;
iii. Present ideas in acceptable written form.
`;
  }
  if (topic === 'yoruba-sound-system') {
    return `${base}
**TOPIC: SOUND SYSTEM (IMO IRO)**
**CONTENT:**
- Production of sounds (consonants and vowels).
- Tones and tone change (Ohun ati Iyipada Ohun).
- Syllable structure (Silebu).
- Sound processes (Elision, Deletion, Co-vowel occurrence).

**OBJECTIVES:**
Candidates should be able to:
i. Identify organs of speech and parameters for describing sounds;
ii. Detect linguistic errors (pronunciation/usage);
iii. Determine syllable components;
iv. Demonstrate knowledge of sound relationships.
`;
  }
  if (topic === 'yoruba-grammar') {
    return `${base}
**TOPIC: GRAMMAR (GRAMA)**
**CONTENT:**
- Morphology: Word formation, Loan-word integration.
- Word classes: Noun, Verb, Adjective, Adverb, Pronoun, Conjunction, Preposition.
- Phrases and Clauses.
- Sentences: Types, structures, and functions.

**OBJECTIVES:**
Candidates should be able to:
i. Demonstrate knowledge of word derivation and adoption;
ii. Identify word classes;
iii. Understand Yoruba syntax;
iv. Identify types and functions of sentences.
`;
  }
  return null;
};