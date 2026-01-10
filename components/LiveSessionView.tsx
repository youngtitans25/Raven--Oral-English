import React, { useEffect, useRef } from 'react';
import Visualizer from './Visualizer';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { SessionStatus } from '../types';
import { StopCircle, Mic, Volume2, ArrowLeft, User, Bot, Sparkles } from 'lucide-react';
import { ChatMessage, VisualContent } from '../hooks/useLiveSession';
import { COACHES } from '../lib/coaches';

interface LiveSessionViewProps {
  status: SessionStatus;
  subject: string;
  analyser: AnalyserNode | null;
  visualContent: VisualContent | null;
  messages: ChatMessage[];
  onDisconnect: () => void;
}

const LiveSessionView: React.FC<LiveSessionViewProps> = ({
  status,
  subject,
  analyser,
  visualContent,
  messages,
  onDisconnect
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Get subject metadata. If not found in defined COACHES, create a dynamic one.
  const coachInfo = COACHES[subject] || { 
      name: `${subject} Coach`, 
      id: subject.toLowerCase().replace(/\s+/g, '-'),
  };

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-[100dvh] bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background Visualizer */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <Visualizer analyser={analyser} isActive={status === SessionStatus.CONNECTED} />
      </div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center p-4 md:p-6 bg-gradient-to-b from-slate-900/90 to-transparent shrink-0">
        <Button variant="ghost" className="text-white hover:bg-white/10 gap-2 pl-0" onClick={onDisconnect}>
            <ArrowLeft className="w-5 h-5" /> 
            <span className="hidden md:inline">Back to Dashboard</span>
        </Button>
        <div className="flex flex-col items-end">
            <div className="flex items-center gap-2 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/50 backdrop-blur-sm">
                 <Sparkles className="w-3 h-3 text-emerald-400" />
                 <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider">{coachInfo.name}</span>
            </div>
            <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">Live Session</span>
        </div>
      </div>

      {/* Main Content Area - Flex Column for Mobile */}
      <div className="flex-1 relative z-10 flex flex-col items-center justify-between p-4 md:p-8 max-w-5xl mx-auto w-full gap-4 md:gap-8 overflow-hidden">
        
        {/* Dynamic Board (The "Display Content" Tool Output) */}
        <div className="w-full flex justify-center flex-1 items-center min-h-0">
            {visualContent ? (
                <div className="animate-in zoom-in slide-in-from-bottom-4 duration-500 w-full max-w-2xl max-h-full flex flex-col justify-center">
                    <Card className="bg-white text-slate-900 border-none shadow-2xl p-6 md:p-12 flex flex-col items-center text-center rounded-3xl w-full relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
                        <span className="text-xs md:text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4 md:mb-6">{visualContent.title}</span>
                        
                        <div className="flex-1 flex items-center justify-center w-full">
                             <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight break-words max-w-full leading-tight">
                                {visualContent.data}
                            </h2>
                        </div>
                        
                        <div className="flex items-center gap-2 text-xs md:text-sm text-slate-500 bg-slate-100 px-4 py-2 rounded-full font-medium mt-6 md:mt-8">
                            <Volume2 className="w-3 h-3 md:w-4 md:h-4 text-emerald-500" /> 
                            Interactive Board
                        </div>
                    </Card>
                </div>
            ) : (
                <div className="text-center opacity-50 space-y-4 md:space-y-6">
                    <div className="w-20 h-20 md:w-28 md:h-28 bg-white/5 rounded-full mx-auto flex items-center justify-center border border-white/10 animate-pulse">
                        <Mic className="w-8 h-8 md:w-12 md:h-12" />
                    </div>
                    <div>
                        <p className="text-xl md:text-2xl font-light tracking-wide mb-2">"I'm listening..."</p>
                        <p className="text-xs md:text-sm text-slate-400">Speak clearly to your {coachInfo.name}</p>
                    </div>
                </div>
            )}
        </div>

        {/* Live Transcripts / Conversation History */}
        <div className="w-full max-w-2xl h-[160px] md:h-[220px] shrink-0 overflow-hidden relative rounded-xl bg-slate-900/60 backdrop-blur-sm border border-white/10">
            <div className="absolute top-0 left-0 right-0 bg-slate-900/80 px-4 py-2 text-[10px] md:text-xs font-medium text-slate-400 border-b border-white/5 z-10 flex justify-between">
                <span>LIVE TRANSCRIPT</span>
                <span className="text-emerald-500/80">AI Active</span>
            </div>
            
            <div 
                ref={scrollRef}
                className="h-full overflow-y-auto p-4 pt-10 space-y-3 md:space-y-4 scroll-smooth"
            >
                {messages.length === 0 && (
                    <div className="text-center text-slate-500 text-xs mt-8">Conversation will appear here...</div>
                )}
                
                {messages.map((msg) => (
                    <div 
                        key={msg.id} 
                        className={`flex gap-2 md:gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {msg.role === 'assistant' && (
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-1">
                                <Bot className="w-3 h-3 md:w-4 md:h-4 text-white" />
                            </div>
                        )}
                        
                        <div className={`
                            max-w-[85%] rounded-2xl px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm leading-relaxed
                            ${msg.role === 'user' 
                                ? 'bg-white/10 text-white rounded-tr-none' 
                                : 'bg-emerald-900/40 text-emerald-100 border border-emerald-500/20 rounded-tl-none'}
                        `}>
                            {msg.content}
                        </div>

                        {msg.role === 'user' && (
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-1">
                                <User className="w-3 h-3 md:w-4 md:h-4 text-white" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* Footer Controls */}
        <div className="flex justify-center pb-2 md:pb-4 shrink-0">
            <Button 
                variant="destructive" 
                size="lg" 
                className="rounded-full w-14 h-14 md:w-16 md:h-16 p-0 shadow-lg shadow-red-900/20 border-4 border-slate-900 hover:bg-red-600 hover:scale-105 transition-all duration-300 active:scale-95"
                onClick={onDisconnect}
                title="End Session"
            >
                <StopCircle className="w-6 h-6 md:w-8 md:h-8 fill-current" />
            </Button>
        </div>
      </div>
    </div>
  );
};

export default LiveSessionView;