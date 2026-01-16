import { StudentProfile } from '../../../types';

export const getTopic9Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-redox-concepts') {
    return `${base}
**TOPIC: OXIDATION AND REDUCTION - REDOX**
**CONTENT:**
- Oxidation in terms of the addition of oxygen.
- Reduction as removal of oxygen with the aid of hydrogen.
- Oxidation and reduction in terms of electron transfer.

**OBJECTIVES:**
Candidates should be able to:
i. Identify the various forms of expressing oxidation and reduction.
ii. Classify chemical reactions in terms of oxidation or reduction.
iii. Compute the number of electron transfers in redox reactions.
`;
  }
  if (topic === 'chem-oxidation-numbers') {
    return `${base}
**TOPIC: OXIDATION NUMBERS & IUPAC NOMENCLATURE**
**CONTENT:**
- Use of oxidation numbers (changes in oxidation number for balancing simple equations).
- IUPAC nomenclature of inorganic compounds using oxidation number.

**OBJECTIVES:**
Candidates should be able to:
i. Balance redox reaction equations.
ii. Deduce the oxidation number of chemical species.
iii. Identify the name of redox species in a reaction.
iv. Apply oxidation number in naming inorganic compounds.
`;
  }
  if (topic === 'chem-redox-agents') {
    return `${base}
**TOPIC: OXIDIZING AND REDUCING AGENTS**
**CONTENT:**
- Tests for oxidizing and reducing agents.

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between oxidizing and reducing agents in redox reactions.
ii. Relate reagents to their oxidizing and reducing abilities.
`;
  }
  return null;
};