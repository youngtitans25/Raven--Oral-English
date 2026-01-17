import { StudentProfile } from '../../../types';

export const getSection1Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'econ-science') {
    return `${base}
**TOPIC: ECONOMICS AS A SCIENCE**
**CONTENT:**
- Basic Concepts: Wants, Scarcity, Scale of Preference, Choice, Opportunity Cost.
- Economic Problems: What, How, and For Whom to produce.
- Production Possibility Curve (PPC): Concepts of efficiency, underemployment, and economic growth.

**OBJECTIVES:**
Candidates should be able to:
i. Define Economics and related concepts;
ii. Apply concepts to real-life situations;
iii. Interpret the PPC and its shifts.
`;
  }
  if (topic === 'econ-systems') {
    return `${base}
**TOPIC: ECONOMIC SYSTEMS**
**CONTENT:**
- Types: Free Enterprise, Centrally Planned, Mixed Economies.
- Characteristics, advantages, and disadvantages.
- Solutions to economic problems under different systems.

**OBJECTIVES:**
Candidates should be able to:
i. Compare the various economic systems;
ii. Analyse how different systems solve fundamental economic problems.
`;
  }
  if (topic === 'econ-methods') {
    return `${base}
**TOPIC: METHODS AND TOOLS OF ECONOMIC ANALYSIS**
**CONTENT:**
- Scientific Approach: Inductive and Deductive methods.
- Tools: Tables, Graphs, Charts (Bar, Pie).
- Measures of Central Tendency: Mean, Median, Mode.
- Measures of Dispersion: Range, Variance, Standard Deviation.

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between positive and normative economics;
ii. Interpret data using tables and charts;
iii. Compute and interpret measures of central tendency and dispersion.
`;
  }
  return null;
};