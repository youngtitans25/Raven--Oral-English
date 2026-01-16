import { StudentProfile } from '../../types';
import { BASE_INSTRUCTION } from '../base';
import { getSectionAInstruction } from './home_economics/section_a';
import { getSectionBInstruction } from './home_economics/section_b';
import { getSectionCInstruction } from './home_economics/section_c';
import { getSectionDInstruction } from './home_economics/section_d';

export const HOME_ECONOMICS_SECTIONS = [
  {
    id: 'home-ec-section-a',
    title: 'Section A: Home Economics Education',
    description: 'Meaning, scope, careers, and interrelationships.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      {
        id: 'home-ec-meaning-scope',
        title: 'Meaning, Scope & Objectives',
        description: 'Definition, importance, objectives and ideals of Home Economics.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-careers',
        title: 'Areas & Careers',
        description: 'Careers in Home Management, Foods & Nutrition, Clothing & Textile, Family Development, etc.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-interrelationships',
        title: 'Interrelationships',
        description: 'Relationship with Biology, Geography, Chemistry, Physics, Agric Science, etc.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'home-ec-section-b',
    title: 'Section B: Home Management',
    description: 'Principles, resources, family living, housing, and consumer education.',
    image: 'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      {
        id: 'home-ec-principles',
        title: 'Principles of Management',
        description: 'Process, decision-making, and motivations (goals, values, standards).',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-resources',
        title: 'Resources',
        description: 'Human (Time, Energy, Skills) and Material (Money, Budgeting, Insurance) resources.',
        image: 'https://images.unsplash.com/photo-1554224154-260327c00c42?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-family-living',
        title: 'Family Living',
        description: 'Family types, relationships, personality profiles, conflicts, and human rights.',
        image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-marriage',
        title: 'Marriage & Reproductive Health',
        description: 'Courtship, marriage types, family planning, and STIs/HIV/AIDS.',
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-pregnancy',
        title: 'Pregnancy & Childbirth',
        description: 'Antenatal care, delivery, childcare, toddler care, development, and parenting.',
        image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-housing',
        title: 'Housing the Family',
        description: 'Types of houses, interior decoration, furniture, and utilities (water, fuel, electricity).',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-surfaces',
        title: 'Home Surfaces',
        description: 'Types and care of surfaces (wood, tiles, etc.) and cleaning agents.',
        image: 'https://images.unsplash.com/photo-1581578731117-10d52143b1e8?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-sanitation',
        title: 'Sanitation in the Home',
        description: 'Drainage systems, refuse disposal, pests, and pollution.',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-consumer',
        title: 'Consumer Education',
        description: 'Markets, agents, purchasing practices, advertising, and consumer rights.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'home-ec-section-c',
    title: 'Section C: Foods and Nutrition',
    description: 'Nutrients, cooking, kitchen management, and food preservation.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      {
        id: 'home-ec-foods-nutrition',
        title: 'Foods and Nutrition',
        description: 'Nutrients classification, deficiency diseases, digestive system, and special diets.',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-meal-planning',
        title: 'Meal Planning',
        description: 'Principles, special occasions, serving, snacks, and table manners.',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-cookers',
        title: 'Cookers and Cooking',
        description: 'Types of cookers, cooking methods (moist/dry), and heat transfer.',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-flours',
        title: 'Flours and Uses',
        description: 'Types of flours and raising agents (air, yeast, steam, etc.).',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-mixtures',
        title: 'Basic Mixtures',
        description: 'Pastries and Batters - definition and uses.',
        image: 'https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-scientific-methods',
        title: 'Scientific Methods',
        description: 'Measurement accuracy, nutrient tests, and recipe development.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-kitchen',
        title: 'The Kitchen',
        description: 'Types, arrangement, tools and equipment (selection, use, care).',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-kitchen-safety',
        title: 'Kitchen Safety & Hygiene',
        description: 'Accidents, First Aid, and personal/food hygiene.',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-food-storage',
        title: 'Food Storage & Preservation',
        description: 'Spoilage causes, preservation methods, convenience foods, and rechauffe.',
        image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-gardening',
        title: 'Home Gardening',
        description: 'Tools, soil types, suitable crops, and garden care.',
        image: 'https://images.unsplash.com/photo-1416879741263-d301e15ea9cd?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'home-ec-section-d',
    title: 'Section D: Clothing & Textile',
    description: 'Fibres, garment construction, wardrobe planning, and laundry.',
    image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=1000&auto=format&fit=crop',
    subModules: [
      {
        id: 'home-ec-fibres',
        title: 'Fibres and Fabrics',
        description: 'Origin, classification, properties, finishes, and care labels.',
        image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-sewing',
        title: 'Sewing & Garment Construction',
        description: 'Equipment, stitches, seams, fullness, decorative design, and mending.',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'home-ec-laundry',
        title: 'Laundry & Care',
        description: 'Washing processes, agents, stain removal, and ironing.',
        image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  }
];

export const HOME_ECONOMICS_INSTRUCTION = (p: StudentProfile, topic?: string) => {
  const base = BASE_INSTRUCTION(p);

  if (!topic) return `${base} **SUBJECT: HOME ECONOMICS**\n**FOCUS:** General revision across Foods & Nutrition, Clothing & Textile, and Home Management. Ask the student which area they would like to focus on.`;

  // Delegate to modular instruction handlers
  const instructionA = getSectionAInstruction(p, topic, base);
  if (instructionA) return instructionA;

  const instructionB = getSectionBInstruction(p, topic, base);
  if (instructionB) return instructionB;

  const instructionC = getSectionCInstruction(p, topic, base);
  if (instructionC) return instructionC;

  const instructionD = getSectionDInstruction(p, topic, base);
  if (instructionD) return instructionD;

  // Generic Fallback
  return `${base}
**SUBJECT: HOME ECONOMICS**
**FOCUS:** General revision across Foods & Nutrition, Clothing & Textile, and Home Management.
`;
};
