
// ... existing imports
import React, { useEffect, useState } from 'react';
import { StudentProfile, SessionStatus, AppView, ExamMode, SessionMode } from '../../types';
import { useLiveSession } from '../../hooks/useLiveSession';
import { Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './ui/ImageWithFallback';
import { EXAM_CONTEXTS } from '../examContext';

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
import AccountsSyllabusView from './AccountsSyllabusView';
import CRSSyllabusView from './CRSSyllabusView';
import CommerceSyllabusView from './CommerceSyllabusView';
import ComputerSyllabusView from './ComputerSyllabusView';
import EconomicsSyllabusView from './EconomicsSyllabusView';
import FrenchSyllabusView from './FrenchSyllabusView';
import GeographySyllabusView from './GeographySyllabusView';
import HausaSyllabusView from './HausaSyllabusView';
import HistorySyllabusView from './HistorySyllabusView';
import IgboSyllabusView from './IgboSyllabusView';
import IRSSyllabusView from './IRSSyllabusView';
import LiteratureSyllabusView from './LiteratureSyllabusView';
import MathematicsSyllabusView from './MathematicsSyllabusView';
import MusicSyllabusView from './MusicSyllabusView';
import PHESyllabusView from './PHESyllabusView';
import PhysicsSyllabusView from './PhysicsSyllabusView';
import YorubaSyllabusView from './YorubaSyllabusView';
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
  const [activeExam, setActiveExam] = useState<ExamMode>('JAMB');

  // Live Session Hook
  const { 
    status,
    sessionMode, 
    errorMessage: sessionError, 
    analyser, 
    startSession, 
    disconnect, 
    togglePause,
    toggleSessionMode,
    sendChat,
    messages, 
    visualContent,
    activeSimulation,
    setActiveSimulation,
    isProcessingText,
    tokenUsage,
    currentTranscript,
    sendSystemContext
  } = useLiveSession();

  // Combine error messages
  const [globalError, setGlobalError] = useState<string | null>(sessionError);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

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

      // Routing logic maps back to syllabus
      const viewMap: Record<string, AppView> = {
          'Use of English': 'ENGLISH_SYLLABUS',
          'Home Economics': 'HOME_ECONOMICS_SYLLABUS',
          'Government': 'GOVERNMENT_SYLLABUS',
          'Agriculture Science': 'AGRICULTURE_SYLLABUS',
          'Arabic': 'ARABIC_SYLLABUS',
          'Art': 'ART_SYLLABUS',
          'Biology': 'BIOLOGY_SYLLABUS',
          'Chemistry': 'CHEMISTRY_SYLLABUS',
          'Principles of Accounts': 'ACCOUNTS_SYLLABUS',
          'Christian Religious Studies': 'CRS_SYLLABUS',
          'Commerce': 'COMMERCE_SYLLABUS',
          'Computer Studies': 'COMPUTER_SYLLABUS',
          'Economics': 'ECONOMICS_SYLLABUS',
          'French': 'FRENCH_SYLLABUS',
          'Geography': 'GEOGRAPHY_SYLLABUS',
          'Hausa': 'HAUSA_SYLLABUS',
          'History': 'HISTORY_SYLLABUS',
          'Igbo': 'IGBO_SYLLABUS',
          'Islamic Studies': 'IRS_SYLLABUS',
          'Literature-In-English': 'LITERATURE_SYLLABUS',
          'Mathematics': 'MATHEMATICS_SYLLABUS',
          'Music': 'MUSIC_SYLLABUS',
          'Physical and Health Education': 'PHE_SYLLABUS',
          'Physics': 'PHYSICS_SYLLABUS',
          'Yoruba': 'YORUBA_SYLLABUS'
      };

      setView(viewMap[normSubject] || 'DASHBOARD');
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
  const handleStartSession = (subject: string, topicId?: string, mode: SessionMode = 'voice') => {
    if (!profile) return;
    
    // Normalize subject to handle "Agricultural Science" vs "Agriculture Science" mismatch
    const normSubject = subject === 'Agricultural Science' ? 'Agriculture Science' : subject;
    
    setActiveSubject(normSubject);
    setActiveTopic(topicId);
    
    // Syllabus routing logic (only if no specific topic is selected)
    if (!topicId) {
        const viewMap: Record<string, AppView> = {
            'Use of English': 'ENGLISH_SYLLABUS',
            'Home Economics': 'HOME_ECONOMICS_SYLLABUS',
            'Government': 'GOVERNMENT_SYLLABUS',
            'Agriculture Science': 'AGRICULTURE_SYLLABUS',
            'Arabic': 'ARABIC_SYLLABUS',
            'Art': 'ART_SYLLABUS',
            'Biology': 'BIOLOGY_SYLLABUS',
            'Chemistry': 'CHEMISTRY_SYLLABUS',
            'Principles of Accounts': 'ACCOUNTS_SYLLABUS',
            'Christian Religious Studies': 'CRS_SYLLABUS',
            'Commerce': 'COMMERCE_SYLLABUS',
            'Computer Studies': 'COMPUTER_SYLLABUS',
            'Economics': 'ECONOMICS_SYLLABUS',
            'French': 'FRENCH_SYLLABUS',
            'Geography': 'GEOGRAPHY_SYLLABUS',
            'Hausa': 'HAUSA_SYLLABUS',
            'History': 'HISTORY_SYLLABUS',
            'Igbo': 'IGBO_SYLLABUS',
            'Islamic Studies': 'IRS_SYLLABUS',
            'Literature-In-English': 'LITERATURE_SYLLABUS',
            'Mathematics': 'MATHEMATICS_SYLLABUS',
            'Music': 'MUSIC_SYLLABUS',
            'Physical and Health Education': 'PHE_SYLLABUS',
            'Physics': 'PHYSICS_SYLLABUS',
            'Yoruba': 'YORUBA_SYLLABUS'
        };

        const targetView = viewMap[normSubject];
        if (targetView) {
            setView(targetView);
            return;
        }
    }

    // Otherwise start the session (Math, Physics, or specific sections)
    startSession(profile, normSubject, topicId, activeExam, mode);
  };
  
  // Handler for reconnecting after timeout
  const handleReconnect = () => {
      if (!profile) return;
      setGlobalError(null); // Clear timeout error
      startSession(profile, activeSubject, activeTopic, activeExam, sessionMode);
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

  const currentExamConfig = EXAM_CONTEXTS[activeExam];

  // --- RENDER VIEWS ---

  if (view === 'LOADING') {
    return (
      <LayoutWrapper>
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Loader2 className="w-10 h-10 text-palm-500 animate-spin mb-4" />
            <p className="text-gray-500 font-medium">Initializing {currentExamConfig.shortName} Engine...</p>
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

  // NOTE: All Syllabus Views now receive the updated handleStartSession which handles mode
  if (view === 'ENGLISH_SYLLABUS') {
      return (
          <EnglishSyllabusView 
            onBack={() => setView('DASHBOARD')}
            onStartSection={(sectionId) => handleStartSession('Use of English', sectionId)} // Syllabus view will wrap this to add mode
          />
      );
  }
  // ... other syllabus views (shortened for brevity, same pattern applies)
  if (view === 'HOME_ECONOMICS_SYLLABUS') return <HomeEconomicsSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Home Economics', id)} />;
  if (view === 'GOVERNMENT_SYLLABUS') return <GovernmentSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Government', id)} />;
  if (view === 'AGRICULTURE_SYLLABUS') return <AgricultureSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Agriculture Science', id)} />;
  if (view === 'ARABIC_SYLLABUS') return <ArabicSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Arabic', id)} />;
  if (view === 'ART_SYLLABUS') return <ArtSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Art', id)} />;
  if (view === 'BIOLOGY_SYLLABUS') return <BiologySyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Biology', id)} />;
  if (view === 'CHEMISTRY_SYLLABUS') return <ChemistrySyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Chemistry', id)} />;
  if (view === 'ACCOUNTS_SYLLABUS') return <AccountsSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Principles of Accounts', id)} />;
  if (view === 'CRS_SYLLABUS') return <CRSSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Christian Religious Studies', id)} />;
  if (view === 'COMMERCE_SYLLABUS') return <CommerceSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Commerce', id)} />;
  if (view === 'COMPUTER_SYLLABUS') return <ComputerSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Computer Studies', id)} />;
  if (view === 'ECONOMICS_SYLLABUS') return <EconomicsSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Economics', id)} />;
  if (view === 'FRENCH_SYLLABUS') return <FrenchSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('French', id)} />;
  if (view === 'GEOGRAPHY_SYLLABUS') return <GeographySyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Geography', id)} />;
  if (view === 'HAUSA_SYLLABUS') return <HausaSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Hausa', id)} />;
  if (view === 'HISTORY_SYLLABUS') return <HistorySyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('History', id)} />;
  if (view === 'IGBO_SYLLABUS') return <IgboSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Igbo', id)} />;
  if (view === 'IRS_SYLLABUS') return <IRSSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Islamic Studies', id)} />;
  if (view === 'LITERATURE_SYLLABUS') return <LiteratureSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Literature-In-English', id)} />;
  if (view === 'MATHEMATICS_SYLLABUS') return <MathematicsSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Mathematics', id)} />;
  if (view === 'MUSIC_SYLLABUS') return <MusicSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Music', id)} />;
  if (view === 'PHE_SYLLABUS') return <PHESyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Physical and Health Education', id)} />;
  if (view === 'PHYSICS_SYLLABUS') return <PhysicsSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Physics', id)} />;
  if (view === 'YORUBA_SYLLABUS') return <YorubaSyllabusView onBack={() => setView('DASHBOARD')} onStartSection={(id) => handleStartSession('Yoruba', id)} />;


  if (view === 'LIVE_SESSION') {
      // Live session has its own dark theme/layout
      if (status === SessionStatus.CONNECTING) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white gap-4 p-4 text-center">
                <div className="relative">
                    <div className={`absolute inset-0 blur-xl rounded-full animate-pulse opacity-20 bg-gradient-to-br ${currentExamConfig.theme.gradient}`}></div>
                    <Loader2 className={`w-12 h-12 animate-spin relative z-10 ${currentExamConfig.theme.text}`} />
                </div>
                <h2 className="text-xl font-medium mt-4">Connecting to {activeSubject} Coach...</h2>
                <p className="text-sm text-white/50 mb-6">Mode: {currentExamConfig.fullName}</p>
                
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
            sessionMode={sessionMode}
            subject={activeSubject}
            analyser={analyser}
            visualContent={visualContent}
            activeSimulation={activeSimulation}
            messages={messages}
            onDisconnect={disconnect}
            onReconnect={handleReconnect}
            onCloseSimulation={() => setActiveSimulation(null)}
            onTogglePause={togglePause}
            onToggleMode={toggleSessionMode}
            onSendText={sendChat}
            sendSystemContext={sendSystemContext}
            isProcessingText={isProcessingText}
            tokenUsage={tokenUsage}
            currentTranscript={currentTranscript}
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
                            fallbackContent={<div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm bg-gradient-to-br ${currentExamConfig.theme.gradient}`}>R</div>}
                        />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-slate-900">Raven</span>
                </div>
                <div className="text-sm text-muted-foreground hidden md:block">
                    Unified Learning Engine
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
                currentExam={activeExam}
                onSwitchExam={setActiveExam}
            />
        </LayoutWrapper>
      );
  }

  // Fallback
  return null;
};

export default App;
