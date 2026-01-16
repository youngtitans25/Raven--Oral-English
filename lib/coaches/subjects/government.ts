import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getPart1Instruction } from './government/part_1';
import { getPart2Instruction } from './government/part_2';
import { getPart3Instruction } from './government/part_3';
import { getPart4Instruction } from './government/part_4';

export const GOVERNMENT_SECTIONS = [
  {
    id: 'gov-part-1',
    title: 'Part I: Elements of Government',
    description: 'Core concepts, systems, and structures of governance.',
    image: 'https://images.unsplash.com/photo-1541872703-74c5963631df?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'gov-definition', title: 'Definition & Scope', description: 'Functions and characteristics of government.', image: '/images/gov-def.jpg' },
      { id: 'gov-concepts', title: 'Basic Concepts', description: 'Power, Authority, Legitimacy, and Sovereignty.', image: '/images/gov-concepts.jpg' },
      { id: 'gov-forms', title: 'Forms of Government', description: 'Monarchy, Democracy, Autocracy, etc.', image: '/images/gov-forms.jpg' },
      { id: 'gov-arms', title: 'Arms of Government', description: 'Legislature, Executive, and Judiciary.', image: '/images/gov-arms.jpg' },
      { id: 'gov-structures', title: 'Structures of Governance', description: 'Unitary, Federal, and Confederal systems.', image: '/images/gov-structures.jpg' },
      { id: 'gov-systems', title: 'Systems of Governance', description: 'Presidential vs Parliamentary systems.', image: '/images/gov-systems.jpg' },
      { id: 'gov-ideologies', title: 'Political Ideologies', description: 'Capitalism, Socialism, Communism, etc.', image: '/images/gov-ideo.jpg' },
      { id: 'gov-constitution', title: 'Constitution', description: 'Sources, types, and functions.', image: '/images/gov-const.jpg' },
      { id: 'gov-principles', title: 'Democratic Principles', description: 'Rule of Law, Separation of Powers, Rights.', image: '/images/gov-demo.jpg' },
      { id: 'gov-citizenship', title: 'Citizenship', description: 'Acquisition, rights, and obligations.', image: '/images/gov-citizen.jpg' },
      { id: 'gov-electoral', title: 'Electoral Process', description: 'Suffrage, voting systems, and electoral bodies.', image: '/images/gov-vote.jpg' },
      { id: 'gov-parties', title: 'Political Parties', description: 'Party systems and functions.', image: '/images/gov-parties.jpg' },
      { id: 'gov-pressure-groups', title: 'Pressure Groups', description: 'Types and modes of operation.', image: '/images/gov-group.jpg' },
      { id: 'gov-public-opinion', title: 'Public Opinion', description: 'Measurement and importance.', image: '/images/gov-public.jpg' },
      { id: 'gov-civil-service', title: 'Civil Service', description: 'Structure and functions of public service.', image: '/images/gov-civil.jpg' }
    ]
  },
  {
    id: 'gov-part-2',
    title: 'Part II: Political Development in Nigeria',
    description: 'Pre-colonial era, colonialism, independence, and the republics.',
    image: 'https://images.unsplash.com/photo-1599401738722-e42b6b0b005e?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'gov-pre-colonial', title: 'Pre-Colonial Politics', description: 'Hausa, Yoruba, and Igbo systems.', image: '/images/gov-pre.jpg' },
      { id: 'gov-colonial', title: 'Colonial Administration', description: 'British Indirect Rule vs French policies.', image: '/images/gov-colonial.jpg' },
      { id: 'gov-nationalism', title: 'Nationalism', description: 'The struggle for independence and key leaders.', image: '/images/gov-nation.jpg' },
      { id: 'gov-const-dev', title: 'Constitutional History', description: 'Clifford to Lyttleton (Pre-independence).', image: '/images/gov-const-hist.jpg' },
      { id: 'gov-post-ind-const', title: 'Post-Independence', description: '1960, 1963, 1979, 1999 Constitutions.', image: '/images/gov-post.jpg' },
      { id: 'gov-federalism', title: 'Nigerian Federalism', description: 'State creation and revenue allocation.', image: '/images/gov-fed.jpg' },
      { id: 'gov-local-govt', title: 'Local Government', description: '1976 Reforms and administration.', image: '/images/gov-local.jpg' },
      { id: 'gov-military', title: 'Military in Politics', description: 'Coups, regimes, and transition to civil rule.', image: '/images/gov-mil.jpg' }
    ]
  },
  {
    id: 'gov-part-3',
    title: 'Part III: Foreign Policy',
    description: 'Concepts, determinants, and Nigeria\'s external relations.',
    image: 'https://images.unsplash.com/photo-1529104661036-621110202977?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'gov-foreign-policy-concept', title: 'Concept of Foreign Policy', description: 'National interest and determinants.', image: '/images/gov-fp.jpg' },
      { id: 'gov-nigeria-foreign-policy', title: 'Nigeria\'s Foreign Policy', description: 'Non-alignment and Afrocentrism.', image: '/images/gov-nfp.jpg' }
    ]
  },
  {
    id: 'gov-part-4',
    title: 'Part IV: International Organizations',
    description: 'UN, AU, ECOWAS, OPEC and the Commonwealth.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'gov-int-orgs', title: 'International Organizations', description: 'UNO, OAU/AU, ECOWAS, OPEC, Commonwealth.', image: '/images/gov-int.jpg' }
    ]
  }
];

export const GOVERNMENT_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: GOVERNMENT**\n**FOCUS:** General revision across Elements of Government, Nigerian Political History, and International Relations.`;

  const instruction1 = getPart1Instruction(profile, topic, base);
  if (instruction1) return instruction1;

  const instruction2 = getPart2Instruction(profile, topic, base);
  if (instruction2) return instruction2;

  const instruction3 = getPart3Instruction(profile, topic, base);
  if (instruction3) return instruction3;

  const instruction4 = getPart4Instruction(profile, topic, base);
  if (instruction4) return instruction4;

  // Fallback
  return `${base}
**SUBJECT: GOVERNMENT**
**FOCUS:** General revision across Elements of Government, Nigerian Political History, and International Relations.
`;
};
