import { StudentProfile } from '../../../types';

export const getSection5Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'math-data-rep') {
    return `${base}
**TOPIC: REPRESENTATION OF DATA**
**CONTENT:**
- Frequency distribution.
- Histogram, bar chart, pie chart.

**OBJECTIVES:**
Candidates should be able to:
i. Identify/interpret frequency tables;
ii. Interpret histograms, bar charts, and pie charts.
`;
  }
  if (topic === 'math-location') {
    return `${base}
**TOPIC: MEASURES OF LOCATION**
**CONTENT:**
- Mean, Mode, Median (Grouped/Ungrouped).
- Cumulative Frequency (Ogive).

**OBJECTIVES:**
Candidates should be able to:
i. Calculate Mean, Mode, Median;
ii. Use Ogive to find median, quartiles, percentiles.
`;
  }
  if (topic === 'math-dispersion') {
    return `${base}
**TOPIC: MEASURES OF DISPERSION**
**CONTENT:**
- Range, Mean Deviation, Variance, Standard Deviation.

**OBJECTIVES:**
Candidates should be able to:
i. Calculate range, mean deviation, variance, standard deviation.
`;
  }
  if (topic === 'math-permutation') {
    return `${base}
**TOPIC: PERMUTATION AND COMBINATION**
**CONTENT:**
- Linear/Circular arrangements.
- Repeated objects.

**OBJECTIVES:**
Candidates should be able to:
i. Solve simple problems involving permutation and combination.
`;
  }
  if (topic === 'math-probability') {
    return `${base}
**TOPIC: PROBABILITY**
**CONTENT:**
- Experimental probability.
- Addition/Multiplication of probabilities (Mutual/Independent).

**OBJECTIVES:**
Candidates should be able to:
i. Solve simple problems in probability.
`;
  }
  return null;
};