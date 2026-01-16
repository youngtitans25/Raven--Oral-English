import { StudentProfile } from '../../../types';

export const getDoubleEntryInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'accounts-double-entry') {
    return `${base}
**Topic 2: Principles of Double Entry**
**Topics/Notes:** Source documents; Books of original entry; Accounting equation; Ledger and its classifications; Trial balance; Types and correction of errors; Suspense Account.

**Objectives:**
- Identify various source documents and their uses.
- Relate source documents to the various books of original entry.
- Determine the effect of changes in elements of Accounting equation.
- Understand the role of double entry principles in treating financial transactions.
- Extract a trial balance from ledger accounts.
- Identify various types of errors and their corrections.
- Correct errors using suspense account.
`;
  }
  return null;
};