import { StudentProfile } from '../../../types';

export const getSectionBInstruction = (profile: StudentProfile, topic: string, base: string) => {
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
  if (topic === 'english-section-b-structure') {
    return `${base}
**TOPIC: SENTENCE STRUCTURE & CLAUSES**
- Focus on identifying phrases and clauses (Noun, Adjectival, Adverbial).
- Teach sentence types: Simple, Compound, Complex, Compound-Complex.
- Analyze grammatical functions of words in sentences.
`;
  }
  return null;
};