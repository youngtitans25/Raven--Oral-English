import { StudentProfile } from '../../../types';

export const getPart3Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'irs-history-prophet') {
    return `${base}
**TOPIC: PRE-ISLAMIC ARABIA & LIFE OF PROPHET**
**CONTENT:**
- Jahiliyyah practices (Idol worship, Infanticide).
- Prophet's birth, call, Da'wah (Makkah/Madinah).
- Hijrah, Administration of Madinah.
- Battles (Badr, Uhud, Khandaq).
- Treaty of Hudaibiya, Conquest of Makkah, Farewell Pilgrimage.

**OBJECTIVES:**
Candidates should be able to:
i. Account for the Prophet's life and mission;
ii. Analyse major events (Hijrah, Battles, Conquest).
`;
  }
  if (topic === 'irs-caliphs') {
    return `${base}
**TOPIC: THE RIGHTLY GUIDED CALIPHS**
**CONTENT:**
- Lives and contributions of Abu Bakr, Umar, Uthman, Ali.

**OBJECTIVES:**
Candidates should be able to:
i. Trace biographies;
ii. Evaluate contributions to Islam.
`;
  }
  if (topic === 'irs-west-africa') {
    return `${base}
**TOPIC: ISLAM IN WEST AFRICA**
**CONTENT:**
- Early contact (Abyssinia, Egypt).
- Spread agents (Traders, Murabitun, Sufi orders).
- Impact on Empires (Ghana, Mali, Songhai, Borno).
- Economic impact (Timbuktu, Kano).

**OBJECTIVES:**
Candidates should be able to:
i. Evaluate spread of Islam in West Africa;
ii. Analyse impact on sociopolitical/economic life.
`;
  }
  if (topic === 'irs-education') {
    return `${base}
**TOPIC: ISLAM AND EDUCATION**
**CONTENT:**
- Qur'an/Hadith on education.
- Intellectual activities in West Africa (Sankore).
- Scholars: Ahmad Baba, Usman Danfodio.
- Institutions (House of Wisdom, Al-Azhar).
- Contributions of Ibn Sina, Al-Ghazali, Ibn Rushd, Ar-Razi, Ibn Khaldun.

**OBJECTIVES:**
Candidates should be able to:
i. Assess Islam's contribution to education;
ii. Examine lives of great scholars.
`;
  }
  return null;
};