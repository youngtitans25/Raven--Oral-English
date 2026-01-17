import { StudentProfile } from '../../../types';

export const getSection5Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'hausa-oral-lit') {
    return `${base}
**TOPIC: ADABIN BAKA (ORAL LITERATURE)**
**CONTENT:**
- Narratives (Zuben Baka): Tatsuniya, Almara, Hikaya.
- Folk-sayings (Maganganun Azanci): Kirari, Habaici, Karin magana.
- Oral Songs (Wako'in Baka): Court songs, Work songs, Children's songs.
- Traditional Drama (Wasan Kwaikwayo): Children's (Langa, Tashe) vs Adult's (Yan kama, Kalankuwa).

**OBJECTIVES:**
Candidates should be able to:
i. Identify types of oral narratives and sayings;
ii. Analyze oral songs (themes, style, singers);
iii. Distinguish between children's and adult's traditional drama.
`;
  }
  if (topic === 'hausa-written-prose') {
    return `${base}
**TOPIC: RUBUTACCEN ADABI - ZUBE (WRITTEN PROSE)**
**TEXT:** Maraya
**OBJECTIVES:**
Candidates should be able to:
i. Analyze the form, structure, theme, and style of the text;
ii. Comprehend the story and key messages.
`;
  }
  if (topic === 'hausa-written-poetry') {
    return `${base}
**TOPIC: RUBUTACCEN ADABI - WA'KA (WRITTEN POETRY)**
**TEXT:** Wako'in Wayar Da kai Don Manazarta Hausa Na Daya
**OBJECTIVES:**
Candidates should be able to:
i. Understand the theme, style, and structure of the selected poems;
ii. Analyze the use of language and figures of speech.
`;
  }
  if (topic === 'hausa-written-drama') {
    return `${base}
**TOPIC: RUBUTACCEN ADABI - WASAN KWAIKWAYO (WRITTEN DRAMA)**
**TEXT:** Malam Zalimu
**OBJECTIVES:**
Candidates should be able to:
i. Analyze the setting, theme, style, and characters;
ii. Evaluate the message and moral lessons of the play.
`;
  }
  return null;
};