import { StudentProfile } from '../../../types';

export const getSectionIInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phe-disability') {
    return `${base}
**TOPIC: DISABILITY AND SPECIAL NEEDS**
**CONTENT:**
- Meaning and types of disability.
- People with special needs.
- Adapted physical activities.
- Social/Emotional problems.
- Prevention of disability.
- Corrective exercises and rehabilitation.

**OBJECTIVES:**
Candidates should be able to:
i. Define disability and special needs;
ii. Identify types of disability;
iii. Identify adapted physical activities;
iv. State preventive measures and corrective exercises.
`;
  }
  return null;
};