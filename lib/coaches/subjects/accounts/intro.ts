import { StudentProfile } from '../../../types';

export const getIntroInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'accounts-intro') {
    return `${base}
**Topic 1: Nature and Significance of Bookkeeping and Accounting**
**Topics/Notes:** Development of Accounting (including branches of accounting); Objectives of Bookkeeping and accounting; Users and characteristics of Accounting information; Principles, concepts and conventions of Accounting (nature, significance and application); Role of Accounting records and information; Career opportunities in Bookkeeping and Accounting.

**Objectives:**
- Differentiate between Bookkeeping and Accounting.
- Understand the historical background of Bookkeeping and Accounting.
- Apply the right principles, concepts and conventions to solving Accounting problems.
- Understand the role of Accounting information in decision making.
- Identify the types/branches of Accounting such as Cost Accounting, Management Accounting, Auditing, Financial Accounting, Forensic Accounting, Social and Environmental Accounting, Government Accounting and Taxation.
- Identify the different career opportunities in Bookkeeping and Accounting.
`;
  }
  return null;
};