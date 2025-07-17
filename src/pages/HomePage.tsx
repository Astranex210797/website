// HomePage.tsx
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProductGrid from '../components/home/ProductGrid';
import ContactForm from '../components/ContactForm';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PartnersSection from '../components/home/PartnersSection';

const HomePage = () => {
  return (
    <div className="min-h-screen relative text-brand-text overflow-hidden bg-white">
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Product Grid Section */}
        <ProductGrid />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Partners */}
        <PartnersSection />
      </div>
    </div>
  );
};

export default HomePage;
