import { StudentProfile } from '../../../types';

export const getBusinessUnitsInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'commerce-business-units') {
    return `${base}
**Topic 7: Business Units**
**Topics/Notes:**  
- Forms and features (Sole Proprietorship, Partnership, Limited Liability Companies, Public Corporations, Cooperative Societies, etc.)  
- Registration of businesses  
- Determination of choice of business units  
- Dissolution and liquidation  
- Merits and demerits  
- Reasons for government ownership of public enterprises  

**Objectives:**  
- Identify the forms and features of business units.  
- Analyse the procedures for registering businesses.  
- Examine the factors which determine the choice of business units.  
- Differentiate between dissolution and liquidation of business.  
- State the merits and demerits of business units.  
- State the reasons for government ownership of public enterprises.
`;
  }
  return null;
};