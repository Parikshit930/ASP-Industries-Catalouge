import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageSquare, ShieldCheck, Layers, FileText, ChevronRight, Wrench, CheckCircle2, Cog } from 'lucide-react';
import { catalogueCategories, featuredProducts, generateWhatsAppUrl, companyDetails } from '../data/catalogueData';
import OfferingCard from '../components/OfferingCard';
import GoogleMapEmbed from '../components/GoogleMapEmbed';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CategoryDetail() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  const category = catalogueCategories.find((cat) => cat.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-[#0B1726] text-[#F2F4F5] flex flex-col justify-between">
        <Navbar />
        <main className="max-w-xl mx-auto px-6 py-32 text-center">
          <div className="font-mono text-xs text-[#3B82C4] mb-2 uppercase tracking-widest">
            Category Not Found
          </div>
          <h1 className="font-display text-3xl font-bold mb-4">
            Catalogue Entry Unavailable
          </h1>
          <p className="font-sans text-sm text-[#AEB8C2] mb-8 font-light">
            The requested machinery category could not be located in the current catalogue directory.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#151C24] border border-[#3B82C4] font-mono text-xs uppercase tracking-wider text-white hover:bg-[#202A33]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Main Catalogue</span>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Other categories for easy cross-navigation
  const otherCategories = catalogueCategories.filter((c) => c.id !== category.id);

  // Manufactured products related to this category
  const relatedProducts = featuredProducts.filter((p) => {
    if (p.categoryId === category.id) return true;
    if (category.id === 'die-products' && (p.filterGroups?.includes('tool-room') || p.categoryId === 'tool-room-machines')) return true;
    if (category.id === 'edm-job-work' && (p.filterGroups?.includes('edm-robo') || p.categoryId === 'edm-machines')) return true;
    return false;
  });

  return (
    <div className="min-h-screen bg-[#0B1726] text-[#F2F4F5]">
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
          <nav className="flex items-center gap-2 font-mono text-xs text-[#58748D] uppercase tracking-wider">
            <Link to="/" className="hover:text-[#F2F4F5] transition-colors">
              Catalogue Home
            </Link>
            <ChevronRight className="w-3 h-3 text-[#202A33]" />
            <Link to="/#catalogue" className="hover:text-[#F2F4F5] transition-colors">
              Categories
            </Link>
            <ChevronRight className="w-3 h-3 text-[#202A33]" />
            <span className="text-[#3B82C4] font-medium">{category.title}</span>
          </nav>
        </div>

        {/* Category Hero Section */}
        <section className="relative border-y border-[#202A33] overflow-hidden bg-[#151C24]">
          {/* Background High-Res Image with Dark Vignette */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1726] via-[#0B1726]/85 to-[#0B1726]/75" />
            <div className="absolute inset-0 bg-tech-grid opacity-25" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              <div className="lg:col-span-7">
                {/* Category Index & Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-[#3B82C4] font-medium tracking-widest px-2.5 py-1 bg-[#0B1726] border border-[#3B82C4]/40">
                    CATEGORY {category.index} / 07
                  </span>
                  <span className="font-mono text-xs text-[#AEB8C2] uppercase tracking-widest">
                    {category.badge}
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F4F5] mb-6">
                  {category.title}
                </h1>

                {/* Verified Short Description */}
                <p className="font-sans text-base sm:text-lg text-[#F2F4F5] font-light leading-relaxed mb-4">
                  {category.shortDescription}
                </p>

                {/* Detailed Context Narrative */}
                <p className="font-sans text-sm sm:text-base text-[#AEB8C2] font-light leading-relaxed mb-8 max-w-2xl">
                  {category.longDescription}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={generateWhatsAppUrl(category.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#3B82C4] hover:bg-[#4F9BE3] text-white font-mono text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(59,130,196,0.25)]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <Link
                    to="/#catalogue"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0B1726] border border-[#202A33] hover:border-[#3B82C4] text-[#AEB8C2] hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>All Categories</span>
                  </Link>
                </div>
              </div>

              {/* Machinery Area Photographic Visual Card */}
              <div className="lg:col-span-5">
                <div className="relative group overflow-hidden border border-[#3B82C4]/50 bg-[#0B1726] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                  {/* Corner Engineering Accents */}
                  <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#3B82C4] z-20" />
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#3B82C4] z-20" />

                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0B1726]/90 backdrop-blur-sm border border-[#3B82C4]/40 font-mono text-[10px] text-[#3B82C4] font-medium tracking-wider">
                      VERIFIED MACHINERY BAY
                    </div>
                    
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="font-mono text-[10px] text-[#AEB8C2] uppercase tracking-wider mb-1">
                        IN-HOUSE INFRASTRUCTURE
                      </div>
                      <div className="font-display text-base sm:text-lg font-bold text-[#F2F4F5]">
                        {category.title}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#151C24] border-t border-[#202A33] flex items-center justify-between font-mono text-xs text-[#AEB8C2]">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Operational In Gurgaon</span>
                    </span>
                    <span className="text-[#3B82C4] font-medium">{category.badge}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* What Work This Machinery Performs Section */}
        {category.whatWorkItDoes && (
          <section className="bg-[#151C24] border-b border-[#202A33] py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench className="w-4 h-4 text-[#3B82C4]" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#3B82C4]">
                      FUNCTIONAL WORK & PROCESS OVERVIEW
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F2F4F5] mb-4">
                    What Work Does This Machinery Perform?
                  </h2>
                  <p className="font-sans text-base text-[#AEB8C2] font-light leading-relaxed">
                    {category.whatWorkItDoes}
                  </p>
                </div>

                <div className="lg:col-span-5 bg-[#0B1726] p-6 border border-[#202A33] rounded-sm">
                  <div className="font-mono text-xs uppercase tracking-widest text-[#58748D] mb-4 font-semibold">
                    Core Operational Tasks:
                  </div>
                  <ul className="space-y-3">
                    {category.coreOperations?.map((op, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#3B82C4] shrink-0 mt-0.5" />
                        <span className="font-mono text-xs text-[#F2F4F5]">{op}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Offerings Grid Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-[#202A33] gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#3B82C4] mb-2">
                SCOPE & OFFERINGS
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F2F4F5]">
                Available Category Solutions
              </h2>
            </div>
            <div className="font-mono text-xs text-[#58748D]">
              Showing {category.offerings.length} Core Solution Modules
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {category.offerings.map((offering) => (
              <OfferingCard 
                key={offering.id} 
                offering={offering} 
                categoryTitle={category.title} 
              />
            ))}
          </div>

          {/* Technical Consultation Notice */}
          <div className="p-8 bg-[#151C24] border border-[#202A33] relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#3B82C4] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Direct Engineering Support</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#F2F4F5] mb-2">
                  Require specific machine parameters or drawings review?
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#AEB8C2] font-light leading-relaxed">
                  In accordance with ASP Industries' client-specific sourcing model, exact models, bed sizes, tonnages, and tolerances are confirmed directly against your operational requirements.
                </p>
              </div>

              <a
                href={generateWhatsAppUrl(category.title, "Custom Parameters Review")}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-3 px-6 py-3.5 bg-[#0B1726] border border-[#3B82C4] hover:bg-[#202A33] text-[#F2F4F5] font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <span>Request Custom Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#3B82C4]" />
              </a>
            </div>
          </div>
        </section>

        {/* Manufactured Components & Tooling Gallery */}
        {relatedProducts.length > 0 && (
          <section className="bg-[#080F18] border-t border-[#202A33] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-[#202A33] gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-sm bg-[#3B82C4]" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#3B82C4]">
                      PHYSICAL WORK OUTPUT
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F2F4F5]">
                    Manufactured Components & Tooling Output
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-[#AEB8C2] font-light mt-1 max-w-2xl">
                    Actual components, die elements, and tooling produced in-house using this machinery class.
                  </p>
                </div>
                <div className="font-mono text-xs text-[#58748D]">
                  {relatedProducts.length} Verified Component{relatedProducts.length > 1 ? 's' : ''} Photographed
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((prod) => (
                  <div 
                    key={prod.id}
                    className="group bg-[#151C24] border border-[#202A33] hover:border-[#3B82C4] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm"
                  >
                    <div>
                      {/* Product Real Photograph */}
                      <div className="relative h-52 overflow-hidden bg-[#0B1726] border-b border-[#202A33]">
                        <img 
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#151C24] via-transparent to-transparent opacity-60" />
                        <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#0B1726]/90 border border-[#3B82C4]/40 font-mono text-[10px] text-[#3B82C4] backdrop-blur-sm">
                          PART #{prod.index}
                        </div>
                        <div className="absolute bottom-2.5 left-3 right-3 font-mono text-[11px] text-[#F2F4F5] truncate px-2 py-0.5 bg-[#0B1726]/80 backdrop-blur-sm border border-[#202A33]">
                          {prod.tag}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="font-mono text-[10px] text-[#58748D] uppercase tracking-wider mb-1">
                          {prod.machine}
                        </div>
                        <h4 className="font-display text-base sm:text-lg font-bold text-[#F2F4F5] group-hover:text-white transition-colors mb-2.5">
                          {prod.name}
                        </h4>
                        <p className="font-sans text-xs text-[#AEB8C2] font-light leading-relaxed mb-4">
                          {prod.whatWorkItDoes}
                        </p>

                        {/* Specs note */}
                        {prod.keySpecsNote && (
                          <div className="p-2.5 bg-[#0B1726] border border-[#202A33] font-mono text-[10px] text-[#AEB8C2] mb-2">
                            <span className="text-[#3B82C4] font-semibold">Specs: </span>
                            {prod.keySpecsNote}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action */}
                    <div className="p-6 pt-0">
                      <a
                        href={generateWhatsAppUrl(category.title, `Component: ${prod.name}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-[#0B1726] hover:bg-[#3B82C4] text-[#AEB8C2] hover:text-white border border-[#202A33] hover:border-[#3B82C4] font-mono text-xs uppercase tracking-wider transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Inquire About Component</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Facility & Workshop Location Map */}
        <section className="border-t border-[#202A33] py-16 bg-[#0B1726]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#3B82C4] mb-2">
                WORKS & FACILITY
              </div>
              <h3 className="font-display text-2xl font-bold text-[#F2F4F5]">
                Visit ASP Industries in Gurgaon
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#AEB8C2] font-light mt-1">
                Clients, procurement teams, and partners are welcome to visit our works for machine inspections and technical consultations.
              </p>
            </div>
            <GoogleMapEmbed compact={false} title={`VISIT FACILITY · ${category.title.toUpperCase()} CONSULTATIONS`} />
          </div>
        </section>

        {/* Cross-Navigation: Explore Other Categories */}
        <section className="bg-[#080F18] border-t border-[#202A33] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#AEB8C2] mb-6">
              Explore Other Catalogue Categories
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {otherCategories.map((other) => (
                <Link
                  key={other.id}
                  to={`/category/${other.id}`}
                  className="group p-4 bg-[#151C24] border border-[#202A33] hover:border-[#3B82C4] transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="font-mono text-[10px] text-[#3B82C4] mb-2">
                    {other.index}
                  </div>
                  <div className="font-display text-sm font-semibold text-[#F2F4F5] group-hover:text-white transition-colors mb-2">
                    {other.title}
                  </div>
                  <div className="font-mono text-[10px] text-[#58748D] group-hover:text-[#3B82C4] flex items-center gap-1 transition-colors">
                    <span>View Category</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
