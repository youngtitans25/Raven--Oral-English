import { StudentProfile } from '../../../types';

export const getDramaInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'lit-drama-types') {
    return `${base}
**TOPIC: DRAMA - TYPES & TECHNIQUES**
**CONTENT:**
- Types: Tragedy, Comedy, Tragicomedy, Melodrama, Farce, Opera.
- Techniques: Characterisation, Dialogue, Flashback, Mime, Costume, Décor, Soliloquy/Aside.

**OBJECTIVES:**
Candidates should be able to:
i. Identify and analyse various types of drama.
ii. Demonstrate knowledge of dramatic techniques and stage directions.
iii. Determine themes, plot, setting, and social reality in plays.
`;
  }
  if (topic === 'lit-drama-african') {
    return `${base}
**TOPIC: AFRICAN DRAMA**
**PRESCRIBED TEXT:** *The Marriage of Anansewa* by Efua Sutherland.

**OBJECTIVES:**
Candidates should be able to:
i. Analyse the plot, characters, and setting of the play.
ii. Discuss the themes (e.g., Love, Materialism, Ambition).
iii. Identify dramatic techniques used by Sutherland (e.g., Mboguo songs, Storytelling art).
iv. Relate the play to social realities in Africa.
`;
  }
  if (topic === 'lit-drama-non-african') {
    return `${base}
**TOPIC: NON-AFRICAN DRAMA**
**PRESCRIBED TEXT:** *Antony and Cleopatra* by William Shakespeare.

**OBJECTIVES:**
Candidates should be able to:
i. Analyse the tragic elements in the play.
ii. Examine the relationship between Antony and Cleopatra.
iii. Discuss themes of Power, Love, Betrayal, and Honor.
iv. Identify Shakespearean dramatic devices (soliloquy, imagery, verse vs prose).
`;
  }
  return null;
};