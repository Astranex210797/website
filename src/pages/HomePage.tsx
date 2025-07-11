import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProductGrid from '../components/home/ProductGrid';
import ContactForm from '../components/ContactForm';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PartnersSection from '../components/home/PartnersSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ProductGrid />
      <ContactForm />
      <TestimonialsSection />
      <PartnersSection />
    </div>
  );
};

export default HomePage;