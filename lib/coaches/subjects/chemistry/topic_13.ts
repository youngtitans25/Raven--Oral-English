import { StudentProfile } from '../../../types';

export const getTopic13Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'chem-equilibria') {
    return `${base}
**TOPIC: CHEMICAL EQUILIBRIA**
**CONTENT:**
- Reversible reactions and factors governing equilibrium position.
- Dynamic equilibrium.
- Le Chatelier's principle and its industrial applications.
- Equilibrium constant (simple examples: action of steam on iron and N₂O₄ ⇌ 2NO₂; no calculation required).

**OBJECTIVES:**
Candidates should be able to:
i. Identify the factors that affect the position of equilibrium of a chemical reaction.
ii. Predict the effects of each factor on the position of equilibrium.
iii. Specify the industrial processes where Le Chatelier's principle is required.
iv. Determine the effects of these factors on equilibrium constant.
`;
  }
  return null;
};