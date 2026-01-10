import { StudentProfile, LearningAnalytics } from "../types";
import { getCoachSystemInstruction } from "../lib/coaches";

export function generateSystemInstruction(
  student: StudentProfile, 
  analytics: LearningAnalytics, 
  subject: string = 'Use of English',
  topic?: string
): string {
  const timeOfDay = new Date().getHours() < 12 ? "morning" : new Date().getHours() < 17 ? "afternoon" : "evening";

  // Pass topic here
  const baseInstruction = getCoachSystemInstruction(subject, student, topic);

  // Check for low target score (JAMB is over 400, so < 250 is considered low/average)
  const isLowScore = student.targetScore < 250;
  
  let lowScoreInstruction = "";
  if (isLowScore) {
      lowScoreInstruction = `
**IMPORTANT - LOW TARGET SCORE DETECTED:**
The student has set a target score of ${student.targetScore}/400.
**IMMEDIATE ACTION REQUIRED:**
Before starting the lesson, briefly and warmly ask why they are aiming for this score. Encourage them to aim higher (300+).
`;
  }

  return `
${baseInstruction}

**CONTEXT:**
Time of day: ${timeOfDay}.
Learning Speed: ${analytics.learningSpeed}.
Weak Areas: ${analytics.weakAreas.join(', ')}.

${lowScoreInstruction}
`;
}