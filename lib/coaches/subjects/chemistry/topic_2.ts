import { StudentProfile } from '../../../types';

export const getTopic2Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-chemical-laws') {
    return `${base}
**TOPIC: CHEMICAL COMBINATION - LAWS**
**CONTENT:**
- Laws of definite, multiple, and reciprocal proportions.
- Law of conservation of matter.

**OBJECTIVES:**
Candidates should be able to:
i. Deduce the chemical laws from given expressions/statements/data.
`;
  }
  if (topic === 'chem-stoichiometry') {
    return `${base}
**TOPIC: STOICHIOMETRY & MOLE CONCEPT**
**CONTENT:**
- Chemical symbols, formulae, equations and their uses.
- Relative atomic mass based on 12C=12.
- The mole concept.
- Stoichiometry of reactions.

**OBJECTIVES:**
Candidates should be able to:
i. Perform simple calculations involving formulae, equations/chemical composition and the mole concept.
ii. Deduce the stoichiometry of chemical reactions.
`;
  }
  return null;
};