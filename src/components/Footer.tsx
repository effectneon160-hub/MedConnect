import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Lock,
  Award } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="font-serif font-bold text-2xl text-white tracking-tight">
                Med<span className="text-brand-500">Connect</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Expert medical care, available when you need it. Connect with
              licensed healthcare providers from the comfort of your home.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4" />
                HIPAA Compliant
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="hover:text-brand-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-brand-400 transition-colors">
                  
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-brand-400 transition-colors">
                  
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand-400 transition-colors">
                  
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/intake"
                  className="text-brand-400 hover:text-brand-300 font-medium transition-colors">
                  
                  Start Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-6">
              Legal & Privacy
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-brand-400 transition-colors">
                  
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-brand-400 transition-colors">
                  
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/hipaa"
                  className="hover:text-brand-400 transition-colors">
                  
                  HIPAA Notice
                </Link>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3 text-slate-400 text-sm">
              <Lock className="w-4 h-4" />
              <span>Secure 256-bit Encryption</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+13035550192"
                    className="hover:text-white transition-colors block">
                    
                    +1 (303) 555-0192
                  </a>
                  <span className="text-xs text-slate-500">
                    Available Mon-Fri, 8am-8pm
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <a
                  href="mailto:care@medconnect.com"
                  className="hover:text-white transition-colors">
                  
                  care@medconnect.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span>
                  123 Medical Plaza, Suite 200
                  <br />
                  Denver, CO 80202
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges Row */}
        <div className="border-t border-slate-800 py-8 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-semibold text-white">
            <Award className="w-6 h-6" /> Board Certified
          </div>
          <div className="flex items-center gap-2 font-semibold text-white">
            <ShieldCheck className="w-6 h-6" /> HIPAA Secure
          </div>
          <div className="flex items-center gap-2 font-semibold text-white">
            <Lock className="w-6 h-6" /> SSL Encrypted
          </div>
        </div>

        {/* Emergency Disclaimer & Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm font-medium w-full md:w-auto text-center">
            ⚠️ If you are experiencing a medical emergency, call 911
            immediately.
          </div>
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} MedConnect Health. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>);

}