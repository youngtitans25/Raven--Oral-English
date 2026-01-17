import { StudentProfile } from '../../../types';

export const getSectionCInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'yoruba-beliefs') {
    return `${base}
**TOPIC: ERO ATI IGBABO (BELIEFS)**
**CONTENT:**
- Olodumare, Akudaya, Emere, Aje, Awon Irunmole.

**OBJECTIVES:**
Candidates should be able to distinguish traditional practices and acceptable ways of life from modern beliefs.
`;
  }
  if (topic === 'yoruba-governance') {
    return `${base}
**TOPIC: ETO ISELU ATI AABO ILU (GOVERNANCE)**
**CONTENT:**
- Egbe ati ogba, Oye jije ati awon ijoye, Ogun jija.

**OBJECTIVES:**
Candidates should be able to assess functions/roles of individuals, chieftains, and groups in ensuring peace and stability.
`;
  }
  if (topic === 'yoruba-burial') {
    return `${base}
**TOPIC: ETO ISINKU ATI OGUN PINPIN (BURIAL & INHERITANCE)**
**CONTENT:**
- Oku agba, oku ofo, oku oos, itufo, ile oku gbigbe, idi igi, molebi, baba isinku.

**OBJECTIVES:**
Candidates should be able to distinguish traditional practices and relate them to funerals and inheritance.
`;
  }
  if (topic === 'yoruba-numerals') {
    return `${base}
**TOPIC: OKA YORUBA (NUMERALS)**
**CONTENT:**
- Counting 1-20,000 (Ookan titi de oke kan).

**OBJECTIVES:**
Candidates should be able to count in Yoruba numerals and apply addition, deduction, and division methods.
`;
  }
  if (topic === 'yoruba-marriage') {
    return `${base}
**TOPIC: ETO IGBEYAWO ATI ISOMOLORUKO (MARRIAGE & NAMING)**
**CONTENT:**
- Traditional marriage rites and naming ceremonies.

**OBJECTIVES:**
Candidates should be able to relate social activities and events to appropriate situations.
`;
  }
  if (topic === 'yoruba-health') {
    return `${base}
**TOPIC: ETO IWOSAN (HEALTH)**
**CONTENT:**
- Itoju alaisan (Patient care), Itoju ati igbebi aboyun (Pregnancy/Midwifery).

**OBJECTIVES:**
Candidates should be able to demonstrate knowledge of appropriate health care practices.
`;
  }
  if (topic === 'yoruba-games') {
    return `${base}
**TOPIC: ERE IDARAYA (GAMES)**
**CONTENT:**
- Ere Osupo: Alo, Bojuboju.
- Ere Ojumomo: Ijakadi, Ayo, Okoto, Arin.

**OBJECTIVES:**
Candidates should be able to identify types of traditional games, rules, and values derived.
`;
  }
  if (topic === 'yoruba-vocations') {
    return `${base}
**TOPIC: ISE ABINIBI ATI OUNJE (VOCATIONS & FOOD)**
**CONTENT:**
- Ise: Agbe, Isona, Ilu lili.
- Ounje: Abari, Iyan, Ewa.

**OBJECTIVES:**
Candidates should be able to demonstrate knowledge of traditional professions and preparing Yoruba foods/nutritional values.
`;
  }
  if (topic === 'yoruba-ethics') {
    return `${base}
**TOPIC: EKO ILE (HOME TRAINING/ETHICS)**
**CONTENT:**
- Iwa omoluabi (Good character) ati anfabanire.

**OBJECTIVES:**
Candidates should be able to identify acceptable patterns of behaviour and attitude.
`;
  }
  return null;
};