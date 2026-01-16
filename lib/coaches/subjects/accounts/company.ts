import { StudentProfile } from '../../../types';

export const getCompanyInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'accounts-company') {
    return `${base}
**TOPIC: INTRODUCTION TO COMPANY ACCOUNTS**
**CONTENT:**
- Formation and classification of companies.
- Issue of shares and debentures.
- Final accounts of companies: statement of profit or loss, statement of financial position.
- Accounting ratios.

**OBJECTIVES:**
- Differentiate between types of companies.
- Identify the procedures of treating the issue of shares and debentures.
- Compute the elements of final accounts of companies.
- Compute and interpret Accounting ratios such as current, acid test and stock turnover.
`;
  }
  return null;
};