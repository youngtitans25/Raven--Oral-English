import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface LegalLayoutProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
    onBack: () => void;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, lastUpdated, children, onBack }) => {
    return (
        <div className="min-h-screen bg-[#FAFBFC] py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
            <div className="max-w-3xl mx-auto">
                <Button 
                    variant="ghost" 
                    onClick={onBack} 
                    className="mb-6 pl-0 hover:bg-transparent hover:text-emerald-600 text-gray-500 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                
                <div className="bg-white shadow-sm border border-gray-200 rounded-2xl p-8 md:p-12">
                    <div className="mb-8 border-b border-gray-100 pb-8">
                        <h1 className="text-3xl font-bold text-emerald-600 mb-2">{title}</h1>
                        <p className="text-sm text-gray-500 italic">Last Updated: {lastUpdated}</p>
                    </div>
                    
                    <div className="space-y-6 leading-relaxed">
                        {children}
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
                        <Button 
                            onClick={onBack}
                            className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 font-medium"
                            variant="ghost"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Raven Exam Tutor
                        </Button>
                    </div>
                </div>
                
                <div className="mt-8 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Raven Exam Tutor. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default LegalLayout;