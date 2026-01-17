

export enum SessionStatus {
  IDLE = 'IDLE',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  ERROR = 'ERROR',
  ENDED = 'ENDED',
  RECONNECTING = 'RECONNECTING',
  PAUSED = 'PAUSED'
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

export type AppView = 'LOADING' | 'LANDING' | 'PROFILE_SETUP' | 'DASHBOARD' | 'ENGLISH_SYLLABUS' | 'HOME_ECONOMICS_SYLLABUS' | 'GOVERNMENT_SYLLABUS' | 'AGRICULTURE_SYLLABUS' | 'ARABIC_SYLLABUS' | 'ART_SYLLABUS' | 'BIOLOGY_SYLLABUS' | 'CHEMISTRY_SYLLABUS' | 'ACCOUNTS_SYLLABUS' | 'CRS_SYLLABUS' | 'COMMERCE_SYLLABUS' | 'COMPUTER_SYLLABUS' | 'ECONOMICS_SYLLABUS' | 'FRENCH_SYLLABUS' | 'GEOGRAPHY_SYLLABUS' | 'HAUSA_SYLLABUS' | 'HISTORY_SYLLABUS' | 'IGBO_SYLLABUS' | 'IRS_SYLLABUS' | 'LITERATURE_SYLLABUS' | 'MATHEMATICS_SYLLABUS' | 'MUSIC_SYLLABUS' | 'PHE_SYLLABUS' | 'PHYSICS_SYLLABUS' | 'YORUBA_SYLLABUS' | 'LIVE_SESSION' | 'PRIVACY_POLICY' | 'TERMS_OF_SERVICE';

export type StudentCategory = 'Science' | 'Arts' | 'Commercial';

export type StudentGoal = 'find-partner' | 'help-others';

// --- MEMORY & PERSISTENCE TYPES ---

export interface SessionRecord {
  id: string;
  student_id: string;
  subject: string;
  topic?: string;
  start_time: string;
  end_time?: string;
  duration_seconds?: number;
  status: 'completed' | 'aborted' | 'active';
}

export interface InteractionRecord {
  session_id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  metadata?: Record<string, any>; // For sentiment, feelings, or tool specific data
}

export interface LearningItemRecord {
  session_id: string;
  term: string;
  context: string; // The sentence or explanation provided
  timestamp: string;
}

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