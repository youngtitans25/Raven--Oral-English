
export enum SessionStatus {
  IDLE = 'IDLE',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  ERROR = 'ERROR',
  ENDED = 'ENDED',
  RECONNECTING = 'RECONNECTING',
  PAUSED = 'PAUSED'
}

export type SessionMode = 'voice' | 'text';

export interface AudioConfig {
  sampleRate: number;
  inputChannels: number;
}

export interface BlobData {
  data: string;
  mimeType: string;
}

export type Provider = 'gemini';

export type AppView = 
  | 'LOADING' 
  | 'LANDING' 
  | 'PROFILE_SETUP' 
  | 'DASHBOARD' 
  | 'SYLLABUS_VIEW' 
  | 'LIVE_SESSION' 
  | 'PRIVACY_POLICY' 
  | 'TERMS_OF_SERVICE'
  | 'ENGLISH_SYLLABUS'
  | 'HOME_ECONOMICS_SYLLABUS'
  | 'GOVERNMENT_SYLLABUS'
  | 'AGRICULTURE_SYLLABUS'
  | 'ARABIC_SYLLABUS'
  | 'ART_SYLLABUS'
  | 'BIOLOGY_SYLLABUS'
  | 'CHEMISTRY_SYLLABUS'
  | 'ACCOUNTS_SYLLABUS'
  | 'CRS_SYLLABUS'
  | 'COMMERCE_SYLLABUS'
  | 'COMPUTER_SYLLABUS'
  | 'ECONOMICS_SYLLABUS'
  | 'FRENCH_SYLLABUS'
  | 'GEOGRAPHY_SYLLABUS'
  | 'HAUSA_SYLLABUS'
  | 'HISTORY_SYLLABUS'
  | 'IGBO_SYLLABUS'
  | 'IRS_SYLLABUS'
  | 'LITERATURE_SYLLABUS'
  | 'MATHEMATICS_SYLLABUS'
  | 'MUSIC_SYLLABUS'
  | 'PHE_SYLLABUS'
  | 'PHYSICS_SYLLABUS'
  | 'YORUBA_SYLLABUS';

export type StudentCategory = 'Science' | 'Arts' | 'Commercial';

export type StudentGoal = 'find-partner' | 'help-others';

// The ID of the exam module (e.g., 'jamb', 'waec')
export type ExamId = string;

export type ExamMode = 'JAMB' | 'WAEC' | 'NECO' | 'POST-UTME' | 'JUPEB';

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
  metadata?: Record<string, any>;
}

export interface LearningItemRecord {
  session_id: string;
  term: string;
  context: string;
  timestamp: string;
}

// --- UNIFIED STUDENT LEARNING PROFILE (USLP) ---
// This is the "Brain" that persists across exams.

export interface MicroSkill {
  id: string; // e.g., "math.algebra.quadratics"
  masteryLevel: number; // 0.0 to 1.0
  lastPracticed: string; // ISO Date
  confidenceScore: number; // 0.0 to 1.0
}

export interface UnifiedProfileData {
  skills: Record<string, MicroSkill>; // Map of skill IDs to mastery
  strengths: string[];
  weaknesses: string[];
  totalLearningHours: number;
}

// --- PLATFORM TYPES ---

export interface StudentProfile {
  id: string;
  email?: string;
  name: string;
  photo_url?: string;
  whatsapp_number?: string;
  
  // Demographics
  guardian_number?: string;
  dob_month?: string;
  dob_year?: string;
  gender?: 'Male' | 'Female';
  city?: string;
  state?: string;
  
  // Academic Profile
  is_student?: boolean;
  current_class?: string;
  secondary_school?: string;
  
  // Exam History
  is_repeater?: boolean;
  attempts?: string;
  last_score?: number;

  // Targets
  institute?: string;
  course?: string;
  category?: StudentCategory;
  targetScore: number;
  subjects: string[];
  
  // Financial
  bank_name?: string;
  account_number?: string;

  profile_complete: boolean;
  login_count?: number;
  
  // The Active Context
  activeExamId: ExamId; 
  
  // The USLP (Unified Data)
  learningProfile?: UnifiedProfileData;
}

export interface LearningAnalytics {
  overallIntelligenceScore: number;
  studyStreak: number;
  learningSpeed: 'slow' | 'moderate' | 'fast' | 'very_fast';
  weakAreas: string[];
  strongAreas: string[];
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface GamificationProfile {
  level: number;
  points: number;
  badges: Badge[];
  dailyStreak: number;
}
