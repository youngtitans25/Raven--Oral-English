import { StudentProfile } from '../../../types';

export const getIntroInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'commerce-intro') {
    return `${base}
**Topic 1: Commerce**
**Topics/Notes:**  
- Meaning of e-commerce/ e-business  
- Meaning and scope  
- Characteristics  
- Functions  

**Objectives:**  
- Identify the functions of e-commerce/ e-business.  
- Differentiate between Commerce and other related subjects.  
- Describe the characteristics of Commerce.  
- Identify the functions of Commerce.
`;
  }
  return null;
};