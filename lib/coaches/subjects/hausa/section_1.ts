import { StudentProfile } from '../../../types';

export const getSection1Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'hausa-orthography') {
    return `${base}
**TOPIC: KA'IDOJIN RUBUTU (ORTHOGRAPHY)**
**CONTENT:**
- Alphabetization and spelling rules.
- Word merger and division rules.
- Punctuation and paragraphing in standard Hausa.

**OBJECTIVES:**
Candidates should be able to:
i. Recognize and apply basic Hausa orthographical rules;
ii. Identify linguistic errors such as grammar, wrong word choice, and spelling.
`;
  }
  if (topic === 'hausa-comprehension') {
    return `${base}
**TOPIC: AUNA FAHIMTA (COMPREHENSION)**
**CONTENT:**
- Reading and analyzing short unseen passages (approx. 200 words).
- Contextual questions.

**OBJECTIVES:**
Candidates should be able to:
i. Read and comprehend Hausa texts;
ii. Interpret meanings and functions of words;
iii. Recognize central issues and draw conclusions based on evidence.
`;
  }
  if (topic === 'hausa-composition') {
    return `${base}
**TOPIC: TSARIN RUBUTUN INSHA'I (COMPOSITION)**
**CONTENT:**
- Argumentative, descriptive, dialogue, expository, narrative, and letter writing.

**OBJECTIVES:**
Candidates should be able to:
i. Apply techniques of composition writing in Hausa;
ii. Recognize segments and types of Hausa composition.
`;
  }
  return null;
};