
import { StudentProfile, LearningAnalytics } from "../types";
import { getCoachSystemInstruction } from "../lib/coaches";
import { getExamModule } from "../lib/modules/registry";

export function generateSystemInstruction(
  student: StudentProfile, 
  analytics: LearningAnalytics, 
  subject: string = 'Use of English',
  topic?: string,
  examId: string = 'JAMB'
): string {
  const timeOfDay = new Date().getHours() < 12 ? "morning" : new Date().getHours() < 17 ? "afternoon" : "evening";
  
  // 1. Fetch the Decoupled Exam Configuration
  const examModule = getExamModule(examId);

  // 2. Get Subject Specific Instruction (This could also be decoupled further in V2)
  const subjectInstruction = getCoachSystemInstruction(subject, student, topic);

  // 3. Analytics Integration (The USLP connection)
  // In a real app, we would query the USLP for specific micro-skills related to the topic.
  const isLowScore = student.targetScore < 250;
  let lowScoreInstruction = "";
  if (isLowScore && examId === 'JAMB') {
      lowScoreInstruction = `\n**STRATEGY NOTICE:** The student has a low target. Focus on "easy wins" and high-frequency topics to boost confidence first.`;
  }

  // 4. Construct the Unified Prompt
  return `
${subjectInstruction}

---
**ACTIVE EXAM MODE: ${examModule.fullName} (${examModule.shortName})**
${examModule.aiConfig.systemInstruction}
---

**STUDENT CONTEXT:**
- Name: ${student.name}
- Time: ${timeOfDay}
- Learning Speed: ${analytics.learningSpeed}
- Known Weak Areas: ${analytics.weakAreas.join(', ')} (Prioritize explanations here).
${lowScoreInstruction}

**HOSTING PROTOCOL:**
You are the host. **Start the session immediately** by welcoming the student to their ${examModule.shortName} prep for ${subject}.
`;
}
