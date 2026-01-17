import { StudentProfile } from '../../../types';

export const getAssociationsInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'commerce-associations') {
    return `${base}
**Topic 9: Trade Associations**
**Topics/Notes:**  
- Objectives and functions of trade and manufacturer's associations (Cocoa Farmers' Association, Garri Sellers' Association, Poultry Farmers' Association, etc.)  
- Objectives and functions of Chambers of Commerce  
- Forms of business combination/merger  

**Objectives:**  
- Discuss the objectives and functions of trade and manufacturer's associations.  
- List the objectives and functions of Chambers of Commerce.  
- Explain the different forms of business combination/merger.
`;
  }
  return null;
};