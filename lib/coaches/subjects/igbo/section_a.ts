import { StudentProfile } from '../../../types';

export const getSectionAInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'igbo-essay') {
    return `${base}
**TOPIC: EDEMEDE (ESSAY WRITING)**
**CONTENT:**
- Basic principles: Introduction, body, conclusion.
- Types: Narrative (Akwụkwọ akụkọ), Descriptive/Expository (Nkọwa), Argumentative (Mgbagha), Speech making (Ekwumekwu), Letter Writing (Edemede akwụkwọ ozi), Dialogue (Mkparịta ụka).

**OBJECTIVES:**
Candidates should be able to:
i. Identify principles of essay writing;
ii. Use appropriate words/expressions;
iii. Differentiate between essay types and describe their characteristics;
iv. Write creative essays in standard Igbo.
`;
  }
  if (topic === 'igbo-comprehension') {
    return `${base}
**TOPIC: AGHỌTAAZAA (COMPREHENSION)**
**CONTENT:**
- Reading passages for understanding.
- Meanings of words and figurative expressions.

**OBJECTIVES:**
Candidates should be able to:
i. Explain meanings of difficult words;
ii. Answer questions correctly based on the passage;
iii. Differentiate figurative/idiomatic expressions;
iv. Deduce conclusions.
`;
  }
  if (topic === 'igbo-sounds') {
    return `${base}
**TOPIC: ỤDAASỤSỤ (SOUNDS & SOUND PATTERNS)**
**CONTENT:**
- Vowels (Ụdaume) and Consonants (Mgbochiume).
- Syllabic nasals (Ụda imi), Semi-vowels (Myiriụdaume).
- Vowel harmony (Ndakọrịta ụdaume), Assimilation (Olilo), Elision (Ndapụ).
- Tone and tone marking (Ụdaolu na Akara ụdaolu).

**OBJECTIVES:**
Candidates should be able to:
i. Identify vowels, consonants, and syllabic nasals;
ii. Divide words into syllables;
iii. Describe vowel harmony, assimilation, and elision;
iv. Assign tone marks correctly.
`;
  }
  if (topic === 'igbo-orthography') {
    return `${base}
**TOPIC: NSỤPỤPE NA MKPỤRỤEDEMEDE (SPELLING & ORTHOGRAPHY)**
**CONTENT:**
- Spelling rules and word division.
- Standard Igbo Orthography vs English Orthography.

**OBJECTIVES:**
Candidates should be able to:
i. Detect correctly spelled Igbo words;
ii. Determine appropriate word division;
iii. Distinguish Igbo orthography rules.
`;
  }
  if (topic === 'igbo-grammar') {
    return `${base}
**TOPIC: ỤTỌASỤSỤ (GRAMMAR)**
**CONTENT:**
- Parts of speech (Nkejiasụsụ): Noun (Mkpọaha), Verb (Ngwaa), etc.
- Morphemes (Mofim): Free & Bound.
- Structure: Word (Mkpụrụokwu), Phrase (Nkebiokwu), Clause (Nkebiahịrị), Sentence (Ahịrịokwu).

**OBJECTIVES:**
Candidates should be able to:
i. Identify parts of speech and their functions;
ii. Differentiate affixes and morphemes;
iii. Identify simple, compound, and complex sentences.
`;
  }
  if (topic === 'igbo-translation') {
    return `${base}
**TOPIC: NTỤGHARỊ (TRANSLATION)**
**CONTENT:**
- Translating English to Igbo and vice-versa.

**OBJECTIVES:**
Candidates should be able to:
i. Translate effectively maintaining meaning and context;
ii. Communicate effectively in both languages.
`;
  }
  if (topic === 'igbo-derivation') {
    return `${base}
**TOPIC: USORO MMỤBAOKWU (WORD DERIVATION)**
**CONTENT:**
- Coinages, Loans, and Loan-blends.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate between loan and coined words;
ii. Identify loan-blends in Igbo.
`;
  }
  return null;
};