import { StudentProfile } from '../../../types';

export const getSectionCInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'igbo-customs-social') {
    return `${base}
**TOPIC: OMENALA NA EWIMMEWU (SOCIAL CUSTOMS)**
**CONTENT:**
- Greetings (Ekele): Morning, afternoon, night, work, sickness.
- Marriage (Alụmdi na nwunye), Divorce (Ịgba alụkwaghịm).
- Childbirth (Ọmụmụ), Naming (Ịgụ aha), Circumcision (Ibi ugwu).
- Death/Burial (Ịkụ ekpe, Ikwa ozu, Ịgba mkpe).

**OBJECTIVES:**
Candidates should be able to describe these customs and determine guiding rules.
`;
  }
  if (topic === 'igbo-institutions') {
    return `${base}
**TOPIC: TRADITIONAL INSTITUTIONS**
**CONTENT:**
- Titles (Echichi): Nze, Ozo, Eze/Igwe/Obi, Iyom/Loolo.
- Family/Kinship: Umunna, Umuada, Nwadiala, Ezinụlọ.
- Age Grades (Ọgbọ/Ebiri), Ohaneze.
- Governance (Ọchịchị Ọdịnala).

**OBJECTIVES:**
Candidates should be able to describe the importance and functions of these institutions.
`;
  }
  if (topic === 'igbo-beliefs') {
    return `${base}
**TOPIC: BELIEFS AND WORSHIP (NKWENYE NA OFUFE)**
**CONTENT:**
- Taboos (Aru, Nsọala).
- Worship (Ihe ofufe): Divination (Ịgba afa), Sacrifice (Ịchụ aja).
- Artifacts: Ọfọ, Ikenga, Okpesi.
- Beliefs: Reincarnation (Ilo uwa), Ogbanje, Oath taking (Ịṅụ iyi).

**OBJECTIVES:**
Candidates should be able to explain traditional beliefs and the significance of worship items.
`;
  }
  if (topic === 'igbo-economy') {
    return `${base}
**TOPIC: AKỤNAỤBA NA AKAỌRỤ (ECONOMY & OCCUPATIONS)**
**CONTENT:**
- Land ownership (Inwe ala).
- Occupations: Farming (Ọrụ ugbo), Fishing (Ịkụ azụ), Blacksmithing (Ịkụ ụzụ), Hunting (Ịchụ nta), Trading (Izu ahịa).
- Craft: Weaving, carving, pottery.

**OBJECTIVES:**
Candidates should be able to identify traditional occupations and economic practices.
`;
  }
  if (topic === 'igbo-festivals') {
    return `${base}
**TOPIC: EMUME NA EGWUREGWU (FESTIVALS & GAMES)**
**CONTENT:**
- Festivals: Ofala, Iwa ji (New Yam), Masquerades (Mmanwu).
- Games: Wrestling (Mgba), Moonlight plays (Egwu ọnwa), Okwe.

**OBJECTIVES:**
Candidates should be able to describe festivals and their significance.
`;
  }
  return null;
};