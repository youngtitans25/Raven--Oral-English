import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getIntroInstruction } from './accounts/intro';
import { getEthicsInstruction } from './accounts/ethics';
import { getITInstruction } from './accounts/it';
import { getDoubleEntryInstruction } from './accounts/double_entry';
import { getCashbookInstruction } from './accounts/cashbook';
import { getBankInstruction } from './accounts/bank';
import { getControlInstruction } from './accounts/control';
import { getFinalAccountsInstruction } from './accounts/final_accounts';
import { getStockInstruction } from './accounts/stock';
import { getIncompleteInstruction } from './accounts/incomplete';
import { getManufacturingInstruction } from './accounts/manufacturing';
import { getNonProfitInstruction } from './accounts/non_profit';
import { getPartnershipInstruction } from './accounts/partnership';
import { getCompanyInstruction } from './accounts/company';
import { getDepartmentalInstruction } from './accounts/departmental';
import { getBranchInstruction } from './accounts/branch';
import { getJointVentureInstruction } from './accounts/joint_venture';
import { getPublicSectorInstruction } from './accounts/public_sector';

export const ACCOUNTS_SECTIONS = [
  {
    id: 'accounts-topic-1',
    title: 'Topic 1: Nature of Accounting',
    description: 'Development, ethics, principles, and careers in accounting.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'accounts-intro', title: 'Nature & Significance', description: 'Bookkeeping vs Accounting, Users, Principles, and Careers.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop' },
      { id: 'accounts-ethics', title: 'Ethics & Regulatory Bodies', description: 'Qualities of an accountant, ICAN, ANAN, FRCN.', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop' },
      { id: 'accounts-it', title: 'IT in Accounting', description: 'Computerized systems, AI, Blockchain, and Digitization.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'accounts-topic-2',
    title: 'Topic 2: The Accounting Cycle',
    description: 'From source documents to the trial balance.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'accounts-double-entry', title: 'Double Entry Principles', description: 'Source documents, Journals, Ledgers, and Trial Balance.', image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1000&auto=format&fit=crop' },
      { id: 'accounts-cashbook', title: 'Cash Book', description: 'Single/Double/Triple column cash books and Petty Cash.', image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop' },
      { id: 'accounts-bank', title: 'Bank Reconciliation', description: 'Bank statements, reconciliation statements, adjusted cash book.', image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1000&auto=format&fit=crop' },
      { id: 'accounts-control', title: 'Control Accounts', description: 'Sales and Purchases Ledger Control Accounts.', image: 'https://images.unsplash.com/photo-1554224154-260327c00c42?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'accounts-topic-3',
    title: 'Topic 3: Final Accounts (Sole Trader)',
    description: 'Preparation of financial statements and adjustments.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'accounts-final-accounts', title: 'Final Accounts', description: 'Income Statement, Balance Sheet, and Adjustments (Depreciation, Accruals).', image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1000&auto=format&fit=crop' },
      { id: 'accounts-incomplete', title: 'Incomplete Records', description: 'Single entry conversion, Statement of Affairs.', image: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=1000&auto=format&fit=crop' },
      { id: 'accounts-stock', title: 'Stock Valuation', description: 'FIFO, LIFO, and Weighted Average methods.', image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'accounts-topic-4',
    title: 'Topic 4: Specialized Accounts',
    description: 'Manufacturing, Partnerships, and Company accounts.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'accounts-manufacturing', title: 'Manufacturing Accounts', description: 'Cost classification, Prime cost, and Production cost.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop' },
      { id: 'accounts-partnership', title: 'Partnership Accounts', description: 'Formation, Appropriation, Goodwill, and Dissolution.', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop' },
      { id: 'accounts-company', title: 'Company Accounts', description: 'Shares, Debentures, Final Accounts, and Ratios.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop' },
      { id: 'accounts-non-profit', title: 'Not-For-Profit', description: 'Receipts & Payments, Income & Expenditure.', image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'accounts-topic-5',
    title: 'Topic 5: Other Business Accounts',
    description: 'Departmental, Branch, Joint Venture, and Public Sector.',
    image: 'https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'accounts-departmental', title: 'Departmental Accounts', description: 'Apportionment of expenses and final accounts.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop' },
      { id: 'accounts-branch', title: 'Branch Accounts', description: 'Head office, branch relationship, and reconciliation.', image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1000&auto=format&fit=crop' },
      { id: 'accounts-joint-venture', title: 'Joint Venture', description: 'Features and accounting procedures.', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop' },
      { id: 'accounts-public-sector', title: 'Public Sector Accounting', description: 'Government revenue, expenditure, CRF, and IPSAS.', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop' }
    ]
  }
];

export const ACCOUNTS_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: PRINCIPLES OF ACCOUNTS**\n**FOCUS:** General revision across Bookkeeping, Double Entry, Final Accounts, Partnerships, Companies, and Public Sector Accounting. Ask the student what specific topic they want to start with.`;

  const instructions = [
    getIntroInstruction,
    getEthicsInstruction,
    getITInstruction,
    getDoubleEntryInstruction,
    getCashbookInstruction,
    getBankInstruction,
    getControlInstruction,
    getFinalAccountsInstruction,
    getStockInstruction,
    getIncompleteInstruction,
    getManufacturingInstruction,
    getNonProfitInstruction,
    getPartnershipInstruction,
    getCompanyInstruction,
    getDepartmentalInstruction,
    getBranchInstruction,
    getJointVentureInstruction,
    getPublicSectorInstruction
  ];

  for (const getInstruction of instructions) {
    const instruction = getInstruction(profile, topic, base);
    if (instruction) return instruction;
  }

  return `${base}
**SUBJECT: PRINCIPLES OF ACCOUNTS**
**FOCUS:** General revision.
`;
};