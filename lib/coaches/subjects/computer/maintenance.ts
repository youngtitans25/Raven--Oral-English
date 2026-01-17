import { StudentProfile } from '../../../types';

export const getMaintenanceInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'comp-booting') {
    return `${base}
**TOPIC: BOOTING AND SHUTTING DOWN**
**CONTENT:**
- Definition of booting.
- Types: Cold booting (starting from off) vs Warm booting (restart).
- Steps in booting and shutting down.

**OBJECTIVES:**
Candidates should be able to:
i. Define booting and distinguish between cold and warm booting.
ii. Explain the steps involved in booting and shutting down a system safely.
`;
  }

  if (topic === 'comp-maintenance') {
    return `${base}
**TOPIC: COMPUTER MAINTENANCE**
**CONTENT:**
- General cleaning (Dusting, covering).
- Battery management (UPS, Laptops).
- Drive lens cleaning.
- Simple hardware/software maintenance.
- Data recovery from crashed systems.

**OBJECTIVES:**
Candidates should be able to:
i. Perform general cleaning and maintenance routines.
ii. Manage batteries and power sources effectively.
iii. Understand basic data recovery concepts.
`;
  }

  if (topic === 'comp-room-mgmt') {
    return `${base}
**TOPIC: COMPUTER ROOM MANAGEMENT**
**CONTENT:**
- Sitting arrangement and ergonomics.
- Positioning of peripherals (Monitor, Keyboard).
- Illumination and lighting.
- Dust-free environment and liquid control.
- Laboratory rules and regulations.

**OBJECTIVES:**
Candidates should be able to:
i. Define proper sitting arrangements and positioning.
ii. Ensure safety measures (lighting, dust control, no liquids).
iii. Adhere to strict laboratory rules.
`;
  }
  return null;
};