import { StudentProfile } from '../../../types';

export const getDepartmentalInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'accounts-departmental') {
    return `${base}
**TOPIC: DEPARTMENTAL ACCOUNTS**
**CONTENT:**
- Objectives.
- Apportionment of incomes and expenses.
- Departmental statement of profit or loss.
- Inter-departmental transfer.

**OBJECTIVES:**
- Identify the reasons for preparing departmental accounts.
- Determine the expenses and incomes attributable to departments.
- Compute departmental profit or loss.
- Understand the Accounting treatment of interdepartmental transfer.
`;
  }
  return null;
};