import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Crosshair, ShieldCheck, Compass, Radio, Cpu, Sparkles } from 'lucide-react';
import BrandLogo from './BrandLogo';

/**
 * Ultra-Premium Cinematic Industrial Entry Experience
 * 
 * Featuring:
 * - Interactive mouse parallax depth on dark metallic surfaces
 * - Precision laser scanning ray & technical telemetry HUD
 * - Rotating concentric engineering reticles that lock into alignment
 * - High-tactile "ENTER CATALOGUE" trigger with coordinate lock & energy pulse
 * - Dual shutter aperture transition on exit
 * - Session memory with instant skip option and keyboard accessibility
 */
export default function EntryExperience({ onEnter }) {
  const [isExiting, setIsExiting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [telemetryStep, setTelemetryStep] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if user has already entered in this session
    const hasSeenIntro = sessionStorage.getItem('asp_catalogue_entered');
    if (hasSeenIntro === 'true') {
      onEnter();
      return;
    }

    // Sequential reveal steps
    const timer1 = setTimeout(() => setMounted(true), 150);
    const timer2 = setTimeout(() => setTelemetryStep(1), 600);
    const timer3 = setTimeout(() => setTelemetryStep(2), 1200);

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === 'Escape' || e.key === ' ') {
        handleProceed();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Subtle interactive parallax effect based on cursor position
  const handleMouseMove = (e) => {
    if (!containerRef.current || isExiting) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 24; // max 24px drift
    const y = (clientY / innerHeight - 0.5) * 24;
    setCoords({ x, y });
  };

  const handleProceed = () => {
    if (isExiting) return;
    setIsExiting(true);
    sessionStorage.setItem('asp_catalogue_entered', 'true');
    setTimeout(() => {
      onEnter();
    }, 850);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-[#0B1726] text-[#F2F4F5] overflow-hidden select-none transition-all duration-700 ease-out ${
        isExiting ? 'pointer-events-none' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to ASP Industries Digital Catalogue"
    >
      {/* Top and Bottom Shutter Gates on Exit */}
      <div 
        className={`absolute top-0 left-0 right-0 h-1/2 bg-[#0B1726] border-b border-[#3B82C4]/40 z-40 transition-transform duration-700 ease-in-out pointer-events-none ${
          isExiting ? '-translate-y-full' : 'translate-y-[-100%]'
        }`} 
      />
      <div 
        className={`absolute bottom-0 left-0 right-0 h-1/2 bg-[#0B1726] border-t border-[#3B82C4]/40 z-40 transition-transform duration-700 ease-in-out pointer-events-none ${
          isExiting ? 'translate-y-full' : 'translate-y-[100%]'
        }`} 
      />

      {/* Layer 1: Parallax Industrial Machinery Visual */}
      <div 
        className="absolute inset-0 -z-10 overflow-hidden transition-transform duration-300 ease-out pointer-events-none"
        style={{
          transform: `scale(${isExiting ? 1.15 : 1.05}) translate3d(${coords.x * -0.5}px, ${coords.y * -0.5}px, 0)`,
          filter: isExiting ? 'blur(12px) brightness(0.15)' : 'none',
          transition: isExiting ? 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 200ms ease-out'
        }}
      >
        <img 
          src="/images/hero.jpg" 
          alt="ASP Industries Engineering Floor" 
          className="w-full h-full object-cover object-center filter brightness-[0.24] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726] via-[#0B1726]/85 to-[#0B1726]/90" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0B1726]/65 to-[#0B1726]" />
      </div>

      {/* Layer 2: Precision Engineering Grid & Scanner Ray */}
      <div 
        className="absolute inset-0 -z-10 bg-tech-grid opacity-35 pointer-events-none transition-transform duration-500"
        style={{
          transform: `translate3d(${coords.x * 0.3}px, ${coords.y * 0.3}px, 0)`
        }}
      />

      {/* Vertical Scanning Laser Ray (Animated subtle sweep) */}
      <div 
        className={`absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B82C4] to-transparent pointer-events-none opacity-40 ${
          mounted ? 'animate-[scan_6s_ease-in-out_infinite]' : 'opacity-0'
        }`}
        style={{
          boxShadow: '0 0 15px rgba(59, 130, 196, 0.8), 0 0 30px rgba(59, 130, 196, 0.4)'
        }}
      />

      {/* Layer 3: Concentric Engineering Reticle Behind Stage */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-5 w-[650px] h-[650px] pointer-events-none opacity-20 flex items-center justify-center transition-all duration-700"
        style={{
          transform: `translate(-50%, -50%) translate3d(${coords.x * -0.8}px, ${coords.y * -0.8}px, 0) scale(${isExiting ? 1.3 : 1})`
        }}
      >
        <div className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-[#58748D] animate-[spin_40s_linear_infinite]" />
        <div className="absolute w-[440px] h-[440px] rounded-full border border-[#3B82C4]/40 animate-[spin_25s_linear_infinite_reverse]" />
        <div className="absolute w-[280px] h-[280px] rounded-full border border-[#AEB8C2]/20" />
        <div className="absolute w-[1px] h-[680px] bg-gradient-to-b from-transparent via-[#3B82C4]/30 to-transparent" />
        <div className="absolute h-[1px] w-[680px] bg-gradient-to-r from-transparent via-[#3B82C4]/30 to-transparent" />
      </div>

      {/* Cardinal Viewport Technical Ticks */}
      <div className="absolute top-6 left-6 w-7 h-7 border-t-2 border-l-2 border-[#3B82C4]/50 pointer-events-none" />
      <div className="absolute top-6 right-6 w-7 h-7 border-t-2 border-r-2 border-[#3B82C4]/50 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-7 h-7 border-b-2 border-l-2 border-[#3B82C4]/50 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-7 h-7 border-b-2 border-r-2 border-[#3B82C4]/50 pointer-events-none" />

      {/* Header Bar */}
      <header className={`relative z-20 flex items-center justify-between w-full max-w-7xl mx-auto transition-all duration-700 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      } ${isExiting ? 'opacity-0 -translate-y-8' : ''}`}>
        
        {/* Left Telemetry Status */}
        <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] text-[#AEB8C2] uppercase tracking-[0.2em]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82C4] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B82C4]" />
          </span>
          <span className="text-[#F2F4F5] font-semibold">ASP INDUSTRIES</span>
          <span className="text-[#58748D] hidden sm:inline">/</span>
          <span className="text-[#58748D] hidden sm:inline">DIGITAL DOSSIER 2.0</span>
        </div>

        {/* Right Action: Skip Option */}
        <button 
          onClick={handleProceed}
          className="group text-xs font-mono tracking-widest text-[#AEB8C2] hover:text-white uppercase transition-all px-3 py-1.5 rounded-sm border border-[#58748D]/30 hover:border-[#3B82C4] hover:bg-[#151C24]/60 flex items-center gap-2"
        >
          <span>Fast Pass</span>
          <span className="text-[#3B82C4] font-mono group-hover:translate-x-0.5 transition-transform">→</span>
        </button>
      </header>

      {/* Center Cinematic Hero Portal */}
      <main className={`relative z-20 my-auto w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-center transition-all duration-700 ${
        isExiting ? 'opacity-0 scale-95 blur-sm' : ''
      }`}>
        
        {/* Technical Calibration Line */}
        <div className={`flex items-center gap-3 sm:gap-4 mb-8 transition-all duration-700 delay-100 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-r from-transparent to-[#3B82C4]" />
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151C24]/80 border border-[#3B82C4]/40 backdrop-blur-sm">
            <Crosshair className="w-3.5 h-3.5 text-[#3B82C4] animate-spin" style={{ animationDuration: '12s' }} />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#F2F4F5] font-medium">
              ESTABLISHED 2006 · GURGAON, INDIA
            </span>
          </div>
          <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-l from-transparent to-[#3B82C4]" />
        </div>

        {/* The Brand Identity Monogram & Typography */}
        <div className={`transition-all duration-800 delay-200 ${
          mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <BrandLogo variant="full" size="xl" asLink={false} className="justify-center mb-6 drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]" />
        </div>

        {/* Refined Architectural Tagline */}
        <div className={`mt-2 mb-10 transition-all duration-700 delay-300 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="flex items-center justify-center gap-3 sm:gap-4 font-display text-xl sm:text-3xl md:text-4xl font-light tracking-[0.22em] text-[#F2F4F5] uppercase">
            <span>Precision</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82C4]" />
            <span>Capability</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82C4]" />
            <span>Confidence</span>
          </div>
          
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#AEB8C2] tracking-wider mt-4 max-w-xl mx-auto font-light leading-relaxed">
            Industrial Machinery · Tool Room Systems · EDM Job Work & Solutions
          </p>
        </div>

        {/* The Entrance Command Trigger */}
        <div className={`transition-all duration-700 delay-400 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={handleProceed}
            className="group relative inline-flex items-center gap-4 sm:gap-5 px-9 sm:px-12 py-4 sm:py-5 bg-[#151C24] hover:bg-[#202A33] border border-[#3B82C4] hover:border-[#4F9BE3] text-[#F2F4F5] font-display font-medium text-sm sm:text-base tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_0_30px_rgba(59,130,196,0.22)] hover:shadow-[0_0_50px_rgba(59,130,196,0.45)] active:scale-97 cursor-pointer"
          >
            {/* Corner metallic highlights */}
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-white/80" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-white/80" />
            
            {/* Subtle Expanding Radar Ripple on hover */}
            <span className="absolute -inset-1 rounded-sm border border-[#3B82C4]/0 group-hover:border-[#3B82C4]/40 transition-colors pointer-events-none" />

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3B82C4] group-hover:bg-white transition-colors" />
              <span>ENTER CATALOGUE</span>
            </div>

            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#3B82C4] group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
          </button>
          
          <div className="mt-5 flex items-center justify-center gap-4 font-mono text-[10px] sm:text-[11px] text-[#58748D] tracking-widest uppercase">
            <span>[ENTER] TO LAUNCH</span>
            <span>·</span>
            <span>20+ YEARS HERITAGE</span>
          </div>
        </div>

      </main>

      {/* Footer Industrial Telemetry Bar */}
      <footer className={`relative z-20 flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-7xl mx-auto pt-5 border-t border-[#202A33] font-mono text-[10px] sm:text-[11px] text-[#58748D] transition-all duration-700 delay-500 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${isExiting ? 'opacity-0 translate-y-8' : ''}`}>
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-3.5 h-3.5 text-[#3B82C4]" />
          <span className="text-[#AEB8C2]">Manufacturer · Supplier · Retailer</span>
        </div>
        
        <div className="flex items-center gap-4 text-[#AEB8C2]/80">
          <span>Khasara No. 7684/6329/219, Gurgaon</span>
          <span className="text-[#202A33]">|</span>
          <span className="text-[#3B82C4]">VERIFIED PORTAL</span>
        </div>
      </footer>

      {/* Custom Keyframe Styles for Scanner */}
      <style>{`
        @keyframes scan {
          0%, 100% {
            top: 5%;
            opacity: 0.1;
          }
          50% {
            top: 92%;
            opacity: 0.45;
          }
        }
      `}</style>
    </div>
  );
}
