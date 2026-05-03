import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope } from 'lucide-react';
export function Layout() {
  const { pathname } = useLocation();
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // Handle sticky CTA visibility
  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 400px, but hide it on the intake page
      if (pathname === '/intake') {
        setShowStickyCTA(false);
      } else {
        setShowStickyCTA(window.scrollY > 400);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-[72px] md:pt-[84px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -10
            }}
            transition={{
              duration: 0.3
            }}>
            
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {showStickyCTA &&
        <motion.div
          initial={{
            y: 100,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          exit={{
            y: 100,
            opacity: 0
          }}
          className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-40 md:hidden">
          
            <Link
            to="/intake"
            className="flex items-center justify-center gap-2 w-full bg-brand-700 hover:bg-brand-800 text-white py-3.5 rounded-xl font-semibold shadow-md active:scale-95 transition-all">
            
              <Stethoscope className="w-5 h-5" />
              Start Your Consultation
            </Link>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}