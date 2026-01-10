import React, { useEffect, useState } from 'react';
import { StudentProfile, SessionStatus, AppView } from './types';
import { useLiveSession } from './hooks/useLiveSession';
import { Loader2 } from 'lucide-react';
import { Button } from './components/ui/button';

// Screens
import LandingPage from './components/LandingPage';
import ProfileSetup from './components/ProfileSetup';
import Dashboard from './components/Dashboard';
import LiveSessionView from './components/LiveSessionView';
import EnglishSyllabusView from './components/EnglishSyllabusView';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('LANDING');
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [activeSubject, setActiveSubject] = useState<string>('Use of English');
  const [logoError, setLogoError] = useState(false);

  // Live Session Hook
  const { 
    status, 
    errorMessage: sessionError, 
    analyser, 
    startSession, 
    disconnect, 
    messages, 
    visualContent,
  } = useLiveSession();

  // Combine error messages
  const [globalError, setGlobalError] = useState<string | null>(sessionError);

  // Update global error if session error changes
  useEffect(() => {
    if (sessionError) setGlobalError(sessionError);
  }, [sessionError]);

  // Monitor live session status to toggle view
  useEffect(() => {
    if (status === SessionStatus.CONNECTED || status === SessionStatus.CONNECTING) {
      setView('LIVE_SESSION');
    } else if (status === SessionStatus.ENDED && profile) {
      // If we ended an English session, go back to syllabus, otherwise dashboard
      if (activeSubject === 'Use of English') {
         setView('ENGLISH_SYLLABUS');
      } else {
         setView('DASHBOARD');
      }
    }
  }, [status, profile, activeSubject]);

  const handleLogin = async () => {
    // Bypass Auth: Create a mock user immediately
    const mockUser = {
        id: 'guest-' + Date.now(),
        email: 'guest@raven.edu',
        user_metadata: {
            full_name: 'Guest Student',
            avatar_url: null
        }
    };
    setUser(mockUser);
    setView('PROFILE_SETUP');
  };

  const handleLogout = async () => {
    setUser(null);
    setProfile(null);
    setView('LANDING');
  };

  const handleProfileComplete = (updatedProfile: StudentProfile) => {
    setProfile(updatedProfile);
    setView('DASHBOARD');
  };

  // Called when user clicks "Start Session" from Dashboard or Syllabus
  const handleStartSession = (subject: string, topicId?: string) => {
    if (!profile) return;
    setActiveSubject(subject);
    
    // If it's English and no specific topic is selected yet, go to syllabus view
    if (subject === 'Use of English' && !topicId) {
        setView('ENGLISH_SYLLABUS');
        return;
    }

    // Otherwise start the session (Math, Physics, or specific English section)
    startSession(profile, subject, topicId);
  };

  const handleNavigate = (newView: AppView) => {
    setView(newView);
  };

  const handleBackFromLegal = () => {
    if (profile?.profile_complete) {
        setView('DASHBOARD');
    } else if (user) {
        setView('PROFILE_SETUP');
    } else {
        setView('LANDING');
    }
  };

  // --- RENDER VIEWS ---
  
  // Wrapper for consistency
  const LayoutWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen bg-slate-50 naija-pattern text-slate-900 font-sans">
        {children}
    </div>
  );

  if (view === 'LOADING') {
    return (
      <LayoutWrapper>
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Loader2 className="w-10 h-10 text-palm-500 animate-spin mb-4" />
            <p className="text-gray-500 font-medium">Initializing Raven...</p>
        </div>
      </LayoutWrapper>
    );
  }

  // Legal Pages
  if (view === 'PRIVACY_POLICY') {
      return <PrivacyPolicy onBack={handleBackFromLegal} />;
  }

  if (view === 'TERMS_OF_SERVICE') {
      return <TermsOfService onBack={handleBackFromLegal} onNavigate={handleNavigate} />;
  }

  if (view === 'LANDING') {
    return (
        <LayoutWrapper>
            {globalError && (
                <div className="fixed top-0 left-0 right-0 bg-red-100 border-b border-red-200 text-red-800 p-4 z-50 flex items-center justify-center gap-2 shadow-md">
                    <span className="font-semibold">Error:</span>
                    <span>{globalError}</span>
                    <button onClick={() => setGlobalError(null)} className="ml-4 font-bold hover:text-red-900">&times;</button>
                </div>
            )}
            <LandingPage onLogin={handleLogin} onNavigate={handleNavigate} />
        </LayoutWrapper>
    );
  }

  if (view === 'PROFILE_SETUP' && user) {
    return (
        <LayoutWrapper>
            <ProfileSetup user={user} onComplete={handleProfileComplete} onLogout={handleLogout} />
        </LayoutWrapper>
    );
  }

  if (view === 'ENGLISH_SYLLABUS') {
      return (
          <EnglishSyllabusView 
            onBack={() => setView('DASHBOARD')}
            onStartSection={(sectionId) => handleStartSession('Use of English', sectionId)}
          />
      );
  }

  if (view === 'LIVE_SESSION') {
      // Live session has its own dark theme/layout
      if (status === SessionStatus.CONNECTING) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white gap-4 p-4 text-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full animate-pulse"></div>
                    <Loader2 className="w-12 h-12 animate-spin text-emerald-500 relative z-10" />
                </div>
                <h2 className="text-xl font-medium mt-4">Connecting to {activeSubject} Coach...</h2>
                <p className="text-sm text-white/50 mb-6">Personalizing lesson for {profile?.name}</p>
                
                <Button 
                    variant="ghost" 
                    onClick={disconnect}
                    className="text-slate-400 hover:text-white hover:bg-white/10 border border-slate-700"
                >
                    Cancel Connection
                </Button>
            </div>
        );
      }
      return (
          <LiveSessionView 
            status={status}
            subject={activeSubject}
            analyser={analyser}
            visualContent={visualContent}
            messages={messages}
            onDisconnect={disconnect}
          />
      );
  }

  // Dashboard
  if (profile) {
      return (
        <LayoutWrapper>
            <header className="bg-white/90 backdrop-blur-md border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    {!logoError ? (
                        <img 
                            src="/logo.png" 
                            alt="Raven Logo" 
                            className="w-8 h-8 object-contain" 
                            onError={() => setLogoError(true)}
                        />
                    ) : (
                        <div className="w-8 h-8 bg-gradient-to-br from-palm-500 to-palm-700 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">R</div>
                    )}
                    <span className="font-bold text-xl tracking-tight text-slate-900">Raven</span>
                </div>
                <div className="text-sm text-muted-foreground hidden md:block">
                    Student-Centric AI Learning
                </div>
            </header>

            {globalError && (
                <div className="bg-red-50 text-red-600 p-4 text-center text-sm font-medium border-b border-red-100 flex justify-between items-center">
                    <span className="mx-auto">Error: {globalError}</span>
                    <button onClick={() => setGlobalError(null)} className="font-bold ml-4">&times;</button>
                </div>
            )}
            
            <Dashboard 
                onStartSession={handleStartSession} 
                profile={profile}
                onLogout={handleLogout}
            />
        </LayoutWrapper>
      );
  }

  // Fallback
  return null;
};

export default App;