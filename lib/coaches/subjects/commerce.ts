import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getIntroInstruction } from './commerce/intro';
import { getOccupationInstruction } from './commerce/occupation';
import { getProductionInstruction } from './commerce/production';
import { getTradeInstruction } from './commerce/trade';
import { getPurchaseSaleInstruction } from './commerce/purchase_sale';
import { getAidsToTradeInstruction } from './commerce/aids_to_trade';
import { getBusinessUnitsInstruction } from './commerce/business_units';
import { getFinancingInstruction } from './commerce/financing';
import { getAssociationsInstruction } from './commerce/associations';
import { getMoneyInstruction } from './commerce/money';
import { getStockExchangeInstruction } from './commerce/stock_exchange';
import { getManagementInstruction } from './commerce/management';
import { getMarketingInstruction } from './commerce/marketing';
import { getLegalInstruction } from './commerce/legal';
import { getCommodityInstruction } from './commerce/commodity';
import { getEnvironmentInstruction } from './commerce/environment';

export const COMMERCE_SECTIONS = [
  {
    id: 'commerce-intro-section',
    title: 'Section 1: Introduction to Commerce',
    description: 'Foundations, Occupation, and Production.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'commerce-intro', title: 'Commerce Overview', description: 'Meaning, scope, characteristics, and e-commerce.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-occupation', title: 'Occupation', description: 'Types, importance, and choice factors.', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-production', title: 'Production', description: 'Factors, rewards, division of labour.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'commerce-trade-section',
    title: 'Section 2: Trade & Exchange',
    description: 'Home/Foreign Trade, Money, and Commodity Exchange.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'commerce-trade-home', title: 'Home Trade', description: 'Retail and Wholesale trade dynamics.', image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-trade-foreign', title: 'Foreign Trade', description: 'Import/Export, Balance of Payments, Customs.', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-purchase-sale', title: 'Purchase & Sale', description: 'Documents, terms of trade, and payments.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-money', title: 'Money', description: 'Evolution, forms, qualities, and functions.', image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-commodity', title: 'Commodity Exchange', description: 'Trading agricultural and mineral commodities.', image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'commerce-support-section',
    title: 'Section 3: Business Support (Aids-to-Trade)',
    description: 'Banking, Insurance, Transport, and Communication.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'commerce-aids-advertising', title: 'Advertising', description: 'Types, media, and methods.', image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-aids-banking', title: 'Banking', description: 'Types of banks and e-banking.', image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-aids-communication', title: 'Communication', description: 'Process, types, courier services, GSM.', image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-aids-insurance', title: 'Insurance', description: 'Principles, types, and risk.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-aids-tourism', title: 'Tourism', description: 'Forms, importance, and centres in Nigeria.', image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-aids-transportation', title: 'Transportation', description: 'Modes, importance, and advantages.', image: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-aids-warehousing', title: 'Warehousing', description: 'Types, functions, and location factors.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'commerce-finance-section',
    title: 'Section 4: Organization & Finance',
    description: 'Business Units, Finance, Associations, and Stock Exchange.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'commerce-business-units', title: 'Business Units', description: 'Sole prop, Partnership, Companies, Public Corps.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-financing', title: 'Financing Business', description: 'Sources of finance, capital types, calculation.', image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-associations', title: 'Trade Associations', description: 'Chambers of Commerce, Mergers.', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-stock-exchange', title: 'Stock Exchange', description: 'Securities, transactions, Second-Tier market.', image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'commerce-manage-section',
    title: 'Section 5: Management & Environment',
    description: 'Management, Marketing, Law, and Environment.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'commerce-management', title: 'Business Management', description: 'Functions, principles, and structure.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-marketing', title: 'Marketing', description: 'Marketing mix, segmentation, e-marketing.', image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-legal', title: 'Legal Aspects', description: 'Contracts, Agency, Consumer Protection.', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop' },
      { id: 'commerce-environment', title: 'Business Environment', description: 'Social responsibility, pollution, environment types.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop' }
    ]
  }
];

export const COMMERCE_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: COMMERCE**\n**FOCUS:** General revision across Trade, Finance, Management, and Business Environment. Ask the student what specific topic they want to start with.`;

  const instructions = [
    getIntroInstruction,
    getOccupationInstruction,
    getProductionInstruction,
    getTradeInstruction,
    getPurchaseSaleInstruction,
    getAidsToTradeInstruction,
    getBusinessUnitsInstruction,
    getFinancingInstruction,
    getAssociationsInstruction,
    getMoneyInstruction,
    getStockExchangeInstruction,
    getManagementInstruction,
    getMarketingInstruction,
    getLegalInstruction,
    getCommodityInstruction,
    getEnvironmentInstruction
  ];

  for (const getInstruction of instructions) {
    const instruction = getInstruction(profile, topic, base);
    if (instruction) return instruction;
  }

  return `${base}
**SUBJECT: COMMERCE**
**FOCUS:** General revision.
`;
};