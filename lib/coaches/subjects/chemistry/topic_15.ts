import { StudentProfile } from '../../../types';

export const getTopic15Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-metals-general') {
    return `${base}
**TOPIC: GENERAL PROPERTIES OF METALS**
**CONTENT:**
- Physical properties (malleability, ductility, conductivity).
- Chemical properties (reaction with water, acids, oxygen).
- Reactivity series and its application to extraction methods.

**OBJECTIVES:**
Candidates should be able to:
i. Specify the general properties of metals.
ii. Determine the method of extraction suitable for a given metal.
iii. Relate extraction methods to the properties of metals.
iv. Compare chemical reactivities of metals within and across groups.
v. Specify uses of metals based on their properties.
`;
  }
  if (topic === 'chem-alkali-sodium') {
    return `${base}
**TOPIC: ALKALI METALS (SODIUM)**
**CONTENT:**
- Sodium Hydroxide (NaOH): Production (Electrolysis of brine), properties, uses.
- Sodium Trioxocarbonate(IV) (Na2CO3): Solvay process, uses.
- Sodium Chloride (NaCl): Source, economic importance.
- Test for Na+ (Flame test).

**OBJECTIVES:**
Candidates should be able to:
i. Determine the industrial process for producing sodium compounds.
ii. Perform specific chemical tests for Na+.
iii. Compare chemical reactivities of alkali metals.
iv. Specify uses of sodium compounds.
`;
  }
  if (topic === 'chem-alkaline-calcium') {
    return `${base}
**TOPIC: ALKALINE-EARTH METALS (CALCIUM)**
**CONTENT:**
- Calcium compounds: CaO, Ca(OH)2, CaCO3 (Properties & Uses).
- Cement: Chemical composition and setting reaction.
- Test for Ca2+ (Flame test).

**OBJECTIVES:**
Candidates should be able to:
i. Perform specific chemical tests for Ca2+.
ii. Specify the chemical composition of cement.
iii. Specify uses of calcium compounds.
`;
  }
  if (topic === 'chem-aluminium') {
    return `${base}
**TOPIC: ALUMINIUM**
**CONTENT:**
- Purification of Bauxite (Bayer process).
- Extraction (Hall-Héroult process - Electrolysis).
- Properties and Uses.
- Test for Al3+ (NaOH/NH3 precipitate tests).

**OBJECTIVES:**
Candidates should be able to:
i. Describe the purification of bauxite.
ii. Perform specific chemical tests for Al3+.
iii. Relate extraction methods to properties.
`;
  }
  if (topic === 'chem-tin') {
    return `${base}
**TOPIC: TIN**
**CONTENT:**
- Ores (Cassiterite SnO2).
- Extraction (Reduction with carbon).
- Properties and Uses.

**OBJECTIVES:**
Candidates should be able to:
i. Identify ores of tin.
ii. Relate extraction methods to its properties.
iii. State uses of tin.
`;
  }
  if (topic === 'chem-transition-metals') {
    return `${base}
**TOPIC: FIRST-ROW TRANSITION METALS**
**CONTENT:**
- Characteristic properties (variable oxidation states, complex ion formation, colored ions, catalytic activity).
- Reasons for properties (d-orbital splitting).
- IUPAC naming of simple complex ions.

**OBJECTIVES:**
Candidates should be able to:
i. Identify general properties of first-row transition metals.
ii. Deduce reasons for characteristic properties.
iii. Determine IUPAC names of simple transition metal complexes.
`;
  }
  if (topic === 'chem-iron') {
    return `${base}
**TOPIC: IRON**
**CONTENT:**
- Extraction: Blast furnace (Fe2O3 + CO).
- Allotropes: α-iron, γ-iron, δ-iron.
- Forms: Pig iron, Wrought iron, Steel (Composition, properties, uses).
- Tests for Fe2+ and Fe3+.

**OBJECTIVES:**
Candidates should be able to:
i. Determine suitable extraction method for iron from its ores.
ii. Specify properties and uses of iron.
iii. Identify different forms of iron and compare their compositions/properties.
iv. Perform specific chemical tests for Fe2+ and Fe3+.
`;
  }
  return null;
};