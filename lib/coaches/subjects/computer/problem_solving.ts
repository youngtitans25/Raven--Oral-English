import { StudentProfile } from '../../../types';

export const getProblemSolvingInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'comp-programming') {
    return `${base}
**TOPIC: PROGRAMMING LANGUAGES (PL)**
**CONTENT:**
- Machine Language (Binary).
- Assembly Language (Symbolic).
- High-Level Languages (BASIC, C, Java, Python).
- Advantages and disadvantages of each level.

**OBJECTIVES:**
Candidates should be able to:
i. Define Programming Language.
ii. Classify languages and stating their pros/cons.
`;
  }

  if (topic === 'comp-hll') {
    return `${base}
**TOPIC: HIGH LEVEL LANGUAGES (HLL)**
**CONTENT:**
- Classification: General Purpose, Object Oriented, Scripting, AI.
- Characteristics: Portable, Readable, Debuggable.
- Translators: Interpreters vs Compilers.

**OBJECTIVES:**
Candidates should be able to:
i. Classify HLLs.
ii. Explain characteristics of HLLs.
iii. Define translators and distinguish between compilers and interpreters.
`;
  }

  if (topic === 'comp-algorithms') {
    return `${base}
**TOPIC: ALGORITHMS AND FLOWCHARTS**
**CONTENT:**
- Algorithm properties: Definiteness, Effectiveness, Finiteness.
- Flowchart symbols: Start/Stop (Oval), Input/Output (Parallelogram), Process (Rectangle), Decision (Diamond).

**OBJECTIVES:**
Candidates should be able to:
i. Define Algorithm and Flowchart.
ii. Identify flowchart symbols.
iii. Draw flowcharts for simple problems.
`;
  }

  if (topic === 'comp-structure') {
    return `${base}
**TOPIC: PROGRAMMING LANGUAGE STRUCTURE**
**CONTENT:**
- Syntax: Keywords, Variables, Constants.
- Data Types: Primitive (Integer, Float, Boolean), Non-Primitive (Array, Class).
- Statements: Input/Output, Loops, Conditionals.
- Operators: Arithmetic, String.

**OBJECTIVES:**
Candidates should be able to:
i. Identify syntax features.
ii. Use operators and built-in functions.
iii. Identify data types and structures.
`;
  }

  if (topic === 'comp-development') {
    return `${base}
**TOPIC: PROGRAM DEVELOPMENT & SDLC**
**CONTENT:**
- Steps: Problem definition, Analysis, Design, Coding, Testing, Documentation.
- Characteristics of a good program (Accuracy, Readability).
- SDLC Stages: Feasibility, Analysis, Design, Implementation, Maintenance.

**OBJECTIVES:**
Candidates should be able to:
i. List steps in program development.
ii. Define SDLC and explain its stages.
iii. Draw SDLC diagram.
`;
  }
  return null;
};