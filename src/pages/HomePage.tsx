// HomePage.tsx
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
    <div
      className="min-h-screen relative text-brand-text overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #145943 0%, #1ABC9C 60%, #F2FCF9 100%)',
        animation: 'backgroundShift 20s ease-in-out infinite',
      }}
    >
      {/* Global Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          @keyframes backgroundShift {
            0% { background-position: 50% 50%; }
            50% { background-position: 60% 60%; }
            100% { background-position: 50% 50%; }
          }
        `}
      </style>

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

        <div className="px-4 sm:px-6 lg:px-8 pt-20 pb-20">
          {/* Product Grid Section (Carousel) */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-24"
          >
            <ProductGrid />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-24 bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-brand-dark"
          >
            <ContactForm />
          </motion.div>

          {/* Testimonials */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-24"
          >
            <TestimonialsSection />
          </motion.div>

          {/* Partners */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-24"
          >
            <PartnersSection />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;