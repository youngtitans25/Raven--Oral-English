import React, { useEffect, useState, useRef } from 'react';
import { useLiveSession } from './hooks/useLiveSession';
import { SessionStatus } from './types';
import Visualizer from './components/Visualizer';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './components/ui/card';
import { 
  Mic, 
  MessageSquare, 
  StopCircle, 
  BookOpen, 
  Volume2, 
  Send, 
  Loader2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const App: React.FC = () => {
  const { 
    status, 
    errorMessage, 
    analyser, 
    startSession, 
    disconnect, 
    messages, 
    sendChat,
    visualContent,
  } = useLiveSession();
  
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => { disconnect(); };
  }, [disconnect]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleStart = () => {
    startSession('gemini');
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    await sendChat(inputText);
    setInputText('');
  };

  const speakText = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.lang.includes('en-GB')) || voices.find(v => v.lang.includes('en-US'));
    if (preferredVoice) utterance.voice = preferredVoice;
    window.speechSynthesis.speak(utterance);
  };

  // Landing View
  if (status === SessionStatus.IDLE || status === SessionStatus.ENDED || status === SessionStatus.ERROR || status === SessionStatus.CONNECTING) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6 text-center">
        <Card className="w-full max-w-2xl border-none shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-col items-center pb-2">
                <div className="mb-4 p-4 bg-primary/10 rounded-full animate-pulse">
                    <BookOpen className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-4xl font-bold tracking-tight text-gray-900">Raven CRS Coach</CardTitle>
                <CardDescription className="text-lg mt-2">
                    Master JAMB Christian Religious Studies with AI. <br/>Topic: The Sovereignty of God.
                </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 pt-4">
                {status === SessionStatus.ERROR && (
                    <div className="p-3 bg-destructive/10 text-destructive rounded-lg text-sm border border-destructive/20 flex items-center justify-center gap-2">
                        <StopCircle className="w-4 h-4" />
                        {errorMessage}
                    </div>
                )}

                <div className="flex justify-center">
                     <div 
                        className="w-full bg-primary/5 border border-primary/20 p-4 rounded-xl flex items-center gap-4 max-w-md"
                     >
                        <div className="p-3 rounded-full bg-primary text-white shadow-sm">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                            <h3 className="font-semibold text-gray-900">Gemini Live Powered</h3>
                            <p className="text-xs text-muted-foreground">Real-time voice & visual learning</p>
                        </div>
                     </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                    {[
                    "God as Creator & Controller",
                    "Defining 'Sovereignty'",
                    "Sequence of Creation",
                    "Man's Role & Stewardship"
                    ].map((feature, i) => (
                    <div key={i} className="flex items-center p-3 bg-muted/50 rounded-lg border border-border/50">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="justify-center pb-8">
                <Button 
                    size="lg" 
                    onClick={handleStart} 
                    disabled={status === SessionStatus.CONNECTING}
                    className="w-full max-w-sm text-lg h-14 rounded-full shadow-lg gap-2"
                >
                    {status === SessionStatus.CONNECTING ? (
                        <>
                            <Loader2 className="h-5 w-5 animate-spin" /> Connecting...
                        </>
                    ) : (
                        <>
                            <Mic className="h-5 w-5" /> Start Live Session
                        </>
                    )}
                </Button>
            </CardFooter>
        </Card>
      </div>
    );
  }

  // Unified Session View
  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card border-b px-6 py-3 flex justify-between items-center shadow-sm z-10">
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full animate-pulse bg-primary"></div>
            <span className="font-bold text-lg tracking-tight">Raven CRS <span className="text-xs text-muted-foreground font-normal ml-2 hidden sm:inline-block">Powered by Gemini</span></span>
        </div>
        <Button 
            variant="destructive" 
            size="sm" 
            onClick={disconnect}
            className="gap-2"
        >
          <StopCircle className="w-4 h-4" /> End Session
        </Button>
      </header>

      {/* Main Content: Split View */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* LEFT: Visualizer & Blackboard (Gemini) */}
        <div className="flex-1 flex flex-col relative bg-slate-950 overflow-hidden transition-all">
            {/* Visualizer Background */}
            <div className="absolute inset-0 opacity-80 pointer-events-none">
                <Visualizer analyser={analyser} isActive={true} />
            </div>

            {/* Blackboard / Visual Content Overlay */}
            <div className="flex-1 flex flex-col items-center justify-center z-10 p-8">
                {visualContent ? (
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center shadow-2xl transform transition-all duration-500 animate-in fade-in zoom-in max-w-2xl">
                        <span className="text-primary text-xs font-bold tracking-wider uppercase mb-3 block">
                            {visualContent.title || 'Scripture Focus'}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                            {visualContent.data}
                        </h2>
                    </div>
                ) : (
                    <div className="text-white/30 text-center font-light flex flex-col items-center">
                        <div className="p-6 rounded-full border border-white/10 bg-white/5 mb-4">
                            <BookOpen className="w-12 h-12" />
                        </div>
                        <p className="text-lg font-medium">Listening...</p>
                        <p className="text-sm mt-2 opacity-50">Topic: Sovereignty of God</p>
                    </div>
                )}
            </div>

            {/* Subtitles (Gemini Transcription) */}
            <div className="p-8 text-center z-10 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                {messages.filter(m => m.source === 'gemini' && m.role === 'assistant').slice(-1).map(msg => (
                    <p key={msg.id} className="text-white/90 text-xl font-medium drop-shadow-md animate-in slide-in-from-bottom-2 leading-relaxed max-w-4xl mx-auto">
                        "{msg.content}"
                    </p>
                ))}
            </div>
        </div>

        {/* RIGHT: Chat & History */}
        <div className="bg-background border-l flex flex-col z-20 w-full md:w-[400px] shadow-2xl">
            {/* Chat List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-8">
                        <MessageSquare className="w-12 h-12 mb-4 opacity-20" />
                        <p className="text-sm">Session Started. Ask questions by voice or text.</p>
                    </div>
                )}
                {messages.map(msg => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                            msg.role === 'user' 
                            ? 'bg-primary text-primary-foreground rounded-br-none' 
                            : 'bg-white border text-foreground rounded-bl-none'
                        }`}>
                            {msg.content}
                            <div className="flex items-center justify-between mt-2 gap-4">
                                <span className={`text-[10px] ${msg.role === 'user' ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                                    {msg.role === 'user' ? 'You' : 'Raven'}
                                </span>
                                {msg.role === 'assistant' && (
                                    <button onClick={() => speakText(msg.content)} className="opacity-50 hover:opacity-100 transition-opacity">
                                        <Volume2 className="w-3 h-3" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-background border-t">
                <form onSubmit={handleSendMessage} className="relative flex gap-2">
                    <Input 
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Type a response..."
                        className="rounded-full pr-12 bg-muted/30 border-muted-foreground/20 focus-visible:ring-primary"
                    />
                    <Button 
                        type="submit"
                        size="icon"
                        disabled={!inputText.trim()}
                        className="absolute right-1 top-1 h-8 w-8 rounded-full"
                    >
                        <Send className="w-4 h-4" />
                    </Button>
                </form>
            </div>
        </div>

      </main>
    </div>
  );
};

export default App;