import React, { useEffect, useRef } from 'react';
import Visualizer from './Visualizer';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { SessionStatus } from '../../types';
import { StopCircle, Mic, Volume2, ArrowLeft, User, Bot, Pause, Play } from 'lucide-react';
import { ChatMessage, VisualContent } from '../../hooks/useLiveSession';

interface OralEnglishCoachProps {
  status: SessionStatus;
  analyser: AnalyserNode | null;
  visualContent: VisualContent | null;
  messages: ChatMessage[];
  onDisconnect: () => void;
  onTogglePause?: () => void;
}

const OralEnglishCoach: React.FC<OralEnglishCoachProps> = ({
  status,
  analyser,
  visualContent,
  messages,
  onDisconnect,
  onTogglePause
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background Visualizer */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <Visualizer analyser={analyser} isActive={status === SessionStatus.CONNECTED} />
      </div>
      
      {/* Paused Overlay */}
      {status === SessionStatus.PAUSED && (
        <div className="absolute inset-0 z-40 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 animate-in zoom-in-90">
                <div className="w-20 h-20 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center ring-4 ring-amber-500/10">
                    <Pause className="w-10 h-10 fill-current" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Session Paused</h2>
                <Button 
                    onClick={onTogglePause} 
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-6 rounded-full text-lg shadow-lg hover:scale-105 transition-all"
                >
                    <Play className="w-5 h-5 mr-2 fill-current" /> Resume
                </Button>
            </div>
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center p-6 bg-gradient-to-b from-slate-900/80 to-transparent">
        <Button variant="ghost" className="text-white hover:bg-white/10 gap-2" onClick={onDisconnect}>
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Button>
        <div className="flex items-center gap-2 bg-red-500/20 px-3 py-1 rounded-full border border-red-500/50 backdrop-blur-sm">
             <div className={`w-2 h-2 rounded-full ${status === SessionStatus.CONNECTED ? 'bg-red-500 animate-pulse' : 'bg-slate-400'}`}></div>
             <span className="text-xs font-bold text-red-200 uppercase tracking-wider">Live Coach</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative z-10 flex flex-col items-center justify-between p-4 md:p-8 max-w-5xl mx-auto w-full gap-8">
        
        {/* Dynamic Board (The "Display Content" Tool Output) */}
        <div className="w-full flex justify-center flex-1 items-center">
            {visualContent ? (
                <div className="animate-in zoom-in slide-in-from-bottom-4 duration-500 w-full max-w-2xl">
                    <Card className="bg-white text-slate-900 border-none shadow-2xl p-8 md:p-12 flex flex-col items-center text-center rounded-3xl w-full relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
                        <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-6">{visualContent.title}</span>
                        <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-8 break-words max-w-full">{visualContent.data}</h2>
                        
                        <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-100 px-4 py-2 rounded-full font-medium">
                            <Volume2 className="w-4 h-4 text-emerald-500" /> 
                            Pronounce this aloud
                        </div>
                    </Card>
                </div>
            ) : (
                <div className="text-center opacity-50 space-y-6">
                    <div className="w-28 h-28 bg-white/5 rounded-full mx-auto flex items-center justify-center border border-white/10 animate-pulse">
                        <Mic className="w-12 h-12" />
                    </div>
                    <p className="text-2xl font-light tracking-wide">"I'm listening..."</p>
                </div>
            )}
        </div>

        {/* Live Transcripts / Conversation History */}
        <div className="w-full max-w-2xl h-[200px] overflow-hidden relative rounded-xl bg-slate-900/50 backdrop-blur-sm border border-white/10">
            <div className="absolute top-0 left-0 right-0 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-400 border-b border-white/5 z-10">
                LIVE TRANSCRIPT
            </div>
            
            <div 
                ref={scrollRef}
                className="h-full overflow-y-auto p-4 pt-10 space-y-4 scroll-smooth"
            >
                {messages.length === 0 && (
                    <div className="text-center text-slate-500 text-sm mt-8">Conversation will appear here...</div>
                )}
                
                {messages.map((msg) => (
                    <div 
                        key={msg.id} 
                        className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {msg.role === 'assistant' && (
                            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                                <Bot className="w-4 h-4 text-white" />
                            </div>
                        )}
                        
                        <div className={`
                            max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed
                            ${msg.role === 'user' 
                                ? 'bg-white/10 text-white rounded-tr-none' 
                                : 'bg-emerald-900/40 text-emerald-100 border border-emerald-500/20 rounded-tl-none'}
                        `}>
                            {msg.content}
                        </div>

                        {msg.role === 'user' && (
                            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                                <User className="w-4 h-4 text-white" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* Footer Controls */}
        <div className="flex justify-center gap-4 pb-4">
            {onTogglePause && (
                <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full w-16 h-16 p-0 border-4 border-slate-700 hover:bg-slate-800 text-amber-500 hover:text-amber-400 hover:scale-105 transition-all duration-300"
                    onClick={onTogglePause}
                    title={status === SessionStatus.PAUSED ? "Resume" : "Pause"}
                >
                    {status === SessionStatus.PAUSED ? <Play className="w-6 h-6 fill-current" /> : <Pause className="w-6 h-6 fill-current" />}
                </Button>
            )}
            
            <Button 
                variant="destructive" 
                size="lg" 
                className="rounded-full w-16 h-16 p-0 shadow-lg shadow-red-900/20 border-4 border-slate-900 hover:bg-red-600 hover:scale-105 transition-all duration-300"
                onClick={onDisconnect}
                title="End Session"
            >
                <StopCircle className="w-8 h-8 fill-current" />
            </Button>
        </div>
      </div>
    </div>
  );
};

export default OralEnglishCoach;
