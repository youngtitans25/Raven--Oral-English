import { StudentProfile } from '../../../types';

export const getTopic3Instruction = (profile: StudentProfile, topic: string, base: string) => {
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

  if (topic === 'accounts-stock') {
    return `${base}
**TOPIC: STOCK VALUATION**
**CONTENT:**
- Meaning and purpose of stock valuation.
- Methods of stock valuation e.g., FIFO, LIFO and simple average.
- Advantages and disadvantages of the methods.

**OBJECTIVES:**
- Determine the value of materials issued to production department using FIFO, LIFO and simple average.
- Determine the value of materials at the end of period using FIFO, LIFO and simple average.
- Compare the advantages and disadvantages of each method of stock valuation.
- Determine the effects of stock valuation on elements of income statement.
`;
  }

  if (topic === 'accounts-incomplete') {
    return `${base}
**TOPIC: INCOMPLETE RECORDS AND SINGLE ENTRY**
**CONTENT:**
- Meaning of incomplete records and single entry; Differentiate between incomplete records and single entry.
- Determination of missing figures.
- Preparation of final accounts from incomplete records.
- Conversion of single entry to double entry.

**OBJECTIVES:**
- Understand and differentiate between incomplete records and single entry.
- Determine proprietor's capital using statement of affairs.
- Determine the amount of sales, purchases, cash balances, debtors, creditors and expenses by converting single entry to double entry.
- Use accounting equations, gross and net profit percentages to determine cost of sales, gross and net profits.
`;
  }
  return null;
};