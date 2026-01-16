import { StudentProfile } from '../../../types';

export const getSectionDInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'bio-variation') {
    return `${base}
**TOPIC: VARIATION IN POPULATION**
**SCOPE:**
a. Morphological variations: Size (height, weight), Colour (skin, eye, hair), Fingerprints.
b. Physiological variations: Tongue rolling, PTC tasting, Blood groups.
c. Applications: Crime detection, Blood transfusion, Paternity.

**OBJECTIVES:**
Candidates should be able to:
i. differentiate between continuous and discontinuous variations;
ii. relate environmental conditions and genetics to variation;
iii. plot frequency distribution graphs for height/weight;
iv. apply fingerprint classification in identity detection;
v. apply knowledge of blood groups (A, B, AB, O) in transfusion and paternity;
vi. use discontinuous variation in crime detection.
`;
  }

  if (topic === 'bio-heredity') {
    return `${base}
**TOPIC: HEREDITY AND GENETICS**
**SCOPE:**
a. Inheritance: Heritable vs Non-heritable characters.
b. Chromosomes: Structure, Transmission of characters.
c. Probability in genetics and Sex determination.
d. Sex-linked characters: Baldness, Haemophilia, Colour blindness.

**OBJECTIVES:**
Candidates should be able to:
i. illustrate simple structure of DNA;
ii. illustrate segregation of genes at meiosis and recombination at fertilization;
iii. analyze data on cross-breeding experiments (Mendelian crosses);
iv. apply principles of heredity to crop/livestock improvement;
v. analyze issues of GMOs, gene therapy, and biosafety;
vi. apply heredity knowledge in marriage counselling (Sickle-cell, Rhesus factor);
vii. identify sex-linked characters.
`;
  }

  if (topic === 'bio-biotech') {
    return `${base}
**TOPIC: BIOTECHNOLOGY**
**SCOPE:**
a. Applications in:
   i. Agriculture
   ii. Medicine (Insulin, Interferon)
   iii. Pharmaceuticals
   iv. Food industry

**OBJECTIVES:**
Candidates should be able to:
i. define biotechnology;
ii. list and explain applications in agriculture, medicine, pharmaceuticals, and food industries;
iii. describe the significance of using recombinant DNA materials.
`;
  }

  return null;
};