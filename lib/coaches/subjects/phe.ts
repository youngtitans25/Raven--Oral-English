import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSectionAInstruction } from './phe/section_a';
import { getSectionBInstruction } from './phe/section_b';
import { getSectionCInstruction } from './phe/section_c';
import { getSectionDInstruction } from './phe/section_d';
import { getSectionEInstruction } from './phe/section_e';
import { getSectionFInstruction } from './phe/section_f';
import { getSectionGInstruction } from './phe/section_g';
import { getSectionHInstruction } from './phe/section_h';
import { getSectionIInstruction } from './phe/section_i';
import { getSectionJInstruction } from './phe/section_j';
import { getSectionKInstruction } from './phe/section_k';
import { getSectionLInstruction } from './phe/section_l';

export const PHE_SECTIONS = [
  {
    id: 'phe-section-a',
    title: 'Section A: Foundations of PHE',
    description: 'Principles, Philosophy, History of PE, and Health Education settings.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phe-pe-principles', title: 'Principles & History of PE', description: 'Philosophy, Founding Fathers, and History (Greece/Rome/Nigeria).' },
      { id: 'phe-he-philosophy', title: 'Health Education Foundations', description: 'Philosophy, Objectives, Settings, and Health Promotion.' }
    ]
  },
  {
    id: 'phe-section-b',
    title: 'Section B: Anatomy & Physiology',
    description: 'Body systems, Skeleton, Muscles, Nerves, and Somatotypes.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phe-cells', title: 'Cells & Systems', description: 'Cell structure, division (Mitosis/Meiosis), Tissues.' },
      { id: 'phe-skeletal', title: 'Skeletal System', description: 'Bones, Joints, and Movement.' },
      { id: 'phe-muscular', title: 'Muscular System', description: 'Major muscles and Contractions (Isometric/Isotonic).' },
      { id: 'phe-nervous', title: 'Nervous System', description: 'CNS, Reflexes, and Sense Organs (Eye, Ear, etc.).' },
      { id: 'phe-circulatory', title: 'Circulatory System', description: 'Heart, Blood vessels, and Circulation types.' },
      { id: 'phe-respiratory', title: 'Respiratory System', description: 'Organs, Breathing mechanism, Respiration.' },
      { id: 'phe-excretory', title: 'Excretory System', description: 'Kidney, Skin, Lungs, and Waste formation.' },
      { id: 'phe-somatotypes', title: 'Somatotypes & Posture', description: 'Body types, Postural defects (Kyphosis, Scoliosis) & Correction.' }
    ]
  },
  {
    id: 'phe-section-c',
    title: 'Section C: Sports & Games',
    description: 'Track & Field, Ball games, and Racket games.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phe-athletics-track', title: 'Athletics: Track Events', description: 'Sprints, Relays, Hurdles, Middle/Long distance.' },
      { id: 'phe-athletics-field', title: 'Athletics: Field Events', description: 'Throws (Javelin, Discus) and Jumps (Long, High, Pole).' },
      { id: 'phe-ball-games', title: 'Ball Games', description: 'Football and Basketball skills, rules, and officiating.' },
      { id: 'phe-racket-games', title: 'Racket Games', description: 'Table Tennis and Badminton skills, rules, and officiating.' }
    ]
  },
  {
    id: 'phe-section-d',
    title: 'Section D: Food, Nutrition & Drugs',
    description: 'Diet, Nutrients, Deficiencies, and Drug Education.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phe-food', title: 'Food & Diet', description: 'Classes of food, Balanced diet, Diet planning.' },
      { id: 'phe-nutrition', title: 'Nutrition & Hydration', description: 'Deficiencies, Beverages, Importance of Water.' },
      { id: 'phe-drugs', title: 'Drugs & Substance Abuse', description: 'Types, Abuse, Prevention, and Effects.' }
    ]
  },
  {
    id: 'phe-section-e',
    title: 'Section E: Fitness & Conditioning',
    description: 'Physical fitness components and training programmes.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phe-fitness', title: 'Physical Fitness', description: 'Health & Skill related components, Benefits.' },
      { id: 'phe-conditioning', title: 'Conditioning Programmes', description: 'Aerobic, Anaerobic, Strength, Endurance.' }
    ]
  },
  {
    id: 'phe-section-f',
    title: 'Section F: Recreation & Dance',
    description: 'Leisure activities, Traditional dance, and Costumes.',
    image: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phe-recreation', title: 'Recreation & Leisure', description: 'Indoor/Outdoor activities, Work vs Rest.' },
      { id: 'phe-dance', title: 'Dance', description: 'Traditional Nigerian dances and costumes.' }
    ]
  },
  {
    id: 'phe-section-g',
    title: 'Section G: First Aid & Safety',
    description: 'Emergency care, injuries, safety education, and agencies.',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phe-first-aid', title: 'First Aid', description: 'Box contents, treating injuries (cuts, fractures), and agencies.' },
      { id: 'phe-safety-education', title: 'Safety Education', description: 'Accidents, Disasters, Prevention, and Relief.' }
    ]
  },
  {
    id: 'phe-section-h',
    title: 'Section H: Sports Competitions',
    description: 'National and International games, governing bodies.',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phe-national-sports', title: 'National Competitions', description: 'Federations, National Sports Festival.' },
      { id: 'phe-institutional-games', title: 'Institutional Games', description: 'NUGA, NIPOGA, NATCEGA, NSSF.' },
      { id: 'phe-international-sports', title: 'International Sports', description: 'All Africa Games, IOC, FIFA, IAAF, etc.' }
    ]
  },
  {
    id: 'phe-section-i',
    title: 'Section I: Adapted PE',
    description: 'Disability, Special Needs, and Rehabilitation.',
    image: 'https://images.unsplash.com/photo-1615751072497-5f5169febe33?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phe-disability', title: 'Disability & Special Needs', description: 'Types, prevention, adapted activities, and corrective exercises.' }
    ]
  },
  {
    id: 'phe-section-j',
    title: 'Section J: Health (Personal/Community)',
    description: 'Hygiene, Family health, Aging, Environment, and Pollution.',
    image: 'https://images.unsplash.com/photo-1576091160550-217358c7db81?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phe-personal-health', title: 'Personal Health', description: 'Hygiene, Screening (Eye/Ear/Dental), Promotion.' },
      { id: 'phe-community-health', title: 'Community Health', description: 'Orthodox vs Traditional services, Family health, Aging.' },
      { id: 'phe-environmental-health', title: 'Environmental Health', description: 'Housing, Water, Waste, Pollution, Pests.' }
    ]
  },
  {
    id: 'phe-section-k',
    title: 'Section K: Diseases',
    description: 'Communicable and Non-Communicable diseases, prevention, and control.',
    image: 'https://images.unsplash.com/photo-1584036561566-b93a50d08195?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phe-disease-intro', title: 'Disease: Meaning & Causes', description: 'Definition, causes, and general prevention.' },
      { id: 'phe-communicable', title: 'Communicable Diseases', description: 'Air-borne, Water-borne, Insect-borne, Contact diseases (HIV/AIDS).' },
      { id: 'phe-non-communicable', title: 'Non-Communicable Diseases', description: 'Hypertension, Cancer, Diabetes, Sickle cell, Asthma.' }
    ]
  },
  {
    id: 'phe-section-l',
    title: 'Section L: Family Life & Sexuality',
    description: 'Family types, Human sexuality, and Family planning.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'phe-family', title: 'The Family', description: 'Types (Nuclear/Extended) and characteristics of a happy family.' },
      { id: 'phe-sexuality', title: 'Human Sexuality Education', description: 'Reproductive health rights and importance.' },
      { id: 'phe-family-planning', title: 'Family Planning', description: 'Methods, challenges, and promoting agencies.' }
    ]
  }
];

export const PHE_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: PHYSICAL AND HEALTH EDUCATION**\n**FOCUS:** General revision across all sections including Diseases and Family Life.`;

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

  const instructionF = getSectionFInstruction(profile, topic, base);
  if (instructionF) return instructionF;

  const instructionG = getSectionGInstruction(profile, topic, base);
  if (instructionG) return instructionG;

  const instructionH = getSectionHInstruction(profile, topic, base);
  if (instructionH) return instructionH;

  const instructionI = getSectionIInstruction(profile, topic, base);
  if (instructionI) return instructionI;

  const instructionJ = getSectionJInstruction(profile, topic, base);
  if (instructionJ) return instructionJ;

  const instructionK = getSectionKInstruction(profile, topic, base);
  if (instructionK) return instructionK;

  const instructionL = getSectionLInstruction(profile, topic, base);
  if (instructionL) return instructionL;

  return `${base}
**SUBJECT: PHYSICAL AND HEALTH EDUCATION**
**FOCUS:** General revision.
`;
};