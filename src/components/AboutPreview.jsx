import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { companyDetails, generateWhatsAppUrl } from '../data/catalogueData';

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 bg-[#0B1726] border-b border-[#202A33] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Workshop Architecture Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative group overflow-hidden border border-[#202A33] bg-[#151C24] shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              {/* Corner Engineering Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#3B82C4] z-20" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#3B82C4] z-20" />
              
              <img
                src="/images/about-workshop.jpg"
                alt="ASP Industries Engineering and Workshop Facility"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/90 via-transparent to-transparent" />

              {/* Bottom Image Caption Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0B1726]/90 border border-[#202A33] backdrop-blur-sm z-10 flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase text-[#AEB8C2] tracking-[0.2em]">Operational Base</div>
                  <div className="font-display text-sm font-semibold text-[#F2F4F5]">Gurgaon, Haryana – India</div>
                </div>
                <div className="font-mono text-xs text-[#3B82C4] font-medium tracking-widest">
                  EST. 2006
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Profile Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-sm bg-[#3B82C4]" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#AEB8C2]">
                ABOUT ASP INDUSTRIES
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F4F5] leading-tight mb-6">
              Experience that understands industry.
            </h2>

            {/* Factual Narrative */}
            <p className="font-sans text-base sm:text-lg text-[#AEB8C2] leading-relaxed font-light mb-6">
              Established in 2006, ASP Industries operates as a manufacturer, supplier, and retailer serving industrial machinery and engineering requirements. Our focus spans die-related products, VMC machinery, turning CNC machines, plastic moulding machines, tool room machinery, and EDM solutions, including specialized EDM job work.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#AEB8C2]/90 leading-relaxed font-light mb-8">
              Built on decades of practical workshop insight, we bridge the gap between machinery procurement and operational uptime for manufacturing facilities, die-makers, and precision engineering enterprises.
            </p>

            {/* Key Verified Competencies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10 pb-8 border-b border-[#202A33]">
              {[
                "Die-making & tooling support",
                "Vertical machining centre supply",
                "Turning CNC machine solutions",
                "Plastic injection moulding systems",
                "Precision EDM job work solutions",
                "Tool room grinding & maintenance"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82C4] shrink-0" />
                  <span className="font-mono text-xs text-[#F2F4F5] tracking-wide">{point}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#catalogue"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#151C24] hover:bg-[#202A33] border border-[#3B82C4] text-[#F2F4F5] font-mono text-xs uppercase tracking-[0.16em] transition-colors"
              >
                <span>Discover Our Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#3B82C4] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={generateWhatsAppUrl("Company Profile Discussion")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-[0.16em] text-[#AEB8C2] hover:text-[#3B82C4] transition-colors px-2 py-1"
              >
                Direct Contact →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
