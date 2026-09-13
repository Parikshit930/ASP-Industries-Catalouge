import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ASP Industries Brand Logo Component
 * 
 * Modular temporary brand identity designed with geometric engineering aesthetics.
 * Ready for drop-in replacement when official client vector identity is provided.
 */
export default function BrandLogo({ 
  variant = 'full', 
  size = 'md', 
  asLink = true,
  className = '',
  light = false 
}) {
  // Size configurations
  const markSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const titleSizes = {
    sm: 'text-base tracking-[0.2em]',
    md: 'text-lg md:text-xl tracking-[0.22em]',
    lg: 'text-2xl md:text-3xl tracking-[0.24em]',
    xl: 'text-3xl md:text-4xl tracking-[0.26em]'
  };

  const subSizes = {
    sm: 'text-[9px] tracking-[0.3em]',
    md: 'text-[10px] tracking-[0.35em]',
    lg: 'text-xs tracking-[0.4em]',
    xl: 'text-sm tracking-[0.45em]'
  };

  // Geometric engineering mark
  const MarkSvg = () => (
    <div className={`relative ${markSizes[size]} shrink-0 flex items-center justify-center`}>
      <svg 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-300 group-hover:scale-105"
      >
        {/* Outer technical frame with beveled corner */}
        <path 
          d="M6 14L14 6H42V34L34 42H6V14Z" 
          fill={light ? "#F2F4F5" : "#151C24"}
          stroke={light ? "#3B82C4" : "#3B82C4"} 
          strokeWidth="2"
          className="transition-colors duration-300"
        />
        {/* Engineering corner tick & alignment lines */}
        <line x1="14" y1="6" x2="6" y2="14" stroke="#AEB8C2" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="34" y1="42" x2="42" y2="34" stroke="#AEB8C2" strokeWidth="1" strokeOpacity="0.6" />
        
        {/* Precision Core A-monogram & chevron */}
        <path 
          d="M16 32L24 16L32 32" 
          stroke={light ? "#0B1726" : "#F2F4F5"} 
          strokeWidth="2.5" 
          strokeLinecap="square"
        />
        <line 
          x1="19" 
          y1="26.5" 
          x2="29" 
          y2="26.5" 
          stroke="#3B82C4" 
          strokeWidth="2.5" 
        />
        
        {/* Coordinate indicator dot */}
        <circle cx="24" cy="11" r="1.5" fill="#3B82C4" />
      </svg>
    </div>
  );

  const LogoContent = (
    <div className={`group inline-flex items-center gap-3.5 select-none ${className}`}>
      {variant !== 'text' && <MarkSvg />}
      
      {variant !== 'mark' && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className={`font-display font-bold leading-none uppercase ${titleSizes[size]} ${light ? 'text-[#0B1726]' : 'text-[#F2F4F5]'}`}>
              ASP
            </span>
            <span className={`font-display font-medium leading-none uppercase ${titleSizes[size]} ${light ? 'text-[#3B82C4]' : 'text-[#3B82C4]'}`}>
              INDUSTRIES
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className={`font-mono uppercase ${subSizes[size]} ${light ? 'text-[#58748D]' : 'text-[#AEB8C2]'}`}>
              EST. 2006 · MACHINERY CATALOGUE
            </span>
          </div>
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link to="/" className="inline-block focus:outline-none focus:ring-1 focus:ring-[#3B82C4]/50 rounded-sm">
        {LogoContent}
      </Link>
    );
  }

  return LogoContent;
}
