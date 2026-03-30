import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ab1e404355904ea7c1efc/c067dfa20_WhatsAppImage2025-12-12at121434AM.jpeg"
              alt="Stafflinx"
              className="h-12 w-auto mb-4"
            />
            <p className="text-slate-400 leading-relaxed max-w-md">
              Your trusted employment agency committed to connecting exceptional talent 
              with outstanding opportunities. Available 24/7 to serve your staffing needs.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4 text-slate-400">
              <a href="mailto:info@stafflinx.ca" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5 text-cyan-400" />
                info@stafflinx.ca
              </a>
              <a href="tel:+14389289996" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5 text-cyan-400" />
                (438) 928-9996
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Stafflinx Employment Agency. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to={createPageUrl("Home")} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Home</Link>
              <Link to={createPageUrl("About")} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">About</Link>
              <Link to={createPageUrl("Services")} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Services</Link>
              <Link to={createPageUrl("Contact")} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        {/* Square AI Branding */}
        <div className="mt-8 pt-6 border-t border-slate-800">
          <div className="flex items-center justify-center gap-3">
            <a 
              href="https://www.squareai.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ab1e404355904ea7c1efc/2cb1b7e57_AISelect_20251224_171216_Adobe_Acrobat-removebg-preview.png"
                alt="Square AI"
                className="h-7 w-auto"
              />
              <span className="text-slate-500 text-xs">
                Website made and maintained by <span className="text-cyan-400 hover:text-cyan-300 transition-colors">Square AI</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}