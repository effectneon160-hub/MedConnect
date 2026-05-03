import React, { useEffect, useState, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  ShieldCheck,
  Lock,
  CreditCard,
  AlertCircle,
  Phone,
  MessageCircle } from
'lucide-react';
// --- Types ---
interface IntakeData {
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  concerns: string[];
  customConcern: string;
  duration: string;
  severity: number;
  symptoms: string;
  dailyImpact: string;
  previousTreatment: string;
  previousTreatmentDetails: string;
  currentMeds: string;
  currentMedsDetails: string;
  allergies: string;
  chronicConditions: string[];
  phone: string;
  email: string;
  preferredContact: string;
  preferredTime: string;
  consent: boolean;
}
const initialData: IntakeData = {
  firstName: '',
  lastName: '',
  dob: '',
  gender: '',
  concerns: [],
  customConcern: '',
  duration: '',
  severity: 5,
  symptoms: '',
  dailyImpact: '',
  previousTreatment: '',
  previousTreatmentDetails: '',
  currentMeds: '',
  currentMedsDetails: '',
  allergies: '',
  chronicConditions: [],
  phone: '',
  email: '',
  preferredContact: '',
  preferredTime: '',
  consent: false
};
// --- Main Component ---
export function PatientIntake() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<IntakeData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [step]);
  const updateData = (fields: Partial<IntakeData>) => {
    setData((prev) => ({
      ...prev,
      ...fields
    }));
    // Clear errors for updated fields
    const newErrors = {
      ...errors
    };
    Object.keys(fields).forEach((key) => delete newErrors[key]);
    setErrors(newErrors);
  };
  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (step === 1) {
      if (!data.firstName) newErrors.firstName = 'First name is required';
      if (!data.lastName) newErrors.lastName = 'Last name is required';
      if (!data.dob) newErrors.dob = 'Date of birth is required';
      if (!data.gender) newErrors.gender = 'Please select a gender';
    } else if (step === 2) {
      if (data.concerns.length === 0 && !data.customConcern) {
        newErrors.concerns =
        'Please select at least one concern or enter a custom one';
      }
    } else if (step === 3) {
      if (!data.duration) newErrors.duration = 'Please select a duration';
      if (!data.symptoms) newErrors.symptoms = 'Please describe your symptoms';
      if (!data.dailyImpact)
      newErrors.dailyImpact = 'Please answer this question';
    } else if (step === 4) {
      if (!data.previousTreatment)
      newErrors.previousTreatment = 'Please answer this question';
      if (data.previousTreatment === 'yes' && !data.previousTreatmentDetails)
      newErrors.previousTreatmentDetails = 'Please provide details';
      if (!data.currentMeds)
      newErrors.currentMeds = 'Please answer this question';
      if (data.currentMeds === 'yes' && !data.currentMedsDetails)
      newErrors.currentMedsDetails = 'Please provide details';
    } else if (step === 5) {
      if (!data.phone) newErrors.phone = 'Phone number is required';
      if (!data.email) newErrors.email = 'Email is required';else
      if (!/\S+@\S+\.\S+/.test(data.email))
      newErrors.email = 'Email is invalid';
      if (!data.preferredContact)
      newErrors.preferredContact = 'Please select a preferred contact method';
      if (!data.consent) newErrors.consent = 'You must agree to the terms';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const nextStep = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };
  const prevStep = () => setStep((prev) => prev - 1);
  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(7); // Success screen
    }, 1500);
  };
  // --- Step Renderers ---
  const renderStep1 = () =>
  <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
          Personal Information
        </h2>
        <p className="text-slate-600">
          Let's start with the basics to create your medical profile.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            First Name
          </label>
          <input
          type="text"
          value={data.firstName}
          onChange={(e) =>
          updateData({
            firstName: e.target.value
          })
          }
          className={`w-full p-3 rounded-xl border ${errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-brand-500'} focus:ring-2 outline-none transition-all`}
          placeholder="John" />
        
          {errors.firstName &&
        <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
        }
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Last Name
          </label>
          <input
          type="text"
          value={data.lastName}
          onChange={(e) =>
          updateData({
            lastName: e.target.value
          })
          }
          className={`w-full p-3 rounded-xl border ${errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-brand-500'} focus:ring-2 outline-none transition-all`}
          placeholder="Doe" />
        
          {errors.lastName &&
        <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
        }
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Date of Birth
          </label>
          <input
          type="date"
          value={data.dob}
          onChange={(e) =>
          updateData({
            dob: e.target.value
          })
          }
          className={`w-full p-3 rounded-xl border ${errors.dob ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-brand-500'} focus:ring-2 outline-none transition-all`} />
        
          {errors.dob &&
        <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
        }
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Gender
          </label>
          <select
          value={data.gender}
          onChange={(e) =>
          updateData({
            gender: e.target.value
          })
          }
          className={`w-full p-3 rounded-xl border ${errors.gender ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-brand-500'} focus:ring-2 outline-none transition-all bg-white`}>
          
            <option value="">Select gender...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
            <option value="prefer-not">Prefer not to say</option>
          </select>
          {errors.gender &&
        <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
        }
        </div>
      </div>
    </div>;

  const renderStep2 = () => {
    const concernOptions = [
    'Pain',
    'Anxiety/Stress',
    'Skin Issue',
    'Breathing Problems',
    'Fatigue',
    'Sleep Issues',
    'Digestive Issues',
    'Cold/Flu Symptoms'];

    const toggleConcern = (concern: string) => {
      const newConcerns = data.concerns.includes(concern) ?
      data.concerns.filter((c) => c !== concern) :
      [...data.concerns, concern];
      updateData({
        concerns: newConcerns
      });
    };
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
            What brings you in today?
          </h2>
          <p className="text-slate-600">
            Select all that apply to help our providers understand your
            situation.
          </p>
        </div>

        {errors.concerns &&
        <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm flex items-center gap-2">
            <AlertCircle className="w-4 h-4" /> {errors.concerns}
          </div>
        }

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {concernOptions.map((concern) =>
          <button
            key={concern}
            onClick={() => toggleConcern(concern)}
            className={`p-4 rounded-xl border-2 text-left font-medium transition-all ${data.concerns.includes(concern) ? 'border-brand-600 bg-brand-50 text-brand-800' : 'border-slate-200 hover:border-brand-300 text-slate-700 hover:bg-slate-50'}`}>
            
              <div className="flex justify-between items-center">
                {concern}
                {data.concerns.includes(concern) &&
              <CheckCircle2 className="w-5 h-5 text-brand-600" />
              }
              </div>
            </button>
          )}
        </div>

        <div className="pt-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Other Concern (Optional)
          </label>
          <input
            type="text"
            value={data.customConcern}
            onChange={(e) =>
            updateData({
              customConcern: e.target.value
            })
            }
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-brand-500 focus:ring-2 outline-none transition-all"
            placeholder="Please specify..." />
          
        </div>
      </div>);

  };
  const renderStep3 = () =>
  <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
          Condition Details
        </h2>
        <p className="text-slate-600">
          Help us understand the severity and impact of your symptoms.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          How long have you experienced this?
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Less than a week', '1-4 weeks', '1-3 months', '3+ months'].map(
          (opt) =>
          <button
            key={opt}
            onClick={() =>
            updateData({
              duration: opt
            })
            }
            className={`p-3 rounded-xl border text-sm font-medium transition-all ${data.duration === opt ? 'border-brand-600 bg-brand-50 text-brand-800 ring-1 ring-brand-600' : 'border-slate-200 text-slate-700 hover:bg-slate-50'}`}>
            
                {opt}
              </button>

        )}
        </div>
        {errors.duration &&
      <p className="text-red-500 text-xs mt-1">{errors.duration}</p>
      }
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-4">
          How would you rate the severity? (1 = Mild, 10 = Severe)
        </label>
        <div className="px-2">
          <input
          type="range"
          min="1"
          max="10"
          value={data.severity}
          onChange={(e) =>
          updateData({
            severity: parseInt(e.target.value)
          })
          }
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600" />
        
          <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
            <span>1 (Mild)</span>
            <span className="text-brand-700 font-bold text-base bg-brand-50 px-2 py-1 rounded">
              {data.severity}
            </span>
            <span>10 (Severe)</span>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Describe your current symptoms in detail
        </label>
        <textarea
        value={data.symptoms}
        onChange={(e) =>
        updateData({
          symptoms: e.target.value
        })
        }
        rows={4}
        className={`w-full p-3 rounded-xl border ${errors.symptoms ? 'border-red-500' : 'border-slate-300'} focus:ring-brand-500 focus:ring-2 outline-none transition-all resize-none`}
        placeholder="E.g., Sharp pain in lower back when bending over, accompanied by slight numbness..." />
      
        {errors.symptoms &&
      <p className="text-red-500 text-xs mt-1">{errors.symptoms}</p>
      }
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Is this affecting your daily activities?
        </label>
        <div className="flex gap-4">
          {['Yes', 'No'].map((opt) =>
        <button
          key={opt}
          onClick={() =>
          updateData({
            dailyImpact: opt.toLowerCase()
          })
          }
          className={`flex-1 p-3 rounded-xl border font-medium transition-all ${data.dailyImpact === opt.toLowerCase() ? 'border-brand-600 bg-brand-50 text-brand-800' : 'border-slate-200 text-slate-700 hover:bg-slate-50'}`}>
          
              {opt}
            </button>
        )}
        </div>
        {errors.dailyImpact &&
      <p className="text-red-500 text-xs mt-1">{errors.dailyImpact}</p>
      }
      </div>
    </div>;

  const renderStep4 = () => {
    const chronicOptions = [
    'Diabetes',
    'Hypertension',
    'Asthma',
    'Heart Disease',
    'Thyroid Disorder',
    'None'];

    const toggleChronic = (condition: string) => {
      if (condition === 'None') {
        updateData({
          chronicConditions: ['None']
        });
        return;
      }
      let newConditions = data.chronicConditions.filter((c) => c !== 'None');
      if (newConditions.includes(condition)) {
        newConditions = newConditions.filter((c) => c !== condition);
      } else {
        newConditions.push(condition);
      }
      updateData({
        chronicConditions: newConditions
      });
    };
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
            Medical Background
          </h2>
          <p className="text-slate-600">
            This helps our providers ensure treatments are safe for you.
          </p>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            Have you received treatment for this before?
          </label>
          <div className="flex gap-4">
            <button
              onClick={() =>
              updateData({
                previousTreatment: 'yes'
              })
              }
              className={`flex-1 p-3 rounded-xl border font-medium transition-all ${data.previousTreatment === 'yes' ? 'border-brand-600 bg-brand-50 text-brand-800' : 'border-slate-200 text-slate-700'}`}>
              
              Yes
            </button>
            <button
              onClick={() =>
              updateData({
                previousTreatment: 'no',
                previousTreatmentDetails: ''
              })
              }
              className={`flex-1 p-3 rounded-xl border font-medium transition-all ${data.previousTreatment === 'no' ? 'border-brand-600 bg-brand-50 text-brand-800' : 'border-slate-200 text-slate-700'}`}>
              
              No
            </button>
          </div>
          {errors.previousTreatment &&
          <p className="text-red-500 text-xs">{errors.previousTreatment}</p>
          }

          {data.previousTreatment === 'yes' &&
          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}>
            
              <input
              type="text"
              value={data.previousTreatmentDetails}
              onChange={(e) =>
              updateData({
                previousTreatmentDetails: e.target.value
              })
              }
              className={`w-full p-3 rounded-xl border ${errors.previousTreatmentDetails ? 'border-red-500' : 'border-slate-300'} mt-2 focus:ring-brand-500 focus:ring-2 outline-none`}
              placeholder="What treatment did you receive?" />
            
              {errors.previousTreatmentDetails &&
            <p className="text-red-500 text-xs mt-1">
                  {errors.previousTreatmentDetails}
                </p>
            }
            </motion.div>
          }
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            Are you currently taking any medications?
          </label>
          <div className="flex gap-4">
            <button
              onClick={() =>
              updateData({
                currentMeds: 'yes'
              })
              }
              className={`flex-1 p-3 rounded-xl border font-medium transition-all ${data.currentMeds === 'yes' ? 'border-brand-600 bg-brand-50 text-brand-800' : 'border-slate-200 text-slate-700'}`}>
              
              Yes
            </button>
            <button
              onClick={() =>
              updateData({
                currentMeds: 'no',
                currentMedsDetails: ''
              })
              }
              className={`flex-1 p-3 rounded-xl border font-medium transition-all ${data.currentMeds === 'no' ? 'border-brand-600 bg-brand-50 text-brand-800' : 'border-slate-200 text-slate-700'}`}>
              
              No
            </button>
          </div>
          {errors.currentMeds &&
          <p className="text-red-500 text-xs">{errors.currentMeds}</p>
          }

          {data.currentMeds === 'yes' &&
          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}>
            
              <input
              type="text"
              value={data.currentMedsDetails}
              onChange={(e) =>
              updateData({
                currentMedsDetails: e.target.value
              })
              }
              className={`w-full p-3 rounded-xl border ${errors.currentMedsDetails ? 'border-red-500' : 'border-slate-300'} mt-2 focus:ring-brand-500 focus:ring-2 outline-none`}
              placeholder="List medications and dosages..." />
            
              {errors.currentMedsDetails &&
            <p className="text-red-500 text-xs mt-1">
                  {errors.currentMedsDetails}
                </p>
            }
            </motion.div>
          }
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Any known allergies? (Medications, food, etc.)
          </label>
          <input
            type="text"
            value={data.allergies}
            onChange={(e) =>
            updateData({
              allergies: e.target.value
            })
            }
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-brand-500 focus:ring-2 outline-none"
            placeholder="Leave blank if none" />
          
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Do you have any of these chronic conditions?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {chronicOptions.map((condition) =>
            <label
              key={condition}
              className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${data.chronicConditions.includes(condition) ? 'border-brand-600 bg-brand-50' : 'border-slate-200 hover:bg-slate-50'}`}>
              
                <input
                type="checkbox"
                checked={data.chronicConditions.includes(condition)}
                onChange={() => toggleChronic(condition)}
                className="w-4 h-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500" />
              
                <span className="text-sm font-medium text-slate-700">
                  {condition}
                </span>
              </label>
            )}
          </div>
        </div>
      </div>);

  };
  const renderStep5 = () =>
  <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
          Contact & Preferences
        </h2>
        <p className="text-slate-600">How should our medical team reach you?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Phone Number
          </label>
          <input
          type="tel"
          value={data.phone}
          onChange={(e) =>
          updateData({
            phone: e.target.value
          })
          }
          className={`w-full p-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-slate-300'} focus:ring-brand-500 focus:ring-2 outline-none`}
          placeholder="(555) 000-0000" />
        
          {errors.phone &&
        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
        }
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email Address
          </label>
          <input
          type="email"
          value={data.email}
          onChange={(e) =>
          updateData({
            email: e.target.value
          })
          }
          className={`w-full p-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-300'} focus:ring-brand-500 focus:ring-2 outline-none`}
          placeholder="you@example.com" />
        
          {errors.email &&
        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        }
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Preferred Contact Method
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
        {
          id: 'call',
          label: 'Phone Call',
          icon: Phone
        },
        {
          id: 'whatsapp',
          label: 'WhatsApp',
          icon: MessageCircle
        },
        {
          id: 'email',
          label: 'Email',
          icon: Lock
        }].
        map((method) =>
        <button
          key={method.id}
          onClick={() =>
          updateData({
            preferredContact: method.id
          })
          }
          className={`flex items-center justify-center gap-2 p-4 rounded-xl border font-medium transition-all ${data.preferredContact === method.id ? 'border-brand-600 bg-brand-50 text-brand-800' : 'border-slate-200 text-slate-700 hover:bg-slate-50'}`}>
          
              <method.icon className="w-5 h-5" /> {method.label}
            </button>
        )}
        </div>
        {errors.preferredContact &&
      <p className="text-red-500 text-xs mt-1">{errors.preferredContact}</p>
      }
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Preferred Time to be Contacted
        </label>
        <div className="flex gap-3">
          {['Morning', 'Afternoon', 'Evening'].map((time) =>
        <button
          key={time}
          onClick={() =>
          updateData({
            preferredTime: time
          })
          }
          className={`flex-1 p-3 rounded-xl border font-medium transition-all ${data.preferredTime === time ? 'border-brand-600 bg-brand-50 text-brand-800' : 'border-slate-200 text-slate-700 hover:bg-slate-50'}`}>
          
              {time}
            </button>
        )}
        </div>
      </div>

      <div className="pt-6 border-t border-slate-200">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="pt-1">
            <input
            type="checkbox"
            checked={data.consent}
            onChange={(e) =>
            updateData({
              consent: e.target.checked
            })
            }
            className="w-5 h-5 text-brand-600 rounded border-slate-300 focus:ring-brand-500" />
          
          </div>
          <div>
            <span className="text-sm text-slate-700 font-medium">
              I agree to the Privacy Policy and Terms of Service.
            </span>
            <p className="text-xs text-slate-500 mt-1">
              I understand this is a request for a medical consultation and does
              not guarantee a specific prescription or treatment.
            </p>
          </div>
        </label>
        {errors.consent &&
      <p className="text-red-500 text-xs mt-2 ml-8">{errors.consent}</p>
      }
      </div>
    </div>;

  const renderStep6 = () =>
  <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
          Final Step: Payment
        </h2>
        <p className="text-slate-600">
          Secure your consultation. You will only be charged if a provider
          reviews your case.
        </p>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
        <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-200">
          <span className="font-semibold text-slate-900">
            Medical Consultation Fee
          </span>
          <span className="text-2xl font-bold text-brand-700">$49.00</span>
        </div>
        <ul className="space-y-3 text-sm text-slate-600">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Provider
            review within 24 hours
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Personalized
            treatment plan
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Prescription
            sent to local pharmacy (if applicable)
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
        {/* Simulated Payment Overlay */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center">
          <div className="bg-white px-4 py-2 rounded-lg shadow-md border border-slate-200 text-sm font-medium text-slate-600 flex items-center gap-2">
            <Lock className="w-4 h-4" /> Simulated Payment UI
          </div>
        </div>

        <div className="space-y-4 opacity-50 pointer-events-none">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Card Number
            </label>
            <div className="relative">
              <input
              type="text"
              className="w-full p-3 pl-10 rounded-xl border border-slate-300"
              placeholder="0000 0000 0000 0000" />
            
              <CreditCard className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Expiry Date
              </label>
              <input
              type="text"
              className="w-full p-3 rounded-xl border border-slate-300"
              placeholder="MM/YY" />
            
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                CVC
              </label>
              <input
              type="text"
              className="w-full p-3 rounded-xl border border-slate-300"
              placeholder="123" />
            
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6 text-slate-400 text-sm">
        <span className="flex items-center gap-1">
          <Lock className="w-4 h-4" /> 256-bit SSL
        </span>
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-4 h-4" /> HIPAA Secure
        </span>
      </div>
    </div>;

  const renderSuccess = () =>
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.95
    }}
    animate={{
      opacity: 1,
      scale: 1
    }}
    className="text-center py-12">
    
      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10 text-emerald-600" />
      </div>
      <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
        Assessment Submitted
      </h2>
      <p className="text-lg text-slate-600 mb-8">
        Thank you, {data.firstName}. Your medical profile has been securely
        transmitted.
      </p>

      <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-left max-w-md mx-auto mb-8">
        <h3 className="font-bold text-slate-900 mb-4">What happens next:</h3>
        <ol className="space-y-4 text-slate-700">
          <li className="flex gap-3">
            <span className="bg-brand-100 text-brand-700 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
              1
            </span>
            <span>
              A licensed provider will review your case within 24 hours.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="bg-brand-100 text-brand-700 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
              2
            </span>
            <span>
              You'll receive a{' '}
              {data.preferredContact === 'call' ?
            'phone call' :
            data.preferredContact === 'whatsapp' ?
            'WhatsApp message' :
            'email'}{' '}
              to discuss your treatment plan.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="bg-brand-100 text-brand-700 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
              3
            </span>
            <span>
              If prescribed, medications will be sent to your local pharmacy.
            </span>
          </li>
        </ol>
      </div>

      <div className="text-sm text-slate-500 mb-8">
        Reference Number:{' '}
        <span className="font-mono font-bold text-slate-700">
          #MC-2024-{Math.floor(1000 + Math.random() * 9000)}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
        to="/"
        className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-xl font-semibold transition-colors">
        
          Return to Home
        </Link>
        <a
        href="https://wa.me/13035550192"
        target="_blank"
        rel="noreferrer"
        className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
        
          <MessageCircle className="w-5 h-5" /> Message Support
        </a>
      </div>
    </motion.div>;

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Progress */}
        {step < 7 &&
        <div className="mb-8">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h1 className="text-3xl font-serif font-bold text-slate-900">
                  Patient Intake
                </h1>
                <p className="text-slate-500 mt-1 flex items-center gap-1">
                  <Lock className="w-3 h-3" /> Secure & HIPAA Compliant
                </p>
              </div>
              <div className="text-brand-700 font-bold text-lg">
                Step {step} of 6
              </div>
            </div>

            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <motion.div
              className="bg-brand-600 h-full rounded-full"
              initial={{
                width: `${(step - 1) / 6 * 100}%`
              }}
              animate={{
                width: `${step / 6 * 100}%`
              }}
              transition={{
                duration: 0.3
              }} />
            
            </div>
          </div>
        }

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-card border border-slate-100 p-6 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              exit={{
                opacity: 0,
                x: -20
              }}
              transition={{
                duration: 0.3
              }}>
              
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && renderStep3()}
              {step === 4 && renderStep4()}
              {step === 5 && renderStep5()}
              {step === 6 && renderStep6()}
              {step === 7 && renderSuccess()}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {step < 7 &&
          <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between items-center">
              {step > 1 ?
            <button
              onClick={prevStep}
              disabled={isSubmitting}
              className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-slate-50">
              
                  <ChevronLeft className="w-5 h-5" /> Back
                </button> :

            <div></div>
            }

              {step < 6 ?
            <button
              onClick={nextStep}
              className="flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white px-8 py-3.5 rounded-xl font-semibold shadow-md active:scale-95 transition-all">
              
                  Next Step <ChevronRight className="w-5 h-5" />
                </button> :

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-xl font-bold shadow-md active:scale-95 transition-all min-w-[200px]">
              
                  {isSubmitting ?
              <span className="flex items-center gap-2">
                      <svg
                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  
                        <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4">
                  </circle>
                        <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                      </svg>
                      Processing...
                    </span> :

              <>
                      Submit for Medical Review{' '}
                      <CheckCircle2 className="w-5 h-5" />
                    </>
              }
                </button>
            }
            </div>
          }
        </div>

        {/* Trust Badge Below Form */}
        {step < 7 &&
        <div className="mt-6 text-center text-sm text-slate-500 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> All information is encrypted and
            transmitted securely.
          </div>
        }
      </div>
    </div>);

}