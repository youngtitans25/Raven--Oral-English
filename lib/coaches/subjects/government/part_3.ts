import { StudentProfile } from '../../../types';

export const getPart3Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'gov-foreign-policy-concept') {
    return `${base}
**TOPIC: FOREIGN POLICY**
**OBJECTIVES:**
Candidates should be able to:
i. define foreign policy;
ii. identify and explain its purpose and determining factors;
iii. discuss formulation and implementation.
`;
  }
  if (topic === 'gov-nigeria-foreign-policy') {
    return `${base}
**TOPIC: NIGERIA'S FOREIGN POLICY**
**OBJECTIVES:**
Candidates should be able to:
i. identify major objectives of Nigeria's foreign policy;
ii. analyse Nigeria's non-aligned posture;
iii. evaluate Nigeria's role in Africa (Centre piece policy, NEPAD);
iv. assess relations with major powers and developing countries.
`;
  }
  return null;
};