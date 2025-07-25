import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProductGrid from '../components/home/ProductGrid';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PartnersSection from '../components/home/PartnersSection';
import Footer from '../components/Footer'; // Corrected path

const HomePage = () => {
  return (
    <div className="min-h-screen text-brand-text overflow-hidden bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Elegant divider with fade effect */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-bottle-green-solid/40 to-transparent my-2 sm:my-4"></div>
      
      {/* Content Sections with refined spacing */}
      <div className="px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-start">
          {/* ProductGrid now aligned to the extreme left */}
          <div className="flex-grow">
            {/* Added padding above ProductGrid to make "Our Product Range" feel more connected */}
            <div className="pt-4">
              <ProductGrid />
            </div>
          </div>
        </div>
        
        {/* Elegant divider with fade effect */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-bottle-green-solid/40 to-transparent my-6 sm:my-8"></div>
        
        <TestimonialsSection />
        
        {/* Elegant divider with fade effect */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-bottle-green-solid/40 to-transparent my-6 sm:my-8"></div>
        
        <PartnersSection />
      </div>
      
      {/* Clear divider between PartnersSection and subtle footer */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-bottle-green-solid/80 to-transparent my-8"></div>
      
      {/* Subtle footer between partners and main footer */}
      <div className="bg-gray-50 py-4">
        <div className="px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2023 Company Name. All rights reserved.</p>
        </div>
      </div>
      
      {/* Main footer */}
      <Footer />
    </div>
  );
};

export default HomePage;