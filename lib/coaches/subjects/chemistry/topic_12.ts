import { StudentProfile } from '../../../types';

export const getTopic12Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-reaction-factors') {
    return `${base}
**TOPIC: FACTORS AFFECTING REACTION RATES**
**CONTENT:**
1. **Temperature**: Reaction between HCl and Na₂S₂O₃ or Mg and HCl.
2. **Concentration/Pressure**: Reaction between HCl and Na₂S₂O₃, HCl and marble, iodine clock reaction.
3. **Surface area**: Reaction between marble and HCl (powdered vs. lumps).
4. **Catalyst**: Decomposition of H₂O₂ or KClO₃ with/without MnO₂.

**OBJECTIVES:**
Candidates should be able to:
i. Identify the factors that affect the rates of a chemical reaction.
ii. Determine the effects of temperature on the rate of reactions.
iii. Examine the effect of concentration/pressure on the rate of a chemical reaction.
iv. Describe how the rate of a chemical reaction is affected by surface area.
v. Determine the types of catalysts suitable for different reactions and their effects.
vi. Determine ways of moderating these effects in chemical reactions.
`;
  }
  if (topic === 'chem-rate-curves') {
    return `${base}
**TOPIC: REACTION RATE CURVES & COLLISION THEORY**
**CONTENT:**
- Reaction rate curves.
- Activation energy.
- Qualitative treatment of Arrhenius' law and collision theory.
- Effect of light on some reactions (e.g., halogenation of alkanes).

**OBJECTIVES:**
Candidates should be able to:
i. Interpret reaction rate curves.
ii. Solve simple problems on the rate of reactions.
iii. Relate the rate of reaction to the kinetic theory of matter.
iv. Examine the significance of activation energy to chemical reactions.
v. Deduce the value of activation energy (Ea) from reaction rate curves.
`;
  }
  return null;
};