import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, MessageSquare, Wrench, Layers, Maximize2, X, Sparkles, CheckCircle2, Shield, Car } from 'lucide-react';
import { featuredProducts, generateWhatsAppUrl, companyDetails } from '../data/catalogueData';

export default function ProductShowcaseCarousel() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  // Filter products by machine & tooling groups
  const filteredProducts = featuredProducts.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.filterGroups && item.filterGroups.includes(activeFilter);
  });

  const automotiveCount = featuredProducts.filter((item) => item.filterGroups?.includes('automotive')).length;
  const defenseCount = featuredProducts.filter((item) => item.filterGroups?.includes('defense')).length;
  const dieMouldsCount = featuredProducts.filter((item) => item.filterGroups?.includes('die-moulds')).length;

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [filteredProducts]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = 380;
    const scrollAmount = direction === 'left' ? -cardWidth * 1.5 : cardWidth * 1.5;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Drag to scroll handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.6;
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
    checkScroll();
  };

  return (
    <section id="products" className="py-24 bg-[#080F18] border-b border-[#202A33] relative overflow-hidden">
      {/* Background Graphic Watermark */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Strip with Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-8 border-b border-[#202A33] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-sm bg-[#3B82C4]" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#AEB8C2]">
                PROJECTS & DIE MOULDS LINEUP · {featuredProducts.length} FEATURED PROJECTS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F4F5]">
              Explore Projects, Die Moulds & Capabilities
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#AEB8C2] mt-3 max-w-2xl font-light">
              Detailed showcase of manufactured die moulds, press tooling, precision turned parts, and batch production components delivered by ASP Industries.
            </p>
          </div>

          {/* Carousel Navigation Buttons & Counter */}
          <div className="flex items-center gap-4 self-start lg:self-end">
            <div className="font-mono text-xs text-[#58748D] tracking-widest hidden sm:block">
              SWIPE / DRAG TO BROWSE
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`p-3 bg-[#151C24] border border-[#202A33] text-[#F2F4F5] transition-all cursor-pointer ${
                  canScrollLeft ? 'hover:border-[#3B82C4] hover:bg-[#202A33]' : 'opacity-40 cursor-not-allowed'
                }`}
                aria-label="Previous products"
              >
                <ChevronLeft className="w-5 h-5 text-[#3B82C4]" />
              </button>

              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`p-3 bg-[#151C24] border border-[#202A33] text-[#F2F4F5] transition-all cursor-pointer ${
                  canScrollRight ? 'hover:border-[#3B82C4] hover:bg-[#202A33]' : 'opacity-40 cursor-not-allowed'
                }`}
                aria-label="Next products"
              >
                <ChevronRight className="w-5 h-5 text-[#3B82C4]" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {[
            { id: 'all', label: `All Projects (${featuredProducts.length})` },
            { id: 'automotive', label: `🚗 Automotive (${automotiveCount.toString().padStart(2, '0')})` },
            { id: 'defense', label: `🛡️ Defense (${defenseCount.toString().padStart(2, '0')})` },
            { id: 'die-moulds', label: `⭐ Die Moulds (${dieMouldsCount.toString().padStart(2, '0')})` },
            { id: 'turning', label: 'AMS J300LM Turning' },
            { id: 'moulding', label: 'Toshiba 180T Moulding' },
            { id: 'edm-robo', label: 'Robo Drill ZNC & EDM' },
            { id: 'vmc', label: 'HAAS VMC Machining' },
            { id: 'tool-room', label: 'Tool Room & Grinding' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-colors rounded-sm cursor-pointer ${
                activeFilter === tab.id
                  ? tab.id === 'defense'
                    ? 'bg-amber-600 text-white font-medium shadow-[0_0_15px_rgba(217,119,6,0.4)]'
                    : tab.id === 'automotive'
                    ? 'bg-sky-600 text-white font-medium shadow-[0_0_15px_rgba(2,132,199,0.4)]'
                    : 'bg-[#3B82C4] text-white font-medium shadow-[0_0_15px_rgba(59,130,196,0.3)]'
                  : 'bg-[#151C24] text-[#AEB8C2] hover:text-white border border-[#202A33] hover:border-[#3B82C4]/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Sector Callout Banner (Automotive, Defense & Die Moulds) */}
        {activeFilter === 'automotive' ? (
          <div className="mb-8 p-5 sm:p-6 bg-[#151C24] border border-sky-500/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#0B1726] border border-sky-500/40 text-sky-400 shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-sky-400 font-semibold">
                    SPECIALIZED AUTOMOTIVE & DRIVETRAIN SECTION
                  </span>
                  <span className="font-mono text-[10px] text-sky-300 px-2 py-0.5 bg-[#0B1726] border border-sky-500/30">
                    OEM Standards · Motherson & Tier-1 Grade
                  </span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#F2F4F5]">
                  Automotive Transmission Shafts, Splined PTO Axles & Hub Spacers
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#AEB8C2] font-light mt-1 max-w-3xl">
                  High-durability powertrain shafts, involute splined countershafts, integral pinion gears, and CNC milled wheel spacers machined on AMS J300LM CNC Turning, HAAS VMC, and precision ground on Riat Sons cylindrical grinder for automotive and commercial vehicle transmission assemblies.
                </p>
              </div>
            </div>

            <a
              href={generateWhatsAppUrl("Automotive Components Specification Enquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              <span>Enquire Automotive Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ) : activeFilter === 'defense' ? (
          <div className="mb-8 p-5 sm:p-6 bg-[#151C24] border border-amber-500/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#0B1726] border border-amber-500/40 text-amber-400 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-amber-400 font-semibold">
                    SPECIALIZED DEFENSE & TACTICAL HARDWARE SECTION
                  </span>
                  <span className="font-mono text-[10px] text-amber-300 px-2 py-0.5 bg-[#0B1726] border border-amber-500/30">
                    High-Tensile Alloy Steel · Lab Certified
                  </span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#F2F4F5]">
                  Defense Projectile Sleeves, Threaded Actuators, Striker Pins & Armament Couplers
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#AEB8C2] font-light mt-1 max-w-3xl">
                  High-precision cylindrical components machined on AMS J300LM CNC turning centres, Riat Sons cylindrical grinder (350mm), and Robo Drill ZNC with tight concentricity (±0.003 mm), precision internal metric threading, and 100% optical inspection for defense applications.
                </p>
              </div>
            </div>

            <a
              href={generateWhatsAppUrl("Defense Component Specification Enquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-mono text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              <span>Enquire Defense Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ) : activeFilter === 'die-moulds' ? (
          <div className="mb-8 p-5 sm:p-6 bg-[#151C24] border border-[#3B82C4]/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#0B1726] border border-[#3B82C4]/40 text-[#3B82C4] shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#3B82C4] font-semibold">
                    FEATURED PROJECT SECTION: DIE MOULDS
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400 px-2 py-0.5 bg-[#0B1726] border border-emerald-500/30">
                    Tool Room & VMC Output
                  </span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#F2F4F5]">
                  Plastic Injection Moulds, Stamping Dies & Guide Pillar Assemblies
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#AEB8C2] font-light mt-1 max-w-3xl">
                  Precision CNC machined core & cavity sets, 4-cavity injection blocks, progressive stamping tooling, matched guide pillar/bushing sets, and complete turnkey mould assemblies engineered with Siemens NX CAD/CAM and tested on Toshiba 180T presses.
                </p>
              </div>
            </div>

            <a
              href={generateWhatsAppUrl("Die Moulds Manufacturing Requirement")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#3B82C4] hover:bg-[#4F9BE3] text-white font-mono text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              <span>Enquire Die Moulds</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ) : (
          <div className="mb-8 p-5 sm:p-6 bg-[#151C24] border border-[#202A33] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0B1726] border border-[#3B82C4]/40 text-[#3B82C4] shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#3B82C4] font-semibold">
                    PROJECT SHOWCASE SECTIONS
                  </span>
                  <span className="font-mono text-[10px] text-[#AEB8C2] px-2 py-0.5 bg-[#0B1726] border border-[#202A33]">
                    {featuredProducts.length} Verified Projects
                  </span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-[#F2F4F5]">
                  Browse by Specialized Industry: Automotive, Defense, Die Moulds & Precision Turned Components
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
              <button
                onClick={() => {
                  setActiveFilter('automotive');
                  if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }}
                className="px-3.5 py-2 bg-[#0B1726] border border-sky-500/50 hover:bg-sky-500/10 text-sky-300 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>🚗 Automotive ({automotiveCount.toString().padStart(2, '0')})</span>
              </button>
              <button
                onClick={() => {
                  setActiveFilter('defense');
                  if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }}
                className="px-3.5 py-2 bg-[#0B1726] border border-amber-500/50 hover:bg-amber-500/10 text-amber-300 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>🛡️ Defense Section ({defenseCount.toString().padStart(2, '0')})</span>
              </button>
              <button
                onClick={() => {
                  setActiveFilter('die-moulds');
                  if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }}
                className="px-3.5 py-2 bg-[#0B1726] border border-[#3B82C4]/60 hover:bg-[#3B82C4]/10 text-[#3B82C4] font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>⭐ Die Moulds ({dieMouldsCount.toString().padStart(2, '0')})</span>
              </button>
            </div>
          </div>
        )}

        {/* Scrollable Container with Smooth Touch & Drag */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-[320px] sm:w-[380px] lg:w-[400px] shrink-0 snap-start bg-[#151C24] border border-[#202A33] hover:border-[#3B82C4] transition-all duration-300 flex flex-col justify-between group shadow-lg select-none"
            >
              {/* Product Image Header with Hover Depth */}
              <div className="relative h-[220px] sm:h-[240px] overflow-hidden bg-[#0B1726]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-110 group-hover:scale-108 group-hover:brightness-100 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151C24] via-transparent to-[#0B1726]/40" />

                {/* Top Badge Indicators */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="font-mono text-xs font-bold text-[#3B82C4] px-2.5 py-1 bg-[#0B1726]/90 border border-[#3B82C4]/40 backdrop-blur-md">
                    PROJECT {product.index} / {featuredProducts.length}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="p-2 bg-[#0B1726]/85 hover:bg-[#3B82C4] text-[#AEB8C2] hover:text-white border border-[#202A33] hover:border-white transition-colors backdrop-blur-md cursor-pointer"
                    title="Quick inspect machine specifications"
                    aria-label={`Inspect ${product.name}`}
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Category & Machine Tag Pill */}
                <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-[#0B1726]/90 border border-[#202A33] text-[#AEB8C2] truncate">
                    {product.category}
                  </span>
                  {product.tag && (
                    <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[#3B82C4]/20 border border-[#3B82C4]/50 text-[#3B82C4] shrink-0 font-medium">
                      {product.tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Machine Name */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#F2F4F5] group-hover:text-white transition-colors mb-4 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Highlight: What Work This Machine Does */}
                  <div className="p-4 bg-[#0B1726] border-l-2 border-[#3B82C4] rounded-r-sm mb-5">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#3B82C4] mb-1.5 font-semibold">
                      <Wrench className="w-3 h-3" />
                      <span>What Work This Machine Does:</span>
                    </div>
                    <p className="font-sans text-xs text-[#AEB8C2] leading-relaxed font-light">
                      {product.whatWorkItDoes}
                    </p>
                  </div>

                  {/* Typical Work Applications */}
                  <div className="mb-5">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#58748D] block mb-2 font-medium">
                      Typical Industrial Work:
                    </span>
                    <ul className="space-y-1.5">
                      {product.typicalWork.slice(0, 3).map((work, idx) => (
                        <li key={idx} className="flex items-center gap-2 font-mono text-xs text-[#F2F4F5]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82C4]" />
                          <span>{work}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Specs Note */}
                <div className="pt-4 border-t border-[#202A33] mb-6 font-mono text-[10px] text-[#58748D] leading-tight">
                  <Shield className="w-3 h-3 inline mr-1 text-[#3B82C4]" />
                  <span>{product.keySpecsNote}</span>
                </div>

                {/* Card Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={generateWhatsAppUrl(product.name, `Functional Enquiry - Unit ${product.index}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#3B82C4] hover:bg-[#4F9BE3] text-white font-mono text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire Machine</span>
                  </a>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full sm:w-auto px-4 py-2.5 bg-[#0B1726] border border-[#202A33] hover:border-[#3B82C4] text-[#AEB8C2] hover:text-white font-mono text-xs uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Full Details</span>
                  </button>
                </div>

              </div>

              {/* Bottom Hairline */}
              <div className="h-[2px] w-0 group-hover:w-full bg-[#3B82C4] transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Scroll Progress Bar */}
        <div className="mt-4 flex items-center justify-between gap-6">
          <div className="w-full h-1 bg-[#151C24] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#3B82C4] transition-all duration-300 rounded-full"
              style={{ width: `${Math.max(15, scrollProgress)}%` }}
            />
          </div>
          
          <div className="font-mono text-xs text-[#58748D] shrink-0">
            {filteredProducts.length} Projects In Inventory
          </div>
        </div>

      </div>

      {/* Lightbox / Expanded Machine Details Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#0B1726]/95 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedProduct(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-4xl bg-[#151C24] border border-[#3B82C4]/60 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="px-6 py-4 bg-[#0B1726] border-b border-[#202A33] flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="font-mono text-xs text-[#3B82C4] font-bold px-2 py-0.5 bg-[#151C24] border border-[#3B82C4]/40">
                  PROJECT {selectedProduct.index} / {featuredProducts.length}
                </span>
                <span className="font-mono text-xs text-[#AEB8C2] uppercase tracking-wider">
                  {selectedProduct.category}
                </span>
                {selectedProduct.machine && (
                  <span className="font-mono text-[11px] text-[#3B82C4] px-2 py-0.5 bg-[#151C24] border border-[#3B82C4]/40 hidden sm:inline-block">
                    {selectedProduct.machine}
                  </span>
                )}
              </div>

              <button
                onClick={() => setSelectedProduct(null)}
                className="p-1.5 text-[#AEB8C2] hover:text-white hover:bg-[#202A33] rounded-sm transition-colors cursor-pointer"
                aria-label="Close machine modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
              {/* Left Column: High-Res Machine Photograph */}
              <div className="relative overflow-hidden border border-[#202A33] bg-[#0B1726] h-[280px] sm:h-[360px]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-110"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-[#0B1726]/90 border border-[#202A33] font-mono text-[10px] text-[#3B82C4]">
                  ASP INDUSTRIES CATALOGUE SPEC
                </div>
              </div>

              {/* Right Column: Complete Functional Breakdown */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F2F4F5] mb-4">
                    {selectedProduct.name}
                  </h3>

                  {/* What work this machine does */}
                  <div className="p-4 bg-[#0B1726] border-l-2 border-[#3B82C4] mb-6">
                    <div className="font-mono text-xs uppercase tracking-wider text-[#3B82C4] font-semibold mb-2 flex items-center gap-1.5">
                      <Wrench className="w-4 h-4" />
                      <span>Primary Work & Operations:</span>
                    </div>
                    <p className="font-sans text-sm text-[#AEB8C2] font-light leading-relaxed">
                      {selectedProduct.whatWorkItDoes}
                    </p>
                  </div>

                  {/* Typical Work Applications */}
                  <div className="mb-6">
                    <div className="font-mono text-xs uppercase tracking-widest text-[#58748D] mb-3">
                      Industrial Applications:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProduct.typicalWork.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 font-mono text-xs text-[#F2F4F5]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82C4] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Inquire Actions */}
                <div className="pt-6 border-t border-[#202A33] flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={generateWhatsAppUrl(selectedProduct.name, `Unit ${selectedProduct.index} Specification Consultation`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#3B82C4] hover:bg-[#4F9BE3] text-white font-mono text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <Link
                    to={`/category/${selectedProduct.categoryId}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#0B1726] border border-[#202A33] hover:border-[#3B82C4] text-[#AEB8C2] hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>Category Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Modal Footer Strip */}
            <div className="px-6 py-3 bg-[#0B1726] border-t border-[#202A33] flex items-center justify-between font-mono text-[10px] text-[#58748D]">
              <span>Khasara No. 7684/6329/219, Gurgaon</span>
              <span>EST. 2006 · 20+ YEARS EXPERIENCE</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
