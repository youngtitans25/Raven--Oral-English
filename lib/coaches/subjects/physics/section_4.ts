import { StudentProfile } from '../../../types';

export const getSection4Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phys-heat-quantity') {
    return `${base}
**TOPIC: QUANTITY OF HEAT**
**CONTENT:**
- Heat capacity and Specific heat capacity.
- Method of mixtures and electrical method.
- Newton's law of cooling.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate heat capacity and specific heat capacity;
ii. Determine specific heat capacity using simple methods.
`;
  }
  if (topic === 'phys-change-state') {
    return `${base}
**TOPIC: CHANGE OF STATE**
**CONTENT:**
- Latent heat (Fusion, Vaporization).
- Melting, Evaporation, Boiling.
- Influence of pressure on boiling/melting points.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate between latent heat types;
ii. Examine effects of pressure on boiling/melting points.
`;
  }
  if (topic === 'phys-expansion') {
    return `${base}
**TOPIC: THERMAL EXPANSION**
**CONTENT:**
- Linear, Area, and Volume expansivities.
- Effects and applications (Railway lines, Bimetallic strips).
- Anomalous expansion of water.

**OBJECTIVES:**
Candidates should be able to:
i. Determine linear and volume expansivities;
ii. Analyse anomalous expansion of water.
`;
  }
  if (topic === 'phys-gas-laws') {
    return `${base}
**TOPIC: GAS LAWS**
**CONTENT:**
- Boyle's, Charles', and Pressure Law.
- General gas equation and Ideal gas equation ($PV=nRT$).

**OBJECTIVES:**
Candidates should be able to:
i. Interpret gas laws;
ii. Solve numerical problems using gas equations.
`;
  }
  if (topic === 'phys-heat-transfer') {
    return `${base}
**TOPIC: HEAT TRANSFER**
**CONTENT:**
- Conduction, Convection, Radiation.
- Thermal conductivity.
- Land and sea breeze.
- Thermos flask.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate modes of heat transfer;
ii. Explain working of thermos flask;
iii. Solve problems on thermal conductivity.
`;
  }
  return null;
};