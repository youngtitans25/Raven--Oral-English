import { StudentProfile } from '../../../types';

export const getTopic1Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-elements-compounds') {
    return `${base}
**TOPIC: ELEMENTS, COMPOUNDS AND MIXTURES**
**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between elements, compounds and mixtures.
`;
  }
  if (topic === 'chem-chemical-physical-changes') {
    return `${base}
**TOPIC: CHEMICAL AND PHYSICAL CHANGES**
**OBJECTIVES:**
Candidates should be able to:
i. Differentiate between chemical and physical changes.
`;
  }
  if (topic === 'chem-pure-impure') {
    return `${base}
**TOPIC: PURE AND IMPURE SUBSTANCES & PURITY CRITERIA**
**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between pure and impure substances.
ii. Use boiling, density, freezing and melting points as criteria for purity of chemical substances.
`;
  }
  if (topic === 'chem-separation-processes') {
    return `${base}
**TOPIC: SEPARATION PROCESSES**
**SCOPE:**
Evaporation, simple and fractional distillation, sublimation, re-crystallization, paper and column chromatography, simple and fractional crystallization, magnetization, decantation, filtration and centrifugation.

**OBJECTIVES:**
Candidates should be able to:
i. Identify the properties of the components of a mixture.
ii. Specify the principle involved in each separation method.
iii. Apply the basic principle of separation processes in everyday life.
`;
  }
  return null;
};