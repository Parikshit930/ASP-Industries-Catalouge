import React from 'react';
import { esteemedPartners } from '../data/catalogueData';
import { ShieldCheck, Award } from 'lucide-react';

export default function PartnersStrip() {
  return (
    <section className="py-14 bg-[#151C24] border-b border-[#202A33] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Label */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#202A33]">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#AEB8C2]">
            <Award className="w-4 h-4 text-[#3B82C4]" />
            <span>ESTEEMED CLIENTS & INDUSTRIAL PARTNERS</span>
          </div>
          <div className="font-mono text-[11px] text-[#58748D]">
            TRUSTED COMPONENT & TOOLING SUPPLIER
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {esteemedPartners.map((partner, idx) => (
            <div 
              key={idx}
              className="p-4 bg-[#0B1726] border border-[#202A33] hover:border-[#3B82C4]/70 transition-all duration-200 flex flex-col justify-center text-center group"
            >
              <div className="font-display text-sm font-bold text-[#F2F4F5] group-hover:text-white transition-colors">
                {partner.name}
              </div>
              <div className="font-mono text-[10px] text-[#58748D] group-hover:text-[#AEB8C2] transition-colors mt-1">
                {partner.segment}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
