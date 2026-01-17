import { StudentProfile } from '../../../types';

export const getAIRoboticsInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'comp-ai-definition') {
    return `${base}
**TOPIC: ARTIFICIAL INTELLIGENCE (AI)**
**CONTENT:**
- Definition of AI.
- Branches: Machine Learning (Supervised, Unsupervised, Reinforcement), Neural Networks, Expert Systems, Fuzzy Logic, NLP, Deep Learning.
- Applications: Robotics, E-Commerce, Navigation, Healthcare.

**OBJECTIVES:**
Candidates should be able to:
i. Define AI and identify its branches.
ii. List application areas of AI in modern society.
`;
  }

  if (topic === 'comp-robotics') {
    return `${base}
**TOPIC: FUNDAMENTALS OF ROBOTICS**
**CONTENT:**
- Definitions: Robotics, Robots.
- Components: Control system, Sensors, Actuators, Power Supply, End Effectors.
- Types: Humanoid, Autonomous, Teleoperated, Augmenting.
- Applications: Logistics, Manufacturing, Space, Military, Agriculture.
- Advantages and Disadvantages.

**OBJECTIVES:**
Candidates should be able to:
i. Define Robotics and list robot components.
ii. Classify robots and state their uses.
iii. Evaluate pros and cons of using robots.
`;
  }
  return null;
};