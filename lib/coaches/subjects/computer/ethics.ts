import { StudentProfile } from '../../../types';

export const getEthicsInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'comp-ethics') {
    return `${base}
**TOPIC: ETHICAL ISSUES**
**CONTENT:**
- Computer crimes: Hacking, theft, compromising systems.
- Prevention: User identification, Passwords, Physical/Electronic security resources.
- Privacy protection methods.

**OBJECTIVES:**
Candidates should be able to:
i. Define computer crime and give examples.
ii. List methods to prevent unauthorized access.
iii. Discuss privacy protection for individuals and organizations.
`;
  }

  if (topic === 'comp-security') {
    return `${base}
**TOPIC: COMPUTER SECURITY & CYBER RISKS**
**CONTENT:**
- Types: Network, Internet (Cyber), Application, Data security.
- Tools: Firewalls, Antivirus, Encryption.
- CIA Triad: Confidentiality, Integrity, Availability.
- Threats: Malware, Phishing, SQL Injection, Ransomware, DDoS.
- Safety tips.

**OBJECTIVES:**
Candidates should be able to:
i. Define computer security dimensions (CIA).
ii. Identify security tools and their uses.
iii. List cyber threats and safety tips.
`;
  }

  if (topic === 'comp-careers') {
    return `${base}
**TOPIC: CAREER PATHS IN COMPUTING**
**CONTENT:**
- Higher studies potentials.
- Career paths: Software Engineering, Data Science, Network Admin, Cyber Security, AI Specialist, etc.

**OBJECTIVES:**
Candidates should be able to:
i. List possible career paths in computing.
ii. Identify requirements for higher studies.
`;
  }
  return null;
};