import { StudentProfile } from '../../../types';

export const getSection5Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'french-sounds') {
    return `${base}
**TOPIC: ORAL FRENCH - SOUNDS**
**CONTENT:**
- Sound discrimination: tout/tu, fais/fée.
- Letter-sound correspondence: ai = /ɛ/, eau = /o/.
- Syllabification: con-ten-te-ment.
- Liaison: trois_animaux.
- Sense groups in reading.
- Identification of similar sounds.

**OBJECTIVES:**
Candidates should be able to:
i. Discriminate between similar French sounds;
ii. Apply rules of liaison and elision;
iii. Read with correct rhythm and intonation.

**INSTRUCTION FOR AI:**
Use the 'display_content' tool to show word pairs (e.g., "Tout" vs "Tu"). Ask the student to pronounce them, then pronounce them yourself for correction.
`;
  }
  if (topic === 'french-culture') {
    return `${base}
**TOPIC: CULTURE AND CIVILIZATION**
**CONTENT:**
- Characteristics of educational, socio-economic, and political life.
- Comparison between Francophone Africa, France, and Nigeria.

**OBJECTIVES:**
Candidates should be able to:
i. Identify cultural similarities and differences;
ii. Demonstrate knowledge of Francophone civilization.
`;
  }
  return null;
};