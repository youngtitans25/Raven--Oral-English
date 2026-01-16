import { StudentProfile } from '../../../types';

export const getSectionEInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'bio-evolution-theories') {
    return `${base}
**TOPIC: THEORIES OF EVOLUTION**
**SCOPE:**
a. Lamarck's theory (Use and Disuse).
b. Darwin's theory (Natural Selection).
c. Organic theory (Sum total of adaptive changes over time).

**OBJECTIVES:**
Candidates should be able to:
i. relate organic evolution as the sum total of all adaptive changes resulting in diversity;
ii. explain the contributions of Lamarck and Darwin to the theory of evolution;
iii. state the evidences in support of organic evolution.
`;
  }

  if (topic === 'bio-evolution-evidence') {
    return `${base}
**TOPIC: EVIDENCE OF EVOLUTION**
**SCOPE:**
- Fossil records.
- Comparative anatomy, physiology, and embryology.
- Modern evolutionary theories (Genetic studies, Role of mutation).

**OBJECTIVES:**
Candidates should be able to:
i. mention the evidences for evolution such as fossil records, comparative anatomy, physiology and embryology;
ii. trace evolutionary trends in plants and animals;
iii. state the evidence of modern evolutionary theories such as genetic studies and the role of mutation.
`;
  }

  return null;
};