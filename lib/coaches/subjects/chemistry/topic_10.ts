import { StudentProfile } from '../../../types';

export const getTopic10Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-electrolysis-fundamentals') {
    return `${base}
**TOPIC: ELECTROLYSIS FUNDAMENTALS**
**CONTENT:**
- Electrolytes and non-electrolytes.
- Faraday’s laws of electrolysis.

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between electrolytes and non-electrolytes.
ii. Perform calculations based on Faraday’s law of electrolysis.
`;
  }
  if (topic === 'chem-electrolysis-processes') {
    return `${base}
**TOPIC: ELECTROLYSIS PROCESSES**
**CONTENT:**
- Electrolysis of dilute H₂SO₄, aqueous CuSO₄, CuCl₂ solution, dilute and concentrated NaCl solutions, and fused NaCl.
- Factors affecting discharge of ions at the electrodes.

**OBJECTIVES:**
Candidates should be able to:
i. Identify suitable electrodes for different electrolytes.
ii. Specify the chemical reactions at the electrodes.
iii. Determine the products at the electrodes.
iv. Identify the factors that affect the products of electrolysis.
`;
  }
  if (topic === 'chem-electrolysis-uses') {
    return `${base}
**TOPIC: USES OF ELECTROLYSIS**
**CONTENT:**
- Purification of metals (e.g., copper) and production of elements and compounds (Al, Na, O₂, Cl₂, and NaOH).

**OBJECTIVES:**
Candidates should be able to:
i. Specify the different areas of application of electrolysis.
`;
  }
  if (topic === 'chem-electrochemical-cells') {
    return `${base}
**TOPIC: ELECTROCHEMICAL CELLS**
**CONTENT:**
- Electrochemical series (K, Ca, Na, Mg, Al, Zn, Fe, Sn, Pb, H, Cu, Hg, Ag, Au).
- Half-cell reactions and electrode potentials (simple calculations only).

**OBJECTIVES:**
Candidates should be able to:
i. State the significance of the electrochemical series.
ii. Identify the various electrochemical cells.
iii. Calculate electrode potentials using half-cell reaction equations.
`;
  }
  if (topic === 'chem-corrosion') {
    return `${base}
**TOPIC: CORROSION AND PROTECTION**
**CONTENT:**
- Corrosion as an electrolytic process.
- Cathodic protection of metals, painting, electroplating, and coating with grease or oil as methods of preventing iron corrosion.

**OBJECTIVES:**
Candidates should be able to:
i. Determine the different areas of application of electrolytic processes.
ii. Identify methods used in protecting metals.
`;
  }
  return null;
};