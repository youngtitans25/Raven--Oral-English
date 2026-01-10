import React, { useEffect, useMemo } from 'react';
import { ALL_SUBJECTS } from '../../lib/constants';
import { cn } from '../../lib/utils';
import { Check } from 'lucide-react';

interface SubjectSelectorProps {
  selectedSubjects: string[];
  onChange: (subjects: string[]) => void;
}

export const SubjectSelector: React.FC<SubjectSelectorProps> = ({ selectedSubjects, onChange }) => {
  
  // Ensure Use of English is always selected on mount
  useEffect(() => {
    if (!selectedSubjects.includes('Use of English')) {
        onChange(['Use of English', ...selectedSubjects]);
    }
  }, []);

  // Compute the displayed subjects list with "Use of English" first
  const displaySubjects = useMemo(() => {
    const others = ALL_SUBJECTS.filter(s => s !== 'Use of English');
    return ['Use of English', ...others];
  }, []);

  const handleToggle = (subject: string) => {
    if (subject === 'Use of English') return; // Immutable

    if (selectedSubjects.includes(subject)) {
      onChange(selectedSubjects.filter(s => s !== subject));
    } else {
      if (selectedSubjects.length < 4) {
        onChange([...selectedSubjects, subject]);
      }
    }
  };

  const isFull = selectedSubjects.length === 4;

  return (
    <div className="space-y-3">
        <label className="block text-xs font-medium text-slate-500 ml-1">
            Your JAMB Subjects (Use of English + 3)
        </label>
        <div className="flex flex-wrap gap-2 md:gap-3">
            {displaySubjects.map(subject => {
                const isSelected = selectedSubjects.includes(subject);
                const isEnglish = subject === 'Use of English';
                const isDisabled = !isSelected && isFull;

                return (
                    <button
                        key={subject}
                        type="button"
                        onClick={() => handleToggle(subject)}
                        disabled={isDisabled}
                        className={cn(
                            "px-4 py-2 rounded-full text-xs md:text-sm font-medium border transition-all flex items-center gap-1 active:scale-95 touch-manipulation",
                            isSelected 
                                ? "bg-palm-500 text-white border-palm-500 shadow-sm" 
                                : "bg-white text-slate-700 border-slate-200 hover:border-palm-300",
                            isDisabled && "opacity-50 cursor-not-allowed hover:border-slate-200",
                            isEnglish && "bg-palm-600 border-palm-600 cursor-default"
                        )}
                    >
                        {isSelected && <Check className="w-3 h-3 md:w-4 md:h-4" />}
                        {subject}
                        {isEnglish && <span className="ml-1 text-[10px] opacity-70 hidden sm:inline">(Compulsory)</span>}
                    </button>
                );
            })}
        </div>
        <p className={cn("text-xs transition-colors", isFull ? "text-palm-600 font-medium" : "text-slate-400")}>
            {isFull ? "✓ All subjects selected" : `Select ${4 - selectedSubjects.length} more subjects`}
        </p>
    </div>
  );
};