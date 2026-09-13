import React from 'react';
import { trustHighlights } from '../data/catalogueData';

export default function TrustStrip() {
  return (
    <section className="bg-[#151C24] border-b border-[#202A33] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#202A33]">
          {trustHighlights.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index > 0 ? 'pt-4 md:pt-0 md:pl-6 lg:pl-8' : ''}`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#3B82C4]" />
                <span className="font-mono text-[10px] sm:text-[11px] text-[#58748D] uppercase tracking-[0.2em] font-medium">
                  {item.label}
                </span>
              </div>
              <div className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-[#F2F4F5] tracking-tight">
                {item.value}
              </div>
              <div className="font-sans text-xs text-[#AEB8C2] mt-0.5 font-light">
                {item.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
