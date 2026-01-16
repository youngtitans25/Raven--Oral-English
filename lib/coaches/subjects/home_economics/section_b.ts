import { StudentProfile } from '../../../types';

export const getSectionBInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'home-ec-principles') {
    return `${base}
**TOPIC: PRINCIPLES OF HOME MANAGEMENT**
- Meaning and Steps in management process.
- Decision-making (Meaning and Process).
- Motivation: Goals, values, standards, needs/wants, likes/dislikes.
`;
  }
  if (topic === 'home-ec-resources') {
    return `${base}
**TOPIC: RESOURCES**
- Human Resources: Time management (types of work time, advantages), Energy (work simplification), Skills.
- Material Resources: Money management (Income types, budgeting steps, economic security, bank accounts, insurance).
`;
  }
  if (topic === 'home-ec-family-living') {
    return `${base}
**TOPIC: FAMILY LIVING**
- Family Types (Advantages/Disadvantages).
- Family Life Cycle.
- Relationships (Husband/Wife, Parent/Child, Siblings).
- Personality Profiles (Extroversion, Introversion).
- Adolescents, Family Crises, Conflict Resolution.
- Human Rights (Women/Children rights) and Role of ICT.
`;
  }
  if (topic === 'home-ec-marriage') {
    return `${base}
**TOPIC: MARRIAGE & REPRODUCTIVE HEALTH**
- Boy/Girl Relationship (Courtship, choosing a partner).
- Preparation for Marriage (Engagement, Types: Islamic, Christian, Court, Traditional).
- Reproductive Health (STIs, HIV/AIDS).
`;
  }
  if (topic === 'home-ec-pregnancy') {
    return `${base}
**TOPIC: PREGNANCY & CHILDBIRTH**
- Menstruation, Pregnancy, Labour, Post-natal care.
- Childcare (Layette, Bathing, Feeding, Weaning).
- Toddler Care (Common ailments, Immunization).
- Child Development (Habits, Play).
- Parenting (Responsibilities).
`;
  }
  if (topic === 'home-ec-housing') {
    return `${base}
**TOPIC: HOUSING THE FAMILY**
- Types of houses and acquisition.
- Interior Decoration (Wall finishing, Art principles: Color, Texture, Line, Proportion).
- Furniture (Types, arrangement).
- Utilities (Water, Fuels, Electricity, Communication devices).
`;
  }
  if (topic === 'home-ec-surfaces') {
    return `${base}
**TOPIC: HOME SURFACES**
- Types: Wood, Tiles, Formica, Concrete, Plastic, Linoleum, Mats, Rugs, Terrazzo.
- Cleaning Agents: Water, Soap, Abrasives, Polish.
- Care: Washing, Sweeping, Dusting, Shampooing, Buffing.
`;
  }
  if (topic === 'home-ec-sanitation') {
    return `${base}
**TOPIC: SANITATION**
- Drainage systems.
- Refuse disposal.
- Pests and control.
- Pollution and health hazards.
`;
  }
  if (topic === 'home-ec-consumer') {
    return `${base}
**TOPIC: CONSUMER EDUCATION**
- Meaning and Importance.
- Markets (Definition, Types).
- Distributors/Agents.
- Sources of Info, Purchasing Practices, Advertising.
- Consumer Rights & Responsibilities.
- Regulatory Bodies.
`;
  }
  return null;
};