import { StudentProfile } from '../../../types';

export const getTopic5Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-radioactivity') {
    return `${base}
**TOPIC: NUCLEAR CHEMISTRY (RADIOACTIVITY)**
**CONTENT:**
- Radioactivity – types, properties, and detection of radiations.
- Natural and artificial radioactivity.
- Nuclear stability and radioactive decay.
- Nuclear reactions: Nuclear fusion and fission.

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between ordinary chemical reactions and nuclear reactions.
ii. Differentiate between natural and artificial radioactivity.
iii. Compare the properties of the different types of nuclear radiations.
iv. Compute simple calculations on the half-life of a radioactive material.
v. Balance simple nuclear equations.
vi. Identify the various applications of radioactivity.
`;
  }
  return null;
};