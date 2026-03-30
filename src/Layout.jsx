import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';

const navItems = [
  { name: 'Home', page: 'Home' },
  { name: 'Cleaning Services', page: 'Cleaning', featured: true, color: 'emerald' },
  { name: 'Courier Services', page: 'Courier', featured: true, color: 'sky' },
  { name: 'Services', page: 'Services' },
  { name: 'Quality', page: 'Quality' },
  { name: 'Safety', page: 'Safety' },
  { name: 'About', page: 'About' },
  { name: 'Contact', page: 'Contact' },
];

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ab1e404355904ea7c1efc/9804b1ff0_WhatsApp_Image_2025-12-12_at_121434_AM-removebg-preview.png"
                alt="Stafflinx"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                    item.featured && item.color === 'emerald'
                      ? currentPageName === item.page
                        ? 'font-bold text-white bg-emerald-800'
                        : 'font-bold text-white bg-emerald-700 hover:bg-emerald-800 border border-emerald-800'
                      : item.featured && item.color === 'sky'
                      ? currentPageName === item.page
                        ? 'font-bold text-white bg-sky-800'
                        : 'font-bold text-white bg-sky-700 hover:bg-sky-800 border border-sky-800'
                      : currentPageName === item.page
                      ? 'text-cyan-600 bg-cyan-50 font-medium'
                      : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-50 font-medium'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100"
            >
              <div className="px-6 py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                      item.featured && item.color === 'emerald'
                        ? currentPageName === item.page
                          ? 'font-bold text-white bg-emerald-800'
                          : 'font-bold text-white bg-emerald-700'
                        : item.featured && item.color === 'sky'
                        ? currentPageName === item.page
                          ? 'font-bold text-white bg-sky-800'
                          : 'font-bold text-sky-100 bg-sky-700'
                        : currentPageName === item.page
                        ? 'text-cyan-600 bg-cyan-50 font-medium'
                        : 'text-slate-600 hover:bg-slate-50 font-medium'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="pt-[72px]">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}