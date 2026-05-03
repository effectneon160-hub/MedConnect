import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2 } from
'lucide-react';
export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <div className="bg-brand-900 text-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="text-4xl md:text-5xl font-serif font-bold mb-4">
          
          Get in Touch
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
          className="text-xl text-brand-100 max-w-2xl mx-auto">
          
          Have questions about our services or need help with your account? Our
          support team is here for you.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 font-serif">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-50 p-3 rounded-xl text-brand-600 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <a
                      href="tel:+13035550192"
                      className="text-brand-700 hover:underline block mt-1">
                      
                      +1 (303) 555-0192
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Call us for immediate assistance
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#25D366]/10 p-3 rounded-xl text-[#25D366] shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">WhatsApp</p>
                    <a
                      href="https://wa.me/13035550192"
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-700 hover:underline block mt-1">
                      
                      +1 (303) 555-0192
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Message us anytime
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-50 p-3 rounded-xl text-brand-600 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <a
                      href="mailto:care@medconnect.com"
                      className="text-brand-700 hover:underline block mt-1">
                      
                      care@medconnect.com
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      We aim to reply within 2 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-50 p-3 rounded-xl text-brand-600 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Operating Hours
                    </p>
                    <ul className="text-sm text-slate-600 mt-1 space-y-1">
                      <li className="flex justify-between">
                        <span>Mon - Fri:</span> <span>8:00 AM - 8:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday:</span> <span>9:00 AM - 5:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday:</span> <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative h-64">
              <div
                className="absolute inset-0 bg-slate-200"
                style={{
                  backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cbd5e1' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")"
                }}>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 backdrop-blur-[2px]">
                <MapPin className="w-10 h-10 text-brand-600 mb-2 drop-shadow-md" />
                <div className="bg-white px-4 py-2 rounded-lg shadow-md text-center">
                  <p className="font-bold text-slate-900 text-sm">
                    MedConnect Headquarters
                  </p>
                  <p className="text-xs text-slate-600">
                    123 Medical Plaza, Suite 200
                    <br />
                    Denver, CO 80202
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10 h-full">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                Send us a message
              </h2>

              {isSubmitted ?
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center h-full flex flex-col items-center justify-center">
                
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-600">
                    Thank you for reaching out. A member of our support team
                    will get back to you shortly.
                  </p>
                  <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-brand-700 font-medium hover:underline">
                  
                    Send another message
                  </button>
                </motion.div> :

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name
                      </label>
                      <input
                      required
                      type="text"
                      value={formState.name}
                      onChange={(e) =>
                      setFormState({
                        ...formState,
                        name: e.target.value
                      })
                      }
                      className="w-full p-3 rounded-xl border border-slate-300 focus:ring-brand-500 focus:ring-2 outline-none transition-all"
                      placeholder="John Doe" />
                    
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                      required
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                      setFormState({
                        ...formState,
                        email: e.target.value
                      })
                      }
                      className="w-full p-3 rounded-xl border border-slate-300 focus:ring-brand-500 focus:ring-2 outline-none transition-all"
                      placeholder="john@example.com" />
                    
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) =>
                      setFormState({
                        ...formState,
                        phone: e.target.value
                      })
                      }
                      className="w-full p-3 rounded-xl border border-slate-300 focus:ring-brand-500 focus:ring-2 outline-none transition-all"
                      placeholder="(555) 000-0000" />
                    
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Subject
                      </label>
                      <select
                      required
                      value={formState.subject}
                      onChange={(e) =>
                      setFormState({
                        ...formState,
                        subject: e.target.value
                      })
                      }
                      className="w-full p-3 rounded-xl border border-slate-300 focus:ring-brand-500 focus:ring-2 outline-none transition-all bg-white">
                      
                        <option value="">Select a subject...</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Technical Support">
                          Technical Support
                        </option>
                        <option value="Billing Question">
                          Billing Question
                        </option>
                        <option value="Feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                    setFormState({
                      ...formState,
                      message: e.target.value
                    })
                    }
                    className="w-full p-3 rounded-xl border border-slate-300 focus:ring-brand-500 focus:ring-2 outline-none transition-all resize-none"
                    placeholder="How can we help you today?" />
                  
                  </div>

                  <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-800 text-white px-8 py-4 rounded-xl font-bold shadow-md active:scale-95 transition-all">
                  
                    {isSubmitting ?
                  'Sending...' :

                  <>
                        <Send className="w-5 h-5" /> Send Message
                      </>
                  }
                  </button>

                  <p className="text-xs text-slate-500 mt-4">
                    Please do not include sensitive medical information in this
                    form. For medical concerns, please use our secure{' '}
                    <a
                    href="/intake"
                    className="text-brand-600 hover:underline">
                    
                      Patient Intake
                    </a>{' '}
                    form.
                  </p>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    </div>);

}