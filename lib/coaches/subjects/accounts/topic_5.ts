import { StudentProfile } from '../../../types';

export const getTopic5Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'accounts-departmental') {
    return `${base}
**TOPIC: DEPARTMENTAL ACCOUNTS**
**CONTENT:**
- Objectives.
- Apportionment of incomes and expenses.
- Departmental statement of profit or loss.
- Inter-departmental transfer.

**OBJECTIVES:**
Candidates should be able to:
i. Identify the reasons for preparing departmental accounts.
ii. Determine the expenses and incomes attributable to departments.
iii. Compute departmental profit or loss.
iv. Understand the Accounting treatment of interdepartmental transfer.
`;
  }

  if (topic === 'accounts-branch') {
    return `${base}
**TOPIC: BRANCH ACCOUNTS**
**CONTENT:**
- Objectives; Types of branches.
- Pricing methods and accounts maintained by head office.
- Account maintained by a branch.
- Reconciliation of branch and head office books.

**OBJECTIVES:**
Candidates should be able to:
i. Understand the reasons for preparing branch accounts.
ii. Differentiate between types of branches.
iii. Calculate profit or loss from branches.
iv. Reconcile the difference between branch and head office accounts.
`;
  }

  if (topic === 'accounts-joint-venture') {
    return `${base}
**TOPIC: JOINT VENTURE ACCOUNTS**
**CONTENT:**
- Objectives and features.
- Forms of joint ventures.
- Accounting procedures; Memorandum joint venture accounts.

**OBJECTIVES:**
Candidates should be able to:
i. Identify the objectives and features of joint venture.
ii. Identify the forms of joint venture.
iii. Identify the Accounting procedures of joint venture.
iv. Determine the profit or loss of joint venture.
`;
  }

  if (topic === 'accounts-public-sector') {
    return `${base}
**TOPIC: PUBLIC SECTOR ACCOUNTING**
**CONTENT:**
- Accounting basis in public sector; Sources of government revenue.
- Capital and recurrent expenditure; Consolidated Revenue Fund; Statement of assets and liabilities.
- Responsibilities and powers of: The Accountant General, The Auditor General, The Minister of Finance, The Treasurer of Local Government.
- Instruments of financial regulation.
- Current issues in public sector Accounting: Treasury Single Account (TSA), International Public Sector Accounting Standard (IPSAS), Integrated Payroll and Personnel Information System (IPPS).

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate between public and private sector accounting.
ii. Identify the sources of government revenue.
iii. Differentiate between capital and recurrent expenditure.
iv. Calculate consolidated revenue fund and determine the values of assets and liabilities.
v. Identify the duties of the Accountant General, Auditor General, Minister of Finance and Treasurer of Local Government.
vi. Distinguish between elements of control in government accounting procedures e.g. warrant, votes, budget and due process certificate.
vii. Understand current trends in public sector Accounting.
`;
  }
  return null;
};