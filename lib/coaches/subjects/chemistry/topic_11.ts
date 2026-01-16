import { StudentProfile } from '../../../types';

export const getTopic11Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-energy-changes') {
    return `${base}
**TOPIC: ENERGY CHANGES IN REACTIONS**
**CONTENT:**
- Energy changes (ΔH) accompanying physical and chemical changes.
- Dissociation of substances in or reaction with water (e.g., Na, NaOH, K, NH₄Cl).
- Endothermic (+ΔH) and exothermic (-ΔH) reactions.

**OBJECTIVES:**
Candidates should be able to:
i. Determine the types of heat changes (ΔH) in physical and chemical processes.
ii. Interpret graphical representations of heat changes.
`;
  }
  if (topic === 'chem-entropy') {
    return `${base}
**TOPIC: ENTROPY**
**CONTENT:**
- Entropy as an order-disorder phenomenon.
- Simple illustrations: mixing of gases, dissolution of salts.

**OBJECTIVES:**
Candidates should be able to:
i. Relate the physical state of a substance to the degree of orderliness.
`;
  }
  if (topic === 'chem-spontaneity') {
    return `${base}
**TOPIC: SPONTANEITY OF REACTIONS**
**CONTENT:**
- ΔG = 0 as a criterion for equilibrium.
- ΔG > 0 (non-spontaneity) and ΔG < 0 (spontaneity) as criteria.

**OBJECTIVES:**
Candidates should be able to:
i. Determine the conditions for spontaneity of a reaction.
ii. Relate ΔH, ΔS, and ΔG as the driving forces for chemical reactions.
iii. Solve simple problems based on the relationship ΔG = ΔH - TΔS.
`;
  }
  return null;
};