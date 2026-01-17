import { StudentProfile } from '../../../types';

export const getSectionCInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'music-folksongs') {
    return `${base}
**TOPIC: NIGERIAN FOLKSONGS**
**CONTENT:**
- Types: Cradle, Folk-tales, Games, War, Satirical, Dirges/Funeral, Historical, Praise, Worksong.
- Forms: Call and response, Strophic, Through-composed, Antiphony.
- Characteristics:
  - Vocal styles: Recitative, Yodeling, Ululation, Incantation, Heaving, Whistling, Nasalisation.
  - Scales/Modes: Tritonic, Tetratonic, Pentatonic, Hexatonic.
  - Rhythm: Metric/Non-metric, Polymetric, Cross-rhythm, Syncopation, Hemiola, Poly-rhythm.

**OBJECTIVES:**
Candidates should be able to:
i. Identify various folksongs and their types.
ii. Define and compare their forms and features.
iii. Mention characteristic features of vocal, scale, and rhythmic styles in African music.
`;
  }
  if (topic === 'music-traditional-arts') {
    return `${base}
**TOPIC: NIGERIAN TRADITIONAL MUSIC AND ARTS**
**CONTENT:**
- Festivals: Osun, Ifa, Ogun, Ekpo, Ofala, New Yam (Iri ji), Ovia Osee, Mmanwu, Ila-Oso, Argungu, Eyo/Adamu Orisa, Gelede.
- Dances & Arts: Masquerade, Koroso, Atilogwu, Ikperikpe (war dance), Egedelege, Kwaghir, Agbon, Nkwa Umuagbogho, Bata, Bori, Swange, Dundun, Kokoma, Abigbo, Okonko.

**OBJECTIVES:**
Candidates should be able to:
i. Analyse the features and forms of Nigerian traditional music and arts.
ii. Differentiate between various types of festivals, dances, and their origin.
iii. Identify the relationship between music, dance, and drama in African festivals.
`;
  }
  if (topic === 'music-instruments') {
    return `${base}
**TOPIC: NIGERIAN TRADITIONAL INSTRUMENTS**
**CONTENT:**
- Aerophones: Kakaki, Algaita, Sarewa, Pedete, Oja, Opi, Udu, Akpele, Ekutu.
- Chordophones: Goge, Kukuma, Komo, Kuntigi, Molo, Garaya, Gurmi, Une, Ubo-akwara.

**OBJECTIVES:**
Candidates should be able to:
i. Identify characteristic features of instrument classes.
ii. Classify them into their categories.
iii. Trace their origin.
`;
  }
  if (topic === 'music-traditional-musicians') {
    return `${base}
**TOPIC: AFRICAN TRADITIONAL MUSICIANS**
**CONTENT:**
- Nigerians: Sani Sabulu, Dan Maraya Jos, Mamman Shata, Haruna Uji, Ezigbo Obiligbo, Seven-Seven, Morocco Maduka, Mike Ejeagha, Kokoro (Blind Minstrel), Comfort Omoge.
- Other Africans: Vinoko Akpalu, Daniel Amponsah (Koo Nimo), Efua Basa, Kwaa Mensah.

**OBJECTIVES:**
Candidates should be able to:
i. Identify groups to which various musicians belong.
ii. Trace their biographies.
iii. Mention their musical styles.
iv. Assess their contributions to the music industry.
`;
  }
  if (topic === 'music-pop-music') {
    return `${base}
**TOPIC: AFRICAN POPULAR MUSIC**
**CONTENT:**
- Evolution: Highlife, Juju, Afro-beat, Fuji, Apala, Reggae, Makosa, Ikwokirikwo, Okukuseku, Ekassa, Akuko na egwu, Auwrebe, Waka, Hiplife, Hip-hop.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate one musical genre from another.
ii. Examine their influence on society.
`;
  }
  if (topic === 'music-pop-musicians') {
    return `${base}
**TOPIC: AFRICAN POPULAR MUSICIANS**
**CONTENT:**
- Musicians: Bongos Ikwe, Oliver De Coque, Nelly Uchendu, Osita Osadebe, Bright Chimezie, Bobby Benson.

**OBJECTIVES:**
Candidates should be able to:
i. Relate musicians to the music they perform.
ii. Trace their biographies.
iii. Examine their type of music.
iv. Assess their contributions to development.
`;
  }
  if (topic === 'music-art-musicians') {
    return `${base}
**TOPIC: AFRICAN ART MUSICIANS**
**CONTENT:**
- Nigerians: W.W.C. Echezona, Laz Ekwueme, Sam Akpabot, Ikoli Harcourt Whyte, Joshua Uzoigwe, Ayo Bankole, Akin Euba, Fela Sowande, Bode Omojola, Dayo Dedeke, Adams Fiberesima.
- Other Africans: J.H. Kwabena Nketia, N.Z. Nayo, Philip Gbeho, Ephraim Amu.

**OBJECTIVES:**
Candidates should be able to:
i. Relate art composers to their compositions.
ii. Trace their biographies.
iii. Examine their type of compositions.
iv. Assess contributions to Art Music Education.
`;
  }
  return null;
};