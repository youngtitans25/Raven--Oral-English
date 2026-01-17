import { StudentProfile } from '../../../types';

export const getSectionDInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'music-western-history') {
    return `${base}
**TOPIC: HISTORY OF WESTERN MUSIC STYLES**
**CONTENT:**
- Medieval/Middle Age (800–1400).
- Renaissance period (1400–1600).
- Baroque period (1600–1750).
- Classical period (1750–1820).
- Romantic period (1820–1900).
- 20th Century (1900–1999).

**OBJECTIVES:**
Candidates should be able to:
i. Identify the various periods with dates from Medieval to 20th century.
ii. Trace the stages of the development of western musical practice.
iii. Identify major composers of these periods and assess their contributions.
`;
  }
  if (topic === 'music-forms-media') {
    return `${base}
**TOPIC: MUSIC FORMS AND MEDIA**
**CONTENT:**
- Forms: Binary, Ternary, Rondo, Sonata Allegro, Dance Suite, Canon, Free Fantasia, Theme and variation.
- Instruments: Orchestral and Band classifications; Voice types/ranges.
- Keyboard Instruments: Organ, piano, electronic keyboard.
- Other Instruments: Ukulele, banjo, guitar, mandolin, harp, accordion, xylophone, marimba.
- Technology: Software (Finale, Sibelius, Cubase, Reason, Sound Forge), tuning fork, pitch pipe.
- AI in Music: Evolutionary trend, types, application of AI tools in composition, AI-Powered Generators.

**OBJECTIVES:**
Candidates should be able to:
i. Identify general forms and various types of instruments in Western music.
ii. Relate Music to modern technology.
iii. Assess the contributions of Artificial Intelligence (AI) in Music Technology.
`;
  }
  return null;
};