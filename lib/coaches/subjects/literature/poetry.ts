import { StudentProfile } from '../../../types';

export const getPoetryInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'lit-poetry-types') {
    return `${base}
**TOPIC: POETRY - TYPES & DEVICES**
**CONTENT:**
- Types: Sonnet, Ode, Lyric, Elegy, Ballad, Panegyric, Epic, Blank Verse.
- Devices: Imagery, Sound (Rhyme/Rhythm), Diction, Persona.

**OBJECTIVES:**
Candidates should be able to:
i. Identify distinctive features of poetic types.
ii. Determine devices used for aesthetic effect.
iii. Deduce thematic preoccupation and socio-political relevance.
`;
  }
  if (topic === 'lit-poetry-african') {
    return `${base}
**TOPIC: AFRICAN POETRY**
**PRESCRIBED POEMS:**
1. "Once Upon a Time" - Gabriel Okara
2. "New Tongue" - Elizabeth L.A. Kamara
3. "Night" - Wole Soyinka
4. "Not my Business" - Niyi Osundare
5. "Hearty Garlands" - S.O.H. Afriyie-Vidza
6. "The Breast of the Sea" - Syl Cheney-Coker

**OBJECTIVES:**
Candidates should be able to:
i. Analyze themes and styles of these African poets.
ii. Relate the poems to African experiences (colonialism, corruption, culture).
`;
  }
  if (topic === 'lit-poetry-non-african') {
    return `${base}
**TOPIC: NON-AFRICAN POETRY**
**PRESCRIBED POEMS:**
1. "She Walks in Beauty" - Lord Byron
2. "The Nun's Priest Tale" (shortened) - Geoffrey Chaucer
3. "The Telephone Call" - Fleur Adcock
4. "The Stone" - Wilfred Wilson Gipson

**OBJECTIVES:**
Candidates should be able to:
i. Analyze the themes (Love, Nature, Death, etc.) in these poems.
ii. Identify specific poetic devices used by these non-African poets.
`;
  }
  return null;
};