import { StudentProfile } from '../../../types';

export const getSectionCInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'arabic-pronouns-nouns') {
    return `${base}
**TOPIC: NOUNS, PRONOUNS AND GENDER**
**DETAILED SYLLABUS CONTENT:**
1. Demonstrative, relative pronouns, conditional and interrogative pronouns.
2. Gender (Masculine and Feminine).
3. Characteristics of noun.
4. Dual.
5. Plurals:
   a. sound masculine plural
   b. sound feminine plural
   c. broken plural
6. Separable and inseparable pronouns.

**OBJECTIVES:**
Candidates should be able to:
i. identify the various forms of demonstrative and relative pronouns;
ii. compare gender markers in Arabic;
iii. distinguish singular, dual, and plural forms.
`;
  }
  if (topic === 'arabic-sentence-structure') {
    return `${base}
**TOPIC: SENTENCE STRUCTURE**
**DETAILED SYLLABUS CONTENT:**
1. Construct phrase.
2. Prepositions.
3. Conditional sentence.
4. Active and passive voice.
5. Subject and predicate.

**OBJECTIVES:**
Candidates should be able to:
i. apply the rules governing conditional sentences, identify, construct and differentiate them in normal sentences;
ii. distinguish between doer and doer-substitute and apply them in sentences;
iii. identify nominal and verbal sentences.
`;
  }
  if (topic === 'arabic-appendants') {
    return `${base}
**TOPIC: APPENDANTS (Tawabi')**
**DETAILED SYLLABUS CONTENT:**
Appendants:
a. adjective.
b. conjunction.
c. the permutative.
d. emphasis.

**OBJECTIVES:**
Candidates should be able to identify and apply these grammatical followers in sentences.
`;
  }
  if (topic === 'arabic-verbs') {
    return `${base}
**TOPIC: VERBS AND TENSES**
**DETAILED SYLLABUS CONTENT:**
1. Transitive & Intransitive verbs.
2. The perfect verb.
3. The imperfect verb:
   a. the indicative.
   b. the subjunctive.
   c. the jussive.
4. The imperative verb.
5. Trilateral and derived verb.
6. Verbal noun.

**OBJECTIVES:**
Candidates should be able to identify verb forms and their grammatical states.
`;
  }
  if (topic === 'arabic-modifiers') {
    return `${base}
**TOPIC: THE MODIFIERS (NAWASIKH)**
**DETAILED SYLLABUS CONTENT:**
The modifiers:
a. Kana and its associates
b. Inna and its associates
c. Zanna and its associates

**OBJECTIVES:**
Candidates should be able to apply changes to the Subject and Predicate when these modifiers enter a nominal sentence.
`;
  }
  if (topic === 'arabic-derivatives') {
    return `${base}
**TOPIC: DERIVATIVES (MUSHTAQQAT)**
**DETAILED SYLLABUS CONTENT:**
Derivatives:
a. active participle.
b. passive participle.
c. comparative/superlative.
d. noun of instrument.
e. nouns of time and place.
f. relative adjective.
g. hyperbole noun.

**OBJECTIVES:**
Candidates should be able to identify and construct these derived nouns.
`;
  }
  if (topic === 'arabic-numerals') {
    return `${base}
**TOPIC: NUMERALS (AL-'ADAD)**
**DETAILED SYLLABUS CONTENT:**
Numeral (1- 1000).

**OBJECTIVES:**
Candidates should be able to:
i. recognise and count Arabic numerals from 1 to 1000 and identify the intricacies involved in their usage.
`;
  }
  if (topic === 'arabic-accusative') {
    return `${base}
**TOPIC: NOUNS IN THE ACCUSATIVE (MANSUBAT)**
**DETAILED SYLLABUS CONTENT:**
Nouns in the accusative:
a. direct object.
b. adverbs of place and time.
c. adverb of circumstance.
d. the exempted with illa.
e. the specification.
f. the vocative.

**OBJECTIVES:**
Candidates should be able to:
i. identify different types of adverbial clause, the exempted, specification and the vocative and use them in standard Arabic.
`;
  }
  return null;
};