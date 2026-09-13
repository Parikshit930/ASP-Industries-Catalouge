import React from 'react';
import { ArrowUpRight, MessageSquare, FileText, CheckCircle } from 'lucide-react';
import { generateWhatsAppUrl, companyDetails } from '../data/catalogueData';

export default function OfferingCard({ offering, categoryTitle }) {
  const whatsappUrl = generateWhatsAppUrl(categoryTitle, offering.name);

  return (
    <div className="group relative p-7 bg-[#151C24] border border-[#202A33] hover:border-[#3B82C4]/70 transition-all duration-300 flex flex-col justify-between">
      {/* Top Image & Meta */}
      <div>
        {offering.image && (
          <div className="relative h-44 -mx-7 -mt-7 mb-5 overflow-hidden border-b border-[#202A33] bg-[#0B1726]">
            <img 
              src={offering.image} 
              alt={offering.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151C24] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-2.5 left-3 font-mono text-[10px] text-[#3B82C4] px-2 py-0.5 bg-[#0B1726]/90 border border-[#3B82C4]/30 backdrop-blur-sm">
              SPECIFICATION MODULE
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#3B82C4] px-2 py-0.5 bg-[#0B1726] border border-[#3B82C4]/30">
            INDUSTRIAL OFFERING
          </span>
          <span className="font-mono text-[10px] text-[#58748D] uppercase tracking-wider">
            ASP SCOPE
          </span>
        </div>

        {/* Offering Title */}
        <h4 className="font-display text-lg sm:text-xl font-bold text-[#F2F4F5] mb-2.5 group-hover:text-white transition-colors">
          {offering.name}
        </h4>

        {/* Offering Description */}
        <p className="font-sans text-xs sm:text-sm text-[#AEB8C2] leading-relaxed font-light mb-6">
          {offering.description}
        </p>
      </div>

      {/* Action Footer */}
      <div>
        {/* Verified Integrity Tag */}
        <div className="flex items-center gap-2 mb-4 pt-4 border-t border-[#202A33] font-mono text-[10px] text-[#58748D]">
          <CheckCircle className="w-3 h-3 text-[#3B82C4]" />
          <span>Specifications provided upon direct consultation</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#3B82C4] hover:bg-[#4F9BE3] text-white font-mono text-xs uppercase tracking-wider transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Enquire on WhatsApp</span>
          </a>

          <a
            href={`mailto:${companyDetails.email}?subject=${encodeURIComponent(`Inquiry: ${offering.name} (${categoryTitle})`)}&body=${encodeURIComponent(`Hello ASP Industries,\n\nI am inquiring regarding ${offering.name} listed in your ${categoryTitle} catalogue. Please provide available models, technical specifications, and delivery terms.\n\nThank you.`)}`}
            className="px-3.5 py-2.5 bg-[#0B1726] border border-[#202A33] hover:border-[#3B82C4] text-[#AEB8C2] hover:text-white font-mono text-xs transition-colors"
            title="Request RFQ via Email"
          >
            <FileText className="w-4 h-4 text-[#3B82C4]" />
          </a>
        </div>
      </div>
    </div>
  );
}
