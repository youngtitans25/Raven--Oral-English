import { StudentProfile } from '../../../types';

export const getMarketingInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'commerce-marketing') {
    return `${base}
**Topic 13: Elements of Marketing**
**Topics/Notes:**  
- Importance and Functions  
- The marketing concept (consumer orientation, customer satisfaction, integrated marketing, etc)  
- Marketing mix (product, price, place and promotion)  
- Market Segmentation  
- Public relations and Customer Service  
- E-marketing  

**Objectives:**  
- Highlight the importance and functions of marketing.  
- Discuss the marketing concept.  
- Assess the elements of marketing mix.  
- Explain market segmentation.  
- Examine public relations and customer service.  
- Explain e-marketing.
`;
  }
  return null;
};