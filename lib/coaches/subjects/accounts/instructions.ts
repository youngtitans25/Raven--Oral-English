import { StudentProfile } from '../../../types';

export const getAccountsInstruction = (profile: StudentProfile, topic: string, base: string) => {
  switch (topic) {
    case 'accounts-intro':
      return `${base}
**TOPIC: NATURE AND SIGNIFICANCE OF BOOKKEEPING AND ACCOUNTING**
**CONTENT:**
- Development, Objectives, Users of Accounting Information.
- Principles, Concepts, and Conventions.
- Career opportunities.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate between Bookkeeping and Accounting.
ii. Understand the historical background and ethics.
iii. Apply the right principles (Entity, Going Concern, etc.) to solving problems.
iv. Identify careers (Auditing, Taxation, Forensic Accounting, etc.).
`;

    case 'accounts-double-entry':
      return `${base}
**TOPIC: PRINCIPLES OF DOUBLE ENTRY**
**CONTENT:**
- Source documents, Books of original entry.
- Accounting equation, Ledger, Trial Balance.
- Errors and Suspense Account.

**OBJECTIVES:**
Candidates should be able to:
i. Identify source documents (Invoice, Receipt, Voucher) and their uses.
ii. Relate source documents to books of original entry.
iii. Determine the effect of changes in the Accounting Equation (Assets = Capital + Liabilities).
iv. Extract a trial balance and correct errors using a suspense account.
`;

    case 'accounts-ethics':
      return `${base}
**TOPIC: ETHICS, PROFESSIONAL AND REGULATORY BODIES**
**CONTENT:**
- Qualities of an Accountant (Integrity, Transparency).
- Bodies: ICAN, ANAN, FRCN, CAC, IASB.

**OBJECTIVES:**
Candidates should be able to:
i. Understand the ethics required in preparing information.
ii. Discuss the functions of professional and regulatory bodies in Nigeria.
`;

    case 'accounts-cashbook':
      return `${base}
**TOPIC: CASH BOOK**
**CONTENT:**
- Single, Double, Three Column Cash Books.
- Discounts (Trade vs Cash).
- Petty Cash Book and Imprest System.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate between column types and record transactions.
ii. Calculate and treat trade and cash discounts.
iii. Prepare a Petty Cash Book using the imprest system.
`;

    case 'accounts-bank':
      return `${base}
**TOPIC: BANK TRANSACTIONS AND RECONCILIATION**
**CONTENT:**
- Instruments (Cheques, e-banking).
- Causes of discrepancies (Unpresented cheques, Uncredited cheques).
- Bank Reconciliation Statement & Adjusted Cash Book.

**OBJECTIVES:**
Candidates should be able to:
i. Identify bank instruments and e-banking impacts.
ii. Identify causes of differences between Cash Book and Bank Statement.
iii. Prepare an Adjusted Cash Book and Reconciliation Statement.
`;

    case 'accounts-final-accounts':
      return `${base}
**TOPIC: FINAL ACCOUNTS OF A SOLE TRADER**
**CONTENT:**
- Income Statement (Profit or Loss).
- Statement of Financial Position (Balance Sheet).
- Adjustments: Bad debts, Depreciation, Accruals, Prepayments.

**OBJECTIVES:**
Candidates should be able to:
i. Determine Cost of Sales, Gross Profit, and Net Profit.
ii. Classify Assets (Non-current, Current) and Liabilities.
iii. Compute adjustments for depreciation (Straight-line, Reducing balance) and provisions.
`;

    case 'accounts-stock':
      return `${base}
**TOPIC: STOCK VALUATION**
**CONTENT:**
- Methods: FIFO, LIFO, Simple Average.
- Advantages and Disadvantages.

**OBJECTIVES:**
Candidates should be able to:
i. Calculate the value of stock issued and closing stock using FIFO, LIFO, and Average methods.
ii. Determine the effects of valuation methods on profit.
`;

    case 'accounts-control':
      return `${base}
**TOPIC: CONTROL ACCOUNTS**
**CONTENT:**
- Sales Ledger Control Account (Debtors).
- Purchases Ledger Control Account (Creditors).

**OBJECTIVES:**
Candidates should be able to:
i. Explain the purpose of control accounts (checking arithmetic accuracy).
ii. Prepare Sales and Purchases Ledger Control Accounts from given data.
`;

    case 'accounts-incomplete':
      return `${base}
**TOPIC: INCOMPLETE RECORDS AND SINGLE ENTRY**
**CONTENT:**
- Statement of Affairs.
- Conversion of Single Entry to Double Entry.
- Markup and Margin.

**OBJECTIVES:**
Candidates should be able to:
i. Determine capital using Statement of Affairs.
ii. Compute missing figures (Sales, Purchases, Cash) to prepare final accounts.
iii. Use accounting equations and ratios to derive figures.
`;

    case 'accounts-manufacturing':
      return `${base}
**TOPIC: MANUFACTURING ACCOUNTS**
**CONTENT:**
- Cost classification (Prime cost, Factory overheads).
- Work-in-progress.
- Apportionment of costs.

**OBJECTIVES:**
Candidates should be able to:
i. Calculate Prime Cost, Production Cost, and Total Cost.
ii. Prepare a Manufacturing Account.
`;

    case 'accounts-non-profit':
      return `${base}
**TOPIC: ACCOUNTS OF NOT-FOR-PROFIT ORGANIZATIONS**
**CONTENT:**
- Receipts and Payments Account.
- Income and Expenditure Account.
- Subscription accounts.

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between profit and non-profit organizations.
ii. Calculate subscriptions (arrears, advance).
iii. Determine Accumulated Fund and Surplus/Deficit.
`;

    case 'accounts-departmental':
      return `${base}
**TOPIC: DEPARTMENTAL ACCOUNTS**
**CONTENT:**
- Apportionment of expenses.
- Inter-departmental transfers.

**OBJECTIVES:**
Candidates should be able to:
i. Apportion expenses to different departments based on appropriate bases (area, turnover, etc.).
ii. Prepare Departmental Income Statements.
`;

    case 'accounts-branch':
      return `${base}
**TOPIC: BRANCH ACCOUNTS**
**CONTENT:**
- Head Office and Branch relationship.
- Pricing methods.
- Reconciliation.

**OBJECTIVES:**
Candidates should be able to:
i. Understand reasons for branch accounts.
ii. Calculate profit or loss from branches.
iii. Reconcile Branch and Head Office books.
`;

    case 'accounts-joint-venture':
      return `${base}
**TOPIC: JOINT VENTURE ACCOUNTS**
**CONTENT:**
- Features and forms.
- Memorandum Joint Venture Account.

**OBJECTIVES:**
Candidates should be able to:
i. Identify features of a joint venture.
ii. Prepare relevant accounts to determine profit/loss of the venture.
`;

    case 'accounts-partnership':
      return `${base}
**TOPIC: PARTNERSHIP ACCOUNTS**
**CONTENT:**
- Formation, Capital & Current Accounts.
- Appropriation Account.
- Goodwill, Admission, Retirement, Dissolution.

**OBJECTIVES:**
Candidates should be able to:
i. Prepare Partners' Capital and Current Accounts.
ii. Prepare Appropriation Account (Interest on capital, drawings, salaries).
iii. Treat Goodwill on admission/retirement.
iv. Prepare accounts for Dissolution (Realization Account).
`;

    case 'accounts-company':
      return `${base}
**TOPIC: INTRODUCTION TO COMPANY ACCOUNTS**
**CONTENT:**
- Shares and Debentures.
- Final Accounts (Appropriation, Balance Sheet).
- Accounting Ratios (Liquidity, Profitability).

**OBJECTIVES:**
Candidates should be able to:
i. Record the issue of shares.
ii. Prepare detailed company final accounts.
iii. Calculate and interpret ratios (Current ratio, Acid test, Stock turnover).
`;

    case 'accounts-public-sector':
      return `${base}
**TOPIC: PUBLIC SECTOR ACCOUNTING**
**CONTENT:**
- Sources of revenue, Capital/Recurrent expenditure.
- Consolidated Revenue Fund.
- Roles of Accountant General, Auditor General.
- Recent issues: TSA, IPSAS, IPPIS.

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between public and private sector accounting.
ii. Calculate Consolidated Revenue Fund.
iii. Discuss current trends like TSA and IPSAS.
`;

    case 'accounts-it':
      return `${base}
**TOPIC: INFORMATION TECHNOLOGY IN ACCOUNTING**
**CONTENT:**
- Manual vs Computerized systems.
- Digitization, AI, Blockchain, Cloud Accounting.

**OBJECTIVES:**
Candidates should be able to:
i. Compare manual and computerized systems.
ii. Discuss the impact of technology (AI, Blockchain) on modern accounting.
`;

    default:
      return null;
  }
};