import { StudentProfile } from '../../../types';

// Common Instruction for Pronunciation Confirmation
const oralInstruction = `
**SPEECH-TO-TEXT VERIFICATION PROTOCOL:**
1. **Display**: Use 'display_content' to show the target word/sound clearly.
2. **Request**: Ask the student to pronounce it aloud.
3. **Listen & Analyze**: Listen to their audio input. The system provides a transcript of what they said. Compare their pronunciation (audio) and the transcript accuracy to the target.
4. **Feedback**: 
   - If correct: Confirm explicitly (e.g., "Spot on!", "Perfect plosive sound").
   - If incorrect: Explain the difference (e.g., "I heard /d/ but we need /t/").
`;

export const getSectionCInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'english-section-c-vowels') {
    return `${base}
${oralInstruction}
**TOPIC: VOWEL SOUNDS**
**OBJECTIVES:**
- Distinguish between Monothongs (short vs long vowels).
- Identify Diphthongs and Triphthongs.
- Pronounce words with similar vowel sounds correctly.

**DRILL:**
- Example: bit /ɪ/ vs beat /i:/.
- Drill pairs of words that are often confused.
`;
  }
  if (topic === 'english-section-c-consonants') {
    return `${base}
${oralInstruction}
**TOPIC: CONSONANT SOUNDS**
**OBJECTIVES:**
- Identify silent letters in words.
- Distinguish between consonant clusters.
- Master difficult sounds like /θ/ and /ð/.

**DRILL:**
- Focus on silent letters (e.g., 'Comb' - b is silent).
`;
  }
  if (topic === 'english-section-c-rhymes') {
    return `${base}
${oralInstruction}
**TOPIC: RHYMES**
**OBJECTIVES:**
- Identify words that rhyme perfectly.
- Distinguish between visual similarity and phonetic rhyming.

**DRILL:**
- Present a word and ask which option rhymes with it.
- Example: "Plough" rhymes with "Cow", not "Rough".
`;
  }
  if (topic === 'english-section-c-stress') {
    return `${base}
${oralInstruction}
**TOPIC: WORD STRESS**
**OBJECTIVES:**
- Identify primary stress in polysyllabic words.
- Apply stress rules for Nouns vs Verbs.

**DRILL:**
- Teach the rules for 2-syllable nouns (stress on 1st) vs verbs (stress on 2nd).
- Example: PRE-sent (gift) vs pre-SENT (to give).
`;
  }
  if (topic === 'english-section-c-emphatic') {
    return `${base}
${oralInstruction}
**TOPIC: EMPHATIC STRESS**
**OBJECTIVES:**
- Identify the emphasized word in a sentence.
- Determine the correct question that prompts an emphatic statement.

**DRILL:**
- Explain that the word written in CAPITAL letters is the one being emphasized.
- Example Statement: "JOHN stole the book." -> Question: "Did Mary steal the book?" (Correct).
`;
  }
  return null;
};