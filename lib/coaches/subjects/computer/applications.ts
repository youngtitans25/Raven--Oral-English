import { StudentProfile } from '../../../types';

export const getApplicationsInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'comp-word') {
    return `${base}
**TOPIC: WORD PROCESSING (MS WORD)**
**CONTENT:**
- Features: Create, edit, save, print, format, justify, spell check.
- Application areas: Office, Publishing, Education.

**OBJECTIVES:**
Candidates should be able to:
i. Define word processing and give examples of packages.
ii. Identify features and perform basic operations (Copy, Cut, Paste, Font formatting).
`;
  }

  if (topic === 'comp-spreadsheet') {
    return `${base}
**TOPIC: SPREADSHEET (MS EXCEL)**
**CONTENT:**
- Features: Worksheet, Workbook, Cells, Ranges, Formula bar.
- Data types: Number, Label, Formula.
- Operations: Arithmetic calculations, Inbuilt functions, Charts.

**OBJECTIVES:**
Candidates should be able to:
i. Define spreadsheet terms and identify application areas (Accounting, Statistics).
ii. Use Excel to enter data and perform calculations using formulas.
iii. Format cells and draw charts.
`;
  }

  if (topic === 'comp-database') {
    return `${base}
**TOPIC: DATABASE (MS ACCESS)**
**CONTENT:**
- Terms: File, Record, Field, Key, Table.
- Organization: Hierarchical, Network, Relational.
- MS Access features: Tables, Forms, Queries, Reports.

**OBJECTIVES:**
Candidates should be able to:
i. Define database terms and organization types.
ii. Steps to create a database (define structure, data types).
iii. Basic operations: Sorting, Searching, Querying.
`;
  }

  if (topic === 'comp-graphics') {
    return `${base}
**TOPIC: GRAPHICS PACKAGES (CORELDRAW)**
**CONTENT:**
- Features: LiveSketch, Curves, Node shapes, Color palettes.
- Tools: Pick, Shape, Text, Fill tools.
- Design: Business cards, Logos, Flags.

**OBJECTIVES:**
Candidates should be able to:
i. Define graphics packages and examples.
ii. Explain features of CorelDraw.
iii. Use tools to design simple items (Logo, Card).
`;
  }

  if (topic === 'comp-presentation') {
    return `${base}
**TOPIC: PRESENTATION PACKAGE (MS POWERPOINT)**
**CONTENT:**
- Features: Slides, Animation, Transitions, Notes.
- Operations: Insert pictures/graphs, Run slide show.

**OBJECTIVES:**
Candidates should be able to:
i. Define presentation packages and examples.
ii. Perform operations to create and present slides.
iii. Add multimedia content (images, animation).
`;
  }

  if (topic === 'comp-web') {
    return `${base}
**TOPIC: WEB DESIGN (DREAMWEAVER/HTML)**
**CONTENT:**
- Packages: HTML, XML, Dreamweaver.
- Elements: Navigation, Content, Visibility, Accessibility.
- Uses: Website design, Social media marketing.

**OBJECTIVES:**
Candidates should be able to:
i. Define web design packages.
ii. List elements of good web design.
iii. Identify uses of web design tools in marketing and development.
`;
  }
  return null;
};