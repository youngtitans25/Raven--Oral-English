import { StudentProfile } from '../../../types';

export const getBankInstruction = (profile: StudentProfile, topic: string, base: string) => {
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
  return null;
};