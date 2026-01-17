import { StudentProfile } from '../../../types';

export const getSection4Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'math-differentiation') {
    return `${base}
**TOPIC: DIFFERENTIATION**
**CONTENT:**
- Limit of a function.
- Differentiation of algebraic and simple trigonometric functions (sine, cosine, tangent).

**OBJECTIVES:**
Candidates should be able to:
i. Find the limit of a function;
ii. Differentiate explicit algebraic and simple trigonometric functions.
`;
  }
  if (topic === 'math-app-diff') {
    return `${base}
**TOPIC: APPLICATION OF DIFFERENTIATION**
**OBJECTIVES:**
Candidates should be able to:
i. Solve problems involving rate of change;
ii. Solve problems involving maxima and minima.
`;
  }
  if (topic === 'math-integration') {
    return `${base}
**TOPIC: INTEGRATION**
**CONTENT:**
- Integration of explicit algebraic and simple trigonometric functions.
- Area under the curve.

**OBJECTIVES:**
Candidates should be able to:
i. Solve integration problems;
ii. Calculate area under the curve (simple cases).
`;
  }
  return null;
};