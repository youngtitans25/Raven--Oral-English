import { StudentProfile } from '../../../types';

export const getFundamentalsInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'comp-overview') {
    return `${base}
**TOPIC: OVERVIEW OF COMPUTING SYSTEMS**
**CONTENT:**
- Definition and functional parts of a computer system.
- Characteristics: Electronic, Accuracy, Speed, Interactive, Reliability, Consistency, Storage.
- Hardware vs Software.

**OBJECTIVES:**
Candidates should be able to:
i. Define a computer system.
ii. List functional parts and explain key characteristics.
iii. Identify differences between hardware and software.
`;
  }

  if (topic === 'comp-hardware') {
    return `${base}
**TOPIC: COMPUTER HARDWARE**
**CONTENT:**
- Input Devices: Keyboard (classification of keys), Mouse (features/operations), Scanner, Joystick, Light pen, Digital camera.
- Output Devices: Monitor, Printer (Inkjet, Laser, Line), Speaker, Plotter.
- CPU: ALU, Control Unit, Registers.
- Memory: Primary (RAM, ROM) vs Secondary (Hard disk, Flash drive, DVD, etc.).
- Storage Units: Bit, Byte, Nibble, KB, MB, GB, TB.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate between input and output devices.
ii. Explain functions of ALU, CU, and Registers.
iii. Distinguish between volatile (RAM) and non-volatile (ROM) memory.
iv. Compare auxiliary storage devices (size, speed, technology).
v. Perform unit conversions (e.g., MB to KB).
`;
  }

  if (topic === 'comp-logic') {
    return `${base}
**TOPIC: LOGIC CIRCUITS**
**CONTENT:**
- Logic Gates: AND, OR, NOT, NAND, NOR, XOR.
- Truth Tables and Symbols.
- Logic equations.
- Comparator (XOR + NOR).

**OBJECTIVES:**
Candidates should be able to:
i. Define types and uses of gates.
ii. Interpret logic equations and symbols.
iii. Construct Truth Tables for standard gates.
iv. Construct a simple comparator.
`;
  }

  if (topic === 'comp-software') {
    return `${base}
**TOPIC: COMPUTER SOFTWARE**
**CONTENT:**
- System Software: OS (Windows, Linux, Android), Utilities (Antivirus, Editors), Translators (Compiler, Interpreter, Assembler).
- Application Software: Off-the-shelf vs Bespoke.
- Open Source vs Proprietary.

**OBJECTIVES:**
Candidates should be able to:
i. Differentiate between system and application software.
ii. List functions and types of Operating Systems (GUI vs CLI).
iii. Explain the functions of Translators and Utility software.
iv. Categorize application packages (Word, Excel, etc.).
`;
  }
  return null;
};