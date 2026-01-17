import { StudentProfile } from '../../../types';

export const getSection8Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'comp-ai-definition') {
    return `${base}
**TOPIC: ARTIFICIAL INTELLIGENCE (AI)**
**CONTENT:**
- Definition.
- Branches: Machine Learning (Supervised, Unsupervised, Reinforcement), Neural Networks, Expert Systems, Fuzzy Logic, NLP, Deep Learning.
- Applications: Robotics, E-Commerce, Navigation, HR, Healthcare.

**OBJECTIVES:**
Candidates should be able to:
i. Define AI.
ii. Identify branches of AI.
iii. List Application Areas.
`;
  }

  if (topic === 'comp-robotics') {
    return `${base}
**TOPIC: FUNDAMENTALS OF ROBOTICS**
**CONTENT:**
- Definitions: Robotics, Robots.
- Components: Control system, Sensors, Actuators, Power Supply, End Effectors.
- Types: Humanoid, Autonomous, Teleoperated, Augmenting.
- Applications: Logistics, Manufacturing, Home, Military, etc.
- Advantages and disadvantages.

**OBJECTIVES:**
Candidates should be able to:
i. Define Robotics and Robots.
ii. Identify main components.
iii. Mention types and application areas.
iv. State advantages and disadvantages.
`;
  }
  return null;
};