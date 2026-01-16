import { StudentProfile } from '../../../types';

export const getStockInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'accounts-stock') {
    return `${base}
**TOPIC: STOCK VALUATION**
**CONTENT:**
- Meaning and purpose of stock valuation.
- Methods of stock valuation e.g., FIFO, LIFO and simple average.
- Advantages and disadvantages of the methods.

**OBJECTIVES:**
- Determine the value of materials issued to production department using FIFO, LIFO and simple average.
- Determine the value of materials at the end of period using FIFO, LIFO and simple average.
- Compare the advantages and disadvantages of each method of stock valuation.
- Determine the effects of stock valuation on elements of income statement.
`;
  }
  return null;
};