import { StudentProfile } from '../../../types';

export const getSectionCInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'art-skills-processes') {
    return `${base}
**TOPIC: ARTISTIC SKILLS, TECHNIQUES AND PROCESSES**
**SCOPE:**
- Two-Dimensional Art: drawing, painting, graphics, textile design.
- Perspective: Linear, angular, aerial, parallel. Terms: foreground, picture plane, eye-level, vanishing point, foreshortening, optical illusion, depth.
- Sculpture, Ceramics and Crafts.
- Computer Graphics: CorelDraw.

**OBJECTIVES:**
Candidates should be conversant with:
i. the techniques, skills and processes with emphasis on tone, composition and colour application;
ii. the types of perspective;
iii. the use of perspective rules and terms.
`;
  }
  if (topic === 'art-tools-materials') {
    return `${base}
**TOPIC: TOOLS, MATERIALS AND EQUIPMENT**
**SCOPE:**
- 2D Tools: brushes, lino cutters, drawing instruments, calligraphic pens, sharpeners.
- 2D Materials: pencils, charcoal, pastel, crayon, fixative, fabric, dyes, lino, wood blocks.
- 2D Equipment: Light table, spray gun, enlarger, computer.

**OBJECTIVES:**
Candidates should be able to:
i. maintain art tools;
ii. use art materials;
iii. operate and maintain art equipment;
iv. improvise alternative tools, material and equipment.
`;
  }
  return null;
};