import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProductGrid from '../components/home/ProductGrid';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PartnersSection from '../components/home/PartnersSection';
import BookVisitButton from '../components/BookVisitButton';

const HomePage = () => {
  return (
    <div className="min-h-screen text-brand-text overflow-hidden bg-white">
      {/* Hero Section - no extra spacing */}
      <HeroSection />

      {/* Content Sections with tighter spacing */}
      <div className="px-4 sm:px-6 lg:px-8 space-y-12 pt-6 pb-12">
        {/* Book Visit Button Section */}
        <div className="flex justify-center">
          <BookVisitButton />
        </div>
        <ProductGrid />
        <TestimonialsSection />
        <PartnersSection />
      </div>
    </div>
  );
};

export default HomePage;