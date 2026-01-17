import { StudentProfile } from '../../../types';

export const getEvolutionInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'comp-history') {
    return `${base}
**TOPIC: HISTORY OF COMPUTING**
**CONTENT:**
- Early counting devices: Abacus, Slide Rule, Napier's Bones, Pascal Calculator, Leibnitz Multiplier, Jacquard Loom.
- Analytical Engine (Charles Babbage), Hollerith Census machine, Burrough's machine.
- Electronic computers: ENIAC, EDVAC, UNIVAC 1.

**OBJECTIVES:**
Candidates should be able to:
i. Identify various computing devices since the beginning of counting.
ii. Discuss the contributions of founders (Babbage, Pascal, Napier, etc.).
iii. Differentiate between early mechanical and electronic devices.
`;
  }

  if (topic === 'comp-classification') {
    return `${base}
**TOPIC: CLASSIFICATION OF COMPUTING DEVICES**
**CONTENT:**
- Generations: First (Vacuum tubes), Second (Transistors), Third (IC), Fourth/Fifth (Microprocessors/AI).
- Classification by Size: Micro, Mini, Mainframe, Super computers.
- Classification by Data: Analog, Digital, Hybrid.

**OBJECTIVES:**
Candidates should be able to:
i. Relate each generation with its characteristic feature (Technology, Speed, Storage).
ii. Differentiate computers by size and capacity.
iii. State the importance and specific usage of each type (e.g., Mainframes for large orgs, Supercomputers for research).
`;
  }
  return null;
};