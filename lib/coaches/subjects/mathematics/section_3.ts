import { StudentProfile } from '../../../types';

export const getSection3Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'math-euclidean') {
    return `${base}
**TOPIC: EUCLIDEAN GEOMETRY**
**CONTENT:**
- Properties of angles/lines.
- Polygons (Triangles, Quadrilaterals).
- Circles (Angle properties, Cyclic quads, Chords).
- Construction.

**OBJECTIVES:**
Candidates should be able to:
i. Identify lines/angles;
ii. Solve polygon problems;
iii. Calculate angles using circle theorems;
iv. Identify construction procedures (30, 45, 60, 90 degrees etc.).
`;
  }
  if (topic === 'math-mensuration') {
    return `${base}
**TOPIC: MENSURATION**
**CONTENT:**
- Lengths and Areas (Plane figures).
- Circles (Arcs, Chords, Sectors, Segments).
- Surface Areas and Volumes (Solids).
- Earth as a sphere (Long/Lat).

**OBJECTIVES:**
Candidates should be able to:
i. Calculate perimeters/areas;
ii. Find lengths of arcs/chords;
iii. Calculate surface areas/volumes (cuboids, cylinders, cones, spheres);
iv. Determine distances on the earth's surface.
`;
  }
  if (topic === 'math-loci') {
    return `${base}
**TOPIC: LOCI**
**CONTENT:**
- Locus in 2D (Lines and Curves).

**OBJECTIVES:**
Candidates should be able to:
i. Identify and interpret loci (parallel lines, bisectors, circles).
`;
  }
  if (topic === 'math-coordinate') {
    return `${base}
**TOPIC: COORDINATE GEOMETRY**
**CONTENT:**
- Midpoint and gradient.
- Distance between two points.
- Parallel and Perpendicular lines.
- Equations of straight lines.

**OBJECTIVES:**
Candidates should be able to:
i. Determine midpoint/gradient;
ii. Find distance;
iii. Identify conditions for parallelism/perpendicularity;
iv. Find line equations (various forms).
`;
  }
  if (topic === 'math-trigonometry') {
    return `${base}
**TOPIC: TRIGONOMETRY**
**CONTENT:**
- Ratios.
- Angles of elevation/depression; Bearings.
- Areas and solutions of triangles (Sine/Cosine rules).
- Graphs of sine/cosine.

**OBJECTIVES:**
Candidates should be able to:
i. Calculate sine/cosine/tangent (-360 to 360);
ii. Apply special angles (30, 45, 60, etc.);
iii. Solve problems on elevation/depression and bearings;
iv. Apply formulae for areas/solutions of triangles;
v. Solve problems involving sine/cosine graphs.
`;
  }
  return null;
};