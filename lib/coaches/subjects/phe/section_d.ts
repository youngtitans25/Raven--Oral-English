import { StudentProfile } from '../../../types';

export const getSectionDInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phe-food') {
    return `${base}
**TOPIC: FOOD**
**CONTENT:**
- Classes, sources, and importance of food nutrients.
- Balanced diet: Definition and composition.
- Diet planning for: Children, adolescents, athletes, pregnant women, aged.
- Food preservation, hygiene, and storage methods.

**OBJECTIVES:**
Candidates should be able to:
i. Indicate sources/importance of nutrients;
ii. Define balanced diet and its importance;
iii. Draw up dietary requirements for specific groups;
iv. Explain food hygiene, preparation, and preservation principles.
`;
  }
  if (topic === 'phe-nutrition') {
    return `${base}
**TOPIC: NUTRITION**
**CONTENT:**
- Beverages: Definition and nutritional values.
- Nutritional deficiencies and remedies.
- Importance of water in human nutrition.

**OBJECTIVES:**
Candidates should be able to:
i. Define nutrition and state values of beverages;
ii. Identify common deficiencies (kwashiorkor, rickets, scurvy, etc.) and remedies;
iii. Highlight importance of water.
`;
  }
  if (topic === 'phe-drugs') {
    return `${base}
**TOPIC: DRUGS**
**CONTENT:**
- Types: Stimulants, Narcotics, Hallucinogens, Sedatives, Ergogenic aids.
- Use, misuse, and abuse.
- Causes and prevention of abuse.
- Effects on the body (self-medication).

**OBJECTIVES:**
Candidates should be able to:
i. Define drug and differentiate types;
ii. Differentiate between misuse and abuse;
iii. State causes/prevention of abuse;
iv. Explain effects of abuse and self-medication.
`;
  }
  return null;
};