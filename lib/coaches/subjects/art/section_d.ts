import { StudentProfile } from '../../../types';

export const getSectionDInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'art-appreciation') {
    return `${base}
**TOPIC: ART APPRECIATION**
**SCOPE:**
- Man-made objects: architecture, sculpture etc.
- Natural phenomena: Zuma Rock, Ikogosi Warm Springs, etc.

**OBJECTIVES:**
Candidates should be able to:
i. identify the aesthetic qualities of natural and man-made phenomena in Nigerian environment;
ii. differentiate between natural and man-made aesthetic phenomena.
`;
  }
  if (topic === 'art-functions') {
    return `${base}
**TOPIC: MEANING AND FUNCTIONS OF ART IN SOCIETY**
**SCOPE:**
- Societal functions: religious, social, cultural, political, therapeutic, economic needs.
- Media functions: advertisement, education, recreation.

**OBJECTIVES:**
Candidates should be able to:
i. examine the functions of art;
ii. use art to enhance societal values;
iii. assess the role of art in electronic and print media.
`;
  }
  if (topic === 'art-entrepreneurship') {
    return `${base}
**TOPIC: ART ENTREPRENEURSHIP**
**SCOPE:**
Job prospects: Ceramist, Curator, Textile designer, Industrial designer, Sculptor, Photographer, Cartoonist, Illustrator etc.

**OBJECTIVES:**
Candidates should be able to identify job opportunities in the Visual Arts.
`;
  }
  return null;
};