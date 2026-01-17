import { StudentProfile } from '../../../types';

export const getSectionGInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phe-first-aid') {
    return `${base}
**TOPIC: FIRST AID**
**CONTENT:**
- Definition, aims, and principles.
- Qualities of a first aider.
- First aid box contents and uses.
- Common injuries: Cuts, wounds, sprains, strains, dislocation, fracture.
- Special conditions: Bleeding, burns, scalds, shock, poisoning.
- Agencies: St. John's Ambulance, Red Cross.

**OBJECTIVES:**
Candidates should be able to:
i. Define first aid and state principles;
ii. List first aid box contents;
iii. Identify injuries and conditions requiring first aid;
iv. Identify agencies involved.
`;
  }
  if (topic === 'phe-safety-education') {
    return `${base}
**TOPIC: SAFETY EDUCATION**
**CONTENT:**
- Accidents and disasters (types).
- Causes and prevention.
- Disaster relief activities.

**OBJECTIVES:**
Candidates should be able to:
i. Define accident and disaster;
ii. State causes and prevention methods;
iii. Identify disaster relief activities.
`;
  }
  return null;
};