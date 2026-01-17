import { StudentProfile } from '../../../types';

export const getSection4Instruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'comp-files-concept') {
    return `${base}
**TOPIC: CONCEPT OF COMPUTER FILES**
**CONTENT:**
- Basic terms: File, record, field, data item.
- Data types: Numeric, Alphabetic, Alphanumeric.
- File structure relationship (Data item -> Field -> Record -> File -> Database).
- File organization: Serial, Sequential, Indexed, Random.
- File classification: Master, Transaction, Reference.
- Criteria for classification: Nature of content (Program/Data), Organization method, Storage medium, Date, Size.

**OBJECTIVES:**
Candidates should be able to:
i. Define basic file terms.
ii. Identify and use basic data types.
iii. Explain the relationship among file structure items.
iv. Classify files according to organization and content.
`;
  }

  if (topic === 'comp-files-handling') {
    return `${base}
**TOPIC: HANDLING COMPUTER FILES**
**CONTENT:**
- Basic operations: Create, Delete, Retrieve, Insert, Copy, View, Update, Open, Close.
- Causes of data loss: Overwriting, Inadvertent deletion, Hardware malfunction, Virus, Theft, Arson, Natural Disaster.
- Methods of security: Backup, Antivirus, PIN, Biometrics, Passwords, Labelling, CCTV, Physical Security.
- Computer vs Manual files: Advantages and disadvantages (security, speed, cost, electricity).

**OBJECTIVES:**
Candidates should be able to:
i. Perform basic file operations.
ii. Identify causes of data loss.
iii. Use different methods of securing data and maintaining its integrity.
iv. Compare the advantages and disadvantages of computer and manual files.
`;
  }
  return null;
};