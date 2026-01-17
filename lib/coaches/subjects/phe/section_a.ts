import { StudentProfile } from '../../../types';

export const getSectionAInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phe-pe-principles') {
    return `${base}
**TOPIC: PRINCIPLES AND PHILOSOPHY OF PHYSICAL EDUCATION**
**CONTENT:**
- Definition, nature, scope, and objectives of PE.
- Philosophy of the Founding Fathers: Hetherington, Dudley Sergent, Thomas Wood, John Dewey.
- History and Development of PE in:
  - Ancient Greece (Sparta, Athens) and Rome.
  - Nigeria (Pre-colonial, colonial, and post-colonial eras).
- Ancient Greek Festivals: Isthmian, Pythian, Nemia, Olympian.

**OBJECTIVES:**
Candidates should be able to:
i. State the meaning, nature, objectives, and scope of PE;
ii. Narrate the philosophy of the Founding Fathers;
iii. Trace the historical development of PE in ancient Greece, Rome, and Nigeria;
iv. Trace the origin and development of the ancient Greek festivals.
`;
  }
  if (topic === 'phe-he-philosophy') {
    return `${base}
**TOPIC: PHILOSOPHY AND SETTINGS OF HEALTH EDUCATION**
**CONTENT:**
- Meaning, philosophy, and objectives of Health Education.
- Settings of Health Education:
  - Home-based
  - School-based
  - Community-based
  - Health facility-based
  - Workplace-based
- Meaning of Health Promotion.

**OBJECTIVES:**
Candidates should be able to:
i. Define health education;
ii. State the philosophy and objectives of health education;
iii. Differentiate between the meanings of health promotion and health education.
`;
  }
  return null;
};