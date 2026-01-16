import { StudentProfile } from '../../../types';

export const getSectionAInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'arabic-comprehension') {
    return `${base}
**TOPIC: COMPREHENSION (AL-FAHM)**
**DETAILED SYLLABUS CONTENT:**
The section consists of a passage of seventy (70) words. Five multiple-choice questions are to be set on the passage.
The contents should be within the experience of the candidates e.g. current affairs, sports, education, politics, economy, health, culture and ethics.

**OBJECTIVES:**
Candidates should be able to:
i. use appropriate words or phrases for specific thought;
ii. deduce the lesson in the passage;
iii. determine the main theme of the passage;
iv. give an appropriate title to the passage;
v. interpret the meanings of particular words.
`;
  }
  return null;
};