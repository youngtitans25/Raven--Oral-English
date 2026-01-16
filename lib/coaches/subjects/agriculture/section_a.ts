import { StudentProfile } from '../../../types';

export const getSectionAInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'agri-meaning-scope') {
    return `${base}
**TOPIC: MEANING AND SCOPE OF AGRICULTURE**
**OBJECTIVES:**
Candidates should be able to:
i. use the definition of Agriculture in modern terms (production, processing, marketing);
ii. differentiate between the various branches of Agriculture;
iii. differentiate between types of Agriculture (subsistence vs commercial), their advantages, disadvantages, and problems.
`;
  }
  if (topic === 'agri-importance') {
    return `${base}
**TOPIC: IMPORTANCE OF AGRICULTURE**
**OBJECTIVES:**
Candidates should be able to:
i. relate agricultural benefits to individual farmers;
ii. relate agro-allied industries to their respective raw materials;
iii. relate the various contributions of Agriculture to economic development in West Africa.
`;
  }
  if (topic === 'agri-ecology') {
    return `${base}
**TOPIC: AGRICULTURAL ECOLOGY**
**OBJECTIVES:**
Candidates should be able to:
i. differentiate between the features of the ecological zones in West Africa;
ii. classify agricultural products according to each ecological zone;
iii. differentiate abiotic from biotic factors affecting agricultural production.
`;
  }
  if (topic === 'agri-genetics') {
    return `${base}
**TOPIC: AGRICULTURAL GENETICS**
**OBJECTIVES:**
Candidates should be able to:
i. apply the first and second laws of Mendel to genetics;
ii. differentiate between types of cell division;
iii. determine the outcome of genetic crossing (homozygous/heterozygous);
iv. compute simple probability ratios;
v. distinguish between methods of crop and animal improvement (breeding systems, AI).
`;
  }
  if (topic === 'agri-inputs') {
    return `${base}
**TOPIC: FARM INPUTS**
**OBJECTIVES:**
Candidates should be able to:
i. classify different types of farm inputs (planting materials, agrochemicals);
ii. describe their uses in agricultural production.
`;
  }
  if (topic === 'agri-history') {
    return `${base}
**TOPIC: HISTORY OF AGRICULTURAL DEVELOPMENT**
**OBJECTIVES:**
Candidates should be able to:
i. compare various agricultural systems (shifting cultivation, bush fallowing);
ii. identify problems (land tenure, finance) and proffer solutions;
iii. trace the history and assess the role of research institutes (IITA, NIFOR, etc.);
iv. give reasons for ADPs and evaluate national programmes (OFN, Green Revolution).
`;
  }
  if (topic === 'agri-govt-roles') {
    return `${base}
**TOPIC: ROLES OF GOVERNMENT & NGOS**
**OBJECTIVES:**
Candidates should be able to:
i. evaluate effects of government policies and laws on agriculture;
ii. identify incentives and infrastructural facilities provided by government;
iii. examine the roles of NGOs in the development of agriculture.
`;
  }
  return null;
};