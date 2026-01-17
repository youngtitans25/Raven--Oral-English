import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSectionAInstruction } from './igbo/section_a';
import { getSectionBInstruction } from './igbo/section_b';
import { getSectionCInstruction } from './igbo/section_c';
import { getSectionDInstruction } from './igbo/section_d';

export const IGBO_SECTIONS = [
  {
    id: 'igbo-section-a',
    title: 'Section A: Asụsụ (Language)',
    description: 'Essay, Comprehension, Sounds, Orthography, and Grammar.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'igbo-essay', title: 'Edemede (Essay)', description: 'Narrative, Descriptive, Argumentative, Letter Writing.' },
      { id: 'igbo-comprehension', title: 'Aghọtaazaa (Comprehension)', description: 'Reading passages and answering questions.' },
      { id: 'igbo-sounds', title: 'Ụdaasụsụ (Sounds)', description: 'Vowels, Consonants, Tone, Sound patterns.' },
      { id: 'igbo-orthography', title: 'Nsụpụpe (Orthography)', description: 'Spelling rules and standard orthography.' },
      { id: 'igbo-grammar', title: 'Ụtọasụsụ (Grammar)', description: 'Parts of speech, Morphemes, Sentence structure.' },
      { id: 'igbo-derivation', title: 'Mmụbaokwu (Derivation)', description: 'Coinages, Loans, and Loan-blends.' },
      { id: 'igbo-translation', title: 'Ntụgharị (Translation)', description: 'Translation techniques.' }
    ]
  },
  {
    id: 'igbo-section-b',
    title: 'Section B: Agụmagụ (Literature)',
    description: 'Oral and Written Literature (Prose, Poetry, Drama).',
    image: 'https://images.unsplash.com/photo-1519682337058-a6fabd63a396?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'igbo-lit-devices', title: 'Atụmatụokwu (Literary Devices)', description: 'Figures of speech and literary terms.' },
      { id: 'igbo-oral-lit', title: 'Agụmagụ Ọnụ (Oral Lit)', description: 'Folktales, Poems, Songs, Riddles.' },
      { id: 'igbo-prose', title: 'Iduazị (Prose)', description: 'Analysis of "Juo Obinna".' },
      { id: 'igbo-poetry', title: 'Abụ (Poetry)', description: 'Analysis of "Akponuche".' },
      { id: 'igbo-drama', title: 'Ejije (Drama)', description: 'Analysis of "Otu Mkpịsị Aka".' }
    ]
  },
  {
    id: 'igbo-section-c',
    title: 'Section C: Omenala (Customs)',
    description: 'Customs, Institutions, Beliefs, and Economy.',
    image: 'https://images.unsplash.com/photo-1590955559496-503457008569?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'igbo-customs-social', title: 'Omenala (Social Customs)', description: 'Greetings, Marriage, Birth, Burial.' },
      { id: 'igbo-institutions', title: 'Ewimmewu (Institutions)', description: 'Titles, Kinship, Age grades, Governance.' },
      { id: 'igbo-beliefs', title: 'Nkwenye na Ofufe (Beliefs)', description: 'Worship, Taboos, Ogbanje.' },
      { id: 'igbo-economy', title: 'Akụnaụba (Economy)', description: 'Occupations, Land ownership.' },
      { id: 'igbo-festivals', title: 'Emume (Festivals)', description: 'New Yam, Masquerades, Games.' }
    ]
  },
  {
    id: 'igbo-section-d',
    title: 'Section D: General Issues',
    description: 'Current Affairs, Authors, and Contemporary Issues.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'igbo-general', title: 'General & Current Affairs', description: 'Lectures, Authors, Current Issues (HIV, Rights).' }
    ]
  }
];

export const IGBO_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: IGBO**\n**FOCUS:** General revision across Language, Literature, and Culture.`;

  const instructionA = getSectionAInstruction(profile, topic, base);
  if (instructionA) return instructionA;

  const instructionB = getSectionBInstruction(profile, topic, base);
  if (instructionB) return instructionB;

  const instructionC = getSectionCInstruction(profile, topic, base);
  if (instructionC) return instructionC;

  const instructionD = getSectionDInstruction(profile, topic, base);
  if (instructionD) return instructionD;

  return `${base}
**SUBJECT: IGBO**
**FOCUS:** General revision.
`;
};