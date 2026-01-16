import { StudentProfile } from '../../../types';

export const getTopic1Instruction = (profile: StudentProfile, topic: string, base: string) => {
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
  
  if (topic === 'accounts-ethics') {
    return `${base}
**Topic 3: Ethics, Professional and Regulatory Bodies in Accounting**
**Topics/Notes:** Objectives; Qualities of an Accountant; Accounting professional bodies in Nigeria; Accounting regulatory bodies.

**Objectives:**
- Understand the ethics required in preparing and presenting Accounting information.
- Understand qualities of an Accountant such as honesty, integrity, transparency, accountability and fairness.
- Understand the purpose and functions of Accounting professional bodies in Nigeria.
- Understand the purpose and functions of Accounting regulatory bodies in Nigeria e.g. Financial Reporting Council of Nigeria (FRCN), Corporate Affairs Commission (CAC) and International Accounting Standard Board (IASB).
`;
  }

  if (topic === 'accounts-it') {
    return `${base}
**TOPIC: INFORMATION TECHNOLOGY IN ACCOUNTING**
**CONTENT:**
- Manual and computerized Accounting processing system.
- Procedures involved in data processing.
- Digitization and digital technologies in Accounting: machine learning, artificial intelligence (AI), data analytics, special accounting software, mobile accounting.
- Block chain technology in Accounting system.
- Virtual Accounting.

**OBJECTIVES:**
- Differentiate between manual and computerized Accounting processing system.
- Identify the procedures involved in data processing.
- Identify the digital technologies use in Accounting processing system.
- Understand the benefits of block chain technology in Accounting system.
- Identify the services provided by virtual accountants.
`;
  }
  return null;
};