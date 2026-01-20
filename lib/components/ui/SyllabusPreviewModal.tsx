
import React, { useMemo } from 'react';
import { X, Mic, MessageSquare, BookOpen, Target, FileText } from 'lucide-react';
import { Button } from './button';
import { MOCK_STUDENT } from '../../mockData';
import { StudentProfile, SessionMode } from '../../../types';

interface SyllabusPreviewModalProps {
  topicId: string;
  topicTitle: string;
  topicImage?: string;
  subjectName: string;
  onClose: () => void;
  onStart: (mode: SessionMode) => void;
  // Function that generates the raw AI prompt text
  instructionGenerator: (profile: StudentProfile, topic: string) => string;
}

export const SyllabusPreviewModal: React.FC<SyllabusPreviewModalProps> = ({
  topicId,
  topicTitle,
  topicImage,
  subjectName,
  onClose,
  onStart,
  instructionGenerator,
}) => {
  // We generate the instruction using a dummy profile because the *syllabus content* 
  // is static, even though the AI's *teaching style* is personalized.
  const rawText = useMemo(() => {
    return instructionGenerator(MOCK_STUDENT, topicId);
  }, [topicId, instructionGenerator]);

  // parser to extract Content and Objectives from the AI prompt format
  const parsedContent = useMemo(() => {
    // Attempt to find explicit CONTENT section first
    let contentText = "";
    const contentExplicitMatch = rawText.match(/\*\*CONTENT:\*\*\s*([\s\S]*?)(?=\*\*OBJECTIVES:|$)/i);
    
    if (contentExplicitMatch) {
        contentText = contentExplicitMatch[1];
    } else {
        // Fallback: Grab everything between TOPIC line and OBJECTIVES (or end)
        const topicMatch = rawText.match(/\*\*TOPIC:.*?\*\*([\s\S]*?)(?=\*\*OBJECTIVES:|$)/i);
        if (topicMatch) {
            contentText = topicMatch[1];
        }
    }

    const objectivesMatch = rawText.match(/\*\*OBJECTIVES:\*\*\s*([\s\S]*?)$/i);

    const cleanLines = (text: string) => {
        return text
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0)
            // Filter out the introductory phrase often found in objectives
            .filter(line => !line.match(/^candidates should be able to/i))
            .map(line => line
                .replace(/^-\s*/, '')          // Hyphens
                .replace(/^[ivx]+\.\s*/i, '')  // Roman numerals (i., ii., etc)
                .replace(/^\d+\.\s*/, '')      // Numbers (1., 2., etc)
                .replace(/^[a-z]\)\s*/i, '')   // Letters (a), b), etc)
                .replace(/^\*\s*/, '')         // Asterisks
            );
    };

    return {
      content: contentText ? cleanLines(contentText) : [],
      objectives: objectivesMatch ? cleanLines(objectivesMatch[1]) : []
    };
  }, [rawText]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
        
        {/* Header Image Area */}
        <div className="relative h-32 md:h-48 bg-slate-100 shrink-0">
            {topicImage ? (
                <img src={topicImage} alt={topicTitle} className="w-full h-full object-cover" />
            ) : (
                <div className="w-full h-full bg-gradient-to-r from-emerald-500 to-teal-600" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-white/80 text-xs font-bold tracking-widest uppercase mb-1">{subjectName}</span>
                <h2 className="text-white text-xl md:text-3xl font-display font-bold leading-tight">{topicTitle}</h2>
            </div>
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-md transition-colors"
            >
                <X className="w-5 h-5" />
            </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
            
            {/* Syllabus Content Section */}
            {parsedContent.content.length > 0 && (
                <div>
                    <div className="flex items-center gap-2 mb-3 text-slate-800">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                            <FileText className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-lg">Topics Covered</h3>
                    </div>
                    <ul className="pl-3 ml-4 border-l-2 border-slate-100">
                        {parsedContent.content.map((item, idx) => (
                            <li 
                                key={idx} 
                                className="text-slate-600 text-sm md:text-base leading-relaxed py-2 border-b border-slate-100 last:border-0 last:pb-0 first:pt-0"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Learning Objectives Section */}
            {parsedContent.objectives.length > 0 && (
                <div>
                    <div className="flex items-center gap-2 mb-3 text-slate-800">
                        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                            <Target className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-lg">Learning Objectives</h3>
                    </div>
                    <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100">
                        <p className="text-xs text-emerald-600 font-medium mb-3 uppercase tracking-wide">By the end of this session, you should be able to:</p>
                        <ul className="space-y-3">
                            {parsedContent.objectives.map((item, idx) => (
                                <li key={idx} className="flex gap-3 text-slate-700 text-sm md:text-base">
                                    <span className="shrink-0 w-5 h-5 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center text-[10px] font-bold mt-0.5">
                                        {idx + 1}
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex flex-col md:flex-row gap-3 shrink-0">
            <Button 
                onClick={() => onStart('voice')} 
                className="flex-1 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-200 flex items-center justify-center gap-2"
            >
                <Mic className="w-5 h-5 fill-current" /> Start Voice Session
            </Button>
            <Button 
                onClick={() => onStart('text')} 
                className="flex-1 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
            >
                <MessageSquare className="w-5 h-5 fill-current" /> Start Text Chat
            </Button>
        </div>

      </div>
    </div>
  );
};
