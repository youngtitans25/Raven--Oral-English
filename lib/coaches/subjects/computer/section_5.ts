import { StudentProfile } from '../../../types';

export const getSection5Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'comp-booting') {
    return `${base}
**TOPIC: BOOTING AND SHUTTING DOWN**
**CONTENT:**
- Definition of booting.
- Types: Cold booting (starting from off) vs Warm booting (restart).
- Difference between cold and warm booting.
- Steps involved in booting and shutting down.

**OBJECTIVES:**
Candidates should be able to:
i. Define booting.
ii. List and explain the two types of booting process.
iii. Explain the steps involved in booting and shutting down a system.
`;
  }

  if (topic === 'comp-maintenance') {
    return `${base}
**TOPIC: COMPUTER MAINTENANCE**
**CONTENT:**
- General cleaning of the system.
- Charging and replacing battery for portable systems and UPS.
- Cleaning drive lens.
- Simple hardware and software maintenance.
- Recovering data from a crashed system.

**OBJECTIVES:**
Candidates should be able to:
i. Perform general cleaning.
ii. Charge and replace batteries.
iii. Perform simple maintenance and recover data.
`;
  }

  if (topic === 'comp-room-mgmt') {
    return `${base}
**TOPIC: COMPUTER ROOM MANAGEMENT**
**CONTENT:**
- Proper sitting arrangement.
- Positioning of monitor, keyboard, CPU, Mouse.
- Illumination and lighting.
- Dust-free environment and liquid control.
- Laboratory rules and regulations.

**OBJECTIVES:**
Candidates should be able to:
i. Define proper sitting arrangements.
ii. Position peripherals appropriately.
iii. Ensure safety measures and adhere to rules.
`;
  }
  return null;
};