import { StudentProfile } from '../../../types';

export const getTopic6Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-solutions') {
    return `${base}
**TOPIC: TYPES OF SOLUTIONS AND SOLUBILITY CURVES**
**CONTENT:**
- Unsaturated, saturated, and supersaturated solutions.
- Solubility curves and simple deductions (solubility in mol/dm³).
- Simple calculations.

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between the different types of solutions.
ii. Interpret solubility curves.
iii. Calculate the amount of solute that can dissolve in a given amount of solvent at a given temperature.
iv. Deduce that solubility is temperature-dependent.
`;
  }
  if (topic === 'chem-solvents') {
    return `${base}
**TOPIC: SOLVENTS AND APPLICATIONS**
**CONTENT:**
- Solvents for fats, oils, paints, and stain removal.

**OBJECTIVES:**
Candidates should be able to:
i. Relate the nature of solvents to their uses.
`;
  }
  if (topic === 'chem-colloids') {
    return `${base}
**TOPIC: TRUE AND FALSE SOLUTIONS**
**CONTENT:**
- True solutions, suspensions, and colloids: properties and examples.
- Examples: Hammarite lime and water paints (suspensions); fog, milk, blood, aerosol spray, emulsion paints, rubber solution (colloids).

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate among true solutions, suspensions, and colloids.
ii. Compare the properties of a “true” solution and a “false” solution.
iii. Provide typical examples of suspensions and colloids.
`;
  }
  return null;
};