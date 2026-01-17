import { StudentProfile } from '../../../types';

export const getSection2Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'math-polynomials') {
    return `${base}
**TOPIC: POLYNOMIALS**
**CONTENT:**
- Change of subject of formula.
- Operations on polynomials (Add, Subtract, Mult, Div).
- Factorization (degree <= 3); Roots of polynomials.
- Factor and Remainder theorems.
- Simultaneous equations (Linear, Quadratic).
- Graphs of polynomials.

**OBJECTIVES:**
Candidates should be able to:
i. Find subject of formula;
ii. Apply Factor/Remainder theorems;
iii. Factorize expressions (diff of squares, perfect squares, cubic);
iv. Solve simultaneous equations;
v. Interpret graphs (max/min values).
`;
  }
  if (topic === 'math-variation') {
    return `${base}
**TOPIC: VARIATION**
**CONTENT:**
- Direct, Inverse, Joint, Partial.
- Percentage increase and decrease.

**OBJECTIVES:**
Candidates should be able to:
i. Solve problems involving variations;
ii. Solve problems on percentage changes in variation.
`;
  }
  if (topic === 'math-inequalities') {
    return `${base}
**TOPIC: INEQUALITIES**
**CONTENT:**
- Linear inequalities (Analytical/Graphical).
- Quadratic inequalities (Integral roots only).

**OBJECTIVES:**
Candidates should be able to:
i. Solve linear/quadratic inequalities;
ii. Interpret graphs of inequalities.
`;
  }
  if (topic === 'math-progression') {
    return `${base}
**TOPIC: PROGRESSION (A.P. & G.P.)**
**CONTENT:**
- nth term.
- Sum of A.P. and G.P.
- Sum to infinity (G.P.).

**OBJECTIVES:**
Candidates should be able to:
i. Determine nth term;
ii. Compute sums;
iii. Calculate sum to infinity.
`;
  }
  if (topic === 'math-binary-ops') {
    return `${base}
**TOPIC: BINARY OPERATIONS**
**CONTENT:**
- Closure, Commutativity, Associativity, Distributivity.
- Identity and Inverse elements.

**OBJECTIVES:**
Candidates should be able to:
i. Solve problems involving properties of operations;
ii. Solve problems involving identity/inverse elements.
`;
  }
  if (topic === 'math-matrices') {
    return `${base}
**TOPIC: MATRICES AND DETERMINANTS**
**CONTENT:**
- Algebra of matrices (up to 3x3).
- Determinants (up to 3x3).
- Inverses of 2x2 matrices.

**OBJECTIVES:**
Candidates should be able to:
i. Perform basic operations on matrices;
ii. Calculate determinants;
iii. Compute inverses of 2x2 matrices.
`;
  }
  return null;
};