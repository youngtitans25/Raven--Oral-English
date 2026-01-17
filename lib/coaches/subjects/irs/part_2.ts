import { StudentProfile } from '../../../types';

export const getPart2Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'irs-faith-tawhid') {
    return `${base}
**TOPIC: FAITH (TAWHID)**
**CONTENT:**
- Importance of Tawhid.
- Kalimatush-Shahadah.
- Oneness of Allah (Q.112), Servanthood/Universality of Prophet.
- Shirk (Idol/Ancestral worship, Trinity, Atheism).
- Incompatible practices (Superstition, Magic, Cults).

**OBJECTIVES:**
Candidates should be able to:
i. Analyse Tawhid concepts;
ii. Identify verses on Oneness;
iii. Identify and shun Shirk actions.
`;
  }
  if (topic === 'irs-articles-faith') {
    return `${base}
**TOPIC: ARTICLES OF FAITH**
**CONTENT:**
- Belief in Allah (Existence, Attributes).
- Angels, Books, Prophets (Ulul-azmi).
- Last Day, Destiny (Qada and Qadar).

**OBJECTIVES:**
Candidates should be able to:
i. Examine significance of articles;
ii. Analyse belief in Last Day and Destiny.
`;
  }
  if (topic === 'irs-ibadat') {
    return `${base}
**TOPIC: IBADAT (WORSHIP)**
**CONTENT:**
- Taharah (Wudu, Tayammum, Ghusl).
- Salah (Importance, Types, Vitiators).
- Zakah (Types, Collection vs Sadaqah).
- Sawm (Fasting types, Exemptions).
- Hajj (Types, Essentials vs Umrah).
- Jihad (Concept, Rules).

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish types of purification and worship;
ii. Assess importance of Salah, Zakah, Sawm, Hajj.
`;
  }
  if (topic === 'irs-family') {
    return `${base}
**TOPIC: FAMILY MATTERS**
**CONTENT:**
- Marriage (Conditions, Rights, Polygamy).
- Idrar (Ill-treatment).
- Divorce (Attitude, Kinds, Iddah, Custody).
- Inheritance (Heirs and shares).

**OBJECTIVES:**
Candidates should be able to:
i. Analyse importance/validity of marriage;
ii. Examine divorce kinds and custody;
iii. Evaluate significance of inheritance.
`;
  }
  if (topic === 'irs-law-sources') {
    return `${base}
**TOPIC: SOURCES AND SCHOOLS OF LAW**
**CONTENT:**
- Four major sources (Qur'an, Sunnah, Ijma', Qiyas).
- Four Sunni Schools and founders.

**OBJECTIVES:**
Candidates should be able to:
i. Analyse sources of law;
ii. Examine biographies of school founders.
`;
  }
  if (topic === 'irs-economic-political') {
    return `${base}
**TOPIC: ISLAMIC ECONOMIC & POLITICAL SYSTEMS**
**CONTENT:**
- Riba (Usury), Tatfif (Fraud).
- Sovereignty of Allah, Shurah (Consultation).
- Adalah (Justice), Mas'uliyah (Accountability).
- Rights of non-Muslims.

**OBJECTIVES:**
Candidates should be able to:
i. Analyse attitude to Riba;
ii. Examine political concepts (Justice, Consultation).
`;
  }
  return null;
};