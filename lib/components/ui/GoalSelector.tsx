import React from 'react';
import { StudentGoal } from '../../../types';
import { Users, HandHeart } from 'lucide-react';
import { cn } from '../../utils';

interface GoalSelectorProps {
  selectedGoal?: StudentGoal;
  onSelect: (goal: StudentGoal) => void;
}

export const GoalSelector: React.FC<GoalSelectorProps> = ({ selectedGoal, onSelect }) => {
  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
        <button 
            type="button"
            onClick={() => onSelect('find-partner')} 
            className={cn(
                "group p-4 rounded-2xl border-2 transition-all duration-300 text-left relative overflow-hidden",
                selectedGoal === 'find-partner' 
                    ? "border-palm-500 bg-palm-50" 
                    : "border-slate-200 bg-white hover:border-palm-400"
            )}
        >
            <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110",
                selectedGoal === 'find-partner' ? "bg-palm-100 text-palm-600" : "bg-slate-100 text-slate-500"
            )}>
                <Users className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">Find Partner</h3>
            <p className="text-xs text-slate-500 mt-1">Learn together</p>
        </button>

        <button 
            type="button"
            onClick={() => onSelect('help-others')} 
            className={cn(
                "group p-4 rounded-2xl border-2 transition-all duration-300 text-left relative overflow-hidden",
                selectedGoal === 'help-others' 
                    ? "border-earth-500 bg-earth-50" 
                    : "border-slate-200 bg-white hover:border-earth-400"
            )}
        >
             <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110",
                selectedGoal === 'help-others' ? "bg-earth-100 text-earth-600" : "bg-slate-100 text-slate-500"
            )}>
                <HandHeart className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">Help Others</h3>
            <p className="text-xs text-slate-500 mt-1">Share knowledge</p>
        </button>
    </div>
  );
};
