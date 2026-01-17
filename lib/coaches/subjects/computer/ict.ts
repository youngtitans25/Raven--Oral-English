import { StudentProfile } from '../../../types';

export const getICTInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'comp-ict-systems') {
    return `${base}
**TOPIC: COMMUNICATION SYSTEMS**
**CONTENT:**
- ICT Devices: Mobile phones, Computers, ATMs, POS machines, Automated Cash Registers.
- Radio sets, TV sets, Scanners.

**OBJECTIVES:**
Candidates should be able to:
i. List types of ICT devices and their functions.
ii. Identify modern communication gadgets.
`;
  }

  if (topic === 'comp-internet') {
    return `${base}
**TOPIC: THE INTERNET**
**CONTENT:**
- Definitions: Internet, Homepage, Browser, Chatroom, Cybercafe, HTTP, HTML, ISP.
- Browsers: Chrome, Firefox, Opera, Internet Explorer.
- Services: Email, Instant Messaging, FTP, WWW, Search Engines.

**OBJECTIVES:**
Candidates should be able to:
i. Define Internet terms.
ii. Identify browser features (Address bar, URL).
iii. Describe uses of internet services.
`;
  }

  if (topic === 'comp-email') {
    return `${base}
**TOPIC: ELECTRONIC MAIL (E-MAIL)**
**CONTENT:**
- Services: Composing, Sending/Receiving, Attachments.
- Email address structure (user@domainname).
- Domain name components.

**OBJECTIVES:**
Candidates should be able to:
i. Define email and chat.
ii. Explain features of an email address.
iii. Perform email operations.
`;
  }

  if (topic === 'comp-networking') {
    return `${base}
**TOPIC: NETWORKING**
**CONTENT:**
- Types: PAN, LAN, WAN, MAN, Intranet, Extranet.
- Topologies: Star, Bus, Ring.
- Devices: Hub, Modem, Switch, Router, Gateway, NIC.

**OBJECTIVES:**
Candidates should be able to:
i. Define computer networks and types.
ii. Explain differences in topologies.
iii. Explain functions of network devices.
`;
  }

  if (topic === 'comp-www') {
    return `${base}
**TOPIC: WORLD WIDE WEB (WWW)**
**CONTENT:**
- Terminologies: HTTP, HTTPS, HTML, XML, Website, Protocol.
- Uses and benefits of WWW.
- Web development software (WordPress, Dreamweaver).
- Difference between email and website.

**OBJECTIVES:**
Candidates should be able to:
i. Give full meanings of acronyms.
ii. Explain protocols (HTTP, FTP).
iii. Navigate websites.
`;
  }

  if (topic === 'comp-cables') {
    return `${base}
**TOPIC: CABLES AND CONNECTORS**
**CONTENT:**
- Network Cables: Twisted Pair, Coaxial, Fibre Optics.
- Connectors: RJ45, RJ11.
- Computer Cables: USB, Power, Data, HDMI/Monitor cables.

**OBJECTIVES:**
Candidates should be able to:
i. Identify different network cables and connectors.
ii. Distinguish between male and female connectors.
`;
  }
  return null;
};