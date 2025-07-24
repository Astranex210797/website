import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProductGrid from '../components/home/ProductGrid';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PartnersSection from '../components/home/PartnersSection';

const HomePage = () => {
  return (
    <div className="min-h-screen text-brand-text overflow-hidden bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Subtle divider with fade effect */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-bottle-green-solid/30 to-transparent my-2 sm:my-4"></div>
      
      {/* Content Sections with refined spacing */}
      <div className="px-4 sm:px-6 lg:px-8 space-y-6">
        <ProductGrid />
        
        {/* Subtle divider with fade effect */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-bottle-green-solid/30 to-transparent my-6 sm:my-8"></div>
        
        <TestimonialsSection />
        
        {/* Subtle divider with fade effect */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-bottle-green-solid/30 to-transparent my-6 sm:my-8"></div>
        
        <PartnersSection />
      </div>
    </div>
  );
};

export default HomePage;