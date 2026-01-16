import { StudentProfile } from '../../../types';

export const getTopic4Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-atomic-structure') {
    return `${base}
**TOPIC: ATOMIC STRUCTURE**
**CONTENT:**
- The concept of atoms, molecules and ions; works of Dalton, Millikan, Rutherford, Moseley, Thompson and Bohr.
- Atomic structure, four quantum numbers, electron configuration, atomic/mass numbers, isotopes (examples from atomic numbers 1–20).
- Shapes of s and p orbitals.

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between atoms, molecules and ions.
ii. Identify the contributions of these scientists to the development of atomic structure.
iii. Deduce the number of protons, neutrons and electrons from atomic and mass numbers.
iv. Apply the rules guiding the arrangement of electrons in an atom.
v. Identify common elements exhibiting isotopy.
vi. Relate isotopy to mass number.
vii. Perform simple calculations relating to isotopy.
viii. Differentiate between the shapes of the orbitals.
ix. Determine the number of electrons in s and p atomic orbitals.
`;
  }
  if (topic === 'chem-periodicity') {
    return `${base}
**TOPIC: PERIODIC TABLE AND PERIODICITY**
**CONTENT:**
- Presentation of periodic table, families of elements (alkali metals, alkaline-earth metals, halogens, noble gases, transition metals).
- Variation of: ionization energy, ionic radii, electron affinity, electronegativity, electrical/thermal conductivities.

**OBJECTIVES:**
Candidates should be able to:
i. Relate atomic number to the position of an element on the periodic table.
ii. Relate properties of groups of elements on the periodic table.
iii. Identify reasons for variation in properties across the period and down the groups.

**IMPORTANT:**
You can use the 'launch_simulation' tool with id "periodic-table-trends" to visualize these concepts for the student.
`;
  }
  if (topic === 'chem-bonding') {
    return `${base}
**TOPIC: CHEMICAL BONDING**
**CONTENT:**
- Electrovalency and covalency.
- Electron configuration and tendency to attain noble gas structure.
- Hydrogen bonding and metallic bonding as special types.
- Coordinate bond as a type of covalent bond (examples: [Fe(CN)6]3-, [Fe(CN)6]4-, [Cu(NH3)4]2+, [Ag(NH3)2]+).
- van der Waals’ forces.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate between the different types of bonding.
ii. Deduce bond types based on electron configurations.
iii. Relate the nature of bonding to properties of compounds.
`;
  }
  if (topic === 'chem-shapes') {
    return `${base}
**TOPIC: SHAPES OF SIMPLE MOLECULES**
**CONTENT:**
- Linear: H2, O2, Cl2, HCl, CO2.
- Non-linear: H2O.
- Tetrahedral: CH4.
- Pyramidal: NH3.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate between the various shapes of molecules.
`;
  }
  return null;
};