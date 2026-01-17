import { StudentProfile } from '../../../types';

export const getLegalInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'commerce-legal') {
    return `${base}
**Topic 14: Legal Aspects of Business**
**Topics/Notes:**  
- Meaning and validity of a simple contract  
- Agency, Sale of Goods Act and Hire Purchase Act  
- Contract of employment  
- Government regulations of business (registration of business, patents, trademarks, copyrights, etc)  
- Consumer protection (Government legislation, Standards Organization Trade Descriptions Act, Consumer Protection Council, NAFDAC, NDLEA, Customs and Excise, etc.)  
- Regulatory agencies  

**Objectives:**  
- Analyse the elements and validity of a simple contract.  
- Examine Agency, Sale of Goods Act and Hire Purchase Act.  
- Assess the rights and obligations of employers and employees.  
- Distinguish between patents, trademarks and copyrights.  
- Identify the functions of consumerism.  
- Assess the relevance of regulatory agencies and acts in the provision of safe goods and drugs.
`;
  }
  return null;
};