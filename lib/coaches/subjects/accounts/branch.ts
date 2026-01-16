import { StudentProfile } from '../../../types';

export const getBranchInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'accounts-branch') {
    return `${base}
**TOPIC: BRANCH ACCOUNTS**
**CONTENT:**
- Objectives; Types of branches.
- Pricing methods and accounts maintained by head office.
- Account maintained by a branch.
- Reconciliation of branch and head office books.

**OBJECTIVES:**
- Understand the reasons for preparing branch accounts.
- Differentiate between types of branches.
- Calculate profit or loss from branches.
- Reconcile the difference between branch and head office accounts.
`;
  }
  return null;
};