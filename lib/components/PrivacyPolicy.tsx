import React from 'react';
import LegalLayout from './LegalLayout';

interface PrivacyPolicyProps {
    onBack: () => void;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-50">{title}</h2>
        <div className="text-gray-600 space-y-4">{children}</div>
    </section>
);

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
    return (
        <LegalLayout 
            title="Privacy Policy" 
            lastUpdated="January 5, 2024" 
            onBack={onBack}
        >
            <p className="text-gray-600 mb-6">
                Welcome to Raven Exam Tutor ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our JAMB exam preparation platform.
            </p>

            <Section title="1. Information We Collect">
                <p>We collect information that you provide directly to us:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, and profile information.</li>
                    <li><strong>Educational Information:</strong> Your target institution, course of study, JAMB target score, and selected subjects.</li>
                    <li><strong>Authentication Data:</strong> When you sign in using Google or email authentication.</li>
                    <li><strong>Usage Data:</strong> Information about how you use our platform, including login counts and timestamps.</li>
                </ul>
            </Section>

            <Section title="2. How We Use Your Information">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Provide, maintain, and improve our exam preparation services</li>
                    <li>Personalize your learning experience</li>
                    <li>Communicate with you about updates, security alerts, and support messages</li>
                    <li>Monitor and analyze usage patterns to improve our platform</li>
                    <li>Protect against unauthorized access and ensure platform security</li>
                </ul>
            </Section>

            <Section title="3. Data Storage and Security">
                <p>Your data is securely stored using Supabase, a modern cloud database service that provides:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Encryption of data at rest and in transit</li>
                    <li>Row-level security (RLS) to ensure users can only access their own data</li>
                    <li>Secure authentication via OAuth and email verification</li>
                    <li>Regular security updates and monitoring</li>
                </ul>
            </Section>

            <Section title="4. Third-Party Services">
                <p>We use the following third-party services:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Supabase:</strong> For database storage and authentication</li>
                    <li><strong>Google OAuth:</strong> For secure sign-in (if you choose Google authentication)</li>
                    <li><strong>Hosting Provider:</strong> For serving our web application</li>
                </ul>
                <p>These services have their own privacy policies, and we encourage you to review them.</p>
            </Section>

            <Section title="5. Your Rights">
                <p>You have the right to:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Withdraw consent for data processing</li>
                    <li>Export your data in a portable format</li>
                </ul>
            </Section>

            <Section title="6. Children's Privacy">
                <p>Our service is intended for students preparing for JAMB examinations. If you are under 18, please ensure you have parental consent before using our platform.</p>
            </Section>

            <Section title="7. Changes to This Privacy Policy">
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
            </Section>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
                <p className="text-gray-600 mb-2">If you have questions or concerns about this Privacy Policy, please contact us at:</p>
                <p className="text-gray-800 font-medium">Email: privacy@examtutor.xyz</p>
                <p className="text-gray-800 font-medium">Website: https://examtutor.xyz</p>
            </div>
        </LegalLayout>
    );
};

export default PrivacyPolicy;