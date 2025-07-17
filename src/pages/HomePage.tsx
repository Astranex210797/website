import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import ProductGrid from '../components/home/ProductGrid';
import ContactForm from '../components/ContactForm';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PartnersSection from '../components/home/PartnersSection';

const HomePage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 80,
      },
    },
  };

  return (
    <div className="min-h-screen relative text-brand-text overflow-hidden bg-white">
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="min-h-screen"
        >
          <HeroSection />
        </motion.div>

        {/* Removed top padding between Hero and Product Grid */}
        <div className="px-4 sm:px-6 lg:px-8 pt-0 pb-8">
          {/* Product Grid Section */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12"
          >
            <ProductGrid />
          </motion.div>

          {/* Testimonials */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12"
          >
            <TestimonialsSection />
          </motion.div>

          {/* Partners */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <PartnersSection />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
