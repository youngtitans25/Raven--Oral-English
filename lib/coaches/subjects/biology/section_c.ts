import { StudentProfile } from '../../../types';

export const getSectionCInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'bio-ecology-factors') {
    return `${base}
**TOPIC: ECOLOGY - FACTORS AFFECTING DISTRIBUTION**
**SCOPE:**
- Abiotic factors: temperature, rainfall, humidity, wind, altitude, salinity, turbidity, pH, edaphic conditions.

**OBJECTIVES:**
Candidates should be able to:
i. relate abiotic factors to the distribution of organisms;
ii. use appropriate equipment (secchi disc, thermometer, rain gauge) to measure abiotic factors;
iii. describe how the activities of plants/animals (particularly human) affect the distribution of organisms.
`;
  }

  if (topic === 'bio-interactions-cycles') {
    return `${base}
**TOPIC: SYMBIOTIC INTERACTIONS & NUTRIENT CYCLING**
**SCOPE:**
- Symbiosis, parasitism, saprophytism, commensalism, mutualism, competition, predation.
- Energy flow: Food chains, food webs, trophic levels.
- Nutrient cycling: Carbon, Water, Nitrogen cycles.

**OBJECTIVES:**
Candidates should be able to:
i. determine appropriate examples of interactions;
ii. explain distribution using food chains and food webs;
iii. describe the carbon cycle and global warming;
iv. relate bacteria and legumes to the nitrogen cycle.
`;
  }

  if (topic === 'bio-habitats-biomes') {
    return `${base}
**TOPIC: NATURAL HABITATS & LOCAL BIOMES**
**SCOPE:**
- Aquatic: ponds, streams, lakes, seashores, mangrove swamps.
- Terrestrial/Arboreal: tree-tops, farmland, savanna.
- Local Biomes: Tropical rainforest, Guinea/Sudan Savanna, Desert, Highlands (Obudu/Jos).

**OBJECTIVES:**
Candidates should be able to:
i. associate plants and animals with habitats and adaptive features;
ii. locate biomes in regions;
iii. apply knowledge of biome features to determine characteristics of Nigerian regions.
`;
  }

  if (topic === 'bio-population-ecology') {
    return `${base}
**TOPIC: ECOLOGY OF POPULATIONS**
**SCOPE:**
- Population density, overcrowding.
- Adaptation for survival, competition, succession.

**OBJECTIVES:**
Candidates should be able to:
i. calculate population density;
ii. determine reasons for rapid population changes and consequences of overcrowding;
iii. relate competition to succession;
iv. trace the sequence in succession to the climax stage.
`;
  }

  if (topic === 'bio-soil-science') {
    return `${base}
**TOPIC: SOIL ECOLOGY**
**SCOPE:**
- Characteristics: Sandy, loamy, clayey (structure, porosity, capillarity, humus).
- Components: Inorganic, organic, organisms, air, water.
- Soil Fertility: Loss and renewal.

**OBJECTIVES:**
Candidates should be able to:
i. identify physical properties of soil types;
ii. determine amounts of air, water, humus experimentally;
iii. relate soil characteristics to plant growth;
iv. apply conservation methods (mulching, crop rotation, terracing).
`;
  }

  if (topic === 'bio-humans-environment') {
    return `${base}
**TOPIC: HUMANS AND ENVIRONMENT**
**SCOPE:**
- Diseases: Endemic (Malaria), Transmissible (Cholera, AIDS, Tuberculosis).
- Drug Abuse: Addiction, effects, prevention.
- Pollution: Air, Water, Soil.
- Conservation: Renewable/Non-renewable resources, Agencies (WHO, NCF, UNEP).

**OBJECTIVES:**
Candidates should be able to:
i. identify ecological conditions for disease spread;
ii. relate vectors to control methods;
iii. state effects of drug abuse;
iv. categorize pollution and control methods;
v. apply conservation methods and identify responsible bodies.
`;
  }

  return null;
};