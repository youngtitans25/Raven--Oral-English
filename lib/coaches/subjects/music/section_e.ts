import { StudentProfile } from '../../../types';

export const getSectionEInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'music-diaspora-musicians') {
    return `${base}
**TOPIC: BLACK MUSICIANS IN THE DIASPORA**
**CONTENT:**
- Overview of musicians (Composers, Performers): Mighty Sparrow, James Brown, Bob Marley, Michael Jackson, Stevie Wonder, Lionel Richie, R. Kelly, Lauryn Hill, Kirk Franklin, Tupac Shakur, Shabba Ranks, Quincy Jones, Boyz II Men, Sean Paul, Janet Jackson, Whitney Houston, Beyonce, Brandy, Usher, Kevin Lyttle, Bobby Brown, M.C. Hammer, L.L. Cool J., Dr. Dre, Snoop Dogg, Mary J. Blige, Jay Z, Chris Brown, Bruno Mars, Ne-Yo, Rihanna, Louis Armstrong, Jimmy Cliff, Diana Ross.

**OBJECTIVES:**
Candidates should be able to:
i. Identify the musicians in the diaspora by their names and works.
ii. Assess their individual musical influences on the global society.
`;
  }
  if (topic === 'music-global-genres') {
    return `${base}
**TOPIC: FORMS OF GLOBAL BLACK MUSIC**
**CONTENT:**
- Genres: African-American Spiritual, Gospel music, Jazz, Rhythm and Blues (R&B), Soul, Calypso, Rock 'n' Roll, Reggae, Afro-beat, Tango, Rap, Cha-cha-cha, Bolero, Twist, Hip-hop.

**OBJECTIVES:**
Candidates should be able to:
i. Identify the various forms of musical genres.
ii. Trace the origins of the musical genres.
`;
  }
  if (topic === 'music-nationalism') {
    return `${base}
**TOPIC: NATIONALISM IN NIGERIAN MUSIC**
**CONTENT:**
- "One Love" - Onyeka Onwenu.
- "Which Way Nigeria?" - Sonny Okosun.
- First National Anthem ("Nigeria We Hail Thee") - Frances Benda (1960-1978).

**OBJECTIVES:**
Candidates should be able to:
i. Analyze the lyrics and themes of these songs promoting nationalism.
ii. Discuss the context and impact of these works on Nigerian unity.
`;
  }
  return null;
};