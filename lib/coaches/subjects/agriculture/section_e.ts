import { StudentProfile } from '../../../types';

export const getSectionEInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'agri-surveying') {
    return `${base}
**TOPIC: FARM SURVEYING AND FARMSTEAD PLANNING**
**OBJECTIVES:**
Candidates should be able to:
i. examine the relevance of farm surveying to agriculture;
ii. classify common surveying equipment, their uses and care;
iii. differentiate between the common survey methods;
iv. apply survey principles to farmstead outlay;
v. identify the factors to be considered in farmstead planning.
`;
  }
  if (topic === 'agri-simple-tools') {
    return `${base}
**TOPIC: SIMPLE FARM TOOLS**
**OBJECTIVES:**
Candidates should be able to:
i. identify simple farm tools;
ii. use and maintain farm tools;
iii. compare the advantages and disadvantages of simple farm tools.
`;
  }
  if (topic === 'agri-machinery') {
    return `${base}
**TOPIC: FARM MACHINERY AND IMPLEMENTS**
**OBJECTIVES:**
Candidates should be able to:
i. identify common farm machinery (tractors, milking machines) and implements (ploughs, harrows);
ii. classify farm machinery according to their uses;
iii. operate farm machines and implements;
iv. apply appropriate maintenance routines on farm machines and implements.
`;
  }
  if (topic === 'agri-mechanization') {
    return `${base}
**TOPIC: MECHANIZATION AND SOURCES OF FARM POWER**
**OBJECTIVES:**
Candidates should be able to:
i. compare advantages and disadvantages of various sources of farm power (animal, machine);
ii. distinguish between the advantages and disadvantages of mechanization;
iii. assess the problems and prospects of mechanized agriculture in West Africa.
`;
  }
  if (topic === 'agri-processing') {
    return `${base}
**TOPIC: PROCESSING AND STORAGE**
**OBJECTIVES:**
Candidates should be able to:
i. identify the importance of agricultural processing;
ii. differentiate between methods of processing (traditional vs modern for gari, rice, etc.);
iii. identify and compare different storage methods;
iv. apply appropriate storage methods to different crops.
`;
  }
  if (topic === 'agri-biotech') {
    return `${base}
**TOPIC: INTRODUCTION TO BIOTECHNOLOGY**
**OBJECTIVES:**
Candidates should be able to:
i. use basic terms in biotechnology (tissue culture, in vitro fertilization, genetic engineering);
ii. provide reasons for the importance and application of biotechnology.
`;
  }
  if (topic === 'agri-ict') {
    return `${base}
**TOPIC: APPLICATION OF ICT IN AGRICULTURE**
**OBJECTIVES:**
Candidates should be able to:
i. identify the various components of a computer;
ii. use the computer to enhance agricultural practices (forecasting, ration formulation, simulation);
iii. use communication gadgets to improve agricultural production.
`;
  }
  if (topic === 'agri-research') {
    return `${base}
**TOPIC: AGRICULTURAL RESEARCH AND STATISTICS**
**OBJECTIVES:**
Candidates should be able to:
i. use basic concepts in agricultural experiments (hypothesis, treatment, control);
ii. draw inferences from experimental results;
iii. compute simple measures of central tendency and experimental errors.
`;
  }
  return null;
};