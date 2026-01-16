import React, { useEffect, useState } from 'react';
import { StudentProfile, SessionStatus, AppView } from '../../types';
import { useLiveSession } from '../../hooks/useLiveSession';
import { Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './ui/ImageWithFallback';

// Screens
import LandingPage from './LandingPage';
import ProfileSetup from './ProfileSetup';
import Dashboard from './Dashboard';
import LiveSessionView from './LiveSessionView';
import EnglishSyllabusView from './EnglishSyllabusView';
import HomeEconomicsSyllabusView from './HomeEconomicsSyllabusView';
import GovernmentSyllabusView from './GovernmentSyllabusView';
import AgricultureSyllabusView from './AgricultureSyllabusView';
import ArabicSyllabusView from './ArabicSyllabusView';
import ArtSyllabusView from './ArtSyllabusView';
import BiologySyllabusView from './BiologySyllabusView';
import ChemistrySyllabusView from './ChemistrySyllabusView';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

// Wrapper for consistency
const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-slate-50 naija-pattern text-slate-900 font-sans">
      {children}
  </div>
);

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('LANDING');
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [activeSubject, setActiveSubject] = useState<string>('Use of English');
  const [activeTopic, setActiveTopic] = useState<string | undefined>(undefined);

  // Live Session Hook
  const { 
    status, 
    errorMessage: sessionError, 
    analyser, 
    startSession, 
    disconnect, 
    togglePause,
    sendChat,
    messages, 
    visualContent,
    activeSimulation,
    setActiveSimulation,
    isProcessingText
  } = useLiveSession();

  // Combine error messages
  const [globalError, setGlobalError] = useState<string | null>(sessionError);

  // Update global error if session error changes
  useEffect(() => {
    if (sessionError) setGlobalError(sessionError);
  }, [sessionError]);

  // Monitor live session status to toggle view
  useEffect(() => {
    if (status === SessionStatus.CONNECTED || status === SessionStatus.CONNECTING || status === SessionStatus.RECONNECTING || status === SessionStatus.PAUSED) {
      setView('LIVE_SESSION');
    } else if (status === SessionStatus.ENDED && profile) {
      // Return logic - Normalize subject names here as well
      const normSubject = activeSubject === 'Agricultural Science' ? 'Agriculture Science' : activeSubject;

      if (normSubject === 'Use of English') {
         setView('ENGLISH_SYLLABUS');
      } else if (normSubject === 'Home Economics') {
         setView('HOME_ECONOMICS_SYLLABUS');
      } else if (normSubject === 'Government') {
         setView('GOVERNMENT_SYLLABUS');
      } else if (normSubject === 'Agriculture Science') {
         setView('AGRICULTURE_SYLLABUS');
      } else if (normSubject === 'Arabic') {
         setView('ARABIC_SYLLABUS');
      } else if (normSubject === 'Art') {
         setView('ART_SYLLABUS');
      } else if (normSubject === 'Biology') {
         setView('BIOLOGY_SYLLABUS');
      } else if (normSubject === 'Chemistry') {
         setView('CHEMISTRY_SYLLABUS');
      } else {
         setView('DASHBOARD');
      }
    }
    // NOTE: If status is IDLE or ERROR (e.g. timeout), we do NOT redirect.
    // The LiveSessionView will handle the "Reconnect" UI.
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
    
    // Normalize subject to handle "Agricultural Science" vs "Agriculture Science" mismatch
    const normSubject = subject === 'Agricultural Science' ? 'Agriculture Science' : subject;
    
    setActiveSubject(normSubject);
    setActiveTopic(topicId);
    
    // Syllabus routing logic (only if no specific topic is selected)
    if (!topicId) {
        if (normSubject === 'Use of English') {
            setView('ENGLISH_SYLLABUS');
            return;
        }
        if (normSubject === 'Home Economics') {
            setView('HOME_ECONOMICS_SYLLABUS');
            return;
        }
        if (normSubject === 'Government') {
            setView('GOVERNMENT_SYLLABUS');
            return;
        }
        if (normSubject === 'Agriculture Science') {
            setView('AGRICULTURE_SYLLABUS');
            return;
        }
        if (normSubject === 'Arabic') {
            setView('ARABIC_SYLLABUS');
            return;
        }
        if (normSubject === 'Art') {
            setView('ART_SYLLABUS');
            return;
        }
        if (normSubject === 'Biology') {
            setView('BIOLOGY_SYLLABUS');
            return;
        }
        if (normSubject === 'Chemistry') {
            setView('CHEMISTRY_SYLLABUS');
            return;
        }
    }

    // Otherwise start the session (Math, Physics, or specific sections)
    startSession(profile, normSubject, topicId);
  };
  
  // Handler for reconnecting after timeout
  const handleReconnect = () => {
      if (!profile) return;
      setGlobalError(null); // Clear timeout error
      startSession(profile, activeSubject, activeTopic);
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

  if (view === 'HOME_ECONOMICS_SYLLABUS') {
      return (
          <HomeEconomicsSyllabusView 
            onBack={() => setView('DASHBOARD')}
            onStartSection={(sectionId) => handleStartSession('Home Economics', sectionId)}
          />
      );
  }

  if (view === 'GOVERNMENT_SYLLABUS') {
      return (
          <GovernmentSyllabusView 
            onBack={() => setView('DASHBOARD')}
            onStartSection={(sectionId) => handleStartSession('Government', sectionId)}
          />
      );
  }

  if (view === 'AGRICULTURE_SYLLABUS') {
      return (
          <AgricultureSyllabusView 
            onBack={() => setView('DASHBOARD')}
            onStartSection={(sectionId) => handleStartSession('Agriculture Science', sectionId)}
          />
      );
  }

  if (view === 'ARABIC_SYLLABUS') {
      return (
          <ArabicSyllabusView 
            onBack={() => setView('DASHBOARD')}
            onStartSection={(sectionId) => handleStartSession('Arabic', sectionId)}
          />
      );
  }

  if (view === 'ART_SYLLABUS') {
      return (
          <ArtSyllabusView 
            onBack={() => setView('DASHBOARD')}
            onStartSection={(sectionId) => handleStartSession('Art', sectionId)}
          />
      );
  }

  if (view === 'BIOLOGY_SYLLABUS') {
      return (
          <BiologySyllabusView 
            onBack={() => setView('DASHBOARD')}
            onStartSection={(sectionId) => handleStartSession('Biology', sectionId)}
          />
      );
  }

  if (view === 'CHEMISTRY_SYLLABUS') {
      return (
          <ChemistrySyllabusView 
            onBack={() => setView('DASHBOARD')}
            onStartSection={(sectionId) => handleStartSession('Chemistry', sectionId)}
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
            activeSimulation={activeSimulation}
            messages={messages}
            onDisconnect={disconnect}
            onReconnect={handleReconnect}
            onCloseSimulation={() => setActiveSimulation(null)}
            onTogglePause={togglePause}
            onSendText={sendChat}
            isProcessingText={isProcessingText}
          />
      );
  }

  // Dashboard
  if (profile) {
      return (
        <LayoutWrapper>
            <header className="bg-white/90 backdrop-blur-md border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                        <ImageWithFallback 
                            src="/logo.png" 
                            alt="Raven Logo" 
                            className="w-full h-full object-contain"
                            fallbackContent={<div className="w-8 h-8 bg-gradient-to-br from-palm-500 to-palm-700 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">R</div>}
                        />
                    </div>
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