import { StudentProfile } from '../../../types';

export const getTopic16Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-organic-intro') {
    return `${base}
**TOPIC: INTRODUCTION TO ORGANIC CHEMISTRY**
**CONTENT:**
- Tetravalency of carbon.
- General formula, IUPAC nomenclature.
- Determination of empirical formula.
- Isomerism (Structural and Geometric).

**OBJECTIVES:**
Candidates should be able to:
i. Derive the name of organic compounds from their general formulae.
ii. Relate the name of a compound to its structure.
iii. Relate the tetravalency of carbon to its ability to form chains (catenation).
iv. Classify compounds according to their functional groups.
v. Derive empirical and molecular formulae.
vi. Relate structure/functional groups to specific properties.
vii. Derive various isomeric forms from a given formula.
viii. Distinguish between different types of isomerism.
`;
  }
  if (topic === 'chem-hydrocarbons') {
    return `${base}
**TOPIC: HYDROCARBONS (ALIPHATIC & AROMATIC)**
**CONTENT:**
- Alkanes: Homologous series, properties, substitution reactions, isomerism (up to C6).
- Petroleum: Fractional distillation, cracking, reforming, petrochemicals, octane number.
- Alkenes: Isomerism, addition/polymerization reactions, test for alkenes.
- Alkynes: Ethyne production, reactions, test for terminal alkynes.
- Benzene: Structure, properties, uses.

**OBJECTIVES:**
Candidates should be able to:
i. Classify and distinguish various types of hydrocarbons.
ii. Identify crude oil fractions, their properties, and uses.
iii. Relate transformation processes (cracking/reforming) to quality improvement.
iv. Distinguish between various polymerization processes.
v. Specify chemical tests for alkenes and terminal alkynes.
vi. Relate the properties of benzene to its structure.
`;
  }
  if (topic === 'chem-alkanols') {
    return `${base}
**TOPIC: ALKANOLS**
**CONTENT:**
- Primary, secondary, tertiary alcohols.
- Ethanol production: Fermentation and from petroleum.
- Local examples (palm wine gin).
- Glycerol as polyhydric alcohol.
- Lucas test.

**OBJECTIVES:**
Candidates should be able to:
i. Compare and distinguish the various classes of alkanols.
ii. Determine the processes involved in ethanol production.
iii. Examine the importance of ethanol as an alternative energy provider.
`;
  }
  if (topic === 'chem-carbonyls') {
    return `${base}
**TOPIC: ALKANALS AND ALKANONES**
**CONTENT:**
- Chemical tests to distinguish between alkanals and alkanones.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate between alkanals and alkanones.
`;
  }
  if (topic === 'chem-acids-esters') {
    return `${base}
**TOPIC: ALKANOIC ACIDS AND ALKANOATES**
**CONTENT:**
- Alkanoic Acids: Neutralization, esterification. Ethanedioic/Benzenecarboxylic acids.
- Alkanoates: Fats and oils, Saponification (Soap and Margarine).
- Detergents vs Soaps.

**OBJECTIVES:**
Candidates should be able to:
i. Compare various types of alkanoic acids.
ii. Identify natural sources of alkanoates.
iii. Infer products of alkanoic acids and alkanols.
iv. Specify methods for the production of soap, detergent, and margarine.
v. Distinguish between detergent and soap.
`;
  }
  if (topic === 'chem-amines') {
    return `${base}
**TOPIC: AMINES (ALKANAMINES)**
**CONTENT:**
- Primary, secondary, tertiary amines.

**OBJECTIVES:**
Candidates should be able to:
i. Compare the various classes of alkanamine.
`;
  }
  if (topic === 'chem-biomolecules') {
    return `${base}
**TOPIC: CARBOHYDRATES AND PROTEINS**
**CONTENT:**
- Carbohydrates: Classification (mono-, di-, polysaccharides), Tests for sugars, Hydrolysis.
- Proteins: Structure, Hydrolysis, Enzymes, Tests (Ninhydrin, Biuret, Millon's).

**OBJECTIVES:**
Candidates should be able to:
i. Identify natural sources and classes of carbohydrates.
ii. Infer products of hydrolysis of carbohydrates.
iii. Specify tests for simple sugars.
iv. Identify the basic structure of proteins.
v. Specify methods/products of hydrolysis of proteins.
vi. Specify various tests for proteins.
`;
  }
  if (topic === 'chem-polymers') {
    return `${base}
**TOPIC: POLYMERS**
**CONTENT:**
- Natural and synthetic rubber.
- Addition vs Condensation polymerization.
- Thermoplastic vs Thermosetting plastics.

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between natural and synthetic polymers.
ii. Differentiate between addition and condensation polymerization.
iii. Classify natural and commercial polymers and their uses.
iv. Distinguish between thermoplastics and thermosetting plastics.
`;
  }
  return null;
};