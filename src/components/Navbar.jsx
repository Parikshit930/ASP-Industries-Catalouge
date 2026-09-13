import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, MessageSquare, Sparkles } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { companyDetails, generateWhatsAppUrl } from '../data/catalogueData';

export default function Navbar({ onReplayIntro }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (targetId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/#' + targetId);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Catalogue', id: 'catalogue' },
    { name: 'Products', id: 'products' },
    { name: 'EDM Job Work', id: 'edm-job-work' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B1726]/92 backdrop-blur-md border-b border-[#202A33] shadow-[0_4px_24px_rgba(0,0,0,0.4)] py-3.5' 
          : 'bg-gradient-to-b from-[#0B1726]/90 via-[#0B1726]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <BrandLogo size="md" />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-xs font-mono uppercase tracking-[0.16em] text-[#AEB8C2] hover:text-white transition-colors relative py-1 group focus:outline-none"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#3B82C4] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3.5">
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 bg-[#151C24] hover:bg-[#202A33] border border-[#202A33] hover:border-[#3B82C4] text-[#AEB8C2] hover:text-[#F2F4F5] font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
              title="Replay cinematic opening experience"
            >
              <Sparkles className="w-3 h-3 text-[#3B82C4]" />
              <span>Intro Portal</span>
            </button>
          )}

          <a
            href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
            className="hidden xl:flex items-center gap-2 text-xs font-mono text-[#AEB8C2] hover:text-[#F2F4F5] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#3B82C4]" />
            <span>{companyDetails.phone}</span>
          </a>

          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#151C24] hover:bg-[#202A33] border border-[#3B82C4] text-[#F2F4F5] font-mono text-xs uppercase tracking-[0.15em] transition-all duration-200 active:scale-98 shadow-[0_0_15px_rgba(59,130,196,0.15)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82C4] group-hover:scale-125 transition-transform" />
            <span>Enquire Now</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#3B82C4] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#3B82C4] border border-[#202A33] bg-[#151C24] rounded sm:hidden"
            aria-label="Enquire on WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#AEB8C2] hover:text-white border border-[#202A33] hover:border-[#3B82C4] bg-[#151C24] transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-[#0B1726]/98 border-b border-[#202A33] backdrop-blur-xl ${
          mobileMenuOpen ? 'max-h-[460px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-sm font-mono uppercase tracking-[0.2em] text-[#AEB8C2] hover:text-[#3B82C4] py-2 border-b border-[#151C24] transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 text-xs font-mono text-[#AEB8C2] py-2"
            >
              <Phone className="w-4 h-4 text-[#3B82C4]" />
              <span>{companyDetails.phone}</span>
            </a>

            {onReplayIntro && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#151C24] border border-[#202A33] text-[#AEB8C2] hover:text-white font-mono text-xs uppercase tracking-wider text-center transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#3B82C4]" />
                <span>Replay Entry Experience</span>
              </button>
            )}

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3 bg-[#151C24] border border-[#3B82C4] text-[#F2F4F5] font-mono text-xs uppercase tracking-[0.2em] text-center"
            >
              <span>Enquire via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-[#3B82C4]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
