import { StudentProfile } from '../../../types';

export const getJointVentureInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'accounts-joint-venture') {
    return `${base}
**TOPIC: JOINT VENTURE ACCOUNTS**
**CONTENT:**
- Objectives and features.
- Forms of joint ventures.
- Accounting procedures; Memorandum joint venture accounts.

**OBJECTIVES:**
- Identify the objectives and features of joint venture.
- Identify the forms of joint venture.
- Identify the Accounting procedures of joint venture.
- Determine the profit or loss of joint venture.
`;
  }
  return null;
};