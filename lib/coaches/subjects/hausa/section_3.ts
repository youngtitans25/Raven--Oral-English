import { StudentProfile } from '../../../types';

export const getSection3Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'hausa-customs') {
    return `${base}
**TOPIC: RAYUWAR HAUSAWA (CUSTOMS)**
**CONTENT:**
- Haihuwa (Birth): Pregnancy to adolescence rites (kaciya, banti, etc.).
- Aure (Marriage): Courtship (nema) to divorce/widowhood (saki/zawarci).
- Mutuwa (Death): Announcement to inheritance (gado).
- Impact of modernity (Tasirin zamani).

**OBJECTIVES:**
Candidates should be able to:
i. Describe customs surrounding birth, marriage, and death;
ii. Analyze the impact of modernity on these customs.
`;
  }
  if (topic === 'hausa-social') {
    return `${base}
**TOPIC: ZAMANTAKEWA (SOCIAL INSTITUTIONS)**
**CONTENT:**
- Family structure (Iyali, Gandu), kinship, fostering (agolanci).
- Neighborliness (Ma'kwabtaka), communal work (Gayya).
- Friendship, greetings, and hospitality.

**OBJECTIVES:**
Candidates should be able to:
i. Explain family relationships and social interactions;
ii. Assess the impact of modernity on social institutions.
`;
  }
  if (topic === 'hausa-occupations') {
    return `${base}
**TOPIC: SANA'O'IN GARGAJIYA (TRADITIONAL OCCUPATIONS)**
**CONTENT:**
- Types: Noma (Farming), Fira (Dyeing), Wanzanci (Barbing), Farauta (Hunting), Dukanci (Leatherwork), etc.
- Tools, processes, products, and associated titles (Sarautu).
- Gender-specific occupations.

**OBJECTIVES:**
Candidates should be able to:
i. Identify tools, products, and importance of traditional occupations;
ii. Distinguish between male and female occupations.
`;
  }
  if (topic === 'hausa-material-culture') {
    return `${base}
**TOPIC: KAYAYYAKIN BU'ATUN RAYUWA (MATERIAL CULTURE)**
**CONTENT:**
- Household items (Tufafi, kayan gida).
- Architecture and Cuisine (Gine-gine, Girke-girke).

**OBJECTIVES:**
Candidates should be able to:
i. Identify Hausa material culture items and their uses;
ii. Assess the influence of modernity.
`;
  }
  return null;
};