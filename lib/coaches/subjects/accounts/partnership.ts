import { StudentProfile } from '../../../types';

export const getPartnershipInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'accounts-partnership') {
    return `${base}
**TOPIC: PARTNERSHIP ACCOUNTS**
**CONTENT:**
- Formation of partnership.
- Partners current and capital accounts.
- Partnership final accounts: profit or loss account, appropriation account, statement of financial position.
- Treatment of goodwill; Admission/retirement of a partner; Dissolution of partnership.

**OBJECTIVES:**
- Understand the procedures for the formation of partnership.
- Identify the accounts maintained for partnership business.
- Determine the effects of admission and retirement of a partner.
- Determine profit or loss on revaluation of assets.
- Determine the partners' share of profit or loss on dissolution.
`;
  }
  return null;
};