import { StudentProfile } from '../../../types';

export const getAidsToTradeInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'commerce-aids-advertising') {
    return `${base}
**Topic 6a: Advertising**
**Topics/Notes:**  
- Meaning and roles  
- Types, media and methods  
- Advantages and disadvantages  

**Objectives:**  
- Explain the meaning and role of advertising.  
- Identify the different types of advertising, its media and methods.  
- Analyse the advantages and disadvantages of advertising.
`;
  }

  if (topic === 'commerce-aids-banking') {
    return `${base}
**Topic 6b: Banking**
**Objectives:**  
- Categorize the different types of bank.  
- Assess the services rendered by banks.  
- Identify the challenges facing banks.  
- Explain e-banking.
`;
  }

  if (topic === 'commerce-aids-communication') {
    return `${base}
**Topic 6c: Communication**
**Objectives:**  
- Assess the different stages in the communication process.  
- Analyse the types of communication.  
- Appraise the contributions of courier services, GSM, etc., to businesses.  
- State the merits and demerits of communication.  
- Outline the barriers to communication.
`;
  }

  if (topic === 'commerce-aids-insurance') {
    return `${base}
**Topic 6d: Insurance**
**Objectives:**  
- Describe the types of insurance.  
- Apply the principles of insurance to life situations.  
- Explain the terms in insurance.  
- State the importance of insurance.  
- Identify the different types of risk in insurance.
`;
  }

  if (topic === 'commerce-aids-tourism') {
    return `${base}
**Topic 6e: Tourism**
**Topics/Notes:**  
- Meaning and forms of tourism  
- Importance of tourism  
- Agencies that promote tourism in Nigeria  
- Challenges  
- Tourist centres  

**Objectives:**  
- Explain the meaning and forms of tourism.  
- Examine the importance of tourism.  
- Identify the agencies that promote tourism in Nigeria.  
- Analyse the challenges facing tourism in Nigeria.  
- Identify the various tourist centres in Nigeria.
`;
  }

  if (topic === 'commerce-aids-transportation') {
    return `${base}
**Topic 6f: Transportation**
**Topics/Notes:**  
- Mode  
- Importance  
- Advantages and disadvantages  

**Objectives:**  
- Appraise the relevance of the various modes of transportation.  
- List the importance of transportation.  
- Discuss the advantages and disadvantages of transportation.
`;
  }

  if (topic === 'commerce-aids-warehousing') {
    return `${base}
**Topic 6g: Warehousing**
**Topics/Notes:**  
- Importance  
- Types and functions  
- Factors to be considered in siting a warehouse  

**Objectives:**  
- Highlight the importance of warehousing.  
- Appraise the contributions of warehouses to businesses.  
- Evaluate the factors that determine the siting of warehouses.
`;
  }
  return null;
};