import { StudentProfile } from '../../../types';

export const getEnvironmentInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'commerce-environment') {
    return `${base}
**Topic 16: Business Environment and Social Responsibilities**
**Topics/Notes:**  
- Legal, political, economic, social, cultural, technological environments, etc  
- Safe products, philanthropic and societal consideration  
- Types and implication of pollution (water, air, land, etc.)  

**Objectives:**  
- Discuss the types of business environment.  
- Assess the role of social environment in the provision of safe products.  
- Identify the different types of pollution and their implications on businesses.
`;
  }
  return null;
};