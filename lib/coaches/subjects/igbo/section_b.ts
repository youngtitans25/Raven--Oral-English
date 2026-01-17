import { StudentProfile } from '../../../types';

export const getSectionBInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'igbo-lit-devices') {
    return `${base}
**TOPIC: ATỤMATỤOKWU (LITERARY DEVICES)**
**CONTENT:**
- Alliteration (Biambia mgbochiume), Assonance (Biambia ụdaume), Parallelism (Kwunkwugha), etc.

**OBJECTIVES:**
Candidates should be able to:
i. Identify and interpret literary devices in passages;
ii. Use Igbo literary devices appropriately.
`;
  }
  if (topic === 'igbo-oral-lit') {
    return `${base}
**TOPIC: AGỤMAGỤ ỌNỤ (ORAL LITERATURE)**
**CONTENT:**
- Folktales (Ifo), Myths (Nkomiriko), Legends (Nkokiriko).
- Poems (Abụ), Songs (Uri), Chants (Mbem), Riddles (Agwugwa).
- Tongue-twisters (Okwuntuhi).

**OBJECTIVES:**
Candidates should be able to:
i. Analyze various genres of oral literature;
ii. Apply lessons from oral literature to daily life.
`;
  }
  if (topic === 'igbo-prose') {
    return `${base}
**TOPIC: IDUAAZỊ (PROSE)**
**TEXT:** *Juo Obinna* by Tony U. Ubesie (1993).
**CONTENT:**
- Plot, Characters, Theme, Setting.

**OBJECTIVES:**
Candidates should be able to:
i. Interpret the text and isolate characters;
ii. Identify figurative expressions;
iii. Draw moral lessons.
`;
  }
  if (topic === 'igbo-poetry') {
    return `${base}
**TOPIC: ABỤ (POETRY)**
**TEXT:** *Akponuche* by Inno Uzoma Nwadike (2014).
**SELECTED POEMS:**
- Ọchịchị (18-19), Onye Ndu (22-23), Nne Ọma (29-30), Oke Ọchịchị (40-41).
- Asịla M Na Ọ Dị Mma (53-54), Ihe Uwa (60-61), Jiri Nwayo (62-63).
- Eziokwu (65-66), Mma (67-69), Nwanyị (92-94), Aja Ala (101-103).
- Ala Igbo (108-111), Ndụ M N'uwa A (131-132), Oji (150-151).
- Uwa Emebighị (151-154), Amamihe (168-169), Ndụ Nwaanyị (178-180).
- Nna M Ogoenyi (181-184), Ụloakwụkwọ (192-193), Akwa Nnabuenyi Ugonna Bere (249-252).

**OBJECTIVES:**
Candidates should be able to:
i. Compare types and themes;
ii. Analyze structure and literary devices;
iii. Apply moral lessons.
`;
  }
  if (topic === 'igbo-drama') {
    return `${base}
**TOPIC: EJIJE (DRAMA)**
**TEXT:** *Otu Mkpịsị Aka* by J. C. Maduekwe (1979).
**CONTENT:**
- Theme, Plot, Characters, Style.

**OBJECTIVES:**
Candidates should be able to:
i. Identify drama type and themes;
ii. Appraise social problems raised;
iii. Identify moral lessons.
`;
  }
  return null;
};