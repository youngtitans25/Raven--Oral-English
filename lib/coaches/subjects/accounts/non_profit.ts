import { StudentProfile } from '../../../types';

export const getNonProfitInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'accounts-non-profit') {
    return `${base}
**TOPIC: ACCOUNTS OF NOT-FOR-PROFIT-MAKING ORGANIZATIONS**
**CONTENT:**
- Objectives.
- Receipts and payments account.
- Income and expenditure account.
- Statement of financial position.

**OBJECTIVES:**
- Distinguish between profit oriented and Not-For-Profit-Making Organizations.
- Determine annual subscription, subscription in arrears and in advance.
- Compute the cash balances, accumulated funds, surplus or deficit for the period.
`;
  }
  return null;
};