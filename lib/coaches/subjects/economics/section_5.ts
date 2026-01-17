import { StudentProfile } from '../../../types';

export const getSection5Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'econ-agriculture') {
    return `${base}
**TOPIC: AGRICULTURE IN NIGERIA**
**CONTENT:**
- Systems of agriculture.
- Problems and solutions.
- Marketing of agricultural produce (Commodity Boards).
- Agricultural policies and schemes (OFN, Green Revolution).

**OBJECTIVES:**
Candidates should be able to:
i. Identify the problems of agriculture in Nigeria;
ii. Evaluate government agricultural policies;
iii. Analyse the roles of marketing boards.
`;
  }
  if (topic === 'econ-industry') {
    return `${base}
**TOPIC: INDUSTRY AND INDUSTRIALIZATION**
**CONTENT:**
- Concepts: Plant, Firm, Industry.
- Industrialization strategies: Import Substitution, Export Promotion.
- Location of industries.
- Problems of industrialization in Nigeria.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate between plant, firm, and industry;
ii. Evaluate strategies for industrialization;
iii. Analyze factors influencing location of industries.
`;
  }
  if (topic === 'econ-resources') {
    return `${base}
**TOPIC: NATURAL RESOURCES**
**CONTENT:**
- Development of mineral resources (Petroleum, Solid minerals).
- Impact on the Nigerian economy (Positive and Negative).
- Resource Control.

**OBJECTIVES:**
Candidates should be able to:
i. Identify major natural resources in Nigeria;
ii. Assess the contribution of the petroleum industry to the economy.
`;
  }
  if (topic === 'econ-business-orgs') {
    return `${base}
**TOPIC: BUSINESS ORGANIZATIONS**
**CONTENT:**
- Private Enterprises: Sole prop, Partnership, Joint Stock Companies.
- Public Enterprises: Features, reasons for establishment, problems.
- Privatization and Commercialization.

**OBJECTIVES:**
Candidates should be able to:
i. Compare different forms of business organizations;
ii. Analyze the performance of public enterprises;
iii. Evaluate the privatization policy in Nigeria.
`;
  }
  if (topic === 'econ-population') {
    return `${base}
**TOPIC: POPULATION**
**CONTENT:**
- Theories: Malthusian, Demographic Transition.
- Census: Problems and importance.
- Structure and distribution.
- Migration.

**OBJECTIVES:**
Candidates should be able to:
i. Analyze population theories;
ii. Discuss the implications of population structure;
iii. Evaluate the problems of census in Nigeria.
`;
  }
  if (topic === 'econ-intl-trade') {
    return `${base}
**TOPIC: INTERNATIONAL TRADE**
**CONTENT:**
- Basis: Comparative Cost Advantage.
- Terms of Trade.
- Balance of Payments: Components, disequilibrium, and correction.
- Exchange Rates: Determination and systems.

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between domestic and international trade;
ii. Calculate and interpret Terms of Trade;
iii. Propose measures to correct Balance of Payments deficit.
`;
  }
  if (topic === 'econ-intl-orgs') {
    return `${base}
**TOPIC: INTERNATIONAL ECONOMIC ORGANIZATIONS**
**CONTENT:**
- ECOWAS, AU, ECA, AfDB, OPEC, IMF, World Bank.
- Roles and relevance to Nigeria.

**OBJECTIVES:**
Candidates should be able to:
i. Identify the objectives of these organizations;
ii. Evaluate their contributions to the Nigerian economy.
`;
  }
  return null;
};