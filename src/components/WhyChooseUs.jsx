import React from 'react';
import { Clock, Layers, Users, MessageSquareCode } from 'lucide-react';
import { valuePillars } from '../data/catalogueData';

export default function WhyChooseUs() {
  const icons = [Clock, Layers, Users, MessageSquareCode];

  return (
    <section className="py-24 bg-[#0B1726] border-b border-[#202A33] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-sm bg-[#3B82C4]" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#AEB8C2]">
              BUSINESS PROFILE & CREDIBILITY
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F4F5]">
            Why Partner with ASP Industries
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#AEB8C2] mt-3 font-light">
            A grounded, responsive industrial enterprise structured to support manufacturing facilities, tool rooms, and production plants.
          </p>
        </div>

        {/* 4 Verified Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePillars.map((pillar, idx) => {
            const Icon = icons[idx];
            return (
              <div 
                key={idx}
                className="group relative p-8 bg-[#151C24] border border-[#202A33] hover:border-[#3B82C4]/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-sm bg-[#0B1726] border border-[#202A33] flex items-center justify-center group-hover:border-[#3B82C4] transition-colors">
                      <Icon className="w-5 h-5 text-[#3B82C4]" />
                    </div>
                    <span className="font-mono text-[10px] text-[#AEB8C2] tracking-widest px-2 py-0.5 bg-[#0B1726] border border-[#202A33]">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-[#F2F4F5] mb-3 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#AEB8C2] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom accent indicator */}
                <div className="mt-8 pt-4 border-t border-[#202A33] flex items-center justify-between font-mono text-[10px] text-[#58748D]">
                  <span>PILLAR 0{idx + 1}</span>
                  <span className="group-hover:text-[#3B82C4] transition-colors">ASP CORE</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
