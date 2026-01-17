import { StudentProfile } from '../../../types';

export const getManagementInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'commerce-management') {
    return `${base}
**Topic 12: Elements of Business Management**
**Topics/Notes:**  
- Functions (planning, organizing, staffing, coordinating, motivating, communicating, controlling etc.)  
- Principles (span of control, unity of command, delegation of authority, etc.)  
- Organizational structure (line, line and staff, functional, matrix and committee)  

**Objectives:**  
- Appraise the functions of management.  
- Analyse the principles of management.  
- Identify organizational structures.  
- Assess the functional areas of business.  
- Examine the business resources.
`;
  }
  return null;
};