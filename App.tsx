import React, { useEffect, useState, useRef } from 'react';
import { useLiveSession } from './hooks/useLiveSession';
import { SessionStatus, Provider } from './types';
import Visualizer from './components/Visualizer';

// Icons
const MicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 1.5a3 3 0 013 3v4.5a3 3 0 01-6 0v-4.5a3 3 0 013-3z" />
  </svg>
);

const ChatBubbleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.286 3.423.379.35.028.71.042 1.065.057.545.023 1.09.043 1.643.043s1.098-.02 1.643-.043c.354-.015.715-.029 1.065-.057.615-.05 1.23-.118 1.838-.203a3.001 3.001 0 002.502-2.316 12 12 0 00.672-4.233c0-1.605-.33-3.132-.937-4.524-.467-1.074-1.393-1.92-2.527-2.313A12.012 12.012 0 0012 2.25c-3.172 0-6.13.978-8.544 2.668-1.294.908-1.948 2.373-1.688 3.935.109.654.266 1.29.467 1.907z" />
    </svg>
);

const StopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-emerald-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const SpeakerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>
);
  
const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
);

const App: React.FC = () => {
  const { status, errorMessage, analyser, startSession, disconnect, currentProvider, messages, sendText } = useLiveSession();
  const [selectedProvider, setSelectedProvider] = useState<Provider>('gemini');
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [disconnect]);

  // Auto-scroll chat
  useEffect(() => {
    if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleStart = () => {
    startSession(selectedProvider);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    await sendText(inputText);
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

  // Views
  const renderLanding = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center max-w-3xl mx-auto">
      <div className="bg-emerald-100 p-4 rounded-full mb-6">
        <MicIcon />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
        Meet <span className="text-emerald-600">Raven</span>.
      </h1>
      <h2 className="text-xl text-gray-600 mb-8 font-light">
        Your personal AI coach for the JAMB UTME Oral English Exam.
      </h2>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full max-w-md">
        <button 
          onClick={() => setSelectedProvider('gemini')}
          className={`flex-1 p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
            selectedProvider === 'gemini' 
              ? 'border-emerald-500 bg-emerald-50 text-emerald-800' 
              : 'border-gray-200 text-gray-500 hover:border-emerald-200'
          }`}
        >
          <MicIcon />
          <span className="font-semibold">Voice Mode</span>
          <span className="text-xs opacity-75">Real-time Speech Practice</span>
        </button>

        <button 
          onClick={() => setSelectedProvider('deepseek')}
          className={`flex-1 p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
            selectedProvider === 'deepseek' 
              ? 'border-blue-500 bg-blue-50 text-blue-800' 
              : 'border-gray-200 text-gray-500 hover:border-blue-200'
          }`}
        >
          <ChatBubbleIcon />
          <span className="font-semibold">Chat Mode</span>
          <span className="text-xs opacity-75">Text & Pronunciation Guide</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-10 text-left">
        {[
          "Vowels & Consonants Drill",
          "Stress Pattern Analysis",
          "Rhymes & Homophones",
          "Real-time Pronunciation Feedback"
        ].map((feature, i) => (
          <div key={i} className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="mr-3 bg-emerald-50 p-2 rounded-full">
              <CheckIcon />
            </div>
            <span className="text-gray-700 font-medium">{feature}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleStart}
        className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg hover:-translate-y-1 ${
          selectedProvider === 'gemini' 
          ? 'bg-emerald-600 focus:ring-emerald-600 hover:bg-emerald-700' 
          : 'bg-blue-600 focus:ring-blue-600 hover:bg-blue-700'
        }`}
      >
        <span className="mr-2">Start {selectedProvider === 'gemini' ? 'Voice' : 'Chat'} Session</span>
        <PlayIcon />
      </button>

      <p className="mt-6 text-sm text-gray-400">
        {selectedProvider === 'gemini' ? "Requires microphone access for real-time analysis." : "Interactive text chat with pronunciation support."}
      </p>
    </div>
  );

  const renderGeminiSession = () => (
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 flex flex-col items-center">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Raven is listening</h3>
                <p className="text-gray-500">Speak clearly into your microphone.</p>
            </div>
            {/* Visualizer */}
            <div className="w-full relative mb-8">
                <Visualizer analyser={analyser} isActive={status === SessionStatus.CONNECTED} />
            </div>
            <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-xl p-4 w-full">
                <p className="text-sm text-center font-medium">
                    "Say 'Hello Raven' to start your assessment!"
                </p>
            </div>
        </div>
      </main>
  );

  const renderDeepSeekSession = () => (
      <main className="flex-1 flex flex-col max-w-2xl w-full mx-auto p-4 h-[calc(100vh-80px)]">
          {/* Chat List */}
          <div className="flex-1 overflow-y-auto space-y-4 pb-4 pr-2">
            {messages.length === 0 && (
                 <div className="text-center text-gray-400 mt-20">
                    <p>Connecting to Raven...</p>
                 </div>
            )}
            {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
                        msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none'
                    }`}>
                        <div className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</div>
                        {msg.role === 'assistant' && (
                            <button 
                                onClick={() => speakText(msg.content)}
                                className="mt-2 flex items-center gap-1 text-xs text-blue-600 font-medium hover:bg-blue-50 px-2 py-1 rounded transition-colors"
                            >
                                <SpeakerIcon />
                                Hear Pronunciation
                            </button>
                        )}
                    </div>
                </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="mt-4 flex gap-2">
            <input 
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your answer or question..."
                className="flex-1 border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                autoFocus
            />
            <button 
                type="submit"
                disabled={!inputText.trim()}
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
            >
                <SendIcon />
            </button>
          </form>
      </main>
  );

  const renderSession = () => (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full animate-pulse ${currentProvider === 'gemini' ? 'bg-emerald-500' : 'bg-blue-500'}`}></div>
            <span className="font-semibold text-gray-700 tracking-wide uppercase text-sm">
              {currentProvider === 'gemini' ? 'Voice Session' : 'Chat Session'}
            </span>
        </div>
        <button 
          onClick={disconnect}
          className="text-sm text-red-600 hover:text-red-700 font-medium border border-red-200 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          <StopIcon />
          End Session
        </button>
      </header>

      {currentProvider === 'gemini' ? renderGeminiSession() : renderDeepSeekSession()}
    </div>
  );

  const renderEnded = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center max-w-md mx-auto">
      <div className="bg-gray-100 p-4 rounded-full mb-6 text-gray-500">
        <StopIcon />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Session Ended</h1>
      <p className="text-gray-600 mb-8">
        Great practice! Come back soon to keep improving your oral English skills.
      </p>
      
      {errorMessage && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-8 text-sm w-full border border-red-100">
          Error: {errorMessage}
        </div>
      )}

      <button
        onClick={handleStart}
        className={`w-full flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 rounded-xl shadow-md ${
          selectedProvider === 'gemini' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        Start New Session
      </button>
      <button
         onClick={() => setSelectedProvider(selectedProvider === 'gemini' ? 'deepseek' : 'gemini')}
         className="mt-4 text-gray-500 text-sm hover:underline"
      >
        Switch to {selectedProvider === 'gemini' ? 'DeepSeek' : 'Gemini'}
      </button>
    </div>
  );

  // Router Logic
  if (status === SessionStatus.CONNECTING || status === SessionStatus.CONNECTED) {
    return renderSession();
  }
  
  if (status === SessionStatus.ENDED || status === SessionStatus.ERROR) {
    return renderEnded();
  }

  return renderLanding();
};

export default App;
