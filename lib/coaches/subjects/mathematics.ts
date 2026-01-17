import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSection1Instruction } from './mathematics/section_1';
import { getSection2Instruction } from './mathematics/section_2';
import { getSection3Instruction } from './mathematics/section_3';
import { getSection4Instruction } from './mathematics/section_4';
import { getSection5Instruction } from './mathematics/section_5';

export const MATHEMATICS_SECTIONS = [
  {
    id: 'math-section-1',
    title: 'Section I: Number and Numeration',
    description: 'Number bases, Fractions, Indices, Logarithms, and Sets.',
    image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'math-number-bases', title: 'Number Bases', description: 'Operations, conversion, modular arithmetic.', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-fractions', title: 'Fractions & Percentages', description: 'Decimals, approximations, simple interest, VAT.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-indices', title: 'Indices, Logarithms & Surds', description: 'Laws, equations, standard form.', image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-sets', title: 'Sets', description: 'Types, algebra, Venn diagrams.', image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'math-section-2',
    title: 'Section II: Algebra',
    description: 'Polynomials, Variation, Inequalities, Progression, Matrices.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'math-polynomials', title: 'Polynomials', description: 'Factorization, simultaneous equations, graphs.', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-variation', title: 'Variation', description: 'Direct, inverse, joint, partial.', image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-inequalities', title: 'Inequalities', description: 'Linear and quadratic inequalities.', image: 'https://images.unsplash.com/photo-1543286386-2f6595e96e6d?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-progression', title: 'Progression', description: 'Arithmetic and Geometric Progression (AP & GP).', image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-binary-ops', title: 'Binary Operations', description: 'Closure, identity, inverse elements.', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-matrices', title: 'Matrices & Determinants', description: 'Algebra, determinants, inverses.', image: 'https://images.unsplash.com/photo-1509228627129-6690a87531f3?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'math-section-3',
    title: 'Section III: Geometry & Trigonometry',
    description: 'Euclidean, Mensuration, Coordinate Geometry, Trigonometry.',
    image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'math-euclidean', title: 'Euclidean Geometry', description: 'Angles, polygons, circle theorems, construction.', image: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-mensuration', title: 'Mensuration', description: 'Areas, volumes, earth geometry (Long/Lat).', image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-loci', title: 'Loci', description: 'Locus in 2 dimensions.', image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-coordinate', title: 'Coordinate Geometry', description: 'Midpoint, gradient, line equations.', image: 'https://images.unsplash.com/photo-1624969862293-b749659ccc4e?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-trigonometry', title: 'Trigonometry', description: 'Ratios, angles, bearings, graphs.', image: 'https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'math-section-4',
    title: 'Section IV: Calculus',
    description: 'Differentiation and Integration.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'math-differentiation', title: 'Differentiation', description: 'Limits, algebraic and trig functions.', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-app-diff', title: 'Application of Differentiation', description: 'Rate of change, maxima, minima.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-integration', title: 'Integration', description: 'Algebraic, trig functions, area under curve.', image: 'https://images.unsplash.com/photo-1581093196277-9f608be3d403?q=80&w=1000&auto=format&fit=crop' }
    ]
  },
  {
    id: 'math-section-5',
    title: 'Section V: Statistics',
    description: 'Data representation, Measures of location/dispersion, Probability.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      { id: 'math-data-rep', title: 'Representation of Data', description: 'Frequency distribution, histograms, charts.', image: 'https://images.unsplash.com/photo-1543286386-2f6595e96e6d?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-location', title: 'Measures of Location', description: 'Mean, Mode, Median.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-dispersion', title: 'Measures of Dispersion', description: 'Range, Variance, Standard Deviation.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-permutation', title: 'Permutation & Combination', description: 'Arrangements and selections.', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop' },
      { id: 'math-probability', title: 'Probability', description: 'Experimental, Addition/Multiplication laws.', image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=1000&auto=format&fit=crop' }
    ]
  }
];

export const MATH_INSTRUCTION = (profile: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(profile);

  if (!topic) return `${base} **SUBJECT: MATHEMATICS**\n**FOCUS:** General revision across Numeration, Algebra, Geometry, Calculus, and Statistics. Ask the student which area they want to practice.`;

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
**SUBJECT: MATHEMATICS**
**FOCUS:** General revision.
`;
};