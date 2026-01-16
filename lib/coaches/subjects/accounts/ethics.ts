import { StudentProfile } from '../../../types';

export const getEthicsInstruction = (profile: StudentProfile, topic: string, base: string) => {
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
  return null;
};