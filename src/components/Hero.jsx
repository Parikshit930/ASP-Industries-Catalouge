import React from 'react';
import { ArrowRight, MessageSquare, Crosshair, ShieldCheck, Compass } from 'lucide-react';
import { companyDetails, generateWhatsAppUrl } from '../data/catalogueData';

export default function Hero({ onExploreClick }) {
  const scrollToCatalogue = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById('catalogue');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden border-b border-[#202A33]"
    >
      {/* Background Cinematic Visual & Overlays */}
      <div className="absolute inset-0 -z-10 select-none overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Precision VMC and CNC Industrial Machining"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-110"
        />
        {/* Editorial Gradients for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1726] via-[#0B1726]/85 to-[#0B1726]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726] via-transparent to-[#0B1726]/60" />
        
        {/* Engineering Grid & Fine Coordinate Lines */}
        <div className="absolute inset-0 bg-tech-grid opacity-35" />
        
        {/* Subtle Horizontal & Vertical Measurement Hairlines */}
        <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#58748D]/20 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#58748D]/20 to-transparent" />
        <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-gradient-to-b from-transparent via-[#58748D]/15 to-transparent hidden xl:block" />
        <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-gradient-to-b from-transparent via-[#58748D]/15 to-transparent hidden xl:block" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow & Verified Trust Tag */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#151C24]/90 border border-[#3B82C4]/40 rounded-sm mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#3B82C4]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#AEB8C2]">
              INDUSTRIAL MACHINERY & ENGINEERING SOLUTIONS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2F4F5] leading-[1.08] mb-6">
            Built on Precision.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F4F5] via-[#AEB8C2] to-[#58748D]">
              Driven by Industry.
            </span>
          </h1>

          {/* Supporting Statement */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#AEB8C2] max-w-2xl font-light leading-relaxed mb-8">
            Manufacturing, supplying, and delivering industrial machinery, tool room systems, die solutions, and precision EDM job work with established expertise since 2006.
          </p>

          {/* Verified Trust Strip Indicator */}
          <div className="flex items-center gap-3 font-mono text-xs text-[#58748D] tracking-widest uppercase mb-10 pb-6 border-b border-[#202A33]">
            <ShieldCheck className="w-4 h-4 text-[#3B82C4]" />
            <span className="text-[#AEB8C2] font-medium">20+ Years of Experience</span>
            <span className="text-[#202A33]">·</span>
            <span>Est. 2006 · Gurgaon, Haryana</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={scrollToCatalogue}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#3B82C4] hover:bg-[#4F9BE3] text-white font-display font-medium text-sm sm:text-base tracking-[0.14em] uppercase transition-all duration-200 shadow-[0_0_20px_rgba(59,130,196,0.25)] active:scale-98"
            >
              <span>Explore Catalogue</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#151C24]/90 hover:bg-[#202A33] border border-[#58748D]/40 hover:border-[#3B82C4] text-[#F2F4F5] font-mono text-xs sm:text-sm tracking-[0.16em] uppercase transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4 text-[#3B82C4] group-hover:scale-110 transition-transform" />
              <span>Talk to Us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Blueprint Coordinates */}
      <div className="absolute bottom-6 right-8 hidden lg:flex flex-col items-end font-mono text-[10px] text-[#58748D] tracking-widest space-y-1 select-none pointer-events-none">
        <div className="flex items-center gap-2">
          <Crosshair className="w-3 h-3 text-[#3B82C4]" />
          <span>SPEC-GRID: 7684/6329/219</span>
        </div>
        <span>COORD: 28.4595° N, 77.0266° E</span>
        <span className="text-[#3B82C4]">STATUS: ACTIVE VERIFIED CATALOGUE</span>
      </div>
    </section>
  );
}
