import React from 'react';
import LegalLayout from './LegalLayout';
import { AppView } from '../types';

interface TermsOfServiceProps {
    onBack: () => void;
    onNavigate?: (view: AppView) => void;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-50">{title}</h2>
        <div className="text-gray-600 space-y-4">{children}</div>
    </section>
);

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack, onNavigate }) => {
    return (
        <LegalLayout 
            title="Terms of Service" 
            lastUpdated="January 5, 2024" 
            onBack={onBack}
        >
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg mb-8 text-emerald-800 text-sm font-medium">
                By accessing or using Raven Exam Tutor, you agree to be bound by these Terms of Service.
            </div>

            <Section title="1. Acceptance of Terms">
                <p>Welcome to Raven Exam Tutor ("the Platform"), a JAMB exam preparation service. By accessing or using our platform, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </Section>

            <Section title="2. Description of Service">
                <p>Raven Exam Tutor provides:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Personalized JAMB exam preparation planning</li>
                    <li>Study progress tracking</li>
                    <li>Educational resource organization</li>
                    <li>Target score monitoring</li>
                </ul>
                <p className="mt-2">We continuously improve our services and may add, modify, or remove features at our discretion.</p>
            </Section>

            <Section title="3. User Accounts">
                <p>To use our platform, you must:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Provide accurate and complete registration information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Be at least 13 years old (or have parental consent)</li>
                </ul>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-4 rounded-r-md">
                    <p className="text-amber-800 m-0 text-sm font-semibold">You are responsible for all activities that occur under your account.</p>
                </div>
            </Section>

            <Section title="4. User Responsibilities">
                <p>You agree to:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Use the platform only for lawful purposes</li>
                    <li>Not attempt to interfere with platform security</li>
                    <li>Not access other users' data without authorization</li>
                    <li>Not use automated systems to access our services</li>
                    <li>Provide accurate educational information for personalized features</li>
                </ul>
            </Section>

            <Section title="5. Intellectual Property">
                <p>All platform content, features, and functionality are owned by Raven Exam Tutor and are protected by copyright, trademark, and other intellectual property laws.</p>
                <p>You may not:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Copy, modify, or create derivative works</li>
                    <li>Reverse engineer or attempt to extract source code</li>
                    <li>Remove any copyright or proprietary notices</li>
                    <li>Use our branding without permission</li>
                </ul>
            </Section>

            <Section title="6. Data Privacy">
                <p>
                    Your use of our platform is also governed by our{' '}
                    <button 
                        onClick={() => onNavigate?.('PRIVACY_POLICY')} 
                        className="text-emerald-600 hover:underline font-medium"
                    >
                        Privacy Policy
                    </button>. 
                    We implement security measures to protect your data, but cannot guarantee absolute security.
                </p>
            </Section>

            <Section title="7. Limitation of Liability">
                <p>Raven Exam Tutor is provided "as is" without warranties of any kind. We are not liable for:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Any indirect, incidental, or consequential damages</li>
                    <li>Loss of data or study progress</li>
                    <li>Service interruptions or platform unavailability</li>
                    <li>Your JAMB exam results or academic performance</li>
                </ul>
            </Section>

            <Section title="8. Modifications to Terms">
                <p>We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or platform notification. Continued use after changes constitutes acceptance.</p>
            </Section>

            <Section title="9. Termination">
                <p>We may suspend or terminate your access if you violate these Terms. Upon termination, your right to use the platform immediately ceases.</p>
            </Section>

            <Section title="10. Governing Law">
                <p>These Terms are governed by the laws of Nigeria. Any disputes shall be resolved in courts located in Nigeria.</p>
            </Section>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
                <p className="text-gray-600 mb-2">For questions about these Terms, contact us at:</p>
                <p className="text-gray-800 font-medium">Email: legal@examtutor.xyz</p>
                <p className="text-gray-800 font-medium">Website: https://examtutor.xyz</p>
                
                <div className="mt-4 pt-4 border-t border-blue-100">
                    <p className="text-sm text-blue-800 font-semibold">These Terms constitute the entire agreement between you and Raven Exam Tutor regarding use of our platform.</p>
                </div>
            </div>
        </LegalLayout>
    );
};

export default TermsOfService;