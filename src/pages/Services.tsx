import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  ArrowRight,
  Activity,
  Brain,
  Heart,
  Sparkles,
  Wind,
  ShieldPlus } from
'lucide-react';
const categories = [
{
  id: 'all',
  name: 'All Conditions',
  icon: Activity
},
{
  id: 'pain',
  name: 'Pain & Discomfort',
  icon: Activity
},
{
  id: 'mental',
  name: 'Mental Health',
  icon: Brain
},
{
  id: 'chronic',
  name: 'Chronic Conditions',
  icon: Heart
},
{
  id: 'skin',
  name: 'Skin & Dermatology',
  icon: Sparkles
},
{
  id: 'respiratory',
  name: 'Respiratory',
  icon: Wind
},
{
  id: 'general',
  name: 'General Health',
  icon: ShieldPlus
}];

const services = [
{
  id: 1,
  category: 'pain',
  name: 'Chronic Back Pain',
  desc: 'Comprehensive evaluation and non-narcotic management plans for persistent lower or upper back pain.',
  for: 'Adults experiencing back pain for >3 months',
  severity: 'Moderate'
},
{
  id: 2,
  category: 'mental',
  name: 'Anxiety & Stress',
  desc: 'Professional assessment and treatment options including therapy recommendations and medication for generalized anxiety.',
  for: 'Individuals feeling overwhelmed, panicked, or chronically stressed',
  severity: 'Variable'
},
{
  id: 3,
  category: 'chronic',
  name: 'Hypertension Management',
  desc: 'Ongoing monitoring and medication management for high blood pressure to prevent long-term complications.',
  for: 'Diagnosed patients needing refills or adjustments',
  severity: 'Moderate'
},
{
  id: 4,
  category: 'skin',
  name: 'Acne Treatment',
  desc: 'Prescription-strength topical and oral treatments tailored to your specific skin type and acne severity.',
  for: 'Teens and adults with persistent breakouts',
  severity: 'Mild'
},
{
  id: 5,
  category: 'respiratory',
  name: 'Persistent Cough',
  desc: 'Evaluation of lingering coughs to rule out infections and provide targeted relief medications.',
  for: 'Patients with a cough lasting more than 2 weeks',
  severity: 'Mild to Moderate'
},
{
  id: 6,
  category: 'pain',
  name: 'Migraine Relief',
  desc: 'Acute treatment plans to stop migraines in their tracks, plus preventative strategies for chronic sufferers.',
  for: 'Patients with recurring severe headaches',
  severity: 'Severe'
},
{
  id: 7,
  category: 'mental',
  name: 'Insomnia',
  desc: 'Thorough sleep assessment and medical interventions to help you establish healthy, restorative sleep patterns.',
  for: 'Adults struggling to fall or stay asleep',
  severity: 'Moderate'
},
{
  id: 8,
  category: 'pain',
  name: 'Joint Pain & Arthritis',
  desc: 'Management strategies for osteoarthritis and general joint inflammation to improve mobility.',
  for: 'Older adults or athletes with joint stiffness',
  severity: 'Moderate'
},
{
  id: 9,
  category: 'respiratory',
  name: 'Seasonal Allergies',
  desc: 'Prescription antihistamines and nasal sprays for severe allergic rhinitis that OTC meds cannot resolve.',
  for: 'Patients with severe seasonal symptoms',
  severity: 'Mild'
},
{
  id: 10,
  category: 'chronic',
  name: 'Diabetes Management',
  desc: 'Support for Type 2 Diabetes including lifestyle guidance, continuous monitoring plans, and medication refills.',
  for: 'Stable diabetic patients needing ongoing care',
  severity: 'High'
},
{
  id: 11,
  category: 'skin',
  name: 'Eczema & Psoriasis',
  desc: 'Specialized topical treatments and systemic options for chronic inflammatory skin conditions.',
  for: 'Patients with itchy, red, or scaly skin patches',
  severity: 'Moderate'
},
{
  id: 12,
  category: 'general',
  name: 'UTI Treatment',
  desc: 'Fast, discreet diagnosis and antibiotic prescriptions for uncomplicated urinary tract infections.',
  for: 'Women experiencing painful or frequent urination',
  severity: 'Moderate'
},
{
  id: 13,
  category: 'general',
  name: 'Weight Management',
  desc: 'Medical weight loss programs including nutritional guidance and prescription options if clinically appropriate.',
  for: 'Adults with a BMI over 30 seeking medical support',
  severity: 'Variable'
},
{
  id: 14,
  category: 'chronic',
  name: 'Thyroid Issues',
  desc: 'Lab review and medication management for hypothyroidism and other thyroid imbalances.',
  for: 'Patients with diagnosed thyroid conditions',
  severity: 'Moderate'
},
{
  id: 15,
  category: 'mental',
  name: 'Depression',
  desc: 'Compassionate evaluation and evidence-based treatment plans including SSRIs and therapy referrals.',
  for: 'Individuals experiencing persistent sadness or loss of interest',
  severity: 'High'
}];

export function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const filteredServices = services.filter((service) => {
    const matchesCategory =
    activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header Section */}
      <div className="bg-brand-900 text-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="max-w-3xl">
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Medical Services & Treatments
            </h1>
            <p className="text-xl text-brand-100 mb-10 leading-relaxed">
              Find the right care for your specific symptoms. Our licensed
              providers are equipped to diagnose and treat a wide range of
              conditions online.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 rounded-xl border-0 text-slate-900 ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-brand-500 shadow-lg text-lg placeholder:text-slate-400"
                placeholder="Search for a condition or symptom (e.g., Back Pain, Anxiety)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
              
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Categories */}
          <div className="w-full lg:w-64 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sticky top-28">
              <h3 className="font-bold text-slate-900 mb-4 px-4 pt-2">
                Categories
              </h3>
              <nav className="space-y-1">
                {categories.map((cat) =>
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-colors ${activeCategory === cat.id ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
                  
                    <cat.icon
                    className={`w-5 h-5 ${activeCategory === cat.id ? 'text-brand-600' : 'text-slate-400'}`} />
                  
                    {cat.name}
                  </button>
                )}
              </nav>
            </div>
          </div>

          {/* Services Grid */}
          <div className="flex-grow">
            {filteredServices.length === 0 ?
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  No conditions found
                </h3>
                <p className="text-slate-500 mb-6">
                  We couldn't find any conditions matching "{searchQuery}".
                </p>
                <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="text-brand-700 font-medium hover:underline">
                
                  Clear search and view all
                </button>
              </div> :

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredServices.map((service, idx) =>
              <motion.div
                key={service.id}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: idx * 0.05
                }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all flex flex-col h-full group">
                
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                        {service.name}
                      </h3>
                      <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${service.severity === 'Mild' ? 'bg-green-100 text-green-700' : service.severity === 'Moderate' ? 'bg-amber-100 text-amber-700' : service.severity === 'High' || service.severity === 'Severe' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-700'}`}>
                    
                        {service.severity}
                      </span>
                    </div>

                    <p className="text-slate-600 mb-6 flex-grow">
                      {service.desc}
                    </p>

                    <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                      <p className="text-sm text-slate-700">
                        <span className="font-semibold block mb-1">
                          Best for:
                        </span>
                        {service.for}
                      </p>
                    </div>

                    <Link
                  to="/intake"
                  className="w-full bg-white border-2 border-brand-600 text-brand-700 hover:bg-brand-600 hover:text-white py-3 rounded-xl font-semibold text-center transition-colors flex items-center justify-center gap-2">
                  
                      Start Assessment <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
              )}
              </div>
            }
          </div>
        </div>
      </div>
    </div>);

}