import { StudentProfile } from '../../../types';

export const getTopic14Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-hydrogen') {
    return `${base}
**TOPIC: HYDROGEN**
**CONTENT:**
- Commercial production from water gas and cracking of petroleum fractions.
- Laboratory preparation, properties, uses, and test for hydrogen.

**OBJECTIVES:**
Candidates should be able to:
i. Predict reagents for the laboratory and industrial preparation of hydrogen.
ii. Identify the properties of hydrogen.
iii. Specify the uses of hydrogen.
iv. Determine the specific test for hydrogen.
`;
  }
  if (topic === 'chem-halogens') {
    return `${base}
**TOPIC: HALOGENS (CHLORINE)**
**CONTENT:**
- Chlorine: Laboratory preparation, industrial preparation by electrolysis, properties, and uses (water sterilization, bleaching, manufacture of HCl, plastics, insecticides).
- Hydrogen chloride and Hydrochloric acid: Preparation and properties.
- Chlorides and test for chlorides.

**OBJECTIVES:**
Candidates should be able to:
i. Predict reagents for the laboratory and industrial preparation of chlorine and its compounds.
ii. Identify the properties of chlorine and its compounds.
iii. Compare the properties of these gases and their compounds.
iv. Specify the uses of chlorine and its compounds.
v. Determine specific tests for Cl⁻, Cl₂, and HCl.
vi. Predict the reagents for preparation, properties, and uses of HCl(g) and HCl(aq).
`;
  }
  if (topic === 'chem-oxygen-water') {
    return `${base}
**TOPIC: OXYGEN AND WATER**
**CONTENT:**
- Oxygen: Laboratory/Commercial production, properties, uses.
- Oxides: Acidic, basic, amphoteric, and neutral.
- Ozone as an allotrope and its importance in the atmosphere.
- Water: Composition, Solvent properties, Atmospheric gases dissolved in water.
- Hard and soft water: Temporary and permanent hardness, methods of softening.
- Treatment of water for town supply.
- Water of crystallization, efflorescence, deliquescence, and hygroscopy (examples and uses).

**OBJECTIVES:**
Candidates should be able to:
i. Identify the allotropes of oxygen and significance of ozone.
ii. Classify the oxides of oxygen and their properties.
iii. Identify the various uses of water and effects of dissolved gases.
iv. Distinguish between hard and soft water, causes and removal of hardness.
v. Describe the processes involved in the treatment of water for town supply.
vi. Distinguish between the phenomena of efflorescence, deliquescence, and hygroscopy.
`;
  }
  if (topic === 'chem-sulphur') {
    return `${base}
**TOPIC: SULPHUR AND ITS COMPOUNDS**
**CONTENT:**
- Allotropes and uses of sulphur.
- Sulphur(IV) oxide (SO₂): Preparation, properties, uses; reaction with alkalis.
- Trioxosulphate(IV) acid and salts.
- Tetraoxosulphate(VI) acid (H₂SO₄): Commercial preparation (contact process), properties (oxidizing/dehydrating), uses.
- Hydrogen sulphide (H₂S): Preparation, properties, tests.

**OBJECTIVES:**
Candidates should be able to:
i. Predict reagents for laboratory/industrial preparation of sulphur compounds.
ii. Identify the properties and uses of sulphur compounds.
iii. Determine specific tests for SO₃²⁻, SO₄²⁻, H₂SO₃, SO₂, S²⁻, and H₂S.
`;
  }
  if (topic === 'chem-nitrogen') {
    return `${base}
**TOPIC: NITROGEN AND ITS COMPOUNDS**
**CONTENT:**
- Nitrogen: Preparation and production.
- Ammonia: Haber Process, Properties, Uses, Ammonium salts, Oxidation.
- Trioxonitrate(V) acid (HNO₃): Laboratory preparation, properties, uses.
- Trioxonitrate(V) salts: action of heat and uses.
- Oxides of nitrogen.
- The nitrogen cycle.

**OBJECTIVES:**
Candidates should be able to:
i. Predict reagents for laboratory/industrial preparation of nitrogen and its compounds.
ii. Identify properties and uses of nitrogen compounds.
iii. Determine specific tests for NH₄⁺, NO₃⁻, and NH₃.
`;
  }
  if (topic === 'chem-carbon') {
    return `${base}
**TOPIC: CARBON AND ITS COMPOUNDS**
**CONTENT:**
- Allotropes: Uses and properties.
- Carbon(IV) oxide (CO₂): Preparation, properties, uses, tests; action of heat on salts.
- Carbon(II) oxide (CO): Preparation, properties, effects on blood, sources.
- Coal: Types, destructive distillation.
- Coke: Gasification, synthesis gas.

**OBJECTIVES:**
Candidates should be able to:
i. Identify allotropes of carbon.
ii. Predict reagents for preparation of CO₂ and CO.
iii. Specify properties and uses of CO₂ and CO.
iv. Determine specific tests for HCO₃⁻, CO₃²⁻, CO₂, and CO.
v. Identify forms of coal and products of destructive distillation.
vi. Specify the uses of coke and synthesis gas.
`;
  }
  return null;
};