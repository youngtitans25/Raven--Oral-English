import { StudentProfile } from '../../../types';

export const getSection7Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'comp-programming') {
    return `${base}
**TOPIC: PROGRAMMING LANGUAGES (PL)**
**CONTENT:**
- Definition.
- Classifications:
  - Machine Language (Binary).
  - Assembly Language (Symbolic).
  - High-Level Languages (BASIC, C, Java, Python).
- Advantages and disadvantages of each.

**OBJECTIVES:**
Candidates should be able to:
i. Define Programming Language.
ii. Identify classifications and examples.
iii. Give advantages and disadvantages.
`;
  }

  if (topic === 'comp-hll') {
    return `${base}
**TOPIC: HIGH LEVEL LANGUAGES (HLL)**
**CONTENT:**
- Classification: Scientific, General Purpose, Business, OO, AI, Systems, etc.
- Characteristics: Translated, Portable, English-like, Data structures, Logic.
- Translators: Interpreters, Compilers.

**OBJECTIVES:**
Candidates should be able to:
i. Classify HLLs.
ii. Explain characteristics of HLLs.
iii. Define translators and types.
`;
  }

  if (topic === 'comp-algorithms') {
    return `${base}
**TOPIC: ALGORITHMS AND FLOWCHARTS**
**CONTENT:**
- Definition.
- Functions: Calculations, Data Processing, Reasoning.
- Properties: Input/Output specified, Definiteness, Effectiveness, Finiteness.
- Flowchart symbols: Start, I/O, Process, Decision, Stop, Loop, Connector.

**OBJECTIVES:**
Candidates should be able to:
i. Define Algorithm and Flowchart.
ii. State functions and properties.
iii. Identify symbols.
iv. Draw flowcharts.
`;
  }

  if (topic === 'comp-structure') {
    return `${base}
**TOPIC: PROGRAMMING LANGUAGE STRUCTURE**
**CONTENT:**
- Syntax: Keywords, Variables, Constants.
- Statements: Input, Output, Processing, Loops, Conditionals.
- Operators: Arithmetic, String.
- Data Types: Primitive (Integer, Float, Boolean, Char) vs Non-Primitive (Arrays, Classes) vs Complex (Trees, Graphs).

**OBJECTIVES:**
Candidates should be able to:
i. Identify syntax features.
ii. Identify basic statements.
iii. Use operators and functions.
iv. Identify data types and structures.
`;
  }

  if (topic === 'comp-development') {
    return `${base}
**TOPIC: PROGRAM DEVELOPMENT & SDLC**
**CONTENT:**
- Characteristics of good programs: Accuracy, Readability, Maintainability.
- Precautions: Patience, Order of execution.
- Steps: Problem definition, Analysis, Design, Coding, Compilation, Testing, Documentation, Maintenance.
- SDLC: Preliminary study, Feasibility, Analysis, Design, Implementation, Maintenance, Review.

**OBJECTIVES:**
Candidates should be able to:
i. Define program and list characteristics.
ii. List steps in program development.
iii. Define and describe SDLC stages.
iv. Draw SDLC diagram.
`;
  }
  return null;
};