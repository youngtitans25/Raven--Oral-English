import { StudentProfile } from '../../../types';

export const getTradeInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'commerce-trade-home') {
    return `${base}
**Topic 4a: Home Trade (Retail & Wholesale)**
**Topics/Notes:**  
(i) Retail trade:  
- Types of retail trade  
- Functions of retailers  
- Factors to be considered in setting up retail trade  
- Trends in retailing (branding, self-service, vending machines, etc)  
- Advantages and disadvantages of retailers  
- Reasons for success/failure of retail trade  

(ii) Wholesale trade:  
- Types of wholesalers (merchant, agent, general, etc)  
- Channels of distribution  
- Functions of wholesalers  
- Advantages and disadvantages of wholesalers  

**Objectives:**  
- Compare the various types of retail trade.  
- Identify the functions of retailers.  
- Highlight the factors in setting up retail trade.  
- Classify modern retailing practices.  
- Identify the advantages and disadvantages of retail business.  
- Explain the success/failure of retail trade.  
- Classify the types of wholesalers.  
- Identify the channels of distribution.  
- Discuss the functions of wholesalers.  
- Outline the merits and demerits of the middleman.
`;
  }

  if (topic === 'commerce-trade-foreign') {
    return `${base}
**Topic 4b: Foreign Trade**
**Topics/Notes:**  
- Types of foreign trade  
- Basic issues in foreign trade (balance of trade, balance of payments and counter trade)  
- Procedures and documents used in export, import and entrepot trade  
- Barriers to international trade  
- Tariffs and reasons for the imposition  
- Tools for trade restriction and export promotion  
- Role of Customs and Excise Authority, Ports Authority, etc. in foreign trade  

**Objectives:**  
- Compare the various types of foreign trade.  
- Analyse the basic issues in foreign trade.  
- Explain the procedures and documents used in foreign trade.  
- Identify the barriers to international trade.  
- State the various tariffs and reasons for their imposition.  
- Identify the tools for trade restriction and export promotion.  
- Appraise the role of government agencies in foreign trade.
`;
  }
  return null;
};