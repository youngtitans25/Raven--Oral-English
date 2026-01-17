import { StudentProfile } from '../../../types';

export const getSectionBInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'music-harmony-triads') {
    return `${base}
**TOPIC: TRIADS AND INVERSIONS**
**CONTENT:**
- Primary and Secondary triads in major/minor keys.
- Chord indications (Roman numerals).
- Inversions.

**OBJECTIVES:**
Candidates should be able to:
i. Identify triads and inversions.
ii. Compare types of triads (major, minor, diminished, augmented).
iii. Determine the use of triads.
`;
  }
  if (topic === 'music-harmony-progression') {
    return `${base}
**TOPIC: CHORD PROGRESSIONS**
**CONTENT:**
- Basic progressions in 4-part vocal style (SATB).
- Dominant 7th chord (root position).

**OBJECTIVES:**
Candidates should be able to:
i. Determine basic chord progressions.
ii. Recognize the dominant 7th chord.
`;
  }
  if (topic === 'music-harmony-cadences') {
    return `${base}
**TOPIC: CADENCES**
**CONTENT:**
- Perfect, Imperfect, Plagal, Interrupted cadences.

**OBJECTIVES:**
Candidates should be able to:
i. Identify types of cadences.
ii. Analyze cadences and their resolutions.
`;
  }
  if (topic === 'music-harmony-modulation') {
    return `${base}
**TOPIC: MODULATION**
**CONTENT:**
- Simple diatonic modulations to closely related keys (Dominant/Subdominant).

**OBJECTIVES:**
Candidates should be able to:
i. Determine the key of a melody and its modulation.
`;
  }
  if (topic === 'music-composition') {
    return `${base}
**TOPIC: ELEMENTARY COMPOSITION**
**CONTENT:**
- Setting words to melody.
- Answering musical phrases.
- Two-part free counterpoint.

**OBJECTIVES:**
Candidates should be able to:
i. Identify suitable melody for words.
ii. Identify rules of two-part writing.
`;
  }
  return null;
};