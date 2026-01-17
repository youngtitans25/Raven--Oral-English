import { StudentProfile } from '../../../types';

export const getStockExchangeInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'commerce-stock-exchange') {
    return `${base}
**Topic 11: Stock Exchange**
**Topics/Notes:**  
- Importance and functions  
- Types of securities (stocks, shares, bonds, debentures, etc)  
- Procedure of transactions and speculations  
- Second-Tier Securities Market (listing requirements, types of companies for the market, advantages and operating regulations of the market)  

**Objectives:**  
- State the importance and functions of the Stock Exchange.  
- Identify the different securities traded on the Stock Exchange.  
- Analyse the procedure of transactions and speculations on the Stock Exchange.  
- Appraise the advantages and operating regulations of the market.
`;
  }
  return null;
};