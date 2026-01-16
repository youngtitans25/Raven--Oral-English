import { StudentProfile } from '../../../types';

export const getSectionCInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'home-ec-foods-nutrition') {
    return `${base}
**TOPIC: FOODS AND NUTRITION**
- Nutrients: Classification, Sources, Functions, Deficiency Diseases.
- Food Classification: Cereals, Fats, Milk, Meat, etc.
- Nutrition & Health relationships.
- Digestive System.
- Nutrition for special groups (Infants, Toddlers, Adolescents, Manual workers).
`;
  }
  if (topic === 'home-ec-meal-planning') {
    return `${base}
**TOPIC: MEAL PLANNING**
- Principles.
- Dietary needs for special occasions/groups.
- Preparation & Serving.
- Snacks & Beverages.
- Table Setting, Manners, Hostessing.
`;
  }
  if (topic === 'home-ec-cookers') {
    return `${base}
**TOPIC: COOKERS & COOKING**
- Cookers: Types, Choice, Care (Gas, Electric, Microwave).
- Cooking: Reasons, Terms, Methods (Boiling, Stewing, Baking, Steaming).
- Heat Transfer: Conduction, Convection, Radiation.
`;
  }
  if (topic === 'home-ec-flours') {
    return `${base}
**TOPIC: FLOURS & USES**
- Types and Uses.
- Raising Agents: Air, Yeast, Palm Wine, Steam.
`;
  }
  if (topic === 'home-ec-mixtures') {
    return `${base}
**TOPIC: BASIC MIXTURES**
- Pastries and Batters (Definition, Uses).
`;
  }
  if (topic === 'home-ec-scientific-methods') {
    return `${base}
**TOPIC: SCIENTIFIC METHODS**
- Measurement units & accuracy.
- Nutrient tests (Protein, Fats, Carbs).
- Recipe development.
`;
  }
  if (topic === 'home-ec-kitchen') {
    return `${base}
**TOPIC: THE KITCHEN**
- Types and Arrangement.
- Tools & Equipment (Selection, Use, Care).
`;
  }
  if (topic === 'home-ec-kitchen-safety') {
    return `${base}
**TOPIC: KITCHEN SAFETY & HYGIENE**
- Accidents (Causes, Prevention).
- First Aid (Definition, Kit components, Treatment for Burns, Cuts, etc.).
- Hygiene (Kitchen, Personal, Food).
`;
  }
  if (topic === 'home-ec-food-storage') {
    return `${base}
**TOPIC: FOOD STORAGE & PRESERVATION**
- Spoilage causes.
- Preservation principles & methods.
- Convenience Foods (Types, Selection).
- Food Additives.
- Rechauffe (Meaning, Rules, Types, Adv/Disadv).
`;
  }
  if (topic === 'home-ec-gardening') {
    return `${base}
**TOPIC: HOME GARDENING**
- Definition, Tools, Advantages.
- Soil Types.
- Suitable Plants/Crops.
- Preparation & Care.
`;
  }
  return null;
};