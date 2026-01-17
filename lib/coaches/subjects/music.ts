import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSectionAInstruction } from './music/section_a';
import { getSectionBInstruction } from './music/section_b';
import { getSectionCInstruction } from './music/section_c';
import { getSectionDInstruction } from './music/section_d';
import { getSectionEInstruction } from './music/section_e';

export const MUSIC_SECTIONS = [
  {
    id: 'music-section-a',
    title: 'Section A: Rudiments of Music',
    description: 'Staff, Notes, Keys, Intervals, and Transcription.',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384ebd?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'music-staff', title: 'The Staff & Clefs', description: 'Great staff, ledger lines, vocal score, clefs.' },
      { id: 'music-notes-rests', title: 'Notes & Rests', description: 'Values and duration.' },
      { id: 'music-time-signature', title: 'Time Signature', description: 'Simple/Compound time, grouping, barring.' },
      { id: 'music-key-signatures', title: 'Key Signatures & Scales', description: 'Diatonic, Chromatic, Key determination.' },
      { id: 'music-intervals', title: 'Intervals', description: 'Diatonic/Chromatic intervals and inversions.' },
      { id: 'music-terms', title: 'Terms & Signs', description: 'Musical terms, signs, abbreviations.' },
      { id: 'music-transcription', title: 'Transcription', description: 'Staff to Solfa, Transposition.' }
    ]
  },
  {
    id: 'music-section-b',
    title: 'Section B: Elementary Harmony',
    description: 'Triads, Progressions, Cadences, and Composition.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'music-harmony-triads', title: 'Triads & Inversions', description: 'Primary/Secondary triads in major/minor keys.' },
      { id: 'music-harmony-progression', title: 'Chord Progressions', description: 'SATB style, Dominant 7th.' },
      { id: 'music-harmony-cadences', title: 'Cadences', description: 'Perfect, Plagal, Imperfect, Interrupted.' },
      { id: 'music-harmony-modulation', title: 'Modulation', description: 'Simple diatonic modulations.' },
      { id: 'music-composition', title: 'Elementary Composition', description: 'Melody setting, Counterpoint.' }
    ]
  },
  {
    id: 'music-section-c',
    title: 'Section C: History and Literature of African Music',
    description: 'Folksongs, Traditional Arts, Instruments, and Musicians.',
    image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'music-folksongs', title: 'Nigerian Folksongs', description: 'Types, forms (Call & Response), and characteristics.' },
      { id: 'music-traditional-arts', title: 'Traditional Music & Arts', description: 'Festivals (Osun, Argungu) and Dances (Atilogwu).' },
      { id: 'music-instruments', title: 'Traditional Instruments', description: 'Aerophones (Kakaki), Chordophones (Goge).' },
      { id: 'music-traditional-musicians', title: 'Traditional Musicians', description: 'Dan Maraya Jos, Mamman Shata, etc.' },
      { id: 'music-pop-music', title: 'African Popular Music', description: 'Highlife, Juju, Afro-beat, Fuji, Reggae.' },
      { id: 'music-pop-musicians', title: 'Popular Musicians', description: 'Oliver De Coque, Osita Osadebe, Bobby Benson.' },
      { id: 'music-art-musicians', title: 'African Art Musicians', description: 'Ekwueme, Akpabot, Nketia, etc.' }
    ]
  },
  {
    id: 'music-section-d',
    title: 'Section D: History and Literature of Western Music',
    description: 'Western styles, Forms, Media, and Music Technology.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'music-western-history', title: 'Western Music Styles', description: 'Medieval to 20th Century periods.' },
      { id: 'music-forms-media', title: 'Music Forms & Media', description: 'Forms, Instruments, Computer Tech, and AI.' }
    ]
  },
  {
    id: 'music-section-e',
    title: 'Section E: Comparative Music Studies',
    description: 'Black musicians in diaspora, global genres, and Nationalism.',
    image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'music-diaspora-musicians', title: 'Black Musicians in Diaspora', description: 'Bob Marley, Michael Jackson, Beyonce, etc.' },
      { id: 'music-global-genres', title: 'Global Musical Forms', description: 'Jazz, Reggae, Hip-hop, Calypso, Spirituals.' },
      { id: 'music-nationalism', title: 'Nationalism in Nigerian Music', description: 'Onyeka Onwenu, Sonny Okosun, National Anthem.' }
    ]
  }
];

export const MUSIC_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: MUSIC**\n**FOCUS:** General revision across Rudiments, Harmony, African Music, Western Music, and Comparative Studies.`;

  const instructionA = getSectionAInstruction(profile, topic, base);
  if (instructionA) return instructionA;

  const instructionB = getSectionBInstruction(profile, topic, base);
  if (instructionB) return instructionB;

  const instructionC = getSectionCInstruction(profile, topic, base);
  if (instructionC) return instructionC;

  const instructionD = getSectionDInstruction(profile, topic, base);
  if (instructionD) return instructionD;

  const instructionE = getSectionEInstruction(profile, topic, base);
  if (instructionE) return instructionE;

  return `${base}
**SUBJECT: MUSIC**
**FOCUS:** General revision.
`;
};