import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ClipboardList,
  Stethoscope,
  FileText,
  HeartPulse,
  ArrowRight,
  Star,
  ShieldCheck,
  Clock,
  CreditCard,
  ChevronDown,
  CheckCircle2,
  Phone,
  Lock } from
'lucide-react';
// --- Subcomponents ---
const FadeIn = ({
  children,
  delay = 0



}: {children: React.ReactNode;delay?: number;}) =>
<motion.div
  initial={{
    opacity: 0,
    y: 20
  }}
  whileInView={{
    opacity: 1,
    y: 0
  }}
  viewport={{
    once: true,
    margin: '-100px'
  }}
  transition={{
    duration: 0.6,
    delay
  }}>
  
    {children}
  </motion.div>;

const FAQItem = ({
  question,
  answer



}: {question: string;answer: string;}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-medium text-slate-900 hover:text-brand-700 transition-colors">
        
        <span className="pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        className="overflow-hidden">
        
        <p className="pt-4 text-slate-600 leading-relaxed pb-2">{answer}</p>
      </motion.div>
    </div>);

};
// --- Main Page Component ---
export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-50 overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* Abstract medical background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#1e40af 2px, transparent 2px)',
            backgroundSize: '32px 32px'
          }}>
        </div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-brand-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.5
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100 text-brand-800 font-medium text-sm mb-8">
              
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-600"></span>
              </span>
              Providers available now
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.1
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
              
              Expert Medical Care, <br className="hidden md:block" />
              <span className="text-brand-700">Available When You Need It</span>
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
                duration: 0.6,
                delay: 0.2
              }}
              className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              
              Connect with licensed healthcare providers from the comfort of
              your home. No waiting rooms, no hassle. Get diagnosed and treated
              today.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.3
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              
              <Link
                to="/intake"
                className="w-full sm:w-auto bg-brand-700 hover:bg-brand-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2">
                
                Start Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-white border-2 border-slate-200 hover:border-brand-200 hover:bg-brand-50 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all active:scale-95">
                
                Book Appointment
              </Link>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 0.6,
                delay: 0.5
              }}
              className="flex flex-col items-center gap-4">
              
              <a
                href="tel:+13035550192"
                className="text-slate-600 hover:text-brand-700 font-medium flex items-center gap-2 transition-colors">
                
                <Phone className="w-4 h-4" /> Call Now: +1 (303) 555-0192
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-500 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-200/50">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-slate-700">
                  All submissions are reviewed by a licensed provider before any
                  treatment is approved.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Get the care you need in four simple steps. Our streamlined
                process is designed for your convenience and health.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100 z-0"></div>

            {[
            {
              icon: ClipboardList,
              title: 'Complete Assessment',
              desc: 'Fill out a brief, secure medical questionnaire about your symptoms.'
            },
            {
              icon: Stethoscope,
              title: 'Provider Review',
              desc: 'A licensed medical provider reviews your case within 24 hours.'
            },
            {
              icon: FileText,
              title: 'Treatment Plan',
              desc: 'Receive a personalized treatment plan, including prescriptions if appropriate.'
            },
            {
              icon: HeartPulse,
              title: 'Ongoing Support',
              desc: 'Follow up with your provider and track your progress securely.'
            }].
            map((step, idx) =>
            <FadeIn key={idx} delay={idx * 0.1}>
                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-soft border border-slate-100 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-brand-50 rounded-xl flex items-center justify-center text-brand-700">
                      <step.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="bg-brand-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-4 shadow-md">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                What We Treat
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                Comprehensive care for a wide range of everyday conditions,
                managed safely from home.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-800 transition-colors">
                
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
            {
              title: 'Anxiety & Stress',
              desc: 'Professional evaluation and management plans for generalized anxiety, panic, and chronic stress.'
            },
            {
              title: 'Chronic Back Pain',
              desc: 'Assessment of musculoskeletal pain with tailored physical therapy recommendations and non-narcotic relief.'
            },
            {
              title: 'Skin & Dermatology',
              desc: 'Treatment for acne, eczema, rashes, and other common skin conditions with prescription topicals.'
            },
            {
              title: 'Respiratory Issues',
              desc: 'Care for persistent coughs, sinus infections, seasonal allergies, and mild asthma management.'
            },
            {
              title: 'Migraine Relief',
              desc: 'Targeted treatment plans for acute migraine attacks and preventative care strategies.'
            },
            {
              title: 'General Wellness',
              desc: 'Prescription refills, lab test orders, and general health consultations for ongoing well-being.'
            }].
            map((service, idx) =>
            <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    {service.desc}
                  </p>
                  <Link
                  to="/intake"
                  className="inline-flex items-center gap-2 text-brand-700 font-medium hover:gap-3 transition-all">
                  
                    Start Assessment <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Why Choose MedConnect
              </h2>
              <p className="text-brand-200 text-lg max-w-2xl mx-auto">
                We combine medical expertise with modern convenience to deliver
                care that puts you first.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              icon: ShieldCheck,
              title: 'Licensed Providers',
              desc: 'Care from board-certified doctors and nurse practitioners.'
            },
            {
              icon: Lock,
              title: 'HIPAA Compliant',
              desc: 'Your medical data is encrypted and strictly confidential.'
            },
            {
              icon: Clock,
              title: 'Fast Response',
              desc: 'Get reviewed and receive a treatment plan within 24 hours.'
            },
            {
              icon: CreditCard,
              title: 'Affordable Care',
              desc: 'Transparent pricing with no hidden fees or surprise bills.'
            }].
            map((feature, idx) =>
            <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-brand-800/50 border border-brand-700/50 p-6 rounded-2xl backdrop-blur-sm">
                  <feature.icon className="w-10 h-10 text-brand-300 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-brand-200 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                Patient Stories
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Real experiences from people who found relief through our
                platform.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              name: 'John Carter',
              role: 'Treated for Sinus Infection',
              quote:
              'I was skeptical about telehealth, but MedConnect made the process incredibly smooth. Dr. Smith was thorough and genuinely cared about my concerns. Got my prescription within 24 hours.'
            },
            {
              name: 'Emily Watson',
              role: 'Treated for Migraines',
              quote:
              "As a busy mom, I don't have time for waiting rooms. MedConnect let me get treatment for my recurring migraines without leaving home. The intake process took less than 5 minutes."
            },
            {
              name: 'Robert Chen',
              role: 'Treated for Back Pain',
              quote:
              'The doctors here actually listen. Dr. Johnson took the time to understand my chronic pain situation and created a treatment plan that finally works. Highly recommend their service.'
            }].
            map((testimonial, idx) =>
            <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full flex flex-col relative">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) =>
                  <Star
                    key={star}
                    className="w-5 h-5 fill-amber-400 text-amber-400" />

                  )}
                  </div>
                  <p className="text-slate-700 italic mb-8 flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* 6. PROVIDER CREDIBILITY */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                Meet Our Medical Leadership
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Every treatment plan is reviewed and approved by our
                board-certified medical team. We maintain the highest standards
                of clinical excellence to ensure your safety and health.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-xl font-bold text-brand-700">MS</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      Dr. Michael Smith, MD{' '}
                      <CheckCircle2 className="w-5 h-5 text-brand-600" />
                    </h4>
                    <p className="text-brand-700 font-medium text-sm mb-2">
                      Internal Medicine • 15+ Years Experience
                    </p>
                    <p className="text-slate-600 text-sm">
                      Board-certified physician specializing in complex chronic
                      conditions and preventative care.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-xl font-bold text-brand-700">SJ</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      Dr. Sarah Johnson, MD{' '}
                      <CheckCircle2 className="w-5 h-5 text-brand-600" />
                    </h4>
                    <p className="text-brand-700 font-medium text-sm mb-2">
                      Family Medicine • 12+ Years Experience
                    </p>
                    <p className="text-slate-600 text-sm">
                      Dedicated to holistic family care, women's health, and
                      accessible telemedicine solutions.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-card border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0"></div>
                <div className="relative z-10">
                  <ShieldCheck className="w-12 h-12 text-emerald-600 mb-6" />
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                    Clinical Excellence Guarantee
                  </h3>
                  <ul className="space-y-4">
                    {[
                    'Evidence-based treatment protocols',
                    'Strict adherence to state telehealth regulations',
                    'Comprehensive medication safety checks',
                    'Secure, HIPAA-compliant patient records'].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">
                          {item}
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Everything you need to know about our service.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
              <FAQItem
                question="How does the consultation process work?"
                answer="It's simple: you fill out a secure online assessment detailing your symptoms and medical history. One of our licensed providers reviews your case, typically within 24 hours. If appropriate, they will create a personalized treatment plan and send any necessary prescriptions to your local pharmacy." />
              
              <FAQItem
                question="Is my information secure and confidential?"
                answer="Absolutely. We use bank-level, 256-bit encryption and our entire platform is fully HIPAA-compliant. Your medical records and personal information are strictly confidential and only shared with your treating provider." />
              
              <FAQItem
                question="How quickly will I hear from a doctor?"
                answer="Most patients receive a response from a provider within 24 hours of submitting their assessment. In many cases, reviews are completed on the same day." />
              
              <FAQItem
                question="What conditions do you treat?"
                answer="We treat a wide variety of non-emergency conditions including anxiety, depression, skin issues (acne, eczema), respiratory infections, allergies, migraines, and chronic pain management. If your condition requires in-person care, our providers will advise you accordingly." />
              
              <FAQItem
                question="How much does a consultation cost?"
                answer="Our standard consultation fee is $49.00. This covers the provider's review of your case and the creation of your treatment plan. Medication costs at the pharmacy are separate." />
              
              <FAQItem
                question="Do you accept insurance?"
                answer="Currently, we operate on a cash-pay basis to keep our prices low and transparent ($49 per consult). However, you can use your health insurance to pay for any prescribed medications at your local pharmacy." />
              
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 bg-brand-700 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)',
            backgroundSize: '32px 32px'
          }}>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
              Start your secure online assessment today and get a personalized
              treatment plan from a licensed provider.
            </p>
            <Link
              to="/intake"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-800 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all active:scale-95">
              
              Start Your Consultation <Stethoscope className="w-6 h-6" />
            </Link>
            <p className="mt-6 text-brand-200 text-sm flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" /> Secure, confidential, and HIPAA
              compliant
            </p>
          </FadeIn>
        </div>
      </section>
    </div>);

}