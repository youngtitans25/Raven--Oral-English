import { StudentProfile } from '../../../types';

export const getSectionBInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phe-cells') {
    return `${base}
**TOPIC: CELLS, TISSUES AND SYSTEMS**
**CONTENT:**
- Structure and functions of a typical human cell.
- Types of cell and tissue: Epithelial, connective, muscle, and nerve.
- Cell division: Mitosis vs Meiosis.
- Cell differentiation.
- Organs and systems of the human body.

**OBJECTIVES:**
Candidates should be able to:
i. Identify cell structures and their functions;
ii. Differentiate between mitosis and meiosis;
iii. Explain cell differentiation;
iv. List organs and systems in the human body.
`;
  }
  if (topic === 'phe-skeletal') {
    return `${base}
**TOPIC: SKELETAL SYSTEM**
**CONTENT:**
- Axial and appendicular skeletons.
- Bones: Structure and types.
- Joints: Structure, types, and movements.

**OBJECTIVES:**
Candidates should be able to:
i. Identify structure/functions of the human skeleton;
ii. Differentiate types of joints using examples;
iii. Identify movements permitted at joints (flexion, extension, rotation, etc.).
`;
  }
  if (topic === 'phe-muscular') {
    return `${base}
**TOPIC: MUSCULAR SYSTEM**
**CONTENT:**
- Major muscles of the body (Location and function).
- Isometric and Isotonic contractions.

**OBJECTIVES:**
Candidates should be able to:
i. Identify major muscles by name and location;
ii. State functions of major muscles;
iii. Differentiate between isometric and isotonic contractions.
`;
  }
  if (topic === 'phe-nervous') {
    return `${base}
**TOPIC: NERVOUS SYSTEM AND SENSE ORGANS**
**CONTENT:**
- Central Nervous System (Brain and Spinal Cord).
- Types of nerve: Voluntary and Involuntary (Reflex action).
- Sense Organs: Skin (tactile), Nose (olfactory), Tongue (taste), Ear (auditory), Eye (sight).

**OBJECTIVES:**
Candidates should be able to:
i. Identify structures/functions of the CNS;
ii. Describe reflex action with examples;
iii. Describe the structure and functions of sense organs.
`;
  }
  if (topic === 'phe-circulatory') {
    return `${base}
**TOPIC: CIRCULATORY SYSTEM**
**CONTENT:**
- Structure and functions of the heart and vessels (Arteries, Veins, Capillaries).
- Composition and functions of blood.
- Circulation types: Systemic and Pulmonary.

**OBJECTIVES:**
Candidates should be able to:
i. Draw and label the heart;
ii. Compare functions of vessels;
iii. Identify blood components and their functions;
iv. Describe systemic and pulmonary circulations.
`;
  }
  if (topic === 'phe-respiratory') {
    return `${base}
**TOPIC: RESPIRATORY SYSTEM**
**CONTENT:**
- Organs: Nose, Trachea, Lungs.
- Process: Inspiration and Expiration.
- Tissue and Cellular respiration.

**OBJECTIVES:**
Candidates should be able to:
i. Describe structure/functions of respiratory organs;
ii. Explain mechanisms of breathing;
iii. Explain cellular/tissue respiration.
`;
  }
  if (topic === 'phe-excretory') {
    return `${base}
**TOPIC: EXCRETORY SYSTEM**
**CONTENT:**
- Structure and functions of Kidney, Skin, and Lungs (excretory role).
- Formation of products: Urine, Sweat, Carbon-dioxide.

**OBJECTIVES:**
Candidates should be able to:
i. Identify structures of the kidney and skin;
ii. Explain the formation processes of urine and sweat.
`;
  }
  if (topic === 'phe-somatotypes') {
    return `${base}
**TOPIC: SOMATOTYPES AND POSTURE**
**CONTENT:**
- Body types: Endomorph, Mesomorph, Ectomorph.
- Relationship to physical activities.
- Correct posture characteristics.
- Postural defects: Flatfoot, Scoliosis, Kyphosis, Lordosis.
- Causes (habits, heredity, accident) and corrections (exercise, nutrition, medical).

**OBJECTIVES:**
Candidates should be able to:
i. Describe body types and relate them to sports performance;
ii. Define good posture;
iii. Explain types and causes of postural defects;
iv. Suggest corrective measures.
`;
  }
  return null;
};