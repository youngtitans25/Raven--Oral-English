import { StudentProfile } from '../../../types';

export const getSectionKInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phe-disease-intro') {
    return `${base}
**TOPIC: DISEASE - MEANING AND CAUSES**
**CONTENT:**
- Definition of disease.
- Causes (Pathogens, hereditary, physiological, nutritional deficiency).
- General prevention and control.

**OBJECTIVES:**
Candidates should be able to:
i. Define disease and state causes;
ii. Differentiate between communicable and non-communicable diseases;
iii. Highlight general prevention measures.
`;
  }
  if (topic === 'phe-communicable') {
    return `${base}
**TOPIC: COMMUNICABLE DISEASES**
**CONTENT:**
- Definition and Classification:
  - Air-borne/Respiratory: Measles, Whooping cough, Polio, Tuberculosis, Meningitis.
  - Water/Food-borne: Dysentery, Cholera, Typhoid.
  - Insect-borne: Malaria, Yellow fever, Trypanosomiasis.
  - Worm infections: Tape worm, Hook worm, Guinea worm.
  - Animal-borne: Rabies, Leptospirosis.
  - Contact diseases: Gonorrhoea, Syphilis, Ringworm, Leprosy, HIV/AIDS.

**OBJECTIVES:**
Candidates should be able to:
i. Classify communicable diseases with examples;
ii. Highlight specific prevention and control measures for each category.
`;
  }
  if (topic === 'phe-non-communicable') {
    return `${base}
**TOPIC: NON-COMMUNICABLE DISEASES**
**CONTENT:**
- Definition.
- Specific Diseases: Hypertension, Sickle cell, Cancer, Epilepsy, Ulcer, Asthma, Diabetes.

**OBJECTIVES:**
Candidates should be able to:
i. Define non-communicable diseases with examples;
ii. Highlight prevention and control measures (lifestyle changes, diet, medical checkups).
`;
  }
  return null;
};