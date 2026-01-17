import { StudentProfile } from '../../../types';

export const getPurchaseSaleInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'commerce-purchase-sale') {
    return `${base}
**Topic 5: Purchase and Sale of Goods**
**Topics/Notes:**  
- Procedure and documentation (enquiry, quotation, order, invoice, proforma invoice, statement of accounts, indent, consular invoice, bill of lading, certificate of origin, consignment note, etc.)  
- Terms of trade (trade discount, quantity discount, cash discount, warranties, C.O.D., C.I.F., F.O.B., and E.O.E. etc)  
- Terms of payments  

**Objectives:**  
- Examine the procedures and documents used in the purchase and sale of goods.  
- Determine the terms of trade.  
- Distinguish between cash and credit forms of payment.  
- Explain the meaning and types of credit.  
- Analyse the merits and demerits of credit transactions.  
- Identify the means of payment.
`;
  }
  return null;
};