import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSection1Instruction } from './computer/section_1';
import { getSection2Instruction } from './computer/section_2';
import { getSection3Instruction } from './computer/section_3';
import { getSection4Instruction } from './computer/section_4';
import { getSection5Instruction } from './computer/section_5';
import { getSection6Instruction } from './computer/section_6';
import { getSection7Instruction } from './computer/section_7';
import { getSection8Instruction } from './computer/section_8';
import { getSection9Instruction } from './computer/section_9';

export const COMPUTER_SECTIONS = [
  {
    id: 'comp-evolution',
    title: 'Section A: Evolution of Computing',
    description: 'History, generations, and classification of computers.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'comp-history', title: 'History of Computing', description: 'Early devices (Abacus) to modern computers.', image: 'https://images.unsplash.com/photo-1532153259564-a5f24f285811?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-classification', title: 'Classification', description: 'By generation, size, purpose, and type.', image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'comp-fundamentals',
    title: 'Section B: Fundamentals',
    description: 'Hardware, Software, and Logic Circuits.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'comp-overview', title: 'Overview of Systems', description: 'Characteristics and functional parts.', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-hardware', title: 'Computer Hardware', description: 'Input, Output, CPU, Memory, and Storage.', image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-logic', title: 'Logic Circuits', description: 'Logic gates, truth tables, and comparators.', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-software', title: 'Computer Software', description: 'System vs Application software, OS, Translators.', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'comp-applications',
    title: 'Section C: Application Packages',
    description: 'Word processing, Spreadsheets, Databases, and Graphics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'comp-word', title: 'Word Processing', description: 'MS Word operations and features.', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-spreadsheet', title: 'Spreadsheets', description: 'MS Excel formulas, charts, and data.', image: 'https://images.unsplash.com/photo-1543286386-2f6595e96e6d?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-database', title: 'Databases', description: 'MS Access, record structures, and DBMS.', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-graphics', title: 'Graphics Packages', description: 'CorelDraw and design basics.', image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-presentation', title: 'Presentation', description: 'PowerPoint slides and animations.', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-web', title: 'Web Design', description: 'HTML, Dreamweaver, and web elements.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'comp-files',
    title: 'Section D: Managing Computer Files',
    description: 'File organization, security, and handling operations.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'comp-files-concept', title: 'Concept of Files', description: 'Terms, structure, data types, and classification.', image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-files-handling', title: 'Handling Files', description: 'Operations, security, data loss prevention.', image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'comp-maintenance',
    title: 'Section E: Maintenance & Safety',
    description: 'Booting, system maintenance, and computer room management.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'comp-booting', title: 'Booting Process', description: 'Cold/Warm booting and shutdown procedures.', image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-maintenance', title: 'Computer Maintenance', description: 'Cleaning, battery care, and simple repairs.', image: 'https://images.unsplash.com/photo-1597424214791-7dccbe942cc2?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-room-mgmt', title: 'Room Management', description: 'Ergonomics, safety, and laboratory rules.', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'comp-ict',
    title: 'Section F: ICT',
    description: 'Communication systems, Internet, Networking, and Cables.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'comp-ict-systems', title: 'Communication Systems', description: 'ICT Devices (ATM, POS, Mobile).', image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-internet', title: 'Internet & Email', description: 'Browsers, services, email features.', image: 'https://images.unsplash.com/photo-1544197150-b99a580bbcbf?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-networking', title: 'Networking', description: 'Types (LAN/WAN), Topologies, Devices.', image: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-www', title: 'World Wide Web', description: 'Protocols, terminology, and web tools.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-cables', title: 'Cables & Connectors', description: 'Network and power cables/connectors.', image: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'comp-problem-solving',
    title: 'Section G: Problem Solving',
    description: 'Programming languages, Algorithms, and System Development.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'comp-programming', title: 'Programming Languages', description: 'Machine, Assembly, High-Level languages.', image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-algorithms', title: 'Algorithms & Flowcharts', description: 'Flowchart symbols and logic design.', image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-structure', title: 'Language Structure', description: 'Syntax, data types, and operators.', image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-development', title: 'Program Development & SDLC', description: 'Steps in coding and system lifecycle.', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'comp-ai',
    title: 'Section H: AI & Robotics',
    description: 'Artificial Intelligence concepts, branches, and Robotics fundamentals.',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'comp-ai-definition', title: 'Artificial Intelligence', description: 'Branches (ML, Neural Networks) and applications.', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-robotics', title: 'Fundamentals of Robotics', description: 'Components, types, and uses of robots.', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'comp-ethics-issues',
    title: 'Section I: Ethics & Human Issues',
    description: 'Computer crimes, security, cyber risks, and career paths.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'comp-ethics', title: 'Ethical Issues', description: 'Computer crime, prevention, and privacy.', image: 'https://images.unsplash.com/photo-1563206767-5b1d972b9fb9?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-security', title: 'Security & Cyber Risks', description: 'Threats (Malware, Phishing) and protection (CIA, Firewalls).', image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000&auto=format&fit=crop' },
      { id: 'comp-careers', title: 'Career Paths', description: 'Higher studies and opportunities in computing.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop' }
    ]
  }
];

export const COMPUTER_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: COMPUTER STUDIES**\n**FOCUS:** General revision across Evolution, Fundamentals, Applications, ICT, Programming, AI, Robotics, and Ethics. Ask the student what specific area they want to practice.`;

  const instructions = [
    getSection1Instruction,
    getSection2Instruction,
    getSection3Instruction,
    getSection4Instruction,
    getSection5Instruction,
    getSection6Instruction,
    getSection7Instruction,
    getSection8Instruction,
    getSection9Instruction
  ];

  for (const getInstruction of instructions) {
    const instruction = getInstruction(profile, topic, base);
    if (instruction) return instruction;
  }

  return `${base}
**SUBJECT: COMPUTER STUDIES**
**FOCUS:** General revision.
`;
};