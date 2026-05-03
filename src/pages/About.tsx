import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Heart,
  Clock,
  Users,
  CheckCircle2,
  Lock } from
'lucide-react';
export function About() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Hero Section */}
      <div className="bg-brand-900 text-white pt-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6">
            
            Bridging the Gap Between You and Quality Healthcare
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.1
            }}
            className="text-xl text-brand-100 leading-relaxed">
            
            MedConnect was founded on a simple principle: getting expert medical
            care shouldn't be the hardest part of feeling better.
          </motion.p>
        </div>
      </div>

      {/* Narrative & Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-card border border-slate-100 p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  For too long, the traditional healthcare system has been
                  defined by long wait times, crowded waiting rooms, and
                  inconvenient scheduling. We saw patients delaying necessary
                  care simply because the process was too burdensome.
                </p>
                <p>
                  MedConnect was built by a team of physicians and technologists
                  who knew there had to be a better way. By leveraging secure
                  telehealth technology, we've created a clinic that lives on
                  your schedule, not ours.
                </p>
                <p className="font-medium text-slate-800">
                  Today, we serve thousands of patients across the state,
                  providing fast, affordable, and high-quality medical care from
                  the comfort of their homes.
                </p>
              </div>
            </div>
            <div className="bg-brand-50 p-8 rounded-2xl border border-brand-100">
              <h3 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                Our Mission
              </h3>
              <p className="text-brand-800 text-lg italic mb-6">
                "To democratize access to high-quality healthcare by removing
                the physical and logistical barriers between patients and
                providers."
              </p>
              <ul className="space-y-3">
                {[
                'Patient-First Care',
                'Evidence-Based Medicine',
                'Radical Accessibility',
                'Strict Confidentiality'].
                map((value, i) =>
                <li
                  key={i}
                  className="flex items-center gap-3 text-brand-700 font-medium">
                  
                    <CheckCircle2 className="w-5 h-5 text-brand-500" /> {value}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Medical Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Meet Our Medical Leadership
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our clinical team consists of board-certified physicians dedicated
              to providing exceptional virtual care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Doctor 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-24 h-24 bg-brand-100 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                <span className="text-3xl font-bold text-brand-700">MS</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  Dr. Michael Smith, MD
                </h3>
                <p className="text-brand-600 font-medium mb-4">
                  Internal Medicine • Board Certified
                </p>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  With over 15 years of clinical experience, Dr. Smith
                  specializes in managing complex chronic conditions and
                  preventative care. He completed his residency at the
                  University of Colorado School of Medicine and is passionate
                  about expanding healthcare access through telemedicine.
                </p>
                <div className="flex gap-2">
                  <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium">
                    15+ Years Exp
                  </span>
                  <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium">
                    MD, Internal Med
                  </span>
                </div>
              </div>
            </div>

            {/* Doctor 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-24 h-24 bg-brand-100 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                <span className="text-3xl font-bold text-brand-700">SJ</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  Dr. Sarah Johnson, MD
                </h3>
                <p className="text-brand-600 font-medium mb-4">
                  Family Medicine • Board Certified
                </p>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Dr. Johnson brings 12 years of experience in holistic family
                  care and women's health. A graduate of Johns Hopkins
                  University, she focuses on creating personalized,
                  evidence-based treatment plans that address the root cause of
                  symptoms, not just the surface issues.
                </p>
                <div className="flex gap-2">
                  <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium">
                    12+ Years Exp
                  </span>
                  <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium">
                    MD, Family Med
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance & Trust */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[100px] opacity-30"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold mb-4 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-emerald-400" />{' '}
                Uncompromising Security
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Your health information is sacred. MedConnect operates under
                strict adherence to the Health Insurance Portability and
                Accountability Act (HIPAA). We utilize bank-level 256-bit
                encryption for all data transmission and storage, ensuring your
                medical records remain completely confidential.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg text-sm font-medium border border-slate-700">
                  <Lock className="w-4 h-4 text-brand-400" /> End-to-End
                  Encryption
                </div>
                <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg text-sm font-medium border border-slate-700">
                  <ShieldCheck className="w-4 h-4 text-brand-400" /> HIPAA
                  Compliant
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}