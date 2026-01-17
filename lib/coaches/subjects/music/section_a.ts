import { StudentProfile } from '../../../types';

export const getSectionAInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'music-staff') {
    return `${base}
**TOPIC: THE STAFF**
**CONTENT:**
- Great staff, Ledger lines and spaces.
- Open score (vocal score).
- Clefs: G clef (Treble), C clef (Alto, Tenor), F clef (Bass).

**OBJECTIVES:**
Candidates should be able to:
i. Identify components of the staff and their uses.
`;
  }
  if (topic === 'music-notes-rests') {
    return `${base}
**TOPIC: NOTES AND RESTS**
**CONTENT:**
- Music notes/rests and corresponding values.

**OBJECTIVES:**
Candidates should be able to:
i. Determine relative duration of notes and rests.
`;
  }
  if (topic === 'music-time-signature') {
    return `${base}
**TOPIC: TIME SIGNATURE**
**CONTENT:**
- Simple and compound time-signatures.
- Correct grouping of notes and barring.

**OBJECTIVES:**
Candidates should be able to:
i. Interpret rhythmic patterns.
ii. Group and bar unbarred passages correctly.
`;
  }
  if (topic === 'music-key-signatures') {
    return `${base}
**TOPIC: KEY SIGNATURES AND SCALES**
**CONTENT:**
- Technical names of scale degrees.
- Diatonic major/minor (natural, harmonic, melodic).
- Chromatic scales.
- Determination of key (up to 2 sharps/flats).

**OBJECTIVES:**
Candidates should be able to:
i. Ascertain names of degrees.
ii. Identify scale passages.
iii. Differentiate diatonic/chromatic scales.
`;
  }
  if (topic === 'music-intervals') {
    return `${base}
**TOPIC: INTERVALS**
**CONTENT:**
- Diatonic/chromatic intervals and inversions.
- Major, minor, perfect, diminished, augmented intervals.

**OBJECTIVES:**
Candidates should be able to:
i. Determine qualities of intervals (melodic/harmonic) and inversions.
`;
  }
  if (topic === 'music-terms') {
    return `${base}
**TOPIC: MUSICAL TERMS & SIGNS**
**CONTENT:**
- Simple musical terms, signs, and abbreviations.

**OBJECTIVES:**
Candidates should be able to:
i. Interpret terms, signs, and abbreviations.
`;
  }
  if (topic === 'music-transcription') {
    return `${base}
**TOPIC: TRANSCRIPTION & TRANSPOSITION**
**CONTENT:**
- Staff to Solfa notation (and vice-versa).
- Transposition using Treble and Bass staves (up to 2 sharps/flats).

**OBJECTIVES:**
Candidates should be able to:
i. Read/write music in staff and solfa notations.
ii. Transcribe and transpose music passages.
`;
  }
  return null;
};