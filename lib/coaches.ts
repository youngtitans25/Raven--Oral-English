import { StudentProfile } from './types';
import { ALL_SUBJECTS } from './subjects';
import { createGenericInstruction } from './coaches/base';

// Import all specific subject coaches
import { ENGLISH_INSTRUCTION } from './coaches/subjects/english';
import { MATH_INSTRUCTION } from './coaches/subjects/mathematics';
import { PHYSICS_INSTRUCTION } from './coaches/subjects/physics';
import { CHEMISTRY_INSTRUCTION } from './coaches/subjects/chemistry';
import { BIOLOGY_INSTRUCTION } from './coaches/subjects/biology';
import { AGRI_INSTRUCTION } from './coaches/subjects/agriculture';
import { CRS_INSTRUCTION } from './coaches/subjects/crs';
import { GOVERNMENT_INSTRUCTION } from './coaches/subjects/government';
import { LIT_INSTRUCTION } from './coaches/subjects/literature';
import { HISTORY_INSTRUCTION } from './coaches/subjects/history';
import { ECONOMICS_INSTRUCTION } from './coaches/subjects/economics';
import { COMMERCE_INSTRUCTION } from './coaches/subjects/commerce';
import { ACCOUNTS_INSTRUCTION } from './coaches/subjects/accounts';
import { ARABIC_INSTRUCTION } from './coaches/subjects/arabic';
import { ART_INSTRUCTION } from './coaches/subjects/art';
import { COMPUTER_INSTRUCTION } from './coaches/subjects/computer';
import { FRENCH_INSTRUCTION } from './coaches/subjects/french';
import { GEOGRAPHY_INSTRUCTION } from './coaches/subjects/geography';
import { HAUSA_INSTRUCTION } from './coaches/subjects/hausa';
import { HOME_ECONOMICS_INSTRUCTION } from './coaches/subjects/home_economics';
import { IGBO_INSTRUCTION } from './coaches/subjects/igbo';
import { IRS_INSTRUCTION } from './coaches/subjects/irs';
import { MUSIC_INSTRUCTION } from './coaches/subjects/music';
import { PHE_INSTRUCTION } from './coaches/subjects/phe';
import { YORUBA_INSTRUCTION } from './coaches/subjects/yoruba';

// Re-export constants and types for use in components
export { ENGLISH_SECTIONS } from './coaches/subjects/english';
export { BASE_INSTRUCTION } from './coaches/base';

export interface CoachConfig {
  id: string;
  name: string;
  instruction: (profile: StudentProfile, topic?: string) => string;
}

// --- SPECIFIC INSTRUCTION STRATEGIES ---
// Map subjects to their specific instruction generators
const SPECIFIC_INSTRUCTIONS: Record<string, (p: StudentProfile, t?: string) => string> = {
  'Use of English': ENGLISH_INSTRUCTION,
  'Mathematics': MATH_INSTRUCTION,
  'Physics': PHYSICS_INSTRUCTION,
  'Chemistry': CHEMISTRY_INSTRUCTION,
  'Biology': BIOLOGY_INSTRUCTION,
  'Agriculture Science': AGRI_INSTRUCTION,
  'Christian Religious Studies': CRS_INSTRUCTION,
  'Government': GOVERNMENT_INSTRUCTION,
  'Literature-In-English': LIT_INSTRUCTION,
  'History': HISTORY_INSTRUCTION,
  'Economics': ECONOMICS_INSTRUCTION,
  'Commerce': COMMERCE_INSTRUCTION,
  'Principles of Accounts': ACCOUNTS_INSTRUCTION,
  'Arabic': ARABIC_INSTRUCTION,
  'Art': ART_INSTRUCTION,
  'Computer Studies': COMPUTER_INSTRUCTION,
  'French': FRENCH_INSTRUCTION,
  'Geography': GEOGRAPHY_INSTRUCTION,
  'Hausa': HAUSA_INSTRUCTION,
  'Home Economics': HOME_ECONOMICS_INSTRUCTION,
  'Igbo': IGBO_INSTRUCTION,
  'Islamic Studies': IRS_INSTRUCTION,
  'Music': MUSIC_INSTRUCTION,
  'Physical and Health Education': PHE_INSTRUCTION,
  'Yoruba': YORUBA_INSTRUCTION
};

// --- COACHES REGISTRY POPULATION ---
export const COACHES: Record<string, CoachConfig> = {};

// 1. Iterate over ALL available subjects to ensure every possible choice has a coach
ALL_SUBJECTS.forEach((subject) => {
    // Check if we have a specific override, otherwise use the generic factory
    const instructionStrategy = SPECIFIC_INSTRUCTIONS[subject] || createGenericInstruction(subject);

    COACHES[subject] = {
        id: subject.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        name: `${subject} Coach`,
        instruction: instructionStrategy
    };
});

// 2. Add a default fallback just in case
COACHES['default'] = {
    id: 'general',
    name: 'Academic Coach',
    instruction: createGenericInstruction('General Studies')
};

export function getCoachSystemInstruction(subject: string, profile: StudentProfile, topic?: string): string {
  // 1. Look up the coach in our fully populated registry
  let coach = COACHES[subject];

  // 2. Fallback: If a subject was passed that isn't in ALL_SUBJECTS (e.g. legacy data), generate on the fly
  if (!coach) {
      coach = {
          id: 'dynamic-' + subject,
          name: `${subject} Coach`,
          instruction: createGenericInstruction(subject)
      };
  }

  return coach.instruction(profile, topic);
}
