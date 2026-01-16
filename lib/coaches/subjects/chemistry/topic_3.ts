import { StudentProfile } from '../../../types';

export const getTopic3Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-kinetic-theory') {
    return `${base}
**TOPIC: PHENOMENA SUPPORTING KINETIC THEORY**
**CONTENT:**
- Melting, vaporization, boiling, freezing, condensation in terms of molecular motion and Brownian movement.

**OBJECTIVES:**
Candidates should be able to:
i. Apply the theory to distinguish between solids, liquids and gases.
ii. Deduce reasons for change of state.
iii. Draw inferences based on molecular motion.
`;
  }
  if (topic === 'chem-gas-laws') {
    return `${base}
**TOPIC: GAS LAWS AND EQUATIONS**
**CONTENT:**
- Laws of Boyle, Charles, Avogadro, Gay-Lussac, Graham, Dalton (law of partial pressure).
- Molar volume and atomicity of gases.
- Ideal gas equation PV=nRT.
- Relationship between vapour density and relative molecular mass.
- Ideal and real gases.

**OBJECTIVES:**
Candidates should be able to:
i. Deduce gas laws from given expressions/statements.
ii. Interpret graphical representations related to these laws.
iii. Perform simple calculations based on these laws, equations and relationships.
iv. State factors responsible for the deviation of real gases from ideal situation.
`;
  }
  return null;
};