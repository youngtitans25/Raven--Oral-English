
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Visualizer from './Visualizer';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { SessionStatus, SessionMode } from '../../types';
import { StopCircle, Mic, Volume2, ArrowLeft, User, Bot, Sparkles, ChevronDown, ChevronUp, RefreshCw, AlertCircle, Loader2, Pause, Play, Keyboard, Send, X, Coins, ArrowUp, ArrowDown, MessageSquare } from 'lucide-react';
import { ChatMessage, VisualContent } from '../../hooks/useLiveSession';
import { COACHES } from '../coaches';
import PeriodicTableSimulation from './simulations/PeriodicTableSimulation';
import SpreadsheetSimulation from './simulations/SpreadsheetSimulation';
import { Input } from './ui/input';
import { TokenUsage } from '../../api/types';

interface LiveSessionViewProps {
  status: SessionStatus;
  sessionMode?: SessionMode;
  subject: string;
  analyser: AnalyserNode | null;
  visualContent: VisualContent | null;
  activeSimulation?: string | null;
  messages: ChatMessage[];
  onDisconnect: () => void;
  onReconnect?: () => void;
  onCloseSimulation?: () => void;
  onTogglePause?: () => void; 
  onToggleMode?: () => void;
  onSendText?: (text: string) => void;
  isProcessingText?: boolean;
  tokenUsage?: TokenUsage;
  currentTranscript?: string;
  // NEW: Add capability to send system messages
  sendSystemContext?: (text: string) => void;
}

// --- HELPER: Rich Text Renderer for Display Board ---
const RichTextRenderer: React.FC<{ content: string }> = ({ content }) => {
  const length = content.length;
  // Thresholds for text sizing
  const isShort = length < 60;
  const isMedium = length < 250;

  // Simple parser for Bold (**text**), Italic (*text*), and Code (`text`)
  const parseInline = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
    return parts.map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={idx} className="text-emerald-700 font-bold">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
            return <em key={idx} className="italic text-slate-600">{part.slice(1, -1)}</em>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
            return <code key={idx} className="bg-slate-100 text-pink-600 font-mono text-[0.9em] px-1.5 py-0.5 rounded border border-slate-200">{part.slice(1, -1)}</code>;
        }
        return part;
    });
  };

  // Case 1: Single massive word/short phrase (e.g. Pronunciation drill)
  if (isShort && !content.includes('\n')) {
      return (
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-center text-slate-900 leading-[1.1] break-words hyphens-auto max-w-full px-2">
              {content}
          </h2>
      );
  }

  // Case 2: Structured Content (Lists, Paragraphs, Explanations)
  const lines = content.split('\n');
  
  return (
      <div className={`w-full ${isMedium ? 'text-center' : 'text-left'} space-y-3 md:space-y-4`}>
          {lines.map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return null;

              // Headers (starts with #)
              if (trimmed.startsWith('# ')) {
                   return <h3 key={i} className="text-xl md:text-2xl font-bold text-slate-900 mt-4 mb-2">{parseInline(trimmed.substring(2))}</h3>;
              }

              // List Items
              if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
                  return (
                      <div key={i} className={`flex gap-3 ${isMedium ? 'justify-center pl-0' : 'pl-2'} items-start text-left`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                          <div className="text-base md:text-xl text-slate-700 leading-relaxed">{parseInline(trimmed.substring(2))}</div>
                      </div>
                  );
              }

              // Standard Paragraph
              return (
                  <p key={i} className={`text-base md:text-xl text-slate-700 leading-relaxed ${isMedium ? 'font-medium' : ''}`}>
                      {parseInline(trimmed)}
                  </p>
              );
          })}
      </div>
  );
};

