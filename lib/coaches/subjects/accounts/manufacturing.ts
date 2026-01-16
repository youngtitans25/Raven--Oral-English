import { StudentProfile } from '../../../types';

export const getManufacturingInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'accounts-manufacturing') {
    return `${base}
**TOPIC: MANUFACTURING ACCOUNTS**
**CONTENT:**
- Purpose of manufacturing account.
- Cost classification; Cost apportionment.
- Preparation of manufacturing account.

**OBJECTIVES:**
- Identify the reason for preparing manufacturing account.
- Calculate prime cost, overhead cost, production cost and total cost.
- Determine the basis of cost apportionment among production, administration, selling and distribution.
`;
  }
  return null;
};