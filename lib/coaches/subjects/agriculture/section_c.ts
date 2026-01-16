import { StudentProfile } from '../../../types';

export const getSectionCInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'agri-animal-forms') {
    return `${base}
**TOPIC: FORMS AND CLASSIFICATION OF FARM ANIMALS**
**OBJECTIVES:**
Candidates should be able to:
i. classify various breeds of farm animals (Species, breeds, distribution);
ii. locate where they are found in West Africa;
iii. identify the uses of different species of farm animals;
iv. identify their characteristic features (cattle, sheep, goat, pigs, rabbits, poultry).
`;
  }
  if (topic === 'agri-animal-terms') {
    return `${base}
**TOPIC: GENERAL TERMINOLOGIES IN ANIMAL PRODUCTION**
**OBJECTIVES:**
Candidates should be able to:
i. distinguish between the various terms in animal husbandry (e.g., calving, kidding, castrate, tupping, veal, mutton).
`;
  }
  if (topic === 'agri-animal-anatomy') {
    return `${base}
**TOPIC: ANATOMY AND PHYSIOLOGY OF FARM ANIMALS**
**OBJECTIVES:**
Candidates should be able to:
i. distinguish between various functions of tissues and organs of farm animals;
ii. compare different body systems in farm animals (digestive, reproductive, respiratory, nervous);
iii. determine the effects of climate change (temperature, humidity) on physiological development.
`;
  }
  if (topic === 'agri-animal-repro') {
    return `${base}
**TOPIC: REPRODUCTION IN FARM ANIMALS**
**OBJECTIVES:**
Candidates should be able to:
i. give an account of the process of reproduction (gametogenesis, oestrus cycle, gestation, parturition);
ii. determine the role of hormones in reproduction;
iii. trace development from fertilization to birth and lactation;
iv. trace the process of egg formation, incubation, and hatching in poultry.
`;
  }
  if (topic === 'agri-animal-nutrition') {
    return `${base}
**TOPIC: ANIMAL NUTRITION**
**OBJECTIVES:**
Candidates should be able to:
i. identify the various feed nutrients, their sources and functions;
ii. differentiate between types of feeds (pasture crops, hay, silage) and ration formulation (maintenance vs production);
iii. relate various types of rations to different classes of livestock;
iv. trace symptoms to nutrient deficiencies and apply corrective measures.
`;
  }
  if (topic === 'agri-livestock-mgmt') {
    return `${base}
**TOPIC: LIVESTOCK MANAGEMENT**
**OBJECTIVES:**
Candidates should be able to:
i. apply different management practices (housing, feeding, sanitation, veterinary care) for ruminants, pigs, rabbits, and poultry;
ii. compare intensive, semi-intensive, and extensive systems.
`;
  }
  if (topic === 'agri-animal-health') {
    return `${base}
**TOPIC: ANIMAL HEALTH (DISEASES & PARASITES)**
**OBJECTIVES:**
Candidates should be able to:
i. identify diseases (viral, bacterial, fungal, protozoan) and causative agents;
ii. classify diseases based on symptoms and transmission;
iii. apply preventive and curative measures;
iv. classify livestock parasites (endo/ectoparasites) and trace their life cycles;
v. apply control methods (dipping, deworming, sanitation).
`;
  }
  if (topic === 'agri-fisheries-wildlife') {
    return `${base}
**TOPIC: FISHERIES AND WILDLIFE**
**OBJECTIVES:**
Candidates should be able to:
i. identify common fish types (Tilapia, Catfish) and farming systems (ponds, dams);
ii. determine factors for pond establishment (fertilization, liming);
iii. assess fish harvesting and processing methods (curing, smoking);
iv. identify fishery regulations in Nigeria;
v. identify animals in game reserves and reasons for wildlife conservation.
`;
  }
  if (topic === 'agri-apiculture') {
    return `${base}
**TOPIC: BEE-KEEPING (APICULTURE)**
**OBJECTIVES:**
Candidates should be able to:
i. relate bee-keeping to economic development;
ii. differentiate between various types of bees (exotic vs indigenous);
iii. classify methods of bee-keeping (traditional vs modern);
iv. identify bee-keeping equipment and safety measures.
`;
  }
  return null;
};