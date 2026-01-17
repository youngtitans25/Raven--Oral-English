import { StudentProfile } from '../../../types';

export const getSection9Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'comp-ethics') {
    return `${base}
**TOPIC: ETHICAL ISSUES**
**CONTENT:**
- Computer-related crime: Definition, Examples (Hacking, Theft).
- Prevention: User ID, Passwords.
- Protection: Physical and Electronic methods.
- Privacy protection.

**OBJECTIVES:**
Candidates should be able to:
i. Define and state examples of computer crime.
ii. List methods to prevent unauthorized use.
iii. List methods to protect resources and privacy.
`;
  }

  if (topic === 'comp-security') {
    return `${base}
**TOPIC: COMPUTER SECURITY & CYBER RISKS**
**CONTENT:**
- Definition.
- Types: Network, Internet, Application, Data, End user.
- Tools: Firewalls, Antivirus, Encryption.
- CIA Triad: Confidentiality, Integrity, Availability.
- Network Issues/Methods (VPN, NAC).
- Threats: Malware, Phishing, SQL Injection, Ransomware, DDoS.
- Safety tips.

**OBJECTIVES:**
Candidates should be able to:
i. Define security and identify types.
ii. Identify tools and threats.
iii. List safety tips.
`;
  }

  if (topic === 'comp-careers') {
    return `${base}
**TOPIC: CAREER PATHS IN COMPUTING**
**CONTENT:**
- Possible career paths in computing.

**OBJECTIVES:**
Candidates should be able to:
i. List possible career paths in computing.
`;
  }
  return null;
};