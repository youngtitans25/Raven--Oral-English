import { StudentProfile } from '../../../types';

export const getOccupationInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'commerce-occupation') {
    return `${base}
**Topic 2: Occupation**
**Topics/Notes:**  
- Meaning and importance  
- Types (industrial, commercial and services)  
- Factors that determine choice of occupation  

**Objectives:**  
- State the importance of occupation.  
- Compare the different types of occupation.  
- Identify the factors determining the choice of occupation.
`;
  }
  return null;
};