const LiveSessionView: React.FC<LiveSessionViewProps> = ({
  status,
  sessionMode = 'voice',
  subject,
  analyser,
  visualContent,
  activeSimulation,
  messages,
  onDisconnect,
  onReconnect,
  onCloseSimulation,
  onTogglePause,
  onToggleMode,
  onSendText,
  isProcessingText = false,
  tokenUsage = { totalTokens: 0, inputTokens: 0, outputTokens: 0 },
  currentTranscript = '',
  sendSystemContext
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(true);
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState("");
  const updateTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Get subject metadata
  const coachInfo = COACHES[subject] || { 
      name: `${subject} Coach`, 
      id: subject.toLowerCase().replace(/\s+/g, '-'),
  };

  // Timer Logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (status === SessionStatus.CONNECTED || status === SessionStatus.RECONNECTING) {
        interval = setInterval(() => {
            setDurationSeconds(prev => prev + 1);
        }, 1000);
    }
    return () => clearInterval(interval);
  }, [status]);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current && (isTranscriptOpen || sessionMode === 'text')) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTranscriptOpen, sessionMode]);

  // Auto-collapse transcript when simulation starts
  useEffect(() => {
    if (activeSimulation) {
        setIsTranscriptOpen(false);
    } else {
        // Only auto-open if in text mode or user specifically opened it
        if (sessionMode === 'text') setIsTranscriptOpen(true);
    }
  }, [activeSimulation, sessionMode]);

  const handleSend = (e?: React.FormEvent) => {
      e?.preventDefault();
      if (inputText.trim() && onSendText && !isProcessingText) {
          onSendText(inputText.trim());
          setInputText("");
      }
  };

  // Handle Simulation Grid Updates
  const handleSimulationUpdate = useCallback((gridState: string) => {
      if (!sendSystemContext) return;
      
      if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
      
      updateTimeoutRef.current = setTimeout(() => {
          sendSystemContext(`[SYSTEM]: ${gridState}`);
      }, 1000);
  }, [sendSystemContext]);

  // Determine what to render in the main content area
  const renderMainContent = () => {
      // 1. Check for Simulation
      if (activeSimulation === 'periodic-table-trends') {
          return (
              <div className="w-full h-full min-h-0 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 animate-in zoom-in-95 duration-500 relative">
                  <PeriodicTableSimulation onClose={onCloseSimulation || (() => {})} />
              </div>
          );
      }

      if (activeSimulation === 'spreadsheet-training') {
        return (
            <div className="w-full h-full min-h-0 bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-500 relative">
                <SpreadsheetSimulation 
                    onClose={onCloseSimulation || (() => {})} 
                    onUpdate={handleSimulationUpdate}
                />
            </div>
        );
      }

      // 2. Check for Visual Content
      if (visualContent) {
        return (
            <div className="animate-in zoom-in slide-in-from-bottom-4 duration-500 w-full max-w-3xl flex flex-col justify-center items-center h-full max-h-[65vh] md:max-h-[75vh]">
                <Card className="bg-white text-slate-900 border-none shadow-2xl flex flex-col items-center rounded-3xl w-full h-full relative overflow-hidden ring-4 ring-black/5">
                    
                    {/* Header Bar */}
                    <div className="w-full bg-slate-50 border-b border-slate-100 p-3 md:p-4 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-2.5">
                             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ring-4 ring-emerald-100" />
                             <span className="text-xs md:text-sm font-bold text-emerald-700 uppercase tracking-widest truncate max-w-[200px] md:max-w-md">
                                {visualContent.title}
                             </span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono hidden sm:block">LIVE FEED</div>
                    </div>

                    {/* Scrollable Content Area */}
                    <div className="flex-1 w-full overflow-y-auto overflow-x-hidden p-6 md:p-10 custom-scrollbar bg-white">
                         <div className="flex flex-col items-center justify-center min-h-full w-full">
                            <RichTextRenderer content={visualContent.data} />
                         </div>
                    </div>
                    
                    {/* Footer Hint */}
                    <div className="p-3 w-full bg-slate-50 border-t border-slate-100 shrink-0 text-center">
                        <div className="inline-flex items-center gap-2 text-xs md:text-sm text-slate-500 bg-white border border-slate-200 px-4 py-1.5 rounded-full font-medium shadow-sm">
                             <Volume2 className="w-3 h-3 md:w-4 md:h-4 text-emerald-500" /> 
                             <span>Interactive Board</span>
                        </div>
                    </div>
                </Card>
            </div>
        );
      }

      // 3. Default "Listening" State (Only show in Voice Mode)
      if (sessionMode === 'voice') {
        return (
            <div className="text-center opacity-50 space-y-4 md:space-y-6">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-white/5 rounded-full mx-auto flex items-center justify-center border border-white/10 animate-pulse">
                    <Mic className="w-8 h-8 md:w-12 md:h-12" />
                </div>
                <div>
                    <p className="text-xl md:text-2xl font-light tracking-wide mb-2">"I'm listening..."</p>
                    <p className="text-xs md:text-sm text-slate-400">Speak clearly to your {coachInfo.name}</p>
                </div>
            </div>
        );
      } else {
        // Text mode placeholder: Keeps the layout balanced but emphasizes the chat history below
        return null; 
      }
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-slate-950 text-white relative overflow-hidden">
      
      {/* Reconnecting Toast */}
      {status === SessionStatus.RECONNECTING && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 bg-emerald-500/90 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium shadow-lg animate-in fade-in slide-in-from-top-4">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Re-establishing connection...</span>
          </div>
      )}

      {/* Paused Overlay */}
      {status === SessionStatus.PAUSED && (
        <div className="absolute inset-0 z-40 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 animate-in zoom-in-90 p-4 text-center">
                <div className="w-20 h-20 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center ring-4 ring-amber-500/10">
                    <Pause className="w-10 h-10 fill-current" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Session Paused</h2>
                <p className="text-slate-400 max-w-xs">Your microphone and audio are muted. Tap resume to continue.</p>
                <Button 
                    onClick={onTogglePause} 
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-6 rounded-full text-lg shadow-lg hover:scale-105 transition-all mt-4"
                >
                    <Play className="w-5 h-5 mr-2 fill-current" /> Resume
                </Button>
            </div>
        </div>
      )}

      {/* Timeout / Disconnect Overlay */}
      {(status === SessionStatus.IDLE || status === SessionStatus.ERROR) && (
          <div className="absolute inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-slate-900 border border-slate-700 p-8 rounded-3xl max-w-md w-full text-center shadow-2xl animate-in zoom-in-95">
                  <div className="w-16 h-16 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <AlertCircle className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Session Paused</h2>
                  <p className="text-slate-400 mb-8">The connection was closed. Would you like to resume your session?</p>
                  
                  <div className="flex flex-col gap-3">
                      {onReconnect && (
                        <Button onClick={onReconnect} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6 text-lg rounded-xl font-bold">
                            <RefreshCw className="w-5 h-5 mr-2" /> Resume Session
                        </Button>
                      )}
                      <Button onClick={onDisconnect} variant="outline" className="w-full border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 py-6 text-lg rounded-xl">
                          Back to Dashboard
                      </Button>
                  </div>
              </div>
          </div>
      )}

      {/* Background Visualizer - Only show if no simulation and IN VOICE MODE */}
      {!activeSimulation && sessionMode === 'voice' && (status === SessionStatus.CONNECTED || status === SessionStatus.RECONNECTING) && (
        <div className="absolute inset-0 opacity-40 pointer-events-none">
            <Visualizer analyser={analyser} isActive={status === SessionStatus.CONNECTED} />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center p-3 md:p-6 bg-gradient-to-b from-slate-900/90 to-transparent shrink-0">
        <Button variant="ghost" className="text-white hover:bg-white/10 gap-2 pl-0" onClick={onDisconnect}>
            <ArrowLeft className="w-5 h-5" /> 
            <span className="hidden md:inline">Back to Dashboard</span>
        </Button>
        <div className="flex flex-col items-end">
            <div className="flex items-center gap-2 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/50 backdrop-blur-sm">
                 <Sparkles className="w-3 h-3 text-emerald-400" />
                 <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider">{coachInfo.name}</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
                 <span className="text-[10px] text-slate-400 uppercase tracking-widest">
                    {sessionMode === 'text' ? 'Text Session' : 'Live Voice'}
                 </span>
                 {onToggleMode && (
                     <button onClick={onToggleMode} className={`p-1.5 rounded-full hover:bg-white/10 transition-colors border ${sessionMode === 'text' ? 'border-blue-500/50 bg-blue-500/20 text-blue-300' : 'border-slate-600 text-slate-400'}`} title={sessionMode === 'text' ? "Switch to Voice" : "Switch to Text-Only"}>
                         {sessionMode === 'text' ? <Mic className="w-3 h-3" /> : <MessageSquare className="w-3 h-3" />}
                     </button>
                 )}
            </div>
            <div className="flex flex-col items-end mt-1">
                <span className="text-sm font-mono font-bold text-emerald-400/90 tracking-widest tabular-nums">
                    {formatTime(durationSeconds)}
                </span>
            </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`
          flex-1 relative z-10 flex flex-col items-center justify-between mx-auto w-full overflow-hidden transition-all duration-500
          ${activeSimulation ? 'p-2 md:p-4 max-w-[98%] gap-2' : 'p-4 md:p-8 max-w-5xl gap-4 md:gap-8'}
      `}>
        
        {/* Dynamic Board / Simulation / Listening State */}
        <div className={`w-full flex justify-center items-center relative ${sessionMode === 'text' && !activeSimulation && !visualContent ? 'min-h-0 h-0 hidden' : 'flex-1 min-h-0'}`}>
            {renderMainContent()}

            {/* REAL-TIME TRANSCRIPT OVERLAY (VOICE MODE ONLY) */}
            {sessionMode === 'voice' && currentTranscript && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
                    <div className="bg-black/60 backdrop-blur-xl text-white px-6 py-4 rounded-2xl shadow-xl border border-white/10 animate-in fade-in slide-in-from-bottom-2">
                        <div className="flex items-center gap-3 mb-1">
                             <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                             <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Hearing</span>
                        </div>
                        <p className="text-lg md:text-xl font-medium leading-tight text-center">
                            "{currentTranscript}"
                        </p>
                    </div>
                </div>
            )}
        </div>

        {/* Live Transcripts / Conversation History */}
        <div className={`
            w-full max-w-2xl shrink-0 overflow-hidden relative rounded-xl bg-slate-900/60 backdrop-blur-sm border border-white/10
            transition-all duration-300 ease-in-out flex flex-col
            ${sessionMode === 'text' 
                ? 'flex-1 h-full mb-20' // Text Mode: Fill remaining space, leave room for input
                : (isTranscriptOpen 
                    ? (activeSimulation ? 'h-[120px] md:h-[160px]' : 'h-[160px] md:h-[220px]') 
                    : 'h-[36px] md:h-[40px]')
            }
        `}>
            {/* Transcript Header / Toggle (Hide toggle in text mode) */}
            <div 
                className="absolute top-0 left-0 right-0 bg-slate-900/90 px-4 h-[36px] md:h-[40px] flex justify-between items-center cursor-pointer hover:bg-slate-800 transition-colors border-b border-white/5 z-20 shrink-0"
                onClick={() => sessionMode === 'voice' && setIsTranscriptOpen(!isTranscriptOpen)}
            >
                <div className="flex items-center gap-2">
                    <span className="text-[10px] md:text-xs font-medium text-slate-400">
                        {sessionMode === 'text' ? 'CONVERSATION' : 'LIVE TRANSCRIPT'}
                    </span>
                    {status === SessionStatus.CONNECTED && sessionMode === 'voice' && (
                        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"/>
                    )}
                </div>
                {sessionMode === 'voice' && (
                    <div className="flex items-center gap-2">
                         <span className="text-[10px] text-emerald-500/80 hidden sm:inline">AI Active</span>
                         {isTranscriptOpen ? (
                             <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-slate-400" />
                         ) : (
                             <ChevronUp className="w-3 h-3 md:w-4 md:h-4 text-slate-400" />
                         )}
                    </div>
                )}
            </div>
            
            <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 pt-12 space-y-3 md:space-y-4 scroll-smooth"
            >
                {messages.length === 0 && (
                    <div className="text-center text-slate-500 text-xs mt-4">Conversation will appear here...</div>
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

        {/* Input Floating Bar (Visible when toggled or in Text Mode) */}
        {(showInput || sessionMode === 'text') && (
            <div className={`
                ${sessionMode === 'text' ? 'absolute bottom-4 left-4 right-4 z-50' : 'absolute bottom-24 md:bottom-28 left-4 right-4 z-50 animate-in slide-in-from-bottom-2 fade-in'}
            `}>
                <div className="max-w-xl mx-auto">
                    <form onSubmit={handleSend} className="bg-slate-800/90 backdrop-blur-md p-3 rounded-2xl border border-slate-700 shadow-2xl flex gap-2">
                        <Input
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder={isProcessingText ? "Raven is thinking..." : "Type your response..."}
                            className={`
                                bg-slate-900/50 border-slate-700 text-white focus:ring-emerald-500 focus:border-emerald-500
                                ${isProcessingText ? 'opacity-50 cursor-not-allowed' : ''}
                            `}
                            disabled={isProcessingText}
                            autoFocus
                        />
                        <Button 
                            type="submit" 
                            size="icon" 
                            className={`shrink-0 ${isProcessingText ? 'bg-slate-600 cursor-not-allowed' : 'bg-emerald-500 hover:bg-emerald-600 text-white'}`}
                            disabled={!inputText.trim() || isProcessingText}
                        >
                            {isProcessingText ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                        </Button>
                        {sessionMode === 'voice' && (
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="text-slate-400 hover:text-white shrink-0"
                                onClick={() => setShowInput(false)}
                                disabled={isProcessingText}
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        )}
                    </form>
                </div>
            </div>
        )}

        {/* Footer Controls (Voice Mode Only) */}
        {sessionMode === 'voice' && (
            <div className="flex justify-center gap-4 pb-2 md:pb-4 shrink-0">
                {onSendText && (
                    <Button
                        variant="outline"
                        size="lg"
                        className={`rounded-full w-14 h-14 md:w-16 md:h-16 p-0 border-4 border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white hover:scale-105 transition-all duration-300 active:scale-95 ${showInput ? 'bg-slate-800 text-white border-slate-600' : ''}`}
                        onClick={() => setShowInput(!showInput)}
                        title="Type Response"
                        disabled={isProcessingText}
                    >
                        <Keyboard className="w-6 h-6 md:w-8 md:h-8 fill-current" />
                    </Button>
                )}

                {onTogglePause && (
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full w-14 h-14 md:w-16 md:h-16 p-0 border-4 border-slate-700 hover:bg-slate-800 text-amber-500 hover:text-amber-400 hover:scale-105 transition-all duration-300 active:scale-95"
                        onClick={onTogglePause}
                        title={status === SessionStatus.PAUSED ? "Resume" : "Pause"}
                    >
                        {status === SessionStatus.PAUSED ? <Play className="w-6 h-6 md:w-8 md:h-8 fill-current" /> : <Pause className="w-6 h-6 md:w-8 md:h-8 fill-current" />}
                    </Button>
                )}

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
        )}
      </div>
    </div>
  );
};

export default LiveSessionView;
