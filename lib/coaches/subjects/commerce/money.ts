import { StudentProfile } from '../../../types';

export const getMoneyInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'commerce-money') {
    return `${base}
**Topic 10: Money**
**Topics/Notes:**  
- Evolution  
- Forms and qualities  
- Functions  

**Objectives:**  
- Discuss the origin of money.  
- Analyse the forms and qualities of money.  
- Appraise the functions of money.
`;
  }
  return null;
};