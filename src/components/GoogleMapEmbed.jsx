import React, { useState } from 'react';
import { MapPin, ExternalLink, Navigation, Compass, Layers, Eye } from 'lucide-react';
import { companyDetails } from '../data/catalogueData';

/**
 * GOOGLE_MAPS_EMBED_URL Configuration
 * 
 * Verified Google Maps Embed URL for ASP Industries:
 * Khasara No. 7684/6329/219, Daultabad, Tek Chand Nagar, Gali No. 12, Gurgaon – 122001, Haryana, India.
 */
export const GOOGLE_MAPS_EMBED_URL = companyDetails.googleMapsEmbedUrl;

export default function GoogleMapEmbed({ compact = false, title = "VISIT ASP INDUSTRIES · WORKS & OFFICE" }) {
  const [mapTheme, setMapTheme] = useState('dark'); // 'dark' or 'default'
  const hasEmbedUrl = Boolean(GOOGLE_MAPS_EMBED_URL && GOOGLE_MAPS_EMBED_URL.trim().length > 0);

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(companyDetails.address.full)}`;

  return (
    <div className="w-full relative overflow-hidden border border-[#202A33] bg-[#151C24] shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
      {/* Top Header Strip */}
      <div className="px-6 py-4 bg-[#0B1726] border-b border-[#202A33] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <MapPin className="w-4 h-4 text-[#3B82C4]" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#AEB8C2]">
            {title}
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Map view styling toggle */}
          {hasEmbedUrl && (
            <button
              onClick={() => setMapTheme(mapTheme === 'dark' ? 'default' : 'dark')}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#151C24] hover:bg-[#202A33] border border-[#202A33] hover:border-[#3B82C4] font-mono text-[10px] text-[#AEB8C2] hover:text-white uppercase tracking-wider transition-colors"
              title="Toggle dark/standard map appearance"
            >
              <Eye className="w-3 h-3 text-[#3B82C4]" />
              <span>{mapTheme === 'dark' ? 'Standard View' : 'Dark Mode'}</span>
            </button>
          )}

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#3B82C4] hover:bg-[#4F9BE3] text-white font-mono text-[11px] uppercase tracking-wider transition-colors shadow-sm"
          >
            <Navigation className="w-3 h-3" />
            <span>Get Directions</span>
          </a>

          <a
            href={companyDetails.googleMapsQueryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[11px] text-[#AEB8C2] hover:text-white uppercase tracking-wider transition-colors"
          >
            <span>Open Maps</span>
            <ExternalLink className="w-3 h-3 text-[#3B82C4]" />
          </a>
        </div>
      </div>

      {/* Map Container: Verified Google Maps Iframe */}
      <div className={`relative w-full ${compact ? 'h-[280px] sm:h-[340px]' : 'h-[360px] sm:h-[440px] lg:h-[480px]'} bg-[#0B1726] flex items-center justify-center overflow-hidden`}>
        {hasEmbedUrl ? (
          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
            title="ASP Industries Verified Location - Gurgaon"
            className={`w-full h-full border-0 transition-all duration-300 ${
              mapTheme === 'dark' 
                ? 'filter invert-[0.88] hue-rotate-180 contrast-125' 
                : 'filter contrast-105'
            }`}
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center select-none">
            <div className="relative z-10 max-w-md p-6 bg-[#151C24]/90 border border-[#3B82C4]/40 shadow-2xl backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-[#0B1726] border border-[#3B82C4] flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-5 h-5 text-[#3B82C4] animate-pulse" />
              </div>
              <h4 className="font-display text-base font-bold text-[#F2F4F5] uppercase tracking-wider mb-2">
                Gurgaon Facility Location
              </h4>
              <p className="font-sans text-xs text-[#AEB8C2] leading-relaxed mb-4">
                {companyDetails.address.full}
              </p>
              <a
                href={companyDetails.googleMapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3B82C4] hover:bg-[#4F9BE3] text-white font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Address Details Bar */}
      <div className="p-6 bg-[#151C24] border-t border-[#202A33]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div>
            <span className="text-[#58748D] uppercase block text-[10px] tracking-widest mb-1">Plot & Khasara</span>
            <span className="text-[#F2F4F5]">{companyDetails.address.khasra}</span>
          </div>
          <div>
            <span className="text-[#58748D] uppercase block text-[10px] tracking-widest mb-1">Sector & Street</span>
            <span className="text-[#F2F4F5]">{companyDetails.address.area}</span>
          </div>
          <div>
            <span className="text-[#58748D] uppercase block text-[10px] tracking-widest mb-1">City, Pincode & State</span>
            <span className="text-[#F2F4F5]">{companyDetails.address.city} – {companyDetails.address.pincode}, {companyDetails.address.state}, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}
