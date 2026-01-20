
import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Monitor, Cpu, Code, Play, Sparkles, ChevronRight, Layers, Keyboard, Database, FileText, Wrench, Globe, Terminal, Bot, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { COMPUTER_SECTIONS, COMPUTER_INSTRUCTION } from '../coaches';
import { ImageWithFallback } from './ui/ImageWithFallback';
import { SyllabusPreviewModal } from './ui/SyllabusPreviewModal';

interface ComputerSyllabusViewProps {
  onBack: () => void;
  onStartSection: (sectionId: string) => void;
}

const ComputerSyllabusView: React.FC<ComputerSyllabusViewProps> = ({ onBack, onStartSection }) => {
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
  const [previewTopicId, setPreviewTopicId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedSectionId]);

  const activeSection = selectedSectionId 
    ? COMPUTER_SECTIONS.find(s => s.id === selectedSectionId) 
    : null;

  const activePreviewModule = activeSection?.subModules?.find(m => m.id === previewTopicId);

  const handleBack = () => {
    if (selectedSectionId) {
        setSelectedSectionId(null);
    } else {
        onBack();
    }
  };

  const handleTopicClick = (topicId: string) => {
      setPreviewTopicId(topicId);
  };

  const handleStartSession = () => {
      if (previewTopicId) {
          onStartSection(previewTopicId);
          setPreviewTopicId(null);
      }
  };

  const renderMainView = () => (
    <div className="animate-fade-in">
        <div className="text-center mb-8 md:mb-12 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-2 md:mb-4">
                Decode the <span className="text-cyan-600">Digital World</span>.
            </h1>
            <p className="text-slate-600 text-sm md:text-lg">
                Master Evolution, Hardware, AI, Ethics, and Programming.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {COMPUTER_SECTIONS.map((section, index) => {
                let Icon = Monitor;
                let colorClass = "text-cyan-600";
                let bgClass = "bg-cyan-500/5";

                if (section.id.includes('evolution')) { Icon = BookOpen; colorClass = "text-amber-600"; bgClass = "bg-amber-500/5"; }
                if (section.id.includes('fundamentals')) { Icon = Cpu; colorClass = "text-blue-600"; bgClass = "bg-blue-500/5"; }
                if (section.id.includes('applications')) { Icon = Keyboard; colorClass = "text-emerald-600"; bgClass = "bg-emerald-500/5"; }
                if (section.id.includes('files')) { Icon = FileText; colorClass = "text-purple-600"; bgClass = "bg-purple-500/5"; }
                if (section.id.includes('maintenance')) { Icon = Wrench; colorClass = "text-red-600"; bgClass = "bg-red-500/5"; }
                if (section.id.includes('ict')) { Icon = Globe; colorClass = "text-indigo-600"; bgClass = "bg-indigo-500/5"; }
                if (section.id.includes('problem-solving')) { Icon = Terminal; colorClass = "text-fuchsia-600"; bgClass = "bg-fuchsia-500/5"; }
                if (section.id.includes('ai')) { Icon = Bot; colorClass = "text-teal-600"; bgClass = "bg-teal-500/5"; }
                if (section.id.includes('ethics')) { Icon = Shield; colorClass = "text-slate-600"; bgClass = "bg-slate-500/5"; }

                return (
                    <div 
                        key={section.id} 
                        className="group relative flex flex-col h-full cursor-pointer"
                        style={{ animationDelay: `${index * 100}ms` }}
                        onClick={() => setSelectedSectionId(section.id)}
                    >
                        <div className={`absolute inset-0 ${bgClass} rounded-3xl transform group-hover:scale-105 transition-transform duration-500 -z-10`}></div>
                        
                        <Card className="flex-1 flex flex-col overflow-hidden border-0 shadow-lg group-hover:shadow-2xl transition-all duration-300 rounded-3xl h-full">
                            <div className="h-40 overflow-hidden relative shrink-0">
                                <ImageWithFallback 
                                    src={section.image} 
                                    alt={section.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-4">
                                    <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white p-2 rounded-xl">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 md:p-6 flex flex-col flex-1 justify-center">
                                <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">{section.title}</h3>
                                <p className="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-3">
                                    {section.description}
                                </p>

                                <div className={`flex items-center ${colorClass} font-bold text-xs md:text-sm group-hover:underline mt-auto`}>
                                    View {section.subModules?.length || 0} Topics <ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </Card>
                    </div>
                );
            })}
        </div>
    </div>
  );

  const renderDetailView = () => {
    if (!activeSection) return null;

    let themeColor = "text-cyan-600";
    let bgTheme = "bg-cyan-50";
    
    if (activeSection.id.includes('evolution')) { themeColor = "text-amber-600"; bgTheme = "bg-amber-50"; }
    if (activeSection.id.includes('fundamentals')) { themeColor = "text-blue-600"; bgTheme = "bg-blue-50"; }
    if (activeSection.id.includes('applications')) { themeColor = "text-emerald-600"; bgTheme = "bg-emerald-50"; }
    if (activeSection.id.includes('files')) { themeColor = "text-purple-600"; bgTheme = "bg-purple-50"; }
    if (activeSection.id.includes('maintenance')) { themeColor = "text-red-600"; bgTheme = "bg-red-50"; }
    if (activeSection.id.includes('ict')) { themeColor = "text-indigo-600"; bgTheme = "bg-indigo-50"; }
    if (activeSection.id.includes('problem-solving')) { themeColor = "text-fuchsia-600"; bgTheme = "bg-fuchsia-50"; }
    if (activeSection.id.includes('ai')) { themeColor = "text-teal-600"; bgTheme = "bg-teal-50"; }
    if (activeSection.id.includes('ethics')) { themeColor = "text-slate-600"; bgTheme = "bg-slate-50"; }

    return (
        <div className="animate-slide-up">
             <div className="text-center mb-8 md:mb-10 max-w-3xl mx-auto">
                <span className={`${themeColor} font-bold tracking-widest text-[10px] md:text-xs uppercase ${bgTheme} px-3 py-1 rounded-full mb-3 inline-block`}>
                    {activeSection.title.split(':')[0]}
                </span>
                <h1 className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-2 md:mb-4">
                    {activeSection.title.split(':')[1]}
                </h1>
                <p className="text-slate-600 text-sm md:text-base">
                    Select a topic below to start your Computer Studies session.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {activeSection.subModules?.map((module, index) => (
                    <Card 
                        key={module.id}
                        className={`group hover:border-current transition-all cursor-pointer overflow-hidden border-slate-200 ${themeColor}`}
                        onClick={() => handleTopicClick(module.id)}
                    >
                        <div className="flex flex-row sm:flex-col h-full text-slate-900">
                             {/* Image side */}
                             <div className="w-1/3 sm:w-full h-auto sm:h-40 overflow-hidden relative shrink-0">
                                <ImageWithFallback 
                                    src={module.image || 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop'} 
                                    alt={module.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                            </div>

                            {/* Content side */}
                            <div className="w-2/3 sm:w-full p-4 md:p-5 flex flex-col justify-center">
                                <h3 className="font-bold text-slate-900 mb-1 text-sm md:text-base group-hover:text-current transition-colors line-clamp-2">
                                    {module.title}
                                </h3>
                                <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2 sm:line-clamp-3">
                                    {module.description}
                                </p>
                                <div className="mt-auto flex items-center text-[10px] md:text-xs font-bold text-slate-400 group-hover:text-current uppercase tracking-wider transition-colors">
                                    <BookOpen className="w-3 h-3 mr-1 fill-current" /> View Syllabus
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Syllabus Modal */}
      {previewTopicId && activePreviewModule && (
          <SyllabusPreviewModal 
            topicId={previewTopicId}
            topicTitle={activePreviewModule.title}
            topicImage={(activePreviewModule as any).image}
            subjectName="Computer Studies"
            onClose={() => setPreviewTopicId(null)}
            onStart={handleStartSession}
            instructionGenerator={COMPUTER_INSTRUCTION}
          />
      )}

      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-30 px-4 py-3 md:px-6 md:py-4 flex items-center justify-between shadow-sm">
        <Button variant="ghost" onClick={handleBack} className="text-slate-600 gap-2 pl-0 hover:bg-transparent hover:text-cyan-600 text-sm">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" /> 
            {selectedSectionId ? 'Back to Sections' : 'Back to Dashboard'}
        </Button>
        <div className="flex items-center gap-2 text-slate-800">
            <Layers className="w-4 h-4 md:w-5 md:h-5 text-cyan-600" />
            <span className="font-display font-bold text-sm md:text-lg">
                Computer Studies <span className="text-slate-300 mx-1 md:mx-2">/</span> <span className="text-cyan-600">{selectedSectionId ? activeSection?.title.split(':')[0] : 'Syllabus'}</span>
            </span>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4 md:p-12 w-full">
        {selectedSectionId ? renderDetailView() : renderMainView()}
        
        {/* Footer Info */}
        {!selectedSectionId && (
            <div className="mt-12 md:mt-16 text-center animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-cyan-100 max-w-full text-left">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>Understand ICT, AI, Robotics and Ethics.</span>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default ComputerSyllabusView;
