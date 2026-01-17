import { StudentProfile } from '../../../types';

export const getFilesInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'comp-files-concept') {
    return `${base}
**TOPIC: CONCEPT OF COMPUTER FILES**
**CONTENT:**
- Basic terms: File, record, field, data item.
- Data types: Numeric, Alphabetic, Alphanumeric.
- File structure relationship (Data item -> Field -> Record -> File -> Database).
- File organization: Serial, Sequential, Indexed, Random.
- File classification: Master, Transaction, Reference.

**OBJECTIVES:**
Candidates should be able to:
i. Define basic file terms.
ii. Identify data types.
iii. Explain the hierarchy of file structure items.
iv. Classify files by organization and content.
`;
  }

  if (topic === 'comp-files-handling') {
    return `${base}
**TOPIC: HANDLING COMPUTER FILES**
**CONTENT:**
- Operations: Create, Delete, Retrieve, Update, Copy.
- Data Loss: Overwriting, Virus, Theft, Hardware malfunction.
- Security: Backup, Antivirus, Passwords, Biometrics, Physical security.
- Comparison: Computer vs Manual files.

**OBJECTIVES:**
Candidates should be able to:
i. Perform basic file operations.
ii. Identify causes of data loss.
iii. Apply methods for securing data and maintaining integrity.
iv. Compare advantages of computer files over manual files (speed, security, cost).
`;
  }
  return null;
};