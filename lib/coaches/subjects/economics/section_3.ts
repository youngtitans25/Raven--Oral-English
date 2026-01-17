import { StudentProfile } from '../../../types';

export const getSection3Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'econ-production') {
    return `${base}
**TOPIC: THEORY OF PRODUCTION**
**CONTENT:**
- Meaning and types (Primary, Secondary, Tertiary).
- Concepts: TP, AP, MP.
- Law of Variable Proportions.
- Production functions (Short run vs Long run).
- Economies and Diseconomies of Scale.

**OBJECTIVES:**
Candidates should be able to:
i. Interpret production schedules and graphs;
ii. Differentiate between internal and external economies of scale;
iii. Relate returns to scale to the long-run production function.
`;
  }
  if (topic === 'econ-costs-revenue') {
    return `${base}
**TOPIC: THEORY OF COSTS AND REVENUE**
**CONTENT:**
- Cost concepts: Total, Fixed, Variable, Average, Marginal.
- Revenue concepts: TR, AR, MR.
- Accountants' vs Economists' view of cost/profit.

**OBJECTIVES:**
Candidates should be able to:
i. Calculate various cost and revenue values;
ii. Interpret cost and revenue curves;
iii. Distinguish between short-run and long-run costs.
`;
  }
  if (topic === 'econ-market-structures') {
    return `${base}
**TOPIC: MARKET STRUCTURES**
**CONTENT:**
- Perfect Competition: Characteristics, Equilibrium (Short/Long run).
- Monopoly: Causes, Equilibrium, Price Discrimination, Control.
- Monopolistic Competition and Oligopoly: Characteristics.

**OBJECTIVES:**
Candidates should be able to:
i. Compare the characteristics of different markets;
ii. Determine equilibrium price and output in different markets;
iii. Analyse the effects of monopoly and methods of control.
`;
  }
  if (topic === 'econ-factors') {
    return `${base}
**TOPIC: FACTORS OF PRODUCTION & THEIR THEORIES**
**CONTENT:**
- Land (Rent), Labour (Wages), Capital (Interest), Entrepreneur (Profit).
- Theories of distribution: Marginal Productivity Theory.
- Unemployment: Types and solutions.

**OBJECTIVES:**
Candidates should be able to:
i. Explain the rewards for factors of production;
ii. Determine the factors affecting wages, interest, and profit;
iii. Propose solutions to unemployment problems.
`;
  }
  return null;
};