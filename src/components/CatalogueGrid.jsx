import React, { useState } from 'react';
import { catalogueCategories } from '../data/catalogueData';
import CatalogueCard from './CatalogueCard';
import { Layers, Wrench, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function CatalogueGrid() {
  const [filter, setFilter] = useState('all');

  const filteredCategories = catalogueCategories.filter((cat) => {
    if (filter === 'machinery') return !cat.isService && cat.id.includes('machine');
    if (filter === 'services') return cat.isService || cat.id === 'die-products';
    return true;
  });

  return (
    <section id="catalogue" className="py-24 bg-[#0B1726] border-b border-[#202A33] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#202A33] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-sm bg-[#3B82C4]" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#AEB8C2]">
                OUR CATALOGUE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F4F5]">
              Industrial capabilities, clearly presented.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#AEB8C2] mt-3 max-w-2xl font-light">
              Explore our core machinery and engineering categories. Structured for procurement clarity and technical evaluation.
            </p>
          </div>

          {/* Quick Segment Filter */}
          <div className="flex items-center gap-2 self-start md:self-end bg-[#151C24] p-1.5 border border-[#202A33]">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                filter === 'all'
                  ? 'bg-[#202A33] text-white border border-[#3B82C4]/60'
                  : 'text-[#AEB8C2] hover:text-white'
              }`}
            >
              All (0{catalogueCategories.length})
            </button>
            <button
              onClick={() => setFilter('machinery')}
              className={`px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                filter === 'machinery'
                  ? 'bg-[#202A33] text-white border border-[#3B82C4]/60'
                  : 'text-[#AEB8C2] hover:text-white'
              }`}
            >
              Machinery
            </button>
            <button
              onClick={() => setFilter('services')}
              className={`px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                filter === 'services'
                  ? 'bg-[#202A33] text-white border border-[#3B82C4]/60'
                  : 'text-[#AEB8C2] hover:text-white'
              }`}
            >
              Tooling & EDM
            </button>
          </div>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <CatalogueCard 
              key={category.id} 
              category={category} 
              featured={filter === 'all' && idx === 0} 
            />
          ))}
        </div>

        {/* Bottom Editorial Footnote */}
        <div className="mt-12 p-6 bg-[#151C24]/80 border border-[#202A33] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#AEB8C2]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3B82C4]" />
            <span>Need a custom specification or complete plant tooling requirement?</span>
          </div>
          <a
            href="#contact"
            className="text-[#3B82C4] hover:text-[#4F9BE3] uppercase tracking-widest transition-colors font-medium"
          >
            Contact Engineering Team →
          </a>
        </div>

      </div>
    </section>
  );
}
