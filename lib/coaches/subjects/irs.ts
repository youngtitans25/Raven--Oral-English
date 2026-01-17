import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getPart1Instruction } from './irs/part_1';
import { getPart2Instruction } from './irs/part_2';
import { getPart3Instruction } from './irs/part_3';

export const IRS_SECTIONS = [
  {
    id: 'irs-section-1',
    title: 'Part 1: The Qur\'an and Hadith',
    description: 'Revelation, Preservation, Tafsir, Tajwid, and Hadith Studies.',
    image: 'https://images.unsplash.com/photo-1585036156171-4053915a1c7a?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'irs-quran-revelation', title: 'Revelation of Qur\'an', description: 'Cave Hira, Modes, Piecemeal revelation.' },
      { id: 'irs-quran-preservation', title: 'Preservation & Authenticity', description: 'Compilation, Standardization, Divine protection.' },
      { id: 'irs-tafsir-tajwid', title: 'Tafsir & Tajwid', description: 'History, Types, and Importance.' },
      { id: 'irs-surahs', title: 'Selected Surahs', description: 'Study of text, translation and lessons.' },
      { id: 'irs-hadith-intro', title: 'Introduction to Hadith', description: 'History, Authentication, Collectors.' },
      { id: 'irs-hadith-study', title: 'Study of Hadith', description: 'An-Nawawi\'s collection.' },
      { id: 'irs-moral-lessons', title: 'Moral Lessons', description: 'Parental duty, Honesty, Prohibitions.' }
    ]
  },
  {
    id: 'irs-section-2',
    title: 'Part 2: Tawhid and Fiqh',
    description: 'Faith, Articles of Faith, Worship (Ibadat), and Family Law.',
    image: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'irs-faith-tawhid', title: 'Faith (Tawhid)', description: 'Kalimatush-Shahadah, Shirk, Superstition.' },
      { id: 'irs-articles-faith', title: 'Articles of Faith', description: 'Belief in Allah, Angels, Books, Prophets.' },
      { id: 'irs-ibadat', title: 'Ibadat (Worship)', description: 'Salah, Zakah, Sawm, Hajj, Jihad.' },
      { id: 'irs-family', title: 'Family Matters', description: 'Marriage, Divorce, Inheritance.' },
      { id: 'irs-law-sources', title: 'Sources of Law', description: 'Qur\'an, Sunnah, Ijma, Qiyas, Schools.' },
      { id: 'irs-economic-political', title: 'Economic & Political Systems', description: 'Riba, Justice, Shurah.' }
    ]
  },
  {
    id: 'irs-section-3',
    title: 'Part 3: Islamic History & Civilization',
    description: 'Pre-Islamic Arabia, Life of Prophet, Caliphs, and Islam in Africa.',
    image: 'https://images.unsplash.com/photo-1565552629477-09be6311797a?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'irs-history-prophet', title: 'Life of Prophet Muhammad', description: 'Birth, Mission, Hijrah, Battles.' },
      { id: 'irs-caliphs', title: 'Rightly Guided Caliphs', description: 'Lives and contributions.' },
      { id: 'irs-west-africa', title: 'Islam in West Africa', description: 'Spread, Impact on Empires.' },
      { id: 'irs-education', title: 'Contributions to Education', description: 'Institutions, Scholars (Ibn Sina, etc.).' }
    ]
  }
];

export const IRS_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: ISLAMIC STUDIES**\n**FOCUS:** General revision across Qur'an, Hadith, Fiqh, and History.`;

  const instruction1 = getPart1Instruction(profile, topic, base);
  if (instruction1) return instruction1;

  const instruction2 = getPart2Instruction(profile, topic, base);
  if (instruction2) return instruction2;

  const instruction3 = getPart3Instruction(profile, topic, base);
  if (instruction3) return instruction3;

  return `${base}
**SUBJECT: ISLAMIC STUDIES**
**FOCUS:** General revision.
`;
};