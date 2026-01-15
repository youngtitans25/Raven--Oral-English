import React from 'react';
import { Button } from './ui/button';
import { BookOpen, TrendingUp, Target, School, ArrowRight } from 'lucide-react';
import { AppView } from '../types';
import { ImageWithFallback } from './ui/ImageWithFallback';

interface LandingPageProps {
  onLogin: () => void;
  onNavigate: (view: AppView) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAFBFC] text-[#111827] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          
          {/* Hero Section */}
          <div className="text-center py-10">
            <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-3xl bg-emerald-50 flex items-center justify-center border border-emerald-100 p-4 shadow-sm overflow-hidden">
                     <ImageWithFallback 
                        src="/logo.png" 
                        alt="Raven Logo" 
                        className="w-full h-full object-contain"
                        fallbackContent={<span className="text-4xl">🎓</span>}
                     />
                </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-emerald-600 font-display">Raven</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Your intelligent companion for JAMB exam success. Personalized study plans, interactive learning materials, simulations, AI Tutor, and progress tracking to help you achieve your target score.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button onClick={onLogin} size="lg" className="bg-[#3ECF8E] hover:bg-[#34b078] text-white font-semibold text-lg px-8 h-12 rounded-xl">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-[#3ECF8E] text-[#3ECF8E] hover:bg-[#3ECF8E]/10 font-semibold text-lg px-8 h-12 rounded-xl">
                Learn More
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <FeatureCard 
              icon={<BookOpen className="w-6 h-6 text-[#3ECF8E]" />}
              title="Personalized Plans"
              description="Custom study schedules based on your target score, course, and available time."
            />
            <FeatureCard 
              icon={<TrendingUp className="w-6 h-6 text-[#3ECF8E]" />}
              title="Progress Tracking"
              description="Monitor your improvement with detailed analytics and performance reports."
            />
            <FeatureCard 
              icon={<Target className="w-6 h-6 text-[#3ECF8E]" />}
              title="Target Score"
              description="Set your JAMB target score and track your progress towards achieving it."
            />
            <FeatureCard 
              icon={<School className="w-6 h-6 text-[#3ECF8E]" />}
              title="Institution Guidance"
              description="Get tailored advice for your chosen university and course requirements."
            />
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-8 border-t pt-8">
            <h3 className="text-xl font-bold mb-6">Ready to Start Your Journey?</h3>
            <Button onClick={onLogin} className="w-full max-w-sm bg-[#3ECF8E] hover:bg-[#34b078] text-white h-12 text-lg rounded-xl">
              Start Free Today <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col items-center">
                <div className="text-xs text-gray-500 flex gap-1">
                    By using Raven Exam Tutor, you agree to our
                    <button onClick={() => onNavigate('TERMS_OF_SERVICE')} className="text-emerald-600 hover:underline bg-transparent border-0 p-0 cursor-pointer">Terms of Service</button>
                    and
                    <button onClick={() => onNavigate('PRIVACY_POLICY')} className="text-emerald-600 hover:underline bg-transparent border-0 p-0 cursor-pointer">Privacy Policy</button>.
                </div>
                <p className="text-xs text-gray-400 mt-2">© 2026 Raven. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
);

export default LandingPage;
