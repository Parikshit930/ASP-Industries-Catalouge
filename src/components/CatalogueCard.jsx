import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Crosshair, Sparkles, CheckCircle2 } from 'lucide-react';
import { generateWhatsAppUrl } from '../data/catalogueData';

export default function CatalogueCard({ category, featured = false }) {
  return (
    <div 
      className={`group relative flex flex-col justify-between overflow-hidden border border-[#202A33] hover:border-[#3B82C4] bg-[#151C24] transition-all duration-300 shadow-md ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Top Dedicated Machinery Photo Container */}
      <div className={`relative overflow-hidden bg-[#0B1726] border-b border-[#202A33] ${
        featured ? 'h-64 sm:h-72 lg:h-80' : 'h-52 sm:h-56'
      }`}>
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover object-center filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-700 ease-out"
          loading="lazy"
        />
        {/* Subtle Bottom Shadow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151C24] via-transparent to-transparent opacity-80" />

        {/* Top Badges over Photo */}
        <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
          <span className="font-mono text-xs text-[#3B82C4] font-medium tracking-widest px-2.5 py-1 bg-[#0B1726]/90 border border-[#3B82C4]/50 backdrop-blur-sm shadow-sm">
            {category.index} / 07
          </span>
          {category.isService && (
            <span className="font-mono text-[10px] text-[#AEB8C2] uppercase tracking-wider px-2 py-0.5 bg-[#202A33]/90 border border-[#58748D]/40 flex items-center gap-1 backdrop-blur-sm">
              <Sparkles className="w-2.5 h-2.5 text-[#3B82C4]" />
              Precision Service
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3 font-mono text-[10px] text-[#AEB8C2] uppercase tracking-widest px-2.5 py-1 bg-[#0B1726]/90 border border-[#202A33] backdrop-blur-sm z-10 hidden sm:block">
          {category.badge}
        </div>
      </div>

      {/* Card Content & Action Area */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Hairline Accent Line */}
          <div className="w-8 h-[2px] bg-[#3B82C4] mb-3 group-hover:w-16 transition-all duration-300" />

          {/* Title */}
          <h3 className={`font-display font-bold text-[#F2F4F5] tracking-tight group-hover:text-white transition-colors mb-2.5 ${
            featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
          }`}>
            {category.title}
          </h3>

          {/* Short Description */}
          <p className={`font-sans text-[#AEB8C2] font-light leading-relaxed mb-4 ${
            featured ? 'text-sm sm:text-base line-clamp-3' : 'text-xs sm:text-sm line-clamp-2'
          }`}>
            {category.shortDescription}
          </p>

          {/* Core Operations Preview */}
          {category.coreOperations && category.coreOperations.length > 0 && (
            <div className="space-y-1.5 mb-5 pt-3 border-t border-[#202A33]">
              {category.coreOperations.slice(0, featured ? 3 : 2).map((op, i) => (
                <div key={i} className="flex items-center gap-2 font-mono text-[11px] text-[#AEB8C2]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82C4] shrink-0" />
                  <span className="truncate">{op}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Interactive Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-[#202A33] mt-auto">
          <Link
            to={`/category/${category.id}`}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#F2F4F5] hover:text-[#3B82C4] group/link transition-colors focus:outline-none font-medium"
          >
            <span>View Category</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#3B82C4] group-hover/link:translate-x-1 transition-transform" />
          </Link>

          <span className="text-[#202A33]">|</span>

          <a
            href={generateWhatsAppUrl(category.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-wider text-[#AEB8C2] hover:text-white transition-colors"
          >
            Enquire WhatsApp →
          </a>
        </div>
      </div>

      {/* Subtle Corner Engineering Notches */}
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#3B82C4]/40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#3B82C4]/40 pointer-events-none" />
    </div>
  );
}
