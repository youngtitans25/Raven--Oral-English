import { StudentProfile } from '../../../types';

export const getSection1Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'math-number-bases') {
    return `${base}
**TOPIC: NUMBER BASES & MODULAR ARITHMETIC**
**CONTENT:**
- Operations in number bases (2 to 10).
- Conversion (including fractional parts).
- Modular arithmetic.

**OBJECTIVES:**
Candidates should be able to:
i. Perform four basic operations (x, +, -, ÷);
ii. Convert from one base to another;
iii. Perform operations in modulo arithmetic.
`;
  }
  if (topic === 'math-fractions') {
    return `${base}
**TOPIC: FRACTIONS, DECIMALS, APPROXIMATIONS & PERCENTAGES**
**CONTENT:**
- Fractions and decimals; Significant figures; Decimal places.
- Percentage errors; Simple interest; Profit and loss percent.
- Ratio, proportion and rate.
- Shares and Value Added Tax (VAT).

**OBJECTIVES:**
Candidates should be able to:
i. Perform basic operations on fractions/decimals;
ii. Express to significant figures/decimal places;
iii. Calculate simple interest, profit/loss %, ratio, rate, percentage error;
iv. Solve problems involving shares and VAT.
`;
  }
  if (topic === 'math-indices') {
    return `${base}
**TOPIC: INDICES, LOGARITHMS AND SURDS**
**CONTENT:**
- Laws of indices; Equations involving indices; Standard form.
- Laws of logarithm; Logarithm to any base; Change of base.
- Relationship between indices and logarithm.
- Surds.

**OBJECTIVES:**
Candidates should be able to:
i. Apply laws of indices;
ii. Establish relationship between indices and logarithms;
iii. Solve equations involving indices/logarithms;
iv. Simplify and rationalize surds; perform operations on surds.
`;
  }
  if (topic === 'math-sets') {
    return `${base}
**TOPIC: SETS**
**CONTENT:**
- Types of sets (Empty, Universal, Complements, Subsets, Finite/Infinite, Disjoint).
- Algebra of sets.
- Venn diagrams.

**OBJECTIVES:**
Candidates should be able to:
i. Identify types of sets;
ii. Solve problems involving cardinality;
iii. Solve set problems using symbols;
iv. Use Venn diagrams (up to 3 sets).
`;
  }
  return null;
};