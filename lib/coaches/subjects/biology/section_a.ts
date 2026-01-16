import { StudentProfile } from '../../../types';

export const getSectionAInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'bio-living-organisms') {
    return `${base}
**TOPIC: LIVING ORGANISMS**
**SCOPE:**
a. Characteristics of living things.
b. Cell structure and functions of cell components (Plant and Animal).
c. Level of organization:
   i. Cell (e.g. euglena, paramecium)
   ii. Tissue (e.g. epithelial tissues, hydra)
   iii. Organ (e.g. onion bulb)
   iv. Systems (e.g. reproductive, digestive, excretory)
   v. Organisms (e.g. Chlamydomonas)

**OBJECTIVES:**
Candidates should be able to:
i. differentiate between the characteristics of living and non-living things;
ii. identify the structures of plant and animal cells;
iii. analyse the functions of the components of plant and animal cells;
iv. compare and contrast the structure of plant and animal cells;
v. trace the levels of organization among organisms in their logical sequence.
`;
  }
  if (topic === 'bio-evolution-organisms') {
    return `${base}
**TOPIC: EVOLUTION AMONG ORGANISMS**
**SCOPE:**
a. Monera (prokaryotes) e.g. bacteria, blue green algae.
b. Protista (protozoans and protophyta) e.g. Amoeba, Euglena, Paramecium.
c. Fungi e.g. mushroom, Rhizopus.
d. Plantae (plants):
   i. Thallophyta (e.g. Spirogyra).
   ii. Bryophyta (mosses and liverworts) e.g. Brachmenium, Merchantia.

**OBJECTIVES:**
Candidates should be able to:
i. analyse external features and characteristics of the listed organisms;
ii. demonstrate increase in structural complexity;
iii. trace the stages in the life histories of the listed organisms;
iv. demonstrate gradual transition from life in water to life on land;
v. trace the evolution of the listed plants.
`;
  }
  if (topic === 'bio-adaptations') {
    return `${base}
**TOPIC: STRUCTURAL/FUNCTIONAL AND BEHAVIOURAL ADAPTATIONS**
**SCOPE:**
a. Adaptive colouration and its functions.
b. Behavioural adaptations in social animals (termites, bees).
c. Structural adaptations in organisms.

**OBJECTIVES:**
Candidates should be able to:
i. trace the advancement of the invertebrate animals;
ii. determine the economic importance of insects;
iii. classify plants into annuals, biennials and perennials;
iv. describe how structures, functions and behaviour adapt organisms to their environment;
v. categorize countershading in fish, toads, snakes and warning colouration;
vi. differentiate castes in social insects like termites and their functions;
vii. account for basking in lizards, hibernation and aestivation;
viii. account for adaptations for obtaining food, protection, securing mates, regulating temp, conserving water.
`;
  }
  return null;
};