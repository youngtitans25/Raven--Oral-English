import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { StudentProfile } from '../../types';
import { Play, Zap, BookOpen, User, LogOut, Sparkles, Trophy } from 'lucide-react';
import { ImageWithFallback } from './ui/ImageWithFallback';

// Keep mock data for analytics until backend is ready, but use real profile
import { MOCK_ANALYTICS, MOCK_GAMIFICATION, RECENT_ACTIVITY } from '../mockData';

interface DashboardProps {
  onStartSession: (subject: string, topicId?: string) => void;
  profile: StudentProfile;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onStartSession, profile, onLogout }) => {
  // Filter out "Use of English" to show other subjects separately
  const otherSubjects = profile.subjects.filter(s => s !== 'Use of English');

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 font-display">Welcome back, {profile.name.split(' ')[0]} 👋</h1>
                <p className="text-sm md:text-base text-slate-500 mt-1 font-medium">Target: <span className="text-palm-600">{profile.course}</span> at {profile.institute} ({profile.targetScore}+)</p>
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

        {/* Main Action Banner - INTELLIGENCE LAYER (Compulsory English) */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl md:shadow-2xl isolate group">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" 
                    alt="Study Background" 
                    className="w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-emerald-900/40 z-10"></div>

            <div className="relative z-20 p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                {/* Left Content */}
                <div className="space-y-4 md:space-y-6 max-w-2xl w-full">
                     <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold text-emerald-400 uppercase tracking-widest backdrop-blur-md shadow-inner">
                        <Sparkles className="w-3 h-3" />
                        <span>Compulsory Subject</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-white">
                        Ace <span className="text-emerald-400">Use of English</span> <br className="hidden md:inline" /> across all sections.
                    </h2>
                    
                    <p className="text-slate-300 text-sm md:text-lg leading-relaxed max-w-lg font-light">
                        From <b>"The Lekki Headmaster"</b> to <b>Lexis & Structure</b> and <b>Oral Forms</b>. Master the complete JAMB syllabus.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <Button 
                            onClick={() => onStartSession('Use of English')} 
                            size="lg" 
                            className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold h-12 md:h-14 px-8 rounded-full text-base md:text-lg shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)] border-0"
                        >
                            <Play className="w-5 h-5 mr-2 fill-current" /> Start English Session
                        </Button>
                    </div>
                </div>

                {/* Right Content - Visual */}
                <div className="hidden md:block relative">
                    {/* The Circle Chart */}
                     <div className="relative w-56 h-56">
                        {/* Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
                        
                        <svg className="w-full h-full transform -rotate-90 drop-shadow-2xl">
                            {/* Track */}
                            <circle cx="112" cy="112" r="90" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/5" />
                            {/* Progress */}
                            <circle 
                                cx="112" cy="112" r="90" 
                                stroke="currentColor" strokeWidth="12" 
                                fill="transparent" 
                                strokeLinecap="round"
                                strokeDasharray="565" 
                                strokeDashoffset={565 - (565 * MOCK_ANALYTICS.overallIntelligenceScore / 100)} 
                                className="text-emerald-500 transition-all duration-1000 ease-out" 
                            />
                         </svg>
                         
                         <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                            <span className="text-5xl font-display text-white">{MOCK_ANALYTICS.overallIntelligenceScore}%</span>
                            <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-semibold mt-1">Readiness</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Other Coaches / Subjects Section */}
        <div className="space-y-4">
             <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-500" />
                Specialized Subject Coaches
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {otherSubjects.map((subject) => (
                    <div key={subject} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow group">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                            <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
                        </div>
                        <h4 className="font-bold text-slate-800 text-base md:text-lg mb-1">{subject} Coach</h4>
                        <p className="text-xs md:text-sm text-slate-500 mb-6">Practice past questions and key concepts tailored to your needs.</p>
                        
                        <Button 
                            variant="outline" 
                            className="w-full mt-auto border-indigo-100 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 rounded-xl"
                            onClick={() => onStartSession(subject)}
                        >
                            Start Session
                        </Button>
                    </div>
                ))}
            </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="rounded-2xl border-slate-200 shadow-sm">
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-500 flex items-center gap-2 uppercase tracking-wider">
                        <User className="w-4 h-4" /> Student Profile
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3 mt-1 text-sm">
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                            <span className="text-slate-500">JAMB Subjects</span>
                            <span className="font-medium text-right max-w-[50%] truncate text-slate-800">{profile.subjects?.join(', ') || 'None'}</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                            <span className="text-slate-500">Institution</span>
                            <span className="font-medium max-w-[60%] truncate text-slate-800">{profile.institute || '-'}</span>
                        </div>
                        <div className="flex justify-between">
                             <span className="text-slate-500">Status</span>
                             <span className="font-medium text-slate-800">{profile.is_student ? profile.current_class : (profile.is_repeater ? 'Repeating' : 'Fresher')}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="rounded-2xl border-slate-200 shadow-sm">
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-500 flex items-center gap-2 uppercase tracking-wider">
                        <Trophy className="w-4 h-4" /> Recent Badges
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-4 mt-2 overflow-x-auto pb-2 scrollbar-none">
                        {MOCK_GAMIFICATION.badges.map((badge) => (
                            <div key={badge.id} className="flex flex-col items-center gap-2 group cursor-pointer flex-shrink-0" title={badge.description}>
                                <div className="w-12 h-12 bg-earth-50 rounded-2xl flex items-center justify-center text-2xl border border-earth-100 group-hover:scale-110 transition-transform group-hover:shadow-md">
                                    {badge.icon}
                                </div>
                                <span className="text-xs text-center font-medium max-w-[60px] leading-tight text-slate-600">{badge.name}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card className="rounded-2xl border-slate-200 shadow-sm sm:col-span-2 lg:col-span-1">
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-500 flex items-center gap-2 uppercase tracking-wider">
                        <BookOpen className="w-4 h-4" /> Activity Log
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {RECENT_ACTIVITY.map((activity) => (
                            <div key={activity.id} className="flex items-start gap-3">
                                <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${activity.type === 'quiz' ? 'bg-indigo-500' : 'bg-emerald-500'}`}></div>
                                <div>
                                    <p className="text-sm font-medium text-slate-800">{activity.subject}</p>
                                    <p className="text-xs text-slate-500">{activity.type === 'quiz' ? `Scored ${activity.score}` : activity.duration} • {activity.date}</p>
                                </div>
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
