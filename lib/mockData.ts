import { StudentProfile, LearningAnalytics, GamificationProfile } from "../types";

export const MOCK_STUDENT: StudentProfile = {
  id: "std_123456",
  name: "Chioma Adebayo",
  targetExam: "JAMB",
  targetScore: 320,
  profile_complete: true,
  subjects: ["Use of English", "Mathematics", "Physics", "Chemistry"],
  institute: "University of Lagos",
  course: "Medicine and Surgery"
};

export const MOCK_ANALYTICS: LearningAnalytics = {
  overallIntelligenceScore: 72,
  studyStreak: 14,
  learningSpeed: "moderate",
  weakAreas: ["Oral English - Vowel Sounds", "Stress Placement", "Intonation"],
  strongAreas: ["Christian Religious Studies", "Government"],
};

export const MOCK_GAMIFICATION: GamificationProfile = {
  level: 12,
  points: 2450,
  dailyStreak: 5,
  badges: [
    { id: "b1", name: "Early Riser", icon: "🌅", description: "Studied before 7 AM" },
    { id: "b2", name: "Streak Master", icon: "🔥", description: "7 day streak achieved" },
    { id: "b3", name: "Vocab Hero", icon: "🗣️", description: "Mastered 50 new words" }
  ]
};

export const RECENT_ACTIVITY = [
  { id: 1, type: "quiz", subject: "Oral English", score: "65%", date: "2 hours ago" },
  { id: 2, type: "study", subject: "CRS - Sovereignty of God", duration: "45 mins", date: "Yesterday" },
];