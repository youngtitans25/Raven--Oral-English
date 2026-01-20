
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { StudentProfile, ExamMode } from '../../types';
import { Play, Zap, BookOpen, User, LogOut, Sparkles, Trophy, ChevronDown, Lock, CheckCircle, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './ui/ImageWithFallback';
import { MOCK_ANALYTICS, MOCK_GAMIFICATION, RECENT_ACTIVITY } from '../mockData';
import { getAllExams, getExamModule } from '../modules/registry';

interface DashboardProps {
  onStartSession: (subject: string, topicId?: string) => void;
  profile: StudentProfile;
  onLogout: () => void;
  currentExam: ExamMode;
  onSwitchExam: (examId: ExamMode) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onStartSession, profile, onLogout, currentExam, onSwitchExam }) => {
  // 1. Load the active module
  const activeModule = getExamModule(currentExam);
  const theme = activeModule.theme;
  
  // 2. Filter subjects (Removing English as it's usually the "Hero" subject)
  const otherSubjects = profile.subjects.filter(s => s !== 'Use of English' && s !== 'English Language');
  
  const [showExamSelector, setShowExamSelector] = useState(false);
  const [showUpsell, setShowUpsell] = useState<string | null>(null);
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleUnlock = (examId: string) => {
      setIsUnlocking(true);
      setTimeout(() => {
          setIsUnlocking(false);
          setShowUpsell(null);
          setShowExamSelector(false);
          onSwitchExam(examId as ExamMode);
      }, 1500);
  };

  const handleExamClick = (examId: string) => {
      const selectedModule = getExamModule(examId);
      
      if (examId === currentExam) {
          setShowExamSelector(false);
          return;
      }

      // Check if premium/locked
      if (selectedModule.isPremium) {
          setShowUpsell(examId);
      } else {
          onSwitchExam(examId as ExamMode);
          setShowExamSelector(false);
      }
  };

  return (
    <div className={`flex-1 overflow-y-auto p-4 md:p-8 transition-colors duration-500 ${theme.bg}`}>
      
      {/* Dynamic Upsell Modal */}
      {showUpsell && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in">
              <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-br ${getExamModule(showUpsell).theme.gradient} opacity-20`} />
                  <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-lg bg-gradient-to-br ${getExamModule(showUpsell).theme.gradient} text-white`}>
                          <Lock className="w-8 h-8" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">Unlock {getExamModule(showUpsell).shortName}</h2>
                      <p className="text-slate-600 mb-6">
                          Access specialized content, past questions, and AI tutoring for {getExamModule(showUpsell).fullName}.
                      </p>
                      <div className="flex gap-3">
                          <Button variant="outline" onClick={() => setShowUpsell(null)} className="flex-1 h-12 rounded-xl">Cancel</Button>
                          <Button 
                            onClick={() => handleUnlock(showUpsell)} 
                            className={`flex-1 h-12 rounded-xl text-white font-bold ${isUnlocking ? 'opacity-70' : ''}`}
                            style={{ backgroundColor: getExamModule(showUpsell).theme.primary }}
                            disabled={isUnlocking}
                          >
                              {isUnlocking ? 'Unlocking...' : 'Unlock Now'}
                          </Button>
                      </div>
                  </div>
              </div>
          </div>
      )}

      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        
        {/* Header & Exam Switcher */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 font-display">Welcome back, {profile.name.split(' ')[0]} 👋</h1>
                <div className="text-sm md:text-base text-slate-500 mt-1 font-medium flex items-center gap-2">
                    Active Learning Context: 
                    <div className="relative inline-block">
                        <button 
                            onClick={() => setShowExamSelector(!showExamSelector)}
                            className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${theme.badge} ${theme.border} hover:scale-105`}
                        >
                            {activeModule.shortName} <ChevronDown className="w-3 h-3" />
                        </button>
                        
                        {/* Exam Dropdown */}
                        {showExamSelector && (
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-20 animate-in slide-in-from-top-2 fade-in">
                                {getAllExams().map((ex) => (
                                    <button
                                        key={ex.id}
                                        onClick={() => handleExamClick(ex.id)}
                                        className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-slate-50 flex items-center justify-between ${currentExam === ex.id ? 'bg-slate-50 text-slate-900' : 'text-slate-500'}`}
                                    >
                                        <div className="flex items-center gap-2">
                                            {ex.isPremium && ex.id !== currentExam && <Lock className="w-3 h-3 text-amber-500" />}
                                            {ex.shortName}
                                        </div>
                                        {currentExam === ex.id && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                    <div className="flex items-center gap-1 text-earth-500 font-bold text-sm">
                        <Zap className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                        <span>{MOCK_GAMIFICATION.dailyStreak} Day Streak</span>
                    </div>
                    <div className="h-4 w-px bg-slate-200"></div>
                    <div className="text-xs md:text-sm font-medium text-slate-600">
                        Lvl {MOCK_GAMIFICATION.level}
                    </div>
                </div>
                <Button variant="ghost" size="icon" onClick={onLogout} title="Logout" className="hover:bg-red-50 hover:text-red-500">
                    <LogOut className="w-5 h-5" />
                </Button>
            </div>
        </div>

        {/* Hero Banner - Uses Active Theme */}
        <div className={`relative rounded-3xl overflow-hidden shadow-xl md:shadow-2xl isolate group bg-slate-900`}>
            <div className="absolute inset-0 w-full h-full">
                <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" 
                    alt="Study Background" 
                    className="w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-10`} />
            <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} opacity-20 mix-blend-overlay z-10`} />

            <div className="relative z-20 p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                <div className="space-y-4 md:space-y-6 max-w-2xl w-full">
                     <div className={`inline-flex items-center gap-2 border px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-inner ${theme.badge} border-white/10 bg-white/10 text-white`}>
                        <Sparkles className="w-3 h-3" />
                        <span>Unified Learning Engine</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-white">
                        Ace your <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradient} font-bold`}>{activeModule.shortName}</span> <br className="hidden md:inline" /> Exams.
                    </h2>
                    
                    <p className="text-slate-300 text-sm md:text-lg leading-relaxed max-w-lg font-light">
                        {activeModule.description}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <Button 
                            onClick={() => onStartSession('Use of English')} 
                            size="lg" 
                            className={`w-full md:w-auto text-white font-bold h-12 md:h-14 px-8 rounded-full text-base md:text-lg shadow-lg transition-all hover:scale-105 border-0 ${theme.button}`}
                        >
                            <Play className="w-5 h-5 mr-2 fill-current" /> Start English Session
                        </Button>
                    </div>
                </div>

                {/* Progress Circle Visual */}
                <div className="hidden md:block relative">
                     <div className="relative w-56 h-56">
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl animate-pulse bg-gradient-to-br ${theme.gradient} opacity-40`}></div>
                        <svg className="w-full h-full transform -rotate-90 drop-shadow-2xl">
                            <circle cx="112" cy="112" r="90" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/5" />
                            <circle 
                                cx="112" cy="112" r="90" 
                                stroke="currentColor" strokeWidth="12" 
                                fill="transparent" 
                                strokeLinecap="round" 
                                strokeDasharray="565" 
                                strokeDashoffset={565 - (565 * MOCK_ANALYTICS.overallIntelligenceScore / 100)} 
                                className={`transition-all duration-1000 ease-out text-white`}
                                style={{ color: theme.primary }}
                            />
                         </svg>
                         <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                            <span className="text-5xl font-display text-white">{MOCK_ANALYTICS.overallIntelligenceScore}%</span>
                            <span className="text-xs uppercase tracking-widest text-white/70 font-semibold mt-1">Unified Mastery</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Subjects Grid - Populated from Syllabus or Profile */}
        <div className="space-y-4">
             <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className={`w-5 h-5 ${theme.text}`} />
                {activeModule.shortName} Subject Coaches
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {otherSubjects.map((subject) => (
                    <div key={subject} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow group">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${theme.bg}`}>
                            <BookOpen className={`w-5 h-5 md:w-6 md:h-6 ${theme.text}`} />
                        </div>
                        <h4 className="font-bold text-slate-800 text-base md:text-lg mb-1">{subject} Coach</h4>
                        <p className="text-xs md:text-sm text-slate-500 mb-6">
                            Practice tailored to the {activeModule.shortName} syllabus.
                        </p>
                        
                        <Button 
                            variant="outline" 
                            className={`w-full mt-auto border-slate-200 text-slate-600 hover:${theme.bg} hover:${theme.text} rounded-xl`}
                            onClick={() => onStartSession(subject)}
                        >
                            Start Session
                        </Button>
                    </div>
                ))}
            </div>
        </div>

        {/* Unified Profile Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="rounded-2xl border-slate-200 shadow-sm flex flex-col">
                <CardHeader className="pb-2 border-b border-slate-50">
                    <CardTitle className="text-xs font-bold text-slate-400 flex items-center gap-2 uppercase tracking-widest">
                        <User className="w-4 h-4 text-slate-500" /> Unified Profile (USLP)
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 flex-1 flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-[10px] text-slate-500 font-medium mb-0.5">TARGET SCORE</p>
                            <div className="flex items-baseline gap-1">
                                <span className={`text-2xl font-bold font-display ${theme.text}`}>{profile.targetScore}</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] text-slate-500 font-medium mb-1">STATUS</p>
                            <span className="inline-block bg-slate-100 text-slate-600 border border-slate-200 px-2 py-1 rounded text-xs font-semibold">
                                {profile.is_student ? profile.current_class : 'Candidate'}
                            </span>
                        </div>
                    </div>
                    <div className="h-px bg-slate-100 w-full" />
                    <div>
                        <p className="text-[10px] text-slate-500 font-medium mb-2 uppercase">Core Subjects</p>
                        <div className="flex flex-wrap gap-1.5">
                            {profile.subjects?.map((sub) => (
                                <span key={sub} className={`bg-slate-50 text-slate-600 border border-slate-100 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-tight`}>
                                    {sub === 'Use of English' ? 'English' : sub.replace('Science', '').trim()}
                                </span>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="rounded-2xl border-slate-200 shadow-sm sm:col-span-2 lg:col-span-2">
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-500 flex items-center gap-2 uppercase tracking-wider">
                        <BookOpen className="w-4 h-4" /> Recent Activity
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {RECENT_ACTIVITY.map((activity) => (
                            <div key={activity.id} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors">
                                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${activity.type === 'quiz' ? 'bg-indigo-500' : 'bg-emerald-500'}`}></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-slate-800">{activity.subject}</p>
                                    <p className="text-xs text-slate-500">{activity.type === 'quiz' ? `Scored ${activity.score}` : activity.duration}</p>
                                </div>
                                <span className="text-xs text-slate-400 font-mono">{activity.date}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
