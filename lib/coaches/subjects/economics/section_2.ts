import { StudentProfile } from '../../../types';

export const getSection2Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'econ-demand') {
    return `${base}
**TOPIC: THEORY OF DEMAND**
**CONTENT:**
- Meaning, Law, and Curves.
- Determinants of demand.
- Types of demand (Derived, Joint, Competitive, Composite).
- Elasticity of demand: Price, Income, Cross elasticity.

**OBJECTIVES:**
Candidates should be able to:
i. Interpret demand curves and schedules;
ii. Distinguish between change in quantity demanded and change in demand;
iii. Calculate coefficients of elasticity and interpret them.
`;
  }
  if (topic === 'econ-consumer') {
    return `${base}
**TOPIC: THEORY OF CONSUMER BEHAVIOUR**
**CONTENT:**
- Utility concepts: Total, Average, Marginal.
- Law of Diminishing Marginal Utility.
- Equilibrium of the consumer.
- Indifference Curves and Budget Lines.
- Consumer Surplus.

**OBJECTIVES:**
Candidates should be able to:
i. Explain the relationship between utility and price;
ii. Derive the demand curve from utility theory;
iii. Analyse consumer equilibrium using indifference curves.
`;
  }
  if (topic === 'econ-supply') {
    return `${base}
**TOPIC: THEORY OF SUPPLY**
**CONTENT:**
- Meaning, Law, and Curves.
- Determinants of supply.
- Types of supply (Joint, Competitive).
- Elasticity of supply.

**OBJECTIVES:**
Candidates should be able to:
i. Interpret supply curves;
ii. Distinguish between change in quantity supplied and change in supply;
iii. Calculate elasticity of supply.
`;
  }
  if (topic === 'econ-price-determination') {
    return `${base}
**TOPIC: THEORY OF PRICE DETERMINATION**
**CONTENT:**
- Market Equilibrium.
- The Price System (Functions).
- Government Intervention: Price Control (Maximum and Minimum prices).
- Effects of price control (Black market, rationing, hoarding).

**OBJECTIVES:**
Candidates should be able to:
i. Determine equilibrium price and quantity;
ii. Analyse the effects of changes in demand and supply on price;
iii. Evaluate the consequences of price control policies.
`;
  }
  return null;
};