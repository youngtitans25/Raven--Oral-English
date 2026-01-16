import { StudentProfile } from '../../../types';

export const getTopic4Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'accounts-manufacturing') {
    return `${base}
**TOPIC: MANUFACTURING ACCOUNTS**
**CONTENT:**
- Purpose of manufacturing account.
- Cost classification; Cost apportionment.
- Preparation of manufacturing account.

**OBJECTIVES:**
Candidates should be able to:
i. Identify the reason for preparing manufacturing account.
ii. Calculate prime cost, overhead cost, production cost and total cost.
iii. Determine the basis of cost apportionment among production, administration, selling and distribution.
`;
  }

  if (topic === 'accounts-non-profit') {
    return `${base}
**TOPIC: ACCOUNTS OF NOT-FOR-PROFIT-MAKING ORGANIZATIONS**
**CONTENT:**
- Objectives.
- Receipts and payments account.
- Income and expenditure account.
- Statement of financial position.

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between profit oriented and Not-For-Profit-Making Organizations.
ii. Determine annual subscription, subscription in arrears and in advance.
iii. Compute the cash balances, accumulated funds, surplus or deficit for the period.
`;
  }

  if (topic === 'accounts-partnership') {
    return `${base}
**TOPIC: PARTNERSHIP ACCOUNTS**
**CONTENT:**
- Formation of partnership.
- Partners current and capital accounts.
- Partnership final accounts: profit or loss account, appropriation account, statement of financial position.
- Treatment of goodwill; Admission/retirement of a partner; Dissolution of partnership.

**OBJECTIVES:**
Candidates should be able to:
i. Understand the procedures for the formation of partnership.
ii. Identify the accounts maintained for partnership business.
iii. Determine the effects of admission and retirement of a partner.
iv. Determine profit or loss on revaluation of assets.
v. Determine the partners' share of profit or loss on dissolution.
`;
  }

  if (topic === 'accounts-company') {
    return `${base}
**TOPIC: INTRODUCTION TO COMPANY ACCOUNTS**
**CONTENT:**
- Formation and classification of companies.
- Issue of shares and debentures.
- Final accounts of companies: statement of profit or loss, statement of financial position.
- Accounting ratios.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate between types of companies.
ii. Identify the procedures of treating the issue of shares and debentures.
iii. Compute the elements of final accounts of companies.
iv. Compute and interpret Accounting ratios such as current, acid test and stock turnover.
`;
  }
  return null;
};