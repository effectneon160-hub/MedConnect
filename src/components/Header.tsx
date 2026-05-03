import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Services',
    path: '/services'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-sm py-3' : 'bg-white py-5'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-700 p-2 rounded-lg group-hover:bg-brand-800 transition-colors">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="font-serif font-bold text-2xl text-slate-900 tracking-tight">
              Med<span className="text-brand-700">Connect</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-brand-700 ${location.pathname === link.path ? 'text-brand-700' : 'text-slate-600'}`}>
              
                {link.name}
              </Link>
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+13035550192"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors">
              
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">+1 (303) 555-0192</span>
            </a>
            <Link
              to="/intake"
              className="bg-brand-700 hover:bg-brand-800 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm hover:shadow-md active:scale-95">
              
              Start Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu">
            
            {mobileMenuOpen ?
            <X className="w-6 h-6" /> :

            <Menu className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-white border-b border-slate-200 overflow-hidden">
          
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium p-2 rounded-lg ${location.pathname === link.path ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-50'}`}>
              
                  {link.name}
                </Link>
            )}
              <div className="h-px bg-slate-200 my-2" />
              <a
              href="tel:+13035550192"
              className="flex items-center gap-3 p-2 text-slate-700 font-medium">
              
                <div className="bg-slate-100 p-2 rounded-full">
                  <Phone className="w-5 h-5 text-brand-700" />
                </div>
                +1 (303) 555-0192
              </a>
              <Link
              to="/intake"
              className="bg-brand-700 text-white text-center py-3 rounded-xl font-medium mt-2 shadow-sm">
              
                Start Consultation
              </Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}