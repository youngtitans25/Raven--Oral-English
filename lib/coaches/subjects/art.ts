import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSectionAInstruction } from './art/section_a';
import { getSectionBInstruction } from './art/section_b';
import { getSectionCInstruction } from './art/section_c';
import { getSectionDInstruction } from './art/section_d';

export const ART_SECTIONS = [
  {
    id: 'art-section-a',
    title: 'Section A: General Art',
    description: 'Classification, elements, principles, and fundamental art terms.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'art-classification', title: 'Classification of Art', description: 'Visual, Performing, and Literary Arts.', image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1000&auto=format&fit=crop' },
      { id: 'art-elements-principles', title: 'Elements & Principles', description: 'Line, color, shape, balance, rhythm, harmony.', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop' },
      { id: 'art-terms', title: 'Art Terms', description: 'Chiaroscuro, motif, greenware, terracotta, etc.', image: 'https://images.unsplash.com/photo-1515405295579-ba7b454989ab?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'art-section-b',
    title: 'Section B: History of Art',
    description: 'From Prehistoric to Contemporary Nigerian Art and Artists.',
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'art-history-dimensions', title: 'Historical Dimensions', description: 'Greek, Roman, Renaissance, 19th/20th Century Movements.', image: 'https://images.unsplash.com/photo-1555589139-3be9823f0485?q=80&w=1000&auto=format&fit=crop' },
      { id: 'art-traditional-african', title: 'Traditional African Art', description: 'Egypt, Ashanti, Dogon, Benin, Ife.', image: 'https://images.unsplash.com/photo-1553531580-652231dae097?q=80&w=1000&auto=format&fit=crop' },
      { id: 'art-traditional-nigerian', title: 'Traditional Nigerian Art', description: 'Nok, Igbo-Ukwu, Ife, Benin, Esie.', image: 'https://images.unsplash.com/photo-1536622340763-91b8a4a06732?q=80&w=1000&auto=format&fit=crop' },
      { id: 'art-nigerian-crafts', title: 'Nigerian Crafts', description: 'Pottery, weaving, carving, leather works.', image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1000&auto=format&fit=crop' },
      { id: 'art-contemporary-nigerian', title: 'Contemporary Nigerian Art', description: 'Art Schools (Zaria, Nsukka) and Artists.', image: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'art-section-c',
    title: 'Section C: Skills & Processes',
    description: 'Techniques in 2D Art, Sculpture, Ceramics, and Computer Graphics.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'art-skills-processes', title: 'Skills & Techniques', description: 'Drawing, Painting, Perspective, Sculpture, CorelDraw.', image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop' },
      { id: 'art-tools-materials', title: 'Tools & Materials', description: 'Brushes, pencils, charcoal, fixatives, equipment maintenance.', image: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'art-section-d',
    title: 'Section D: Appreciation',
    description: 'Art appreciation, functions in society, and entrepreneurship.',
    image: 'https://images.unsplash.com/photo-1507643179173-617d654f9229?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'art-appreciation', title: 'Art Appreciation', description: 'Man-made objects and natural phenomena.', image: 'https://images.unsplash.com/photo-1576504677634-06b2130bd1f3?q=80&w=1000&auto=format&fit=crop' },
      { id: 'art-functions', title: 'Functions of Art', description: 'Religious, social, cultural, political, and therapeutic roles.', image: 'https://images.unsplash.com/photo-1533158388470-9a56699990c6?q=80&w=1000&auto=format&fit=crop' },
      { id: 'art-entrepreneurship', title: 'Art Entrepreneurship', description: 'Job prospects and career opportunities in Visual Arts.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop' }
    ]
  }
];

export const ART_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: ART**\n**FOCUS:** General revision across Classification, History, Skills, and Appreciation.`;

  const instructionA = getSectionAInstruction(profile, topic, base);
  if (instructionA) return instructionA;

  const instructionB = getSectionBInstruction(profile, topic, base);
  if (instructionB) return instructionB;

  const instructionC = getSectionCInstruction(profile, topic, base);
  if (instructionC) return instructionC;

  const instructionD = getSectionDInstruction(profile, topic, base);
  if (instructionD) return instructionD;

  return `${base}
**SUBJECT: ART**
**FOCUS:** General revision.
`;
};