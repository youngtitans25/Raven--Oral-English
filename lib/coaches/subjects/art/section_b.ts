import { StudentProfile } from '../../../types';

export const getSectionBInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'art-history-dimensions') {
    return `${base}
**TOPIC: HISTORICAL DIMENSIONS OF ART**
**SCOPE:**
- Prehistoric, Greek and Roman Art; Medieval Art (architecture, surface decorations, calligraphy).
- Renaissance Art and Artists (Giotto, Michelangelo, Leonardo da Vinci, Raphael).
- 19th and 20th Century Art Movements (Impressionism, Realism, Futurism, Cubism, Bauhaus, Pop art, Abstract Expressionism, Fauvism).

**OBJECTIVES:**
Candidates should be able to:
i. compare materials, styles and techniques;
ii. classify periods and styles;
iii. differentiate between various art movements;
iv. analyze styles, techniques, innovations and influences.
`;
  }
  if (topic === 'art-traditional-african') {
    return `${base}
**TOPIC: TRADITIONAL AFRICAN ART**
**SCOPE:**
Egypt, Ashanti, Dogon, Mossi, Fon, Senufo, Bambara, Mende, Kissi, Bamileke and Bakumba.

**OBJECTIVES:**
Candidates should be able to:
i. categorize works in terms of style, materials and locations;
ii. analyze the works in terms of functions, characteristics and locations.
`;
  }
  if (topic === 'art-traditional-nigerian') {
    return `${base}
**TOPIC: TRADITIONAL NIGERIAN ART**
**SCOPE:**
Nok, Igbo-Ukwu, Ife, Benin, Esie, Igala, Jukun, Akwanshi, and Mbari.

**OBJECTIVES:**
Candidates should be able to:
i. trace the origins, locations and styles of Traditional Nigerian art;
ii. analyze characteristics and functions.
`;
  }
  if (topic === 'art-nigerian-crafts') {
    return `${base}
**TOPIC: NIGERIAN CRAFTS**
**SCOPE:**
Pottery, woodworks, cloth-weaving, carving, leather works, metal works, beadworks, body decoration, mat and cane weaving.

**OBJECTIVES:**
Candidates should be able to identify and categorize Nigerian crafts by material and location.
`;
  }
  if (topic === 'art-contemporary-nigerian') {
    return `${base}
**TOPIC: CONTEMPORARY NIGERIAN ARTS AND ARTISTS**
**SCOPE:**
- Art Schools: Zaria, Nsukka, Osogbo group etc.
- Artists: Aina Onabolu, Ben Enwonwu, S. I. Wangboje, Jimoh Akolo, Dele Jegede etc.

**OBJECTIVES:**
Candidates should be able to:
i. determine the influence of art schools;
ii. assess artists in terms of works, specializations, techniques and styles;
iii. analyze functions of museums, galleries, art centres;
iv. examine the characteristics of major festivals of art and culture.
`;
  }
  return null;
};