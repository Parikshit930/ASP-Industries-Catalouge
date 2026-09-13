import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { companyDetails, catalogueCategories, generateWhatsAppUrl } from '../data/catalogueData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080F18] border-t border-[#202A33] text-[#AEB8C2] font-sans">
      {/* Top Banner with Quick Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#202A33]">
          
          {/* Column 1: Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <BrandLogo size="lg" className="mb-6" />
              
              <div className="font-display text-base font-semibold text-[#F2F4F5] mb-2">
                Industrial Machinery · Tool Room · EDM Solutions
              </div>

              <p className="font-sans text-xs text-[#AEB8C2] leading-relaxed max-w-sm mb-6 font-light">
                Established in 2006, ASP Industries serves the manufacturing sector with precision machinery, die-making support, tooling equipment, and specialized EDM job work.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] text-[#58748D]">
              <ShieldCheck className="w-4 h-4 text-[#3B82C4]" />
              <span>Manufacturer · Supplier · Retailer</span>
            </div>
          </div>

          {/* Column 2: Catalogue Categories (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F2F4F5] mb-5 pb-2 border-b border-[#202A33]">
              Machinery Catalogue
            </h4>
            <ul className="space-y-2.5 font-sans text-xs">
              {catalogueCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/category/${cat.id}`}
                    className="hover:text-[#3B82C4] transition-colors flex items-center justify-between group py-1"
                  >
                    <span>{cat.title}</span>
                    <span className="font-mono text-[10px] text-[#58748D] group-hover:text-[#3B82C4]">
                      {cat.index} →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Channels (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F2F4F5] mb-5 pb-2 border-b border-[#202A33]">
              Direct Contact
            </h4>
            <div className="space-y-3 font-mono text-xs">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F2F4F5] hover:text-[#3B82C4] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82C4]" />
                <span>{companyDetails.phone}</span>
                <ArrowUpRight className="w-3 h-3 text-[#3B82C4]" />
              </a>

              <a
                href={`mailto:${companyDetails.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#58748D] shrink-0" />
                <span>{companyDetails.email}</span>
              </a>

              <div className="flex items-start gap-2 pt-2 text-[11px] text-[#AEB8C2] font-sans">
                <MapPin className="w-3.5 h-3.5 text-[#58748D] shrink-0 mt-0.5" />
                <span className="leading-snug">{companyDetails.address.full}</span>
              </div>
              <div className="pt-1">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(companyDetails.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] text-[#3B82C4] hover:text-[#4F9BE3] transition-colors uppercase tracking-wider"
                >
                  <span>Get Directions on Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#58748D]">
          <div>
            © {new Date().getFullYear()} ASP Industries. All rights reserved. Est. 2006.
          </div>

          <div className="flex items-center gap-6">
            <span>Gurgaon, Haryana, India</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#AEB8C2] hover:text-white transition-colors uppercase tracking-wider"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#3B82C4]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
