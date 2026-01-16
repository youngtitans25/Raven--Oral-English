import { StudentProfile } from '../../../types';

export const getSectionBInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'agri-rocks-soil') {
    return `${base}
**TOPIC: ROCKS AND SOIL FORMATION**
**OBJECTIVES:**
Candidates should be able to:
i. identify the major types of rocks (Igneous, Sedimentary, Metamorphic) and their formation;
ii. identify major types and properties of soils; factors and processes of soil formation;
iii. differentiate between the horizons in a soil profile;
iv. differentiate between the components of soil;
v. compute the proportion of soil components and determine water-holding capacity and pH.
`;
  }
  if (topic === 'agri-soil-water') {
    return `${base}
**TOPIC: SOIL WATER AND CONSERVATION**
**OBJECTIVES:**
Candidates should be able to:
i. compare capillary, gravitational, and hygroscopic water;
ii. determine water-holding capacity, wilting points, and available water;
iii. identify methods of soil water management and conservation;
iv. identify causes of erosion and leaching and determine control methods;
v. classify irrigation and drainage systems and examine their challenges.
`;
  }
  if (topic === 'agri-soil-fertility') {
    return `${base}
**TOPIC: SOIL FERTILITY**
**OBJECTIVES:**
Candidates should be able to:
i. classify plant nutrients (Macro/Micro) and identify factors affecting availability;
ii. examine roles of soil flora/fauna and nutrient cycles (Carbon, Water, Nitrogen);
iii. compare methods of maintaining fertility (cover crops, manures);
iv. differentiate between organic and inorganic fertilizers and their application;
v. identify nutrient deficiency symptoms (chlorosis, stunting, etc.) and suggest remedies.
`;
  }
  if (topic === 'agri-land-prep') {
    return `${base}
**TOPIC: LAND PREPARATION AND SOIL TILLAGE**
**OBJECTIVES:**
Candidates should be able to:
i. compare different methods of land preparation and tillage (Zero, Minimum, etc.);
ii. state advantages and disadvantages of different tillage methods;
iii. give reasons for the choice of tillage methods in relation to crop groups.
`;
  }
  if (topic === 'agri-plant-forms') {
    return `${base}
**TOPIC: PLANT FORMS AND FUNCTIONS**
**OBJECTIVES:**
Candidates should be able to:
i. identify crop plant parts and their functions;
ii. distinguish between monocot and dicot crop plants;
iii. identify various storage organs of crop plants (tubers, bulbs, rhizomes).
`;
  }
  if (topic === 'agri-growth-repro') {
    return `${base}
**TOPIC: GROWTH, DEVELOPMENT AND REPRODUCTION**
**OBJECTIVES:**
Candidates should be able to:
i. examine the process of gamete formation (Gametogenesis);
ii. identify different types of pollination;
iii. analyse the process of fertilization;
iv. trace embryo formation and development to the formation of seeds and fruit.
`;
  }
  if (topic === 'agri-propagation') {
    return `${base}
**TOPIC: PLANT PROPAGATION METHODS**
**OBJECTIVES:**
Candidates should be able to:
i. classify crops propagated by sexual methods;
ii. determine seed viability and seed rate;
iii. differentiate between types of seed germination;
iv. classify crops into different vegetative propagation methods (cutting, budding, grafting);
v. determine appropriate nursery sites, types; their advantages and disadvantages;
vi. apply the techniques of transplanting seedlings.
`;
  }
  if (topic === 'agri-cropping-systems') {
    return `${base}
**TOPIC: CROPPING SYSTEMS, PLANTING PATTERNS & DENSITIES**
**OBJECTIVES:**
Candidates should be able to:
i. identify and compare cropping systems (Monocropping, Mixed, Relay, Strip, Rotational);
ii. apply different cropping systems to solve problems in agriculture;
iii. differentiate between the various planting patterns (Broadcasting, Row spacing, Drilling);
iv. examine the various types of plant densities and their effects on crop yield;
v. compute plant density per hectare.
`;
  }
  if (topic === 'agri-crop-husbandry') {
    return `${base}
**TOPIC: CROP HUSBANDRY**
**SCOPE:**
Group 1: Cereals (maize, rice, etc.)
Group 2: Legumes (cowpea, groundnut, etc.)
Group 3: Tubers (yam, cassava, etc.)
Group 4: Vegetables & Spices (tomato, onion, etc.)
Group 5: Fruits (citrus, pineapple, etc.)
Group 6: Beverages (cocoa, coffee, etc.)
Group 7: Oils (oil palm, coconut, etc.)
Group 8: Latex (rubber, gum arabic)
Group 9: Fibres (jute, cotton, etc.)

**OBJECTIVES:**
Candidates should be able to:
i. apply the different methods of crop propagation, husbandry, harvesting, processing, and storage for each crop;
ii. identify common diseases and pests and their effects on crop yield;
iii. determine the economic importance of each of the crops;
iv. relate their importance to national economic development.
`;
  }
  if (topic === 'agri-pasture') {
    return `${base}
**TOPIC: PASTURE AND FORAGE CROPS**
**OBJECTIVES:**
Candidates should be able to:
i. classify common grasses and legumes used as pastures and forage;
ii. differentiate between pasture and forage crops by their common and scientific names;
iii. distinguish between the various methods of conserving pastures e.g. hay- and silage-making;
iv. relate different vegetational zones to their dominant pasture species;
v. determine range types and utilization of range resources in Nigeria.
`;
  }
  if (topic === 'agri-floriculture') {
    return `${base}
**TOPIC: FLORICULTURE**
**OBJECTIVES:**
Candidates should be able to:
i. distinguish between common ornamental trees, shrubs, and flowers;
ii. determine their uses and maintenance.
`;
  }
  if (topic === 'agri-weeds') {
    return `${base}
**TOPIC: WEEDS**
**OBJECTIVES:**
Candidates should be able to:
i. identify weeds with their common and scientific names;
ii. classify weeds according to their mode of dispersal;
iii. Identify the characteristic features of weeds;
iv. apply various weed control methods (weeding, mulching, herbicides, etc.).
`;
  }
  if (topic === 'agri-diseases') {
    return `${base}
**TOPIC: CROP DISEASES**
**OBJECTIVES:**
Candidates should be able to:
i. distinguish between common store and field disease-causing organisms (fungi, bacteria, viruses, nematodes);
ii. relate various disease-causing organisms to the damage caused, symptoms, and their mode of spread;
iii. apply appropriate control methods;
iv. relate each control method to its side effect (pollution, poisoning, ecosystem distribution).
`;
  }
  if (topic === 'agri-pests') {
    return `${base}
**TOPIC: CROP PESTS**
**OBJECTIVES:**
Candidates should be able to:
i. identify the various field and store pests (biting, boring, sucking insects);
ii. assess their economic importance;
iii. relate various prevention and control methods to different pests;
iv. describe the life cycles of various insects (grasshopper, weevil, aphid);
v. apply the knowledge of the life cycles of insect pests to their prevention and control;
vi. differentiate between common pesticides and examine their mode of action.
`;
  }
  if (topic === 'agri-forestry') {
    return `${base}
**TOPIC: FOREST MANAGEMENT (SILVICULTURE)**
**OBJECTIVES:**
Candidates should be able to:
i. relate various forest products (wood, pulp, fibre) to their uses;
ii. compare different forest conservation methods (regeneration, afforestation, agro-forestry, taungya);
iii. apply the various methods appropriately.
`;
  }
  return null;
};