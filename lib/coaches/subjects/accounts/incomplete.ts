import { StudentProfile } from '../../../types';

export const getIncompleteInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'accounts-incomplete') {
    return `${base}
**TOPIC: INCOMPLETE RECORDS AND SINGLE ENTRY**
**CONTENT:**
- Meaning of incomplete records and single entry; Differentiate between incomplete records and single entry.
- Determination of missing figures.
- Preparation of final accounts from incomplete records.
- Conversion of single entry to double entry.

**OBJECTIVES:**
- Understand and differentiate between incomplete records and single entry.
- Determine proprietor's capital using statement of affairs.
- Determine the amount of sales, purchases, cash balances, debtors, creditors and expenses by converting single entry to double entry.
- Use accounting equations, gross and net profit percentages to determine cost of sales, gross and net profits.
`;
  }
  return null;
};