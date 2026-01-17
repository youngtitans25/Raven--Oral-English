import { StudentProfile } from '../../../types';

export const getFinancingInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'commerce-financing') {
    return `${base}
**Topic 8: Financing Business**
**Topics/Notes:**  
- Sources of finance (personal savings, sale of shares and bonds, loans, debentures, mortgage, bank overdraft, ploughing back of profit, credit purchase, leasing, etc.)  
- Types of capital (share capital, capital owned, authorized capital, issued capital, called-up capital, paid-up capital, liquid capital, working capital and owners' equity)  
- Calculation of forms of capital, profits  

**Objectives:**  
- Identify the various ways of financing a business.  
- Discuss the different types of capital.  
- Compute the different forms of capital, profits and turnover.  
- Appraise the problems associated with sourcing finances for business.  
- Assess the role of Bureau de change in an economy.
`;
  }
  return null;
};