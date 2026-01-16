import { StudentProfile } from '../../../types';

export const getSectionBInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'arabic-trans-eng-ara') {
    return `${base}
**TOPIC: TRANSLATION (ENGLISH TO ARABIC)**
**OBJECTIVES:**
Candidates should be able to:
i. use an appropriate Arabic word or phrase to convey the meaning of an English word or phrase;
ii. transfer ideas expressed in English to Arabic;
iii. communicate effectively in Arabic using standard usages.
`;
  }
  if (topic === 'arabic-trans-ara-eng') {
    return `${base}
**TOPIC: TRANSLATION (ARABIC TO ENGLISH)**
**OBJECTIVES:**
Candidates should be able to:
i. determine an appropriate English word or phrase for an Arabic statement;
ii. transfer ideas expressed in Arabic to English;
iii. identify key words and phrases in sentences.
`;
  }
  if (topic === 'arabic-idioms') {
    return `${base}
**TOPIC: IDIOMATIC EXPRESSIONS**
**OBJECTIVES:**
Candidates should be able to:
i. interpret idiomatic expressions in both Arabic and English;
ii. understand the cultural context of specific idioms;
iii. use idioms correctly in translation.
`;
  }
  return null;
};