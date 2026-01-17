import { StudentProfile } from '../../../types';

export const getProductionInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'commerce-production') {
    return `${base}
**Topic 3: Production**
**Topics/Notes:**  
- Factors, characteristics and rewards (land, labour, capital and entrepreneur)  
- Division of Labour and specialization  
- Types (primary, secondary and tertiary)  
- Relationship between production, specialization and exchange  

**Objectives:**  
- Identify the Factors of Production and their rewards.  
- Distinguish between Division of Labour and Specialization.  
- Classify the types of production.  
- State the relationship between production, specialization and exchange.
`;
  }
  return null;
};