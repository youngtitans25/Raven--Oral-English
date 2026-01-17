import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSectionAInstruction } from './crs/section_a';
import { getSectionBInstruction } from './crs/section_b';
import { getSectionCInstruction } from './crs/section_c';
import { getSectionDInstruction } from './crs/section_d';

export const CRS_SECTIONS = [
  {
    id: 'crs-section-a',
    title: 'Section A: Themes from Creation to the Division of the Kingdom',
    description: 'Sovereignty of God, Covenant, Leadership, and Divine Providence.',
    image: 'https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'crs-sovereignty', title: 'The Sovereignty of God', description: 'Creation process and God\'s sovereignty.' },
      { id: 'crs-covenant', title: 'The Covenant', description: 'Covenants with Noah, Abraham, and Israel.' },
      { id: 'crs-leadership', title: 'Leadership Qualities', description: 'Joseph, Moses, Joshua, and Judges.' },
      { id: 'crs-providence', title: 'Divine Providence', description: 'Guidance, Protection, and Provision.' },
      { id: 'crs-parental', title: 'Parental Responsibility', description: 'Eli, Samuel, David, and Asa.' },
      { id: 'crs-obedience', title: 'Obedience and Disobedience', description: 'Rewards and consequences.' },
      { id: 'crs-david', title: 'A Man After God\'s Own Heart', description: 'Life, submission, and repentance of David.' },
      { id: 'crs-decision', title: 'Decision-Making', description: 'Solomon\'s wisdom vs unwise decisions.' }
    ]
  },
  {
    id: 'crs-section-b',
    title: 'Section B: From Division to Return & Prophets',
    description: 'Greed, Supremacy of God, Reforms, Exile, and the Prophets.',
    image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'crs-greed', title: 'Greed and Its Effects', description: 'Ahab and Gehazi.' },
      { id: 'crs-supremacy', title: 'The Supremacy of God', description: 'Mount Carmel contest.' },
      { id: 'crs-reforms', title: 'Religious Reforms in Judah', description: 'Josiah\'s reforms.' },
      { id: 'crs-concern', title: 'Concern for Judah', description: 'Fall of Jerusalem, Nehemiah, and Ezra.' },
      { id: 'crs-faith', title: 'Faith, Courage and Protection', description: 'Daniel and the Three Hebrew Youths.' },
      { id: 'crs-jonah', title: 'God\'s Message to Nineveh', description: 'Jonah and his message.' },
      { id: 'crs-social-justice', title: 'Social Justice & Divine Love', description: 'Amos and Hosea.' },
      { id: 'crs-holiness', title: 'Holiness and Divine Call', description: 'Isaiah, Ezekiel, Jeremiah.' },
      { id: 'crs-punishment', title: 'Punishment and Hope', description: 'Jeremiah, Ezekiel, Isaiah.' }
    ]
  },
  {
    id: 'crs-section-c',
    title: 'Section C: Gospels and Acts',
    description: 'Life of Jesus and the Early Church.',
    image: 'https://images.unsplash.com/photo-1555696958-c5049b866f63?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'crs-birth', title: 'Birth and Early Life', description: 'John and Jesus.' },
      { id: 'crs-baptism', title: 'Baptism and Temptation', description: 'Significance and victory.' },
      { id: 'crs-discipleship', title: 'Discipleship', description: 'Call and demands.' },
      { id: 'crs-miracles', title: 'Miracles', description: 'Nature, Healing, and Resuscitation.' },
      { id: 'crs-parables', title: 'The Parables', description: 'Kingdom, Love, Wealth, Prayer.' },
      { id: 'crs-sermon', title: 'Sermon on the Mount', description: 'Demands of the Kingdom.' },
      { id: 'crs-mission', title: 'Mission of the Disciples', description: 'The Twelve and the Seventy.' },
      { id: 'crs-confession', title: 'The Great Confession', description: 'Peter\'s confession at Caesarea Philippi.' },
      { id: 'crs-transfiguration', title: 'The Transfiguration', description: 'Events and significance.' },
      { id: 'crs-triumphal', title: 'Triumphal Entry', description: 'Entry and Cleansing of Temple.' },
      { id: 'crs-last-supper', title: 'The Last Supper', description: 'Events and significance.' },
      { id: 'crs-trials', title: 'Trials, Crucifixion and Death', description: 'Passion narrative.' },
      { id: 'crs-resurrection', title: 'Resurrection & Ascension', description: 'Appearances and Ascension.' },
      { id: 'crs-teachings', title: 'Jesus\' Teachings about Himself', description: 'The "I AM" sayings.' },
      { id: 'crs-love', title: 'Love', description: 'God\'s love and love for one another.' },
      { id: 'crs-fellowship', title: 'Fellowship in Early Church', description: 'Communal living.' },
      { id: 'crs-holy-spirit', title: 'Holy Spirit & Mission', description: 'Pentecost.' },
      { id: 'crs-opposition', title: 'Opposition to Gospel', description: 'Persecution of Peter, John, Stephen, Paul.' },
      { id: 'crs-gentiles', title: 'Mission to Gentiles', description: 'Saul, Cornelius, Council of Jerusalem.' }
    ]
  },
  {
    id: 'crs-section-d',
    title: 'Section D: Themes from Epistles',
    description: 'Christian Living and Doctrine.',
    image: 'https://images.unsplash.com/photo-1507643179173-617d654f9229?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'crs-justification', title: 'Justification by Faith', description: 'Conditions and fruits.' },
      { id: 'crs-law-grace', title: 'The Law and Grace', description: 'Purpose and significance.' },
      { id: 'crs-new-life', title: 'New Life in Christ', description: 'Characteristics and benefits.' },
      { id: 'crs-joint-heirs', title: 'Joint Heirs with Christ', description: 'Rights and privileges.' },
      { id: 'crs-humility', title: 'Humility', description: 'Requirements and rewards.' },
      { id: 'crs-forgiveness', title: 'Forgiveness', description: 'Paul\'s teaching.' },
      { id: 'crs-spiritual-gifts', title: 'Spiritual Gifts', description: 'Types and benefits.' },
      { id: 'crs-christian-giving', title: 'Christian Giving', description: 'Concept and importance.' },
      { id: 'crs-civic-responsibility', title: 'Civic Responsibility', description: 'Obedience to authority and citizenship.' },
      { id: 'crs-dignity-labour', title: 'Dignity of Labour', description: 'Benefits and respect for work.' },
      { id: 'crs-second-coming', title: 'The Second Coming', description: 'Signs and preparation.' },
      { id: 'crs-impartiality', title: 'Impartiality', description: 'Causes and consequences.' },
      { id: 'crs-effective-prayer', title: 'Effective Prayer', description: 'Requirements and importance.' },
      { id: 'crs-community-living', title: 'Christian Living in Community', description: 'Relationships and attitude to persecution.' },
      { id: 'crs-corruption', title: 'Corruption', description: 'Causes, effects, and curbing methods.' },
      { id: 'crs-sexual-immorality', title: 'Sexual Immorality', description: 'Causes, effects, and curbing methods.' }
    ]
  }
];

export const CRS_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: CHRISTIAN RELIGIOUS STUDIES**\n**FOCUS:** General revision across Themes from Creation, History of Israel, Gospels, Acts, and Epistles. Ask the student which section they would like to focus on.`;

  const instructionA = getSectionAInstruction(profile, topic, base);
  if (instructionA) return instructionA;

  const instructionB = getSectionBInstruction(profile, topic, base);
  if (instructionB) return instructionB;

  const instructionC = getSectionCInstruction(profile, topic, base);
  if (instructionC) return instructionC;

  const instructionD = getSectionDInstruction(profile, topic, base);
  if (instructionD) return instructionD;

  return `${base}
**SUBJECT: CHRISTIAN RELIGIOUS STUDIES**
**FOCUS:** General revision across Themes from Creation, History of Israel, Gospels, Acts, and Epistles.
`;
};