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
      className="min-h-screen relative bg-gray-900 text-white overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #1e3a8a 0%, #111827 100%)',
        animation: 'backgroundShift 20s ease-in-out infinite',
      }}
    >
      {/* Global Styles with Font */}
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

      <div className="relative z-10 pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <HeroSection />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <ProductGrid />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-lg"
        >
          <ContactForm />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <TestimonialsSection />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <PartnersSection />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;