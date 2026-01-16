import { StudentProfile } from '../../../types';

export const getFinalAccountsInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'accounts-final-accounts') {
    return `${base}
**Topic 6: Final Accounts of a Sole Trader/Proprietor**
**Topics/Notes:** Statement of profit or loss/income statement; Statement of financial position; Adjustments: provision for bad and doubtful debt, provision for discounts, provision for depreciation using straight-line and reducing balance methods, accruals and prepayment.

**Objectives:**
- Determine the cost of sales, gross profit and net profit of a sole trader.
- Identify non-current assets, current assets, long-term liabilities, current liabilities and proprietor's capital.
- Compute adjustable items on the related expenditure and income in the statement of profit or loss.
- Differentiate between bad debts and provision for bad and doubtful debts.
`;
  }
  return null;
};