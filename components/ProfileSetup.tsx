import React, { useState } from 'react';
import { StudentProfile, StudentCategory } from '../types';
import { 
    NIGERIAN_STATES, NIGERIAN_BANKS, CATEGORIES, INSTITUTION_TYPES, 
    CATEGORIZED_INSTITUTIONS, FACULTIES, MONTHS, YEARS, SECONDARY_CLASSES, ATTEMPT_OPTIONS 
} from '../lib/constants';
import { SubjectSelector } from './ui/SubjectSelector';
import { Button } from './ui/button';
import { ArrowRight, Loader2, Sparkles, ChevronDown, Gift, AlertCircle } from 'lucide-react';

interface ProfileSetupProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  onComplete: (profile: StudentProfile) => void;
  onLogout: () => void;
}

const ProfileSetup: React.FC<ProfileSetupProps> = ({ user, onComplete, onLogout }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [logoError, setLogoError] = useState(false);
  
  const [formData, setFormData] = useState({
    // Basic Info
    firstName: user.user_metadata?.full_name?.split(' ')[0] || '',
    lastName: user.user_metadata?.full_name?.split(' ')[1] || '',
    email: user.email || '',
    whatsapp_number: '',
    guardian_number: '',
    
    // Demographics
    dob_month: '',
    dob_year: '',
    gender: '' as 'Male' | 'Female' | '',
    state: '',
    city: '',
    
    // Financial
    bankName: '',
    accountNumber: '',
    
    // Academic Background
    is_student: null as boolean | null,
    current_class: '',
    secondary_school: '',
    
    // Exam History
    is_repeater: null as boolean | null,
    attempts: '',
    last_score: '' as unknown as number,

    // Target
    category: '' as StudentCategory | '',
    targetScore: '' as unknown as number,
    institutionType: '',
    institution: '',
    faculty: '',
    course: '',
  });
  
  const [subjects, setSubjects] = useState<string[]>(['Use of English']);

  const clearError = (field: string) => {
    if (errors[field]) {
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[field];
            return newErrors;
        });
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    clearError(field);
    
    // specific dependency clearing
    if (field === 'is_student') {
        if (value === false) clearError('current_class');
    }
    if (field === 'is_repeater') {
        if (value === false) {
            clearError('attempts');
            clearError('last_score');
        }
    }
    if (field === 'institutionType') {
        setFormData(prev => ({ ...prev, [field]: value, institution: '' }));
    }
    if (field === 'faculty') {
        setFormData(prev => ({ ...prev, [field]: value, course: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email Address is required";
    if (!formData.whatsapp_number) newErrors.whatsapp_number = "WhatsApp Number is required";
    if (!formData.guardian_number) newErrors.guardian_number = "Guardian Number is required";

    if (!formData.dob_month) newErrors.dob_month = "Required";
    if (!formData.dob_year) newErrors.dob_year = "Required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";

    if (formData.is_student === null) newErrors.is_student = "Please select an option";
    if (formData.is_student === true && !formData.current_class) newErrors.current_class = "Class is required";
    if (!formData.secondary_school) newErrors.secondary_school = "School Name is required";

    if (formData.is_repeater === null) newErrors.is_repeater = "Please select an option";
    if (formData.is_repeater === true) {
        if (!formData.attempts) newErrors.attempts = "Attempts required";
        if (!formData.last_score) newErrors.last_score = "Last score required";
    }

    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.targetScore) newErrors.targetScore = "Target Score is required";
    
    if (!formData.institutionType) newErrors.institutionType = "Institution Type is required";
    if (!formData.institution && formData.institutionType) newErrors.institution = "Institution is required";

    if (!formData.faculty) newErrors.faculty = "Faculty is required";
    if (!formData.course && formData.faculty) newErrors.course = "Course is required";
    
    if (subjects.length !== 4) {
        newErrors.subjects = "You must select exactly 4 subjects (Use of English + 3 others)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating network

    const profile: StudentProfile = {
        id: user.id,
        email: formData.email,
        name: `${formData.firstName} ${formData.lastName}`,
        whatsapp_number: formData.whatsapp_number,
        guardian_number: formData.guardian_number,
        
        dob_month: formData.dob_month,
        dob_year: formData.dob_year,
        gender: formData.gender as 'Male' | 'Female',
        state: formData.state,
        city: formData.city,
        
        bank_name: formData.bankName,
        account_number: formData.accountNumber,
        
        is_student: formData.is_student || false,
        current_class: formData.current_class,
        secondary_school: formData.secondary_school,
        
        is_repeater: formData.is_repeater || false,
        attempts: formData.attempts,
        last_score: Number(formData.last_score),

        category: formData.category as StudentCategory,
        targetScore: Number(formData.targetScore),
        subjects: subjects,
        institute: formData.institution,
        course: formData.course,
        profile_complete: true
    };

    onComplete(profile);
    setLoading(false);
  };

  // Get available courses based on selected faculty
  const availableCourses = FACULTIES.find(f => f.name === formData.faculty)?.courses || [];
  
  // Get available institutions based on selected type
  const availableInstitutions = formData.institutionType ? CATEGORIZED_INSTITUTIONS[formData.institutionType] : [];

  // Helper for input error class
  // Using text-base ensures iOS doesn't zoom in on input focus
  const getInputClass = (field: string) => {
    return `w-full p-3 md:p-3.5 rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all text-base placeholder:text-gray-400 text-slate-900 ${
        errors[field] 
        ? 'border-red-500 focus:ring-red-500 bg-red-50' 
        : 'border-slate-200 focus:ring-palm-500 focus:border-transparent'
    }`;
  };

  return (
    <div className="min-h-screen py-6 md:py-12 px-4 flex justify-center animate-fade-in">
        <div className="w-full max-w-2xl animate-slide-up">
            
            {/* Header */}
            <div className="text-center mb-6 md:mb-8">
                <div className="relative inline-block mb-4 md:mb-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-3xl bg-white flex items-center justify-center shadow-lg animate-float p-4 md:p-5">
                         {!logoError ? (
                            <img 
                                src="/logo.png" 
                                alt="Raven Logo" 
                                className="w-full h-full object-contain"
                                onError={() => setLogoError(true)}
                            />
                         ) : (
                            <span className="text-4xl">📚</span>
                         )}
                    </div>
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-lg bg-gradient-to-br from-earth-400 to-earth-600 flex items-center justify-center shadow-md">
                        <span className="text-sm">🇳🇬</span>
                    </div>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold font-display text-palm-800 mb-2">Welcome to Raven</h1>
                <p className="text-sm md:text-base text-slate-600">Let's personalize your JAMB journey.</p>
            </div>

            {/* Error Summary if any */}
            {Object.keys(errors).length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-sm text-red-600 flex items-center gap-2 animate-pulse-soft">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">Please correct the highlighted fields below to continue.</span>
                </div>
            )}

            {/* Form */}
            <div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl rounded-3xl p-5 md:p-10 space-y-6 md:space-y-8">
                
                {/* Section: Personal Details */}
                <div className="space-y-4">
                    <h3 className="text-base md:text-lg font-bold text-slate-800 border-b pb-2">Personal Details</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="group">
                            <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">First Name</label>
                            <input 
                                type="text" 
                                className={getInputClass('firstName')}
                                placeholder="Demy"
                                value={formData.firstName}
                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                            />
                            {errors.firstName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.firstName}</p>}
                        </div>
                        <div className="group">
                            <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Last Name</label>
                            <input 
                                type="text" 
                                className={getInputClass('lastName')}
                                placeholder="Michaels"
                                value={formData.lastName}
                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                            />
                            {errors.lastName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.lastName}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="relative">
                            <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Gender</label>
                            <select 
                                className={`${getInputClass('gender')} appearance-none`}
                                value={formData.gender}
                                onChange={(e) => handleInputChange('gender', e.target.value)}
                            >
                                <option value="" disabled>Select Gender...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <ChevronDown className="absolute right-3.5 top-[38px] w-4 h-4 text-slate-400 pointer-events-none" />
                            {errors.gender && <p className="text-red-500 text-xs mt-1 ml-1">{errors.gender}</p>}
                        </div>
                        
                        {/* DOB */}
                        <div className="flex gap-2">
                             <div className="relative flex-1">
                                <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1 flex items-center gap-1">
                                    Birth Month <Gift className="w-3 h-3 text-pink-500" />
                                </label>
                                <select 
                                    className={`${getInputClass('dob_month')} appearance-none`}
                                    value={formData.dob_month}
                                    onChange={(e) => handleInputChange('dob_month', e.target.value)}
                                >
                                    <option value="">Month</option>
                                    {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
                                </select>
                                {errors.dob_month && <p className="text-red-500 text-xs mt-1 ml-1">{errors.dob_month}</p>}
                            </div>
                            <div className="relative flex-1">
                                <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Year</label>
                                <select 
                                    className={`${getInputClass('dob_year')} appearance-none`}
                                    value={formData.dob_year}
                                    onChange={(e) => handleInputChange('dob_year', e.target.value)}
                                >
                                    <option value="">Year</option>
                                    {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                                </select>
                                {errors.dob_year && <p className="text-red-500 text-xs mt-1 ml-1">{errors.dob_year}</p>}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: Contact Details */}
                <div className="space-y-4">
                    <h3 className="text-base md:text-lg font-bold text-slate-800 border-b pb-2">Contact Details</h3>
                    
                    <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Email Address</label>
                        <input 
                            type="email" 
                            className={getInputClass('email')}
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">WhatsApp Number</label>
                            <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none font-medium">+234</span>
                                <input 
                                    type="tel" 
                                    className={`${getInputClass('whatsapp_number')} pl-16 md:pl-20`}
                                    placeholder="8123456789"
                                    value={formData.whatsapp_number}
                                    onChange={(e) => handleInputChange('whatsapp_number', e.target.value)}
                                />
                            </div>
                            {errors.whatsapp_number && <p className="text-red-500 text-xs mt-1 ml-1">{errors.whatsapp_number}</p>}
                        </div>
                         <div>
                            <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Parent/Guardian Number</label>
                            <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none font-medium">+234</span>
                                <input 
                                    type="tel" 
                                    className={`${getInputClass('guardian_number')} pl-16 md:pl-20`}
                                    placeholder="8123456789"
                                    value={formData.guardian_number}
                                    onChange={(e) => handleInputChange('guardian_number', e.target.value)}
                                />
                            </div>
                            {errors.guardian_number && <p className="text-red-500 text-xs mt-1 ml-1">{errors.guardian_number}</p>}
                        </div>
                    </div>
                     
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">State of Origin</label>
                            <select 
                                className={`${getInputClass('state')} appearance-none`}
                                value={formData.state}
                                onChange={(e) => handleInputChange('state', e.target.value)}
                            >
                                <option value="">Select...</option>
                                {NIGERIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                            <ChevronDown className="absolute right-3.5 top-[38px] w-4 h-4 text-slate-400 pointer-events-none" />
                            {errors.state && <p className="text-red-500 text-xs mt-1 ml-1">{errors.state}</p>}
                        </div>
                        <div>
                             <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">City of Residence</label>
                             <input 
                                type="text" 
                                className={getInputClass('city')}
                                placeholder="e.g. Ketu"
                                value={formData.city}
                                onChange={(e) => handleInputChange('city', e.target.value)}
                            />
                            {errors.city && <p className="text-red-500 text-xs mt-1 ml-1">{errors.city}</p>}
                        </div>
                    </div>
                </div>

                {/* Section: Academic Background */}
                <div className="space-y-4">
                    <h3 className="text-base md:text-lg font-bold text-slate-800 border-b pb-2">Academic Background</h3>
                    
                    <div className="space-y-3">
                        <label className="block text-sm font-medium text-slate-700">Are you still in secondary school?</label>
                        <div className="flex gap-4">
                            <label className={`flex-1 p-3 rounded-xl border-2 cursor-pointer transition-all ${formData.is_student === true ? 'border-palm-500 bg-palm-50' : errors.is_student ? 'border-red-500 bg-red-50' : 'border-slate-200 hover:border-slate-300'}`}>
                                <input type="radio" name="is_student" className="hidden" onChange={() => handleInputChange('is_student', true)} checked={formData.is_student === true} />
                                <div className="font-semibold text-center text-sm md:text-base">Yes</div>
                            </label>
                            <label className={`flex-1 p-3 rounded-xl border-2 cursor-pointer transition-all ${formData.is_student === false ? 'border-palm-500 bg-palm-50' : errors.is_student ? 'border-red-500 bg-red-50' : 'border-slate-200 hover:border-slate-300'}`}>
                                <input type="radio" name="is_student" className="hidden" onChange={() => handleInputChange('is_student', false)} checked={formData.is_student === false} />
                                <div className="font-semibold text-center text-sm md:text-base">No</div>
                            </label>
                        </div>
                        {errors.is_student && <p className="text-red-500 text-xs ml-1">{errors.is_student}</p>}
                    </div>

                    {formData.is_student && (
                        <div>
                             <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Current Class</label>
                             <div className="relative">
                                <select 
                                    className={`${getInputClass('current_class')} appearance-none`}
                                    value={formData.current_class}
                                    onChange={(e) => handleInputChange('current_class', e.target.value)}
                                >
                                    <option value="">Select Class...</option>
                                    {SECONDARY_CLASSES.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                                <ChevronDown className="absolute right-3.5 top-[38px] w-4 h-4 text-slate-400 pointer-events-none" />
                             </div>
                             {errors.current_class && <p className="text-red-500 text-xs mt-1 ml-1">{errors.current_class}</p>}
                        </div>
                    )}
                    
                    <div>
                         <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Which secondary school do/did you attend?</label>
                         <input 
                            type="text" 
                            className={getInputClass('secondary_school')}
                            placeholder="e.g. Livingstone Model College, Lagos"
                            value={formData.secondary_school}
                            onChange={(e) => handleInputChange('secondary_school', e.target.value)}
                        />
                        {errors.secondary_school && <p className="text-red-500 text-xs mt-1 ml-1">{errors.secondary_school}</p>}
                    </div>
                </div>

                {/* Section: Exam History */}
                <div className="space-y-4">
                    <h3 className="text-base md:text-lg font-bold text-slate-800 border-b pb-2">Exam History</h3>
                    
                    <div className="space-y-3">
                        <label className="block text-sm font-medium text-slate-700">Are you repeating your JAMB exam?</label>
                        <div className="flex gap-4">
                            <label className={`flex-1 p-3 rounded-xl border-2 cursor-pointer transition-all ${formData.is_repeater === true ? 'border-palm-500 bg-palm-50' : errors.is_repeater ? 'border-red-500 bg-red-50' : 'border-slate-200 hover:border-slate-300'}`}>
                                <input type="radio" name="is_repeater" className="hidden" onChange={() => handleInputChange('is_repeater', true)} checked={formData.is_repeater === true} />
                                <div className="font-semibold text-center text-sm md:text-base">Yes</div>
                            </label>
                            <label className={`flex-1 p-3 rounded-xl border-2 cursor-pointer transition-all ${formData.is_repeater === false ? 'border-palm-500 bg-palm-50' : errors.is_repeater ? 'border-red-500 bg-red-50' : 'border-slate-200 hover:border-slate-300'}`}>
                                <input type="radio" name="is_repeater" className="hidden" onChange={() => handleInputChange('is_repeater', false)} checked={formData.is_repeater === false} />
                                <div className="font-semibold text-center text-sm md:text-base">No (First Time)</div>
                            </label>
                        </div>
                        {errors.is_repeater && <p className="text-red-500 text-xs ml-1">{errors.is_repeater}</p>}
                    </div>

                    {formData.is_repeater && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
                            <div className="relative">
                                <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">How many attempts?</label>
                                <select 
                                    className={`${getInputClass('attempts')} appearance-none`}
                                    value={formData.attempts}
                                    onChange={(e) => handleInputChange('attempts', e.target.value)}
                                >
                                    <option value="">Select...</option>
                                    {ATTEMPT_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                </select>
                                <ChevronDown className="absolute right-3.5 top-[38px] w-4 h-4 text-slate-400 pointer-events-none" />
                                {errors.attempts && <p className="text-red-500 text-xs mt-1 ml-1">{errors.attempts}</p>}
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Last Score</label>
                                <input 
                                    type="number" 
                                    className={getInputClass('last_score')}
                                    placeholder="e.g. 210"
                                    value={formData.last_score || ''}
                                    onChange={(e) => handleInputChange('last_score', parseInt(e.target.value) || 0)}
                                />
                                {errors.last_score && <p className="text-red-500 text-xs mt-1 ml-1">{errors.last_score}</p>}
                            </div>
                        </div>
                    )}
                </div>

                {/* Section: Targets & Institution */}
                <div className="space-y-4">
                     <h3 className="text-base md:text-lg font-bold text-slate-800 border-b pb-2">Targets & Institution</h3>
                    
                     {/* Category & Target Score */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="relative">
                            <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Student Category</label>
                             <select 
                                className={`${getInputClass('category')} appearance-none`}
                                value={formData.category}
                                onChange={(e) => handleInputChange('category', e.target.value)}
                            >
                                <option value="">Select...</option>
                                {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                             </select>
                             <ChevronDown className="absolute right-3.5 top-[38px] w-4 h-4 text-slate-400 pointer-events-none" />
                             {errors.category && <p className="text-red-500 text-xs mt-1 ml-1">{errors.category}</p>}
                         </div>

                         <div>
                            <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">
                                Target JAMB Score (Over 400)
                            </label>
                            <input 
                                type="number" 
                                min="0" 
                                max="400" 
                                className={getInputClass('targetScore')}
                                placeholder="e.g. 280"
                                value={formData.targetScore || ''}
                                onChange={(e) => handleInputChange('targetScore', parseInt(e.target.value) || 0)}
                            />
                            {errors.targetScore && <p className="text-red-500 text-xs mt-1 ml-1">{errors.targetScore}</p>}
                        </div>
                     </div>
                    
                    {/* Institution Selection - 2 Steps */}
                     <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div className="relative">
                            <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Institution Category</label>
                            <select 
                                className={`${getInputClass('institutionType')} appearance-none`}
                                value={formData.institutionType}
                                onChange={(e) => handleInputChange('institutionType', e.target.value)}
                            >
                                <option value="" disabled>Select Type...</option>
                                {INSTITUTION_TYPES.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3.5 top-[38px] w-4 h-4 text-slate-400 pointer-events-none" />
                            {errors.institutionType && <p className="text-red-500 text-xs mt-1 ml-1">{errors.institutionType}</p>}
                        </div>

                        <div className="relative">
                            <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Target Institution</label>
                            <select 
                                className={`${getInputClass('institution')} appearance-none disabled:bg-slate-50 disabled:text-slate-400`}
                                value={formData.institution}
                                onChange={(e) => handleInputChange('institution', e.target.value)}
                                disabled={!formData.institutionType}
                            >
                                <option value="" disabled>Select Institution...</option>
                                {availableInstitutions.map(inst => (
                                    <option key={inst} value={inst}>{inst}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3.5 top-[38px] w-4 h-4 text-slate-400 pointer-events-none" />
                            {errors.institution && <p className="text-red-500 text-xs mt-1 ml-1">{errors.institution}</p>}
                        </div>
                     </div>
                     
                     {/* Course Selection - 2 Steps */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Faculty / Department</label>
                            <select 
                                className={`${getInputClass('faculty')} appearance-none`}
                                value={formData.faculty}
                                onChange={(e) => handleInputChange('faculty', e.target.value)}
                            >
                                <option value="" disabled>Select Faculty...</option>
                                {FACULTIES.map(fac => (
                                    <option key={fac.name} value={fac.name}>{fac.name}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3.5 top-[38px] w-4 h-4 text-slate-400 pointer-events-none" />
                            {errors.faculty && <p className="text-red-500 text-xs mt-1 ml-1">{errors.faculty}</p>}
                        </div>

                        <div className="relative">
                            <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Course of Study</label>
                            <select 
                                className={`${getInputClass('course')} appearance-none disabled:bg-slate-50 disabled:text-slate-400`}
                                value={formData.course}
                                onChange={(e) => handleInputChange('course', e.target.value)}
                                disabled={!formData.faculty}
                            >
                                <option value="" disabled>Select Course...</option>
                                {availableCourses.map(course => (
                                    <option key={course} value={course}>{course}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3.5 top-[38px] w-4 h-4 text-slate-400 pointer-events-none" />
                            {errors.course && <p className="text-red-500 text-xs mt-1 ml-1">{errors.course}</p>}
                        </div>
                     </div>
                </div>

                {/* Subjects */}
                <div>
                     <SubjectSelector selectedSubjects={subjects} onChange={setSubjects} />
                     {errors.subjects && <p className="text-red-500 text-xs mt-2 ml-1 font-medium">{errors.subjects}</p>}
                </div>
                
                {/* Payment Details */}
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 space-y-4">
                    <h3 className="text-sm font-semibold text-emerald-800 flex items-center gap-2">
                        <span className="bg-emerald-200 text-emerald-800 w-5 h-5 rounded-full flex items-center justify-center text-xs">₦</span>
                        Referral Payment Details
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                         <div className="relative">
                            <label className="block text-xs font-medium text-emerald-700/70 mb-1.5 ml-1">Bank Name</label>
                            <select 
                                className="w-full p-3 md:p-3.5 rounded-xl border border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all appearance-none text-base placeholder:text-gray-400 text-slate-700"
                                value={formData.bankName}
                                onChange={(e) => handleInputChange('bankName', e.target.value)}
                            >
                                <option value="">Select Bank...</option>
                                {NIGERIAN_BANKS.map(bank => (
                                    <option key={bank} value={bank}>{bank}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3.5 top-[38px] w-4 h-4 text-emerald-400 pointer-events-none" />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-emerald-700/70 mb-1.5 ml-1">Account Number</label>
                            <input 
                                type="text" 
                                className="w-full p-3 md:p-3.5 rounded-xl border border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-base placeholder:text-gray-400"
                                placeholder="0123456789"
                                value={formData.accountNumber}
                                onChange={(e) => handleInputChange('accountNumber', e.target.value.replace(/\D/g, '').slice(0, 10))}
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <Button 
                        onClick={handleSubmit} 
                        className="w-full py-5 md:py-6 bg-gradient-to-r from-palm-500 to-palm-700 hover:from-palm-600 hover:to-palm-800 text-white font-bold rounded-2xl text-base md:text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                        disabled={loading}
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <>Start Journey <ArrowRight className="w-5 h-5" /></>}
                    </Button>
                    
                    <button onClick={onLogout} className="w-full mt-4 text-sm text-slate-400 hover:text-red-500 transition-colors">
                        Cancel & Logout
                    </button>
                </div>
            </div>
            
             <p className="text-center text-xs text-slate-500 mt-6 flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3 text-earth-500" />
                <span>Join 500+ students studying smarter</span>
            </p>
        </div>
    </div>
  );
};

export default ProfileSetup;