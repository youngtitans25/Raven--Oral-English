import { StudentProfile } from '../../../types';

export const getPart1Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'irs-quran-revelation') {
    return `${base}
**TOPIC: REVELATION OF THE GLORIOUS QUR'AN**
**CONTENT:**
- Prophet's visits to Cave Hira and reaction to first revelation.
- Modes of revelation (Q.42:51): Inspiration, behind veil, angel.
- Piecemeal revelation (Q.17:106, Q.25:32).
- Names and attributes of the Qur'an.

**OBJECTIVES:**
Candidates should be able to:
i. Analyse the visits to Cave Hira;
ii. Describe the first revelation;
iii. Differentiate modes of revelation;
iv. Explain reasons for piecemeal revelation.
`;
  }
  if (topic === 'irs-quran-preservation') {
    return `${base}
**TOPIC: PRESERVATION & AUTHENTICITY**
**CONTENT:**
- Recording, compilation, standardization.
- Makkan vs Madinan suwar.
- Role of Companions.
- Divine authenticity (Q.4:82) and Uniqueness (Q.17:88).
- Divine preservation (Q.15:9).

**OBJECTIVES:**
Candidates should be able to:
i. Analyse recording/standardization;
ii. Differentiate Makkan/Madinan suwar;
iii. Evaluate authenticity proofs.
`;
  }
  if (topic === 'irs-tafsir-tajwid') {
    return `${base}
**TOPIC: TAFSIR AND TAJWID**
**CONTENT:**
- Tafsir: Development, importance, types.
- Tajwid: Theory and practice.

**OBJECTIVES:**
Candidates should be able to:
i. Trace origin of Tafsir;
ii. Evaluate importance of Tafsir and Tajwid.
`;
  }
  if (topic === 'irs-surahs') {
    return `${base}
**TOPIC: STUDY OF SELECTED SURAHS**
**SCOPE:**
- Al-Fatihah, Al-Adiyat, Al-Qari'ah, At-Takathur, Al-Asr, Al-Humazah, Al-Ma'un, Al-Kawthar, Al-Kafirun.
- Al-A'la, Ad-Duha, Al-Inshirah, At-Tin, Al-Alaq, Al-Qadr, Al-Bayyinah, Al-Zalzalah.
- Ayatul-Kursiyy, Amanar-Rasul, Laqad ja'akum.

**OBJECTIVES:**
Candidates should be able to:
i. Recite with Tajwid;
ii. Translate and deduce lessons.
`;
  }
  if (topic === 'irs-hadith-intro') {
    return `${base}
**TOPIC: INTRODUCTION TO HADITH**
**CONTENT:**
- History of collection.
- Authentication (Isnad, Matn).
- Classification (Sahih, Hassan, Da'if).
- Relationship with Qur'an.
- Six sound collectors (Biographies/Works).
- Imam Malik (Muwatta).

**OBJECTIVES:**
Candidates should be able to:
i. Evaluate history and authentication of Hadith;
ii. Distinguish between Hadith and Qur'an;
iii. Evaluate biographies of collectors.
`;
  }
  if (topic === 'irs-hadith-study') {
    return `${base}
**TOPIC: STUDY OF SELECTED HADITH**
**SCOPE:**
- An-Nawawi's collection: 1, 3, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 18, 19, 21, 22, 25, 27, 34, 41.

**OBJECTIVES:**
Candidates should be able to:
i. Interpret the Arabic text;
ii. Apply lessons to daily life.
`;
  }
  if (topic === 'irs-moral-lessons') {
    return `${base}
**TOPIC: MORAL LESSONS**
**CONTENT:**
- Luqman's admonition.
- Goodness to parents, Honesty.
- Prohibitions (Bribery, Alcohol, Stealing, Drugs, Arrogance).
- Dignity of labour.

**OBJECTIVES:**
Candidates should be able to:
i. Apply teachings to daily life.
`;
  }
  return null;
};