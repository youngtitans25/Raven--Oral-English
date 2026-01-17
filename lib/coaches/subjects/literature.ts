import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getDramaInstruction } from './literature/drama';
import { getProseInstruction } from './literature/prose';
import { getPoetryInstruction } from './literature/poetry';
import { getGeneralLitInstruction } from './literature/general';

export const LITERATURE_SECTIONS = [
  {
    id: 'lit-section-drama',
    title: 'Section 1: Drama',
    description: 'Types, techniques, and prescribed texts (African & Non-African).',
    image: 'https://images.unsplash.com/photo-1503095392269-41a97f77b471?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'lit-drama-types', title: 'Types & Techniques', description: 'Tragedy, Comedy, Characterisation, etc.', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop' },
      { id: 'lit-drama-african', title: 'African Drama', description: 'Study of "The Marriage of Anansewa" by Efua Sutherland.', image: '/marriage-of-anansewa.jpg' },
      { id: 'lit-drama-non-african', title: 'Non-African Drama', description: 'Study of "Antony and Cleopatra" by William Shakespeare.', image: '/antony-and-cleopatra.jpg' }
    ]
  },
  {
    id: 'lit-section-prose',
    title: 'Section 2: Prose',
    description: 'Narrative techniques and prescribed novels.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'lit-prose-types', title: 'Types & Techniques', description: 'Fiction, Non-fiction, POV, Stream of consciousness.', image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1000&auto=format&fit=crop' },
      { id: 'lit-prose-african', title: 'African Prose', description: '"So the Path Does not Die" & "Redemption Road".', image: '/african-prose.jpg' },
      { id: 'lit-prose-non-african', title: 'Non-African Prose', description: '"Path of Lucas: The Journey He Endured".', image: '/path-of-lucas.jpg' }
    ]
  },
  {
    id: 'lit-section-poetry',
    title: 'Section 3: Poetry',
    description: 'Poetic devices and analysis of prescribed poems.',
    image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'lit-poetry-types', title: 'Types & Devices', description: 'Sonnet, Ode, Imagery, Diction, etc.', image: 'https://images.unsplash.com/photo-1478737270239-2f02b77ac618?q=80&w=1000&auto=format&fit=crop' },
      { id: 'lit-poetry-african', title: 'African Poetry', description: 'Okara, Soyinka, Osundare, etc.', image: 'https://images.unsplash.com/photo-1621360841013-c768371e93cf?q=80&w=1000&auto=format&fit=crop' },
      { id: 'lit-poetry-non-african', title: 'Non-African Poetry', description: 'Byron, Chaucer, Adcock, Gipson.', image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'lit-section-general',
    title: 'Section 4: General Principles',
    description: 'Literary terms and appreciation of unseen passages.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'lit-general-terms', title: 'Literary Terms', description: 'Foreshadowing, suspense, satire, etc.', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop' },
      { id: 'lit-appreciation', title: 'Literary Appreciation', description: 'Analysis of unseen extracts.', image: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?q=80&w=1000&auto=format&fit=crop' }
    ]
  }
];

export const LIT_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: LITERATURE-IN-ENGLISH**\n**FOCUS:** General revision across Drama, Prose, Poetry, and Literary Appreciation.`;

  const instructionDrama = getDramaInstruction(profile, topic, base);
  if (instructionDrama) return instructionDrama;

  const instructionProse = getProseInstruction(profile, topic, base);
  if (instructionProse) return instructionProse;

  const instructionPoetry = getPoetryInstruction(profile, topic, base);
  if (instructionPoetry) return instructionPoetry;

  const instructionGeneral = getGeneralLitInstruction(profile, topic, base);
  if (instructionGeneral) return instructionGeneral;

  return `${base}
**SUBJECT: LITERATURE-IN-ENGLISH**
**FOCUS:** General revision.
`;
};