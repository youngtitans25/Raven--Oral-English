import { StudentProfile } from '../../../types';

export const getCommodityInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'commerce-commodity') {
    return `${base}
**Topic 15: Commodity Exchange**
**Topics/Notes:**  
- Meaning  
- Types of tradable commodity (agricultural produce, solid minerals, oil and gas)  
- Requirements for trading (grading system, warehousing, clearing system, standardizing)  
- Methods of trading (open outcry, electronic mechanism)  
- Benefits of commodity exchange  
- Constraints to commodity trading  

**Objectives:**  
- Explain the meaning of commodity exchange.  
- Highlight types of tradable commodity.  
- List the requirements for trading.  
- Discuss methods of trading.  
- Enumerate the benefits of commodity exchange.  
- Analyse the constraints to commodity trading.
`;
  }
  return null;
};