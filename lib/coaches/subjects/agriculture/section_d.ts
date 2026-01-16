import { StudentProfile } from '../../../types';

export const getSectionDInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'agri-factors-production') {
    return `${base}
**TOPIC: FACTORS OF AGRICULTURAL PRODUCTION**
**OBJECTIVES:**
Candidates should be able to:
i. understand the meaning of land and state its uses;
ii. identify the various forms of land ownership (tenure systems) in West Africa;
iii. examine the effects of land ownership on agriculture;
iv. differentiate between types and sources of labour and their effects;
v. compare sources of capital and associated problems;
vi. determine the functions of a farm manager.
`;
  }
  if (topic === 'agri-economic-principles') {
    return `${base}
**TOPIC: BASIC ECONOMIC PRINCIPLES**
**OBJECTIVES:**
Candidates should be able to:
i. relate demand to supply in agricultural production;
ii. interpret graphical representation of demand and supply;
iii. relate input to output (Production function, diminishing returns);
iv. distinguish between common features of agricultural production and produce (seasonality, small holdings);
v. compute elasticity of demand and supply.
`;
  }
  if (topic === 'agri-labour-mgmt') {
    return `${base}
**TOPIC: LABOUR MANAGEMENT**
**OBJECTIVES:**
Candidates should be able to:
i. identify ways of achieving labour efficiency (supervision, etc.);
ii. differentiate between various types of labour (Permanent, Casual, Family);
iii. apply national labour laws and regulations.
`;
  }
  if (topic === 'agri-farm-management') {
    return `${base}
**TOPIC: FARM MANAGEMENT & FINANCE**
**OBJECTIVES:**
Candidates should be able to:
i. identify qualities, functions, and problems of a farm manager;
ii. differentiate between types of farm records (production, financial) and their importance;
iii. determine gross and net margins, appreciation, depreciation, and salvage value;
iv. examine agricultural insurance schemes and problems;
v. identify sources and problems of agricultural financing.
`;
  }
  if (topic === 'agri-marketing') {
    return `${base}
**TOPIC: MARKETING OF AGRICULTURAL PRODUCE**
**OBJECTIVES:**
Candidates should be able to:
i. evaluate the importance of agricultural marketing;
ii. classify marketing agents and their functions (boards, middlemen, coops);
iii. determine problems posed by marketing channels;
iv. determine characteristics of agricultural products affecting their marketing (perishability, bulkiness).
`;
  }
  if (topic === 'agri-extension') {
    return `${base}
**TOPIC: AGRICULTURAL EXTENSION**
**OBJECTIVES:**
Candidates should be able to:
i. identify the importance of agricultural extension;
ii. analyse roles of government, NGOs, and research institutes in extension;
iii. differentiate between extension methods (demonstration, mass media, individual);
iv. examine problems of extension in West Africa and provide solutions.
`;
  }
  return null;
};