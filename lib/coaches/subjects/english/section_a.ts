import { StudentProfile } from '../../../types';

export const getSectionAInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'english-section-a-lekki-headmaster') {
    return `${base}
**TOPIC: THE LEKKI HEADMASTER (Novel)**
- Focus on characters, the setting, and themes.
- Ask questions about the plot and key events.
- Ask specific questions to test if the student has read the book.
- Discuss moral lessons and character analysis relevant to the JAMB syllabus.
`;
  }
  if (topic === 'english-section-a-comprehension') {
    return `${base}
**TOPIC: COMPREHENSION PASSAGES**
- Use 'display_content' to show a short paragraph (150-200 words).
- Ask the student to identify the **Main Idea**.
- Ask for **Implied Meanings** (Inference).
- Ask for the meaning of specific words based on context.
`;
  }
  if (topic === 'english-section-a-summary') {
    return `${base}
**TOPIC: SUMMARY WRITING**
- Teach synthesis: combining distinct pieces of information.
- Give the student a paragraph and ask them to summarize it in ONE sentence.
- Focus on removing adjectives and examples, keeping only the core point.
`;
  }
  return null;
};