import { StudentProfile } from '../../../types';

export const getPublicSectorInstruction = (profile: StudentProfile, topic: string, base: string) => {
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
- Differentiate between public and private sector accounting.
- Identify the sources of government revenue.
- Differentiate between capital and recurrent expenditure.
- Calculate consolidated revenue fund and determine the values of assets and liabilities.
- Identify the duties of the Accountant General, Auditor General, Minister of Finance and Treasurer of Local Government.
- Distinguish between elements of control in government accounting procedures e.g. warrant, votes, budget and due process certificate.
- Understand current trends in public sector Accounting.
`;
  }
  return null;
};