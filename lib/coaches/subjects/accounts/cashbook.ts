import { StudentProfile } from '../../../types';

export const getCashbookInstruction = (profile: StudentProfile, topic: string, base: string) => {
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
  return null;
};