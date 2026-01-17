import { StudentProfile } from '../../../types';

export const getSection4Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'hausa-festivities') {
    return `${base}
**TOPIC: BUKUKUWA DA WASANNI (FESTIVITIES & GAMES)**
**CONTENT:**
- Religious: Salla, Takutaha.
- Traditional: Kalankuwa, Shan kabewa.
- Occupational: Kamun kifi, Dambe, Kokawa.
- Recreational: Sukuwa.
- Children's games: Shalle, Kulli-kurciya, Carafke.

**OBJECTIVES:**
Candidates should be able to:
i. List and describe Hausa festivities and games;
ii. Explain their importance and preservation methods.
`;
  }
  if (topic === 'hausa-beliefs') {
    return `${base}
**TOPIC: CAMFE-CAMFE DA BAUTA (BELIEFS & WORSHIP)**
**CONTENT:**
- Superstitions: Kangida, Camfi, Maita.
- Worship: Bori, Tsafi.

**OBJECTIVES:**
Candidates should be able to:
i. Identify types and methods of traditional beliefs;
ii. Evaluate their uses (or lack thereof) and modern impact.
`;
  }
  if (topic === 'hausa-authority') {
    return `${base}
**TOPIC: SARAUTUN GARGAJIYA (TRADITIONAL AUTHORITY)**
**CONTENT:**
- Hierarchy: Sarki, Hakimi, Dagatai.
- Palace officials: Shantali, Jakadiya.
- Religious officials: Liman, Alkali.

**OBJECTIVES:**
Candidates should be able to:
i. Outline traditional ranks and their functions;
ii. Assess the impact of modernity on traditional authority.
`;
  }
  if (topic === 'hausa-medicine') {
    return `${base}
**TOPIC: MAGUNGUNAN GARGAJIYA (TRADITIONAL MEDICINE)**
**CONTENT:**
- Traditional: Herbs (Sassake, Gari).
- Religious: Layu, Rubutu.
- Methods: Drinking, rubbing, fumigation, incision.
- Functions: Prevention and cure.

**OBJECTIVES:**
Candidates should be able to:
i. Classify traditional medicines and application methods;
ii. Explain their uses and modern influence.
`;
  }
  return null;
};