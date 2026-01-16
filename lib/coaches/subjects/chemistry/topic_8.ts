import { StudentProfile } from '../../../types';

export const getTopic8Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-acids-bases-salts') {
    return `${base}
**TOPIC: ACIDS, BASES AND SALTS (GENERAL)**
**CONTENT:**
- General characteristics, properties, and uses of acids, bases, salts.
- Acid/base indicators, basicity of acids.
- Normal, acidic, basic, and double salts (e.g., alums).
- Acid definition: furnishes H₃O⁺ ions or proton donor.
- Naturally occurring organic acids: ethanoic, citric, tartaric.
- Preparation of salts by neutralization, precipitation, action of acids on metals.
- Oxides and trioxocarbonate(IV) salts.

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between the properties of acids and bases.
ii. Identify the different types of acids and bases.
iii. Determine the basicity of acids.
iv. Differentiate between acidity and alkalinity using acid/base indicators.
v. Identify the various methods of preparation of salts.
vi. Classify different types of salts.
`;
  }
  if (topic === 'chem-conductance') {
    return `${base}
**TOPIC: CONDUCTANCE AND DISSOCIATION**
**CONTENT:**
- Qualitative comparison of molar conductances of strong vs. weak acids/bases.
- Relationship between conductance and amount of ions present.

**OBJECTIVES:**
Candidates should be able to:
i. Relate degree of dissociation to strength of acids and bases.
ii. Relate degree of dissociation to conductance.
iii. Perform simple calculations on pH and conductivity.
`;
  }
  if (topic === 'chem-ph') {
    return `${base}
**TOPIC: pH AND BUFFERS**
**CONTENT:**
- pH and pOH scale; simple calculations.
- Significance of pH value in everyday life.
- Buffer solutions.

**OBJECTIVES:**
Candidates should be able to:
i. Enumerate the significance of pH in everyday life.
ii. State applications of Buffer solutions.
`;
  }
  if (topic === 'chem-titration') {
    return `${base}
**TOPIC: TITRATIONS AND HYDROLYSIS**
**CONTENT:**
- Acid/base titrations.
- Hydrolysis of salts (e.g., NH₄Cl, AlCl₃, Na₂CO₃, CH₃COONa).

**OBJECTIVES:**
Candidates should be able to:
i. Identify the appropriate acid-base indicator.
ii. Interpret graphical representation of titration curves.
iii. Perform simple calculations based on the mole concept.
iv. Balance equations for the hydrolysis of salts.
v. Deduce the properties (acidic, basic, neutral) of the resultant solution.
`;
  }
  return null;
};