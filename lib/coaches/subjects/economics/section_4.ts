import { StudentProfile } from '../../../types';

export const getSection4Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'econ-national-income') {
    return `${base}
**TOPIC: NATIONAL INCOME**
**CONTENT:**
- Concepts: GDP, GNP, NNP, NI, Personal Income, Disposable Income.
- Measurement methods: Output, Income, Expenditure.
- Circular flow of income.
- The Multiplier effect.
- Problems of measurement and uses of NI data.

**OBJECTIVES:**
Candidates should be able to:
i. Calculate National Income using different methods;
ii. Analyse the circular flow of income;
iii. Evaluate the standard of living using NI data.
`;
  }
  if (topic === 'econ-money-inflation') {
    return `${base}
**TOPIC: MONEY AND INFLATION**
**CONTENT:**
- Money: Functions, characteristics, supply/demand.
- Quantity Theory of Money (MV=PT).
- Inflation/Deflation: Types, causes, effects, and control.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate between types of money;
ii. Analyse the causes and effects of inflation;
iii. Apply the quantity theory of money.
`;
  }
  if (topic === 'econ-finance-institutions') {
    return `${base}
**TOPIC: FINANCIAL INSTITUTIONS**
**CONTENT:**
- Central Bank: Functions and Monetary Policy tools.
- Commercial Banks: Functions and Credit Creation.
- Development Banks, Merchant Banks, Insurance Companies.
- Capital Market vs Money Market.

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between the roles of Central and Commercial banks;
ii. Explain how banks create credit;
iii. Differentiate between capital and money markets.
`;
  }
  if (topic === 'econ-public-finance') {
    return `${base}
**TOPIC: PUBLIC FINANCE**
**CONTENT:**
- Fiscal Policy: Objectives and tools.
- Taxation: Types, principles, and effects.
- Government Budget: Balanced, Surplus, Deficit.
- National Debt.
- Revenue Allocation in Nigeria.

**OBJECTIVES:**
Candidates should be able to:
i. Analyze the effects of taxation;
ii. Differentiate between recurrent and capital expenditure;
iii. Evaluate the implications of national debt.
`;
  }
  if (topic === 'econ-growth-dev') {
    return `${base}
**TOPIC: ECONOMIC GROWTH AND DEVELOPMENT**
**CONTENT:**
- Definitions and indicators.
- Characteristics of developing nations.
- Problems of development.
- Development Planning.

**OBJECTIVES:**
Candidates should be able to:
i. Distinguish between growth and development;
ii. Identify problems hindering development in Nigeria;
iii. Assess the success of development plans.
`;
  }
  return null;
};