import React, { useState, useEffect } from 'react';
import EntryExperience from '../components/EntryExperience';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import AboutPreview from '../components/AboutPreview';
import PartnersStrip from '../components/PartnersStrip';
import CatalogueGrid from '../components/CatalogueGrid';
import ProductShowcaseCarousel from '../components/ProductShowcaseCarousel';
import MachineFacilities from '../components/MachineFacilities';
import JobWorkSection from '../components/JobWorkSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const [showEntry, setShowEntry] = useState(true);

  useEffect(() => {
    // Check if entered previously in session
    const entered = sessionStorage.getItem('asp_catalogue_entered');
    if (entered === 'true') {
      setShowEntry(false);
    }
  }, []);

  const handleEnterCatalogue = () => {
    setShowEntry(false);
  };

  const handleReplayIntro = () => {
    sessionStorage.removeItem('asp_catalogue_entered');
    setShowEntry(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-[#0B1726] text-[#F2F4F5] flex flex-col selection:bg-[#3B82C4]/30 selection:text-white">
      {/* Cinematic Entry Overlay */}
      {showEntry && (
        <EntryExperience onEnter={handleEnterCatalogue} />
      )}

      {/* Main Website Structure */}
      <Navbar onReplayIntro={handleReplayIntro} />
      
      <main className="flex-grow">
        <Hero onExploreClick={() => {
          const el = document.getElementById('catalogue');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        <TrustStrip />

        <PartnersStrip />

        <AboutPreview />

        <CatalogueGrid />

        <ProductShowcaseCarousel />

        <MachineFacilities />

        <JobWorkSection />

        <WhyChooseUs />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
