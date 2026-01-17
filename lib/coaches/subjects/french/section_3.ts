import { StudentProfile } from '../../../types';

export const getSection3Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'french-word-order') {
    return `${base}
**TOPIC: WORD ORDER**
**CONTENT:**
- Affirmative sentences (SVO).
- Interrogative sentences (Inversion, Est-ce que).
- Imperative sentences (Commands).
- Passive voice formation.

**OBJECTIVES:**
Candidates should be able to:
i. Construct sentences with correct syntax;
ii. Transform sentences from active to passive voice;
iii. Form questions using different structures.
`;
  }
  if (topic === 'french-processes') {
    return `${base}
**TOPIC: BASIC LANGUAGE PROCESSES**
**CONTENT:**
- Conjugation: All tenses (except imperfect/pluperfect subjunctive).
- Negation: ne...pas, ne...plus, ne...rien, nul ne, ne...personne.
- Agreement: Subject-Verb, Noun-Adjective, Past Participle agreement.
- Pluralisation: cheval/chevaux, beau/beaux.

**OBJECTIVES:**
Candidates should be able to:
i. Apply negative structures correctly;
ii. Ensure grammatical agreement in gender and number;
iii. Conjugate verbs in required tenses.
`;
  }
  if (topic === 'french-derivation') {
    return `${base}
**TOPIC: DERIVATION**
**CONTENT:**
- Adjective to Adverb: lent -> lentement.
- Adjective to Adjective: un -> premier.
- Adjective to Noun: bon -> bonté, riche -> richesse.
- Degrees of Comparison: plus...que, moins...que, aussi...que.
- Special forms: bon/meilleur, mauvais/pire.

**OBJECTIVES:**
Candidates should be able to:
i. Form words from other parts of speech;
ii. Make comparisons using correct structures.
`;
  }
  return null;
};