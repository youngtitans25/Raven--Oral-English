import { StudentProfile } from '../../../types';

export const getSection2Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'french-nouns') {
    return `${base}
**TOPIC: NOUNS (NOMS)**
**CONTENT:**
- Simple and compound nouns.
- Singular and plural forms.
- Masculine and feminine gender.

**OBJECTIVES:**
Candidates should be able to:
i. Identify the gender of nouns;
ii. Form plural of nouns (including irregulars);
iii. Use appropriate nouns in sentences.
`;
  }
  if (topic === 'french-pronouns') {
    return `${base}
**TOPIC: PRONOUNS (PRONOMS)**
**CONTENT:**
- Personal (Sujet, COD, COI, Tonique).
- Impersonal (il faut, il pleut).
- Demonstrative (celui, celle, etc.).
- Possessive (le mien, la tienne, etc.).
- Relative (qui, que, dont, où, lequel).

**OBJECTIVES:**
Candidates should be able to:
i. Replace nouns with appropriate pronouns;
ii. Distinguish between direct and indirect object pronouns;
iii. Use relative pronouns to link sentences.
`;
  }
  if (topic === 'french-verbs') {
    return `${base}
**TOPIC: VERBS (VERBES)**
**CONTENT:**
- Reflexive and non-reflexive verbs.
- Moods: Indicative, Imperative, Subjunctive, Conditional.
- Tenses: Present, Future, Imperfect, Passé Composé, etc.

**OBJECTIVES:**
Candidates should be able to:
i. Conjugate regular and irregular verbs;
ii. Use correct tenses for specific timeframes;
iii. Agree past participles where necessary.
`;
  }
  if (topic === 'french-adjectives') {
    return `${base}
**TOPIC: ADJECTIVES (ADJECTIFS)**
**CONTENT:**
- Qualifying adjectives.
- Possessive adjectives (mon, ma, mes...).
- Interrogative adjectives (quel, quelle...).
- Demonstrative adjectives (ce, cet, cette...).
- Indefinite (nul, plusieurs).
- Numeral (cardinal e.g. dix; ordinal e.g. dixième).

**OBJECTIVES:**
Candidates should be able to:
i. Make adjectives agree with nouns in gender and number;
ii. Place adjectives correctly (before or after nouns).
`;
  }
  if (topic === 'french-adverbs') {
    return `${base}
**TOPIC: ADVERBS (ADVERBES)**
**CONTENT:**
- Formation: with -ment (lentement), preposition + noun (par avion).
- Special forms (bien, vite, mal).
- Types: Manner, Purpose, Cause/Consequence, Concession, Place, Time.

**OBJECTIVES:**
Candidates should be able to:
i. Form adverbs from adjectives;
ii. Use adverbs to modify verbs, adjectives, or other adverbs.
`;
  }
  if (topic === 'french-prepositions') {
    return `${base}
**TOPIC: PREPOSITIONS**
**CONTENT:**
- Simple: à, de, avec, sans, sur, sous, dans.
- Compound: à côté de, au milieu de, face à.

**OBJECTIVES:**
Candidates should be able to:
i. Select the correct preposition for places (à, en, au, aux);
ii. Use prepositions to indicate relationships between words.
`;
  }
  if (topic === 'french-conjunctions') {
    return `${base}
**TOPIC: CONJUNCTIONS**
**CONTENT:**
- Co-ordination: mais, ou, et, donc, car, ni.
- Subordination: afin que, quoique, parce que, si.

**OBJECTIVES:**
Candidates should be able to:
i. Link clauses using appropriate conjunctions;
ii. Use subjunctive after specific conjunctions (bien que, pour que).
`;
  }
  if (topic === 'french-articles') {
    return `${base}
**TOPIC: ARTICLES**
**CONTENT:**
- Definite: le, la, l', les.
- Indefinite: un, une, des.
- Partitive: du, de la, de l', des.
- Contraction: au, aux, du, des.

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between definite, indefinite, and partitive articles;
ii. Apply contractions correctly.
`;
  }
  if (topic === 'french-vocab') {
    return `${base}
**TOPIC: VOCABULARY SPAN**
**CONTENT:**
- Words in contemporary contexts: Meaning, use, opposites, synonyms.
- Faux amis (False friends): e.g. librairie/library, rester/to rest, blesser/to bless.

**OBJECTIVES:**
Candidates should be able to:
i. Identify and use vocabulary in context;
ii. Distinguish false friends to avoid translation errors.
`;
  }
  return null;
};