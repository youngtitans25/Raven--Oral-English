import { StudentProfile } from '../../../types';

export const getControlInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'accounts-control') {
    return `${base}
**TOPIC: CONTROL ACCOUNTS**
**CONTENT:**
- Meaning and uses of control accounts.
- Purchases ledger control account.
- Sales ledger control account.

**OBJECTIVES:**
- Understand the meaning of control accounts.
- Identify the uses of control accounts in a business enterprise.
- Differentiate between sales ledger control account and purchases ledger control account.
- Identify the entries in control accounts.
`;
  }
  return null;
};