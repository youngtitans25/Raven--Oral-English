import { StudentProfile } from '../../../types';

export const getTopic2Instruction = (profile: StudentProfile, topic: string, base: string) => {
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

  if (topic === 'accounts-cashbook') {
    return `${base}
**Topic 4: Cash Book**
**Topics/Notes:** Columnar Cash Books: single column, double column, three column; Discounts; Petty Cash Book and imprest system.

**Objectives:**
- Determine the cash float.
- Differentiate between two and three columnar cash books and how transactions are recorded in them.
- Differentiate between trade and cash discounts.
- Examine the effects of trade and cash discounts in the books of accounts.
- Identify various petty cash expenses.
`;
  }

  if (topic === 'accounts-bank') {
    return `${base}
**Topic 5: Bank Transactions and Reconciliation Statements**
**Topics/Notes:** Instrument of bank transactions; e-banking system; Causes of discrepancies between cash book and bank statement; Bank reconciliation statement; Adjusted cash book.

**Objectives:**
- Identify various instruments of bank transactions such as cheques, pay-in-slips, credit cards, debit cards, internet banking and their uses.
- Assess the impact of automated credit system, credit transfers, interbank transfers and direct debit on cash balances.
- Identify factors that cause discrepancies between cash book balance and bank statement.
- Determine adjusted cash book balance.
`;
  }

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