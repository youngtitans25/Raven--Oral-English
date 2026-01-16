import { StudentProfile } from '../../../types';

export const getSectionAInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'art-classification') {
    return `${base}
**TOPIC: CLASSIFICATION OF ART**
**OBJECTIVES:**
Candidates should be able to:
i. differentiate between the three branches of art:
   a. Visual Arts (Fine and Applied Arts)
   b. Performing Arts (Music, Dance and Drama)
   c. Literary Arts (Poetry, Prose, Recital)
ii. identify the elements of design with the aid of illustration;
iii. analyze the principles of design with the aid of illustration.
`;
  }
  if (topic === 'art-elements-principles') {
    return `${base}
**TOPIC: ELEMENTS AND PRINCIPLES OF DESIGN**
**OBJECTIVES:**
Candidates should be able to:
i. analyze the principles of design: balance, rhythm, proportion, harmony, contrast, repetition, dominance, variety;
ii. understand elements: line, colour, shape, form, texture, tone, value, space.
`;
  }
  if (topic === 'art-terms') {
    return `${base}
**TOPIC: ART TERMS**
**OBJECTIVES:**
Candidates should be able to:
i. identify art terms (Pigments, motif, greenware, armature, silhouette, chiaroscuro, cire-perdue, terracotta, etc.);
ii. link the terms to their areas of art;
iii. use the terms in analyzing artworks.
`;
  }
  return null;
};