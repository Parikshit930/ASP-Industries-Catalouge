import React from 'react';
import { ArrowRight, MessageSquare, Zap, CheckCircle2 } from 'lucide-react';
import { generateWhatsAppUrl } from '../data/catalogueData';

export default function JobWorkSection() {
  const jobWorkPoints = [
    "Intricate die cavities & hardened mould inserts",
    "Deep-rib spark erosion and fine contouring",
    "Non-contact thermal erosion for stress-free workpieces",
    "Tool room support for specialized tooling projects"
  ];

  return (
    <section 
      id="edm-job-work" 
      className="py-24 bg-[#151C24] border-b border-[#202A33] relative overflow-hidden"
    >
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-tech-grid-dense opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Technical Narrative & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0B1726] border border-[#3B82C4]/40 rounded-sm mb-4 self-start">
              <Zap className="w-3.5 h-3.5 text-[#3B82C4]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#AEB8C2]">
                PRECISION JOB WORK
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F4F5] leading-tight mb-6">
              Precision where detail matters.
            </h2>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-[#AEB8C2] font-light leading-relaxed mb-6">
              ASP Industries provides dedicated EDM job work solutions for industrial manufacturing and tooling requirements. When conventional machining reaches its limits on hardened tool steels, complex contours, and fragile ribs, our EDM facilities deliver controlled electro-discharge machining.
            </p>

            {/* Scope Bullets */}
            <div className="space-y-3 mb-8">
              {jobWorkPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82C4]" />
                  <span className="font-mono text-xs sm:text-sm text-[#F2F4F5] tracking-wide">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Enquiry Prompt Box */}
            <div className="p-6 bg-[#0B1726] border border-[#3B82C4]/30 rounded-sm mb-8">
              <div className="font-display text-sm font-semibold text-[#F2F4F5] mb-1">
                Have an EDM machining requirement?
              </div>
              <p className="font-sans text-xs text-[#AEB8C2] font-light mb-4">
                Share component drawings, technical profiles, or tooling specifications directly with our team for prompt review.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={generateWhatsAppUrl("EDM Job Work Solutions", "Custom Job Work Inquiry")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-6 py-3 bg-[#3B82C4] hover:bg-[#4F9BE3] text-white font-mono text-xs uppercase tracking-[0.16em] transition-all duration-200 shadow-[0_0_15px_rgba(59,130,196,0.25)] active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  className="font-mono text-xs uppercase tracking-[0.16em] text-[#AEB8C2] hover:text-white transition-colors"
                >
                  View Contact Details →
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Close-up EDM Spark Machining Visual */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative group overflow-hidden border border-[#3B82C4]/40 bg-[#0B1726] shadow-[0_25px_50px_rgba(0,0,0,0.6)]">
              {/* Corner Engineering Framing */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#3B82C4] z-20" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#3B82C4] z-20" />
              
              <img
                src="/images/edm-job-work.jpg"
                alt="Controlled EDM Electrical Spark Machining in Dielectric Fluid"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center filter brightness-95 contrast-115 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726] via-transparent to-transparent" />

              {/* Technical HUD Overlay on Image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0B1726]/90 border border-[#202A33] backdrop-blur-md z-10 flex items-center justify-between font-mono text-[11px]">
                <div className="flex items-center gap-2 text-[#AEB8C2]">
                  <span className="w-2 h-2 rounded-full bg-[#3B82C4] animate-pulse" />
                  <span>ELECTRO-DISCHARGE WORKBENCH</span>
                </div>
                <span className="text-[#3B82C4] font-medium tracking-widest">
                  PRECISION JOB WORK
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
