import { StudentProfile } from '../../../types';

export const getTopic17Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-industries') {
    return `${base}
**TOPIC: CHEMISTRY AND INDUSTRY**
**CONTENT:**
- Chemical industries: Types, raw materials, and relevance.
- Distinction between fine and heavy chemicals.
- Biotechnology in industrial processes.

**OBJECTIVES:**
Candidates should be able to:
i. Classify chemical industries in terms of products.
ii. Identify raw materials for each industry.
iii. Distinguish between fine and heavy chemicals.
iv. Enumerate the relevance of each of these industries.
v. Relate industrial processes to biotechnology.
`;
  }
  return null;
};