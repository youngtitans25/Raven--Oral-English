import { StudentProfile } from '../../../types';

export const getITInstruction = (profile: StudentProfile, topic: string, base: string) => {
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