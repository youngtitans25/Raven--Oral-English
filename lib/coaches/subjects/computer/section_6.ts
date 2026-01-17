import { StudentProfile } from '../../../types';

export const getSection6Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'comp-ict-systems') {
    return `${base}
**TOPIC: COMMUNICATION SYSTEMS**
**CONTENT:**
- Types of ICT Devices: Mobile phones, Computers, ATMs, Dispensing Machines, Point of Sale (POS), Automated Cash Register (ACR), Radio sets, TV sets, Scanners.

**OBJECTIVES:**
Candidates should be able to:
i. List types of ICT devices.
`;
  }

  if (topic === 'comp-internet') {
    return `${base}
**TOPIC: THE INTERNET**
**CONTENT:**
- Definition of Internet.
- Terms: Homepage, Browse, Browser, Chatroom, Cybercafe, HTTP, HTML, ISP, Webpage, Website.
- Accessing Internet via browsers: Explorer, Opera, Firefox, Chrome, etc.
- Browser features: Title Bar, Menu Bar, Tool Bar, Address Bar, Search Bar, URL.
- Services: Email, Discussion Groups, IM/Chats, FTP, WWW, Search Engines.

**OBJECTIVES:**
Candidates should be able to:
i. Define Internet and related terms.
ii. Access the Internet through browsers.
iii. Explain features of browsers.
iv. Describe uses of Internet services.
`;
  }

  if (topic === 'comp-email') {
    return `${base}
**TOPIC: ELECTRONIC MAIL (E-MAIL)**
**CONTENT:**
- Definition of Email and Chatting.
- Services: Creating address, Composing, Sending/Receiving, Attachments, Mailing lists.
- Email address features (user@domainname) and domain components.

**OBJECTIVES:**
Candidates should be able to:
i. Define Electronic Mail.
ii. List and perform e-mail services.
iii. Explain features of an e-mail address.
`;
  }

  if (topic === 'comp-networking') {
    return `${base}
**TOPIC: NETWORKING**
**CONTENT:**
- Definition.
- Types: PAN, LAN, WAN, MAN, Intranet, Extranet, Internet.
- Topologies: Star, Bus, Ring.
- Devices: Hub, Modems, Switches, Routers, Gateway, Repeaters, Access Points, NIC.

**OBJECTIVES:**
Candidates should be able to:
i. Define computer network.
ii. List and define types of Networks.
iii. Explain differences in topologies.
iv. Define and explain use of network devices.
`;
  }

  if (topic === 'comp-www') {
    return `${base}
**TOPIC: WORLD WIDE WEB (WWW)**
**CONTENT:**
- Acronyms: WWW, HTTP, HTTPS, HTML, XML.
- History, Terminologies (Website, Webpage, Protocol).
- Protocols: HTTP, HTTPS, FTP.
- Uses/Benefits and Disadvantages of WWW.
- Website navigation (jamb.org.ng, google.com).
- Web development software: Frontpage, WordPress, Dreamweaver.
- Difference between email and website.

**OBJECTIVES:**
Candidates should be able to:
i. Give meanings of WWW, HTTP, etc.
ii. Explain basic terminologies and protocols.
iii. List uses, benefits, and disadvantages.
iv. Navigate websites and identify dev software.
`;
  }

  if (topic === 'comp-cables') {
    return `${base}
**TOPIC: CABLES AND CONNECTORS**
**CONTENT:**
- Network Cables: Twisted Pair, Coaxial, Fibre Optics.
- Network Connectors: RJ45, RJ11, T-Connectors.
- Computer Cables: Power, Data, Printer, USB, Monitor, Serial, Parallel.
- Connectors: Male and Female.

**OBJECTIVES:**
Candidates should be able to:
i. Identify different network cables and connectors.
ii. Identify different types of computer cables and connectors.
`;
  }
  return null;
};