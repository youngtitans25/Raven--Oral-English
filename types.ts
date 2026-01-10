
export enum SessionStatus {
  IDLE = 'IDLE',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  ERROR = 'ERROR',
  ENDED = 'ENDED'
}

export interface AudioConfig {
  sampleRate: number;
  inputChannels: number;
}

export interface BlobData {
  data: string;
  mimeType: string;
}

export type Provider = 'gemini';

export type AppView = 'LOADING' | 'LANDING' | 'PROFILE_SETUP' | 'DASHBOARD' | 'ENGLISH_SYLLABUS' | 'LIVE_SESSION' | 'PRIVACY_POLICY' | 'TERMS_OF_SERVICE';

export type StudentCategory = 'Science' | 'Arts' | 'Commercial';

export type StudentGoal = 'find-partner' | 'help-others';

// --- PLATFORM TYPES ---

export interface StudentProfile {
  id: string;
  email?: string;
  name: string;
  photo_url?: string;
  whatsapp_number?: string;
  
  // New Demographics
  guardian_number?: string;
  dob_month?: string;
  dob_year?: string;
  gender?: 'Male' | 'Female';
  city?: string;
  state?: string;
  
  // Financial / Referral
  bank_name?: string;
  account_number?: string;
  
  // Academic Profile
  is_student?: boolean; // Still in secondary school?
  current_class?: string; // SSS 1, SS2, SS3
  secondary_school?: string; // School Name
  
  // Exam History
  is_repeater?: boolean;
  attempts?: string;
  last_score?: number;

  // Future Targets
  institute?: string;
  course?: string;
  category?: StudentCategory;
  targetScore: number;
  subjects: string[];
  
  profile_complete: boolean;
  login_count?: number;
  targetExam?: string;
}

export interface LearningAnalytics {
  overallIntelligenceScore: number; // 0-100
  studyStreak: number;
  learningSpeed: 'slow' | 'moderate' | 'fast' | 'very_fast';
  weakAreas: string[];
  strongAreas: string[];
}

export interface Badge {
  id: string;
  name: string;
  icon: string; // Emoji or icon name
  description: string;
}

export interface GamificationProfile {
  level: number;
  points: number;
  badges: Badge[];
  dailyStreak: number;
}