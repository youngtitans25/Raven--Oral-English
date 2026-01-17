import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSection1Instruction } from './economics/section_1';
import { getSection2Instruction } from './economics/section_2';
import { getSection3Instruction } from './economics/section_3';
import { getSection4Instruction } from './economics/section_4';
import { getSection5Instruction } from './economics/section_5';

export const ECONOMICS_SECTIONS = [
  {
    id: 'econ-section-1',
    title: 'Section 1: Foundations & Basic Tools',
    description: 'Philosophical basis, core concepts, systems, and analytical tools.',
    image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'econ-science', title: 'Economics as a Science', description: 'Basic concepts, scarcity, opportunity cost, PPC.' },
      { id: 'econ-systems', title: 'Economic Systems', description: 'Capitalism, Socialism, Mixed Economy.' },
      { id: 'econ-methods', title: 'Methods & Tools', description: 'Charts, graphs, and statistical measures.' }
    ]
  },
  {
    id: 'econ-section-2',
    title: 'Section 2: Microeconomics I',
    description: 'Theory of Price, Demand, Supply, and Consumer Behavior.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'econ-demand', title: 'Theory of Demand', description: 'Laws, curves, and elasticity.' },
      { id: 'econ-consumer', title: 'Consumer Behaviour', description: 'Utility, indifference curves, surplus.' },
      { id: 'econ-supply', title: 'Theory of Supply', description: 'Laws, curves, and elasticity.' },
      { id: 'econ-price-determination', title: 'Price Determination', description: 'Equilibrium, price control, minimum wage.' }
    ]
  },
  {
    id: 'econ-section-3',
    title: 'Section 3: Microeconomics II',
    description: 'Production, Costs, Revenue, and Market Structures.',
    image: 'https://images.unsplash.com/photo-1565514020176-db79344cb85d?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'econ-production', title: 'Theory of Production', description: 'TP, AP, MP, Scale, Production Functions.' },
      { id: 'econ-costs-revenue', title: 'Costs and Revenue', description: 'Cost curves, revenue curves, profit maximization.' },
      { id: 'econ-market-structures', title: 'Market Structures', description: 'Perfect competition, Monopoly, Oligopoly.' },
      { id: 'econ-factors', title: 'Factors of Production', description: 'Rewards: Wages, Interest, Rent, Profit.' }
    ]
  },
  {
    id: 'econ-section-4',
    title: 'Section 4: Macroeconomics',
    description: 'National Income, Money, Banking, and Public Finance.',
    image: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'econ-national-income', title: 'National Income', description: 'Measurement, circular flow, multiplier.' },
      { id: 'econ-money-inflation', title: 'Money & Inflation', description: 'Functions, quantity theory, inflation control.' },
      { id: 'econ-finance-institutions', title: 'Financial Institutions', description: 'Banks, monetary policy, capital markets.' },
      { id: 'econ-public-finance', title: 'Public Finance', description: 'Fiscal policy, taxation, budgets.' },
      { id: 'econ-growth-dev', title: 'Growth & Development', description: 'Indicators, planning, development problems.' }
    ]
  },
  {
    id: 'econ-section-5',
    title: 'Section 5: Applied & Nigerian Economy',
    description: 'Specific sectors, institutions, and issues in Nigeria.',
    image: 'https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'econ-agriculture', title: 'Agriculture in Nigeria', description: 'Systems, policies, and marketing.' },
      { id: 'econ-industry', title: 'Industry', description: 'Industrialization strategies and location.' },
      { id: 'econ-resources', title: 'Natural Resources', description: 'Petroleum and solid minerals.' },
      { id: 'econ-business-orgs', title: 'Business Organizations', description: 'Privatization and commercialization.' },
      { id: 'econ-population', title: 'Population', description: 'Census, migration, and theories.' },
      { id: 'econ-intl-trade', title: 'International Trade', description: 'BOP, exchange rates, trade terms.' },
      { id: 'econ-intl-orgs', title: 'International Orgs', description: 'ECOWAS, OPEC, IMF, World Bank.' }
    ]
  }
];

export const ECONOMICS_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: ECONOMICS**\n**FOCUS:** General revision across Foundations, Microeconomics, Macroeconomics, and the Nigerian Economy.`;

  const instruction1 = getSection1Instruction(profile, topic, base);
  if (instruction1) return instruction1;

  const instruction2 = getSection2Instruction(profile, topic, base);
  if (instruction2) return instruction2;

  const instruction3 = getSection3Instruction(profile, topic, base);
  if (instruction3) return instruction3;

  const instruction4 = getSection4Instruction(profile, topic, base);
  if (instruction4) return instruction4;

  const instruction5 = getSection5Instruction(profile, topic, base);
  if (instruction5) return instruction5;

  return `${base}
**SUBJECT: ECONOMICS**
**FOCUS:** General revision.
`;
};