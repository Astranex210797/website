import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProductGrid from '../components/home/ProductGrid';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PartnersSection from '../components/home/PartnersSection';

const HomePage = () => {
  return (
    <div className="min-h-screen text-brand-text overflow-hidden bg-white">
      {/* Hero Section - no extra spacing */}
      <HeroSection />

      {/* Subtle divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-bottle-green-solid/20 to-transparent"></div>

      {/* Content Sections with tighter spacing */}
      <div className="px-4 sm:px-6 lg:px-8 space-y-2 sm:space-y-8 pt-4 pb-8">
        <ProductGrid />
        
        {/* Subtle divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-bottle-green-solid/20 to-transparent my-8"></div>
        
        <TestimonialsSection />
        
        {/* Subtle divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-bottle-green-solid/20 to-transparent my-8"></div>
        
        <PartnersSection />
      </div>
    </div>
  );
};

export default HomePage;