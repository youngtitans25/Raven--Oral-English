import { StudentProfile } from '../../../types';

export const getSectionLInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phe-family') {
    return `${base}
**TOPIC: FAMILY LIFE EDUCATION**
**CONTENT:**
- Definition of family.
- Types: Nuclear (Monogamous, Polygamous, Single parent, Adoptive) and Extended.
- Characteristics of a happy family (Communication, Love, Respect, Provision).

**OBJECTIVES:**
Candidates should be able to:
i. Define family and explain its types;
ii. State characteristics of a happy family.
`;
  }
  if (topic === 'phe-sexuality') {
    return `${base}
**TOPIC: HUMAN SEXUALITY EDUCATION**
**CONTENT:**
- Meaning and importance.
- Reproductive health rights:
  - Right to number of children.
  - Consent to marry.
  - Gender equality.
  - Privacy.

**OBJECTIVES:**
Candidates should be able to:
i. Explain human sexuality and state its importance;
ii. Highlight reproductive health rights.
`;
  }
  if (topic === 'phe-family-planning') {
    return `${base}
**TOPIC: FAMILY PLANNING**
**CONTENT:**
- Definition and importance.
- Methods: Condom, Pills, Intra-uterine device (IUD), Abstinence (Advantages/Disadvantages).
- Challenges: Pre-marital sex, Extra-marital sex, Widowhood.
- Agencies: School, NGOs, Religious homes.

**OBJECTIVES:**
Candidates should be able to:
i. Define family planning and state importance;
ii. Identify methods and state advantages/disadvantages;
iii. State challenges facing family life in Nigeria;
iv. Identify agencies promoting healthy family living.
`;
  }
  return null;
};