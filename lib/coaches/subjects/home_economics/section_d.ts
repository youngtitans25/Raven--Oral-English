import { StudentProfile } from '../../../types';

export const getSectionDInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'home-ec-fibres') {
    return `${base}
**TOPIC: FIBRES & FABRICS**
- Origin & Terms (Fibre, Fabric, Yarn, Staple, Filament).
- Local Fabrics (Aso-oke, Akwete, etc.).
- Classification/Properties (Cotton, Rayon, Silk).
- Finishes (Moth-proofing, Embossing, etc.).
- Care Labels.
`;
  }
  if (topic === 'home-ec-sewing') {
    return `${base}
**TOPIC: SEWING & GARMENT CONSTRUCTION**
- Sewing Machine & Tools.
- Processes: Stitches, Seams, Edge Finishes.
- Style Features: Collars, Yokes, Pockets.
- Fullness: Darts, Tucks, Pleats.
- Decorative Design: Embroidery, Appliqué.
- Mending: Patching, Darning.
- Construction: Figure types, Measurements, Patterns.
- Wardrobe Planning & Maintenance.
- Good Grooming & Accessories.
`;
  }
  if (topic === 'home-ec-laundry') {
    return `${base}
**TOPIC: LAUNDRY & CARE**
- Processes: Sorting, Mending, Stain removal, Washing, Rinsing, Drying, Ironing.
- Agents: Water, Detergents, Soaps, Stiffeners.
- Stains: Meaning, Types, Removal.
- Ironing temperatures.
`;
  }
  return null;
};