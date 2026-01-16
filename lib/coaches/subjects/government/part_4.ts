import { StudentProfile } from '../../../types';

export const getPart4Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'gov-int-orgs') {
    return `${base}
**TOPIC: INTERNATIONAL ORGANIZATIONS**
**OBJECTIVES:**
Candidates should be able to:
i. evaluate the operations of organizations like UNO, OAU/AU, ECOWAS, OPEC, Commonwealth;
ii. assess their role in world affairs and contribution to Nigeria;
iii. appreciate the challenges they face and potential solutions.
`;
  }
  return null;
};