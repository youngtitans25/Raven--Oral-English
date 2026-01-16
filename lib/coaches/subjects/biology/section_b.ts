import { StudentProfile } from '../../../types';

export const getSectionBInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'bio-internal-structure') {
    return `${base}
**TOPIC: INTERNAL STRUCTURE OF PLANTS AND ANIMALS**
**SCOPE:**
a. Internal structure of flowering plants (Root, Stem, Leaf).
b. Internal structure of mammals.

**OBJECTIVES:**
Candidates should be able to:
i. identify the transverse sections of these organs;
ii. relate the structure of organs to their functions;
iii. identify supporting tissues in plants (collenchyma, sclerenchyma, xylem, phloem fibres);
iv. describe the distribution of supporting tissues in roots, stems, and leaves;
v. examine the arrangement of mammalian internal organs;
vi. describe the appearance and position of digestive, reproductive, and excretory organs.
`;
  }

  if (topic === 'bio-nutrition') {
    return `${base}
**TOPIC: NUTRITION**
**SCOPE:**
a. Modes (Autotrophic, Heterotrophic).
b. Plant Nutrition (Photosynthesis, Chemosynthesis, Minerals).
c. Animal Nutrition (Food classes, Tests, Mammalian tooth, Alimentary canal).

**OBJECTIVES:**
Candidates should be able to:
i. compare autotrophic and heterotrophic nutrition;
ii. differentiate light/dark reactions of photosynthesis;
iii. detect starch in a leaf;
iv. identify macro/micro-nutrients and deficiency symptoms (N, P, K);
v. determine sources and nutritional value of food classes;
vi. describe the structure and function of mammalian teeth and dental formulae;
vii. relate alimentary canal structure to function;
viii. associate enzymes with digestion of carbs, proteins, and fats.
`;
  }

  if (topic === 'bio-transport') {
    return `${base}
**TOPIC: TRANSPORT SYSTEM**
**SCOPE:**
a. Need for transportation and materials transported.
b. Channels (Mammalian circulatory, Plant vascular).
c. Media and processes (Diffusion, Osmosis).

**OBJECTIVES:**
Candidates should be able to:
i. determine the relationship between size/complexity and transport systems;
ii. describe the general circulatory system and specific vessels (hepatic portal, renal, etc.);
iii. identify plant vascular organs (phloem, xylem) and functions;
iv. state composition and functions of blood and lymph;
v. describe diffusion, osmosis, plasmolysis, and turgidity;
vi. compare mechanisms like transpiration pull, root pressure, and active transport.
`;
  }

  if (topic === 'bio-respiration') {
    return `${base}
**TOPIC: RESPIRATION**
**SCOPE:**
a. Organs and surfaces.
b. Mechanism of gaseous exchange (Plants/Animals).
c. Aerobic and Anaerobic respiration.

**OBJECTIVES:**
Candidates should be able to:
i. explain the significance of respiration and describe glycolysis/Krebs cycle outlines;
ii. deduce gaseous exchange products from experiments;
iii. describe respiratory organs (body surface, gill, trachea, lungs, stomata, lenticel);
iv. describe the mechanism of stomatal opening/closing;
v. explain the role of oxygen and the effect of insufficient supply (muscle fatigue);
vi. demonstrate fermentation using yeast and state its economic importance.
`;
  }

  if (topic === 'bio-excretion') {
    return `${base}
**TOPIC: EXCRETION**
**SCOPE:**
a. Types of structures (contractile vacuole, flame cell, Malpighian tubule, kidney, stoma).
b. Mechanisms (Kidneys, lungs, skin).
c. Excretory products of plants.

**OBJECTIVES:**
Candidates should be able to:
i. define excretion and its significance;
ii. relate structure to function for excretory organs;
iii. relate kidney structure to excretory and osmo-regulatory functions;
iv. identify functions/products of lungs and skin;
v. deduce economic importance of plant excretory products (tannins, resins, gums, alkaloids).
`;
  }

  if (topic === 'bio-support-movement') {
    return `${base}
**TOPIC: SUPPORT AND MOVEMENT**
**SCOPE:**
a. Tropic, tactic, nastic, and sleep movements in plants.
b. Supporting tissues in animals/plants.
c. Types and functions of skeleton (Exo/Endoskeleton).

**OBJECTIVES:**
Candidates should be able to:
i. identify supporting tissues in plants (collenchyma, sclerenchyma, etc.);
ii. relate plant response to stimuli (light, water, gravity, touch) and role of auxins;
iii. relate location of chitin, cartilage, and bone to function;
iv. relate mammalian skeleton structure to support, locomotion, and respiration;
v. differentiate types of joints.
`;
  }

  if (topic === 'bio-reproduction-growth') {
    return `${base}
**TOPIC: REPRODUCTION AND GROWTH**
**SCOPE:**
a. Asexual (Fission, Budding, Vegetative).
b. Sexual in flowering plants (Floral parts, Pollination).
c. Reproduction in mammals.
d. Germination of seeds.

**OBJECTIVES:**
Candidates should be able to:
i. differentiate asexual/sexual reproduction;
ii. apply grafting, budding, layering;
iii. relate flower parts to functions;
iv. differentiate male/female reproductive organs in mammals;
v. describe fertilization and embryo development;
vi. explain modern birth control/IVF;
vii. differentiate epigeal and hypogeal germination.
`;
  }

  if (topic === 'bio-coordination') {
    return `${base}
**TOPIC: CO-ORDINATION AND CONTROL**
**SCOPE:**
a. Nervous coordination (CNS, PNS, Reflexes).
b. Sense organs (Skin, Nose, Tongue, Eye, Ear).
c. Hormonal control (Animal/Plant).
d. Homeostasis (Temp, Salt/Water regulation).

**OBJECTIVES:**
Candidates should be able to:
i. apply knowledge of CNS/PNS to body coordination;
ii. differentiate reflex, voluntary, and conditioned actions;
iii. relate sense organs to functions and correct defects;
iv. locate endocrine glands and relate hormones to functions;
v. examine effects of phytohormones (auxins, gibberellins, etc.);
vi. relate hormones to homeostasis.
`;
  }

  return null;
};