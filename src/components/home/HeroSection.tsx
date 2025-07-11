import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const navigate = useNavigate();

  const bgY = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 15, 0],
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src="/hero-banner.jpg" // Place this image in /public directory
          alt="Modern elevator"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Foreground Content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl px-4 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-start justify-center h-full max-h-[90vh] space-y-6">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-lg"
          >
            Elevating Lives.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
              One Lift at a Time.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl font-semibold drop-shadow-md"
          >
            Luxury, safety, and innovation — crafted for every journey.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => navigate('/contactpage')}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl text-base font-semibold hover:from-blue-600 hover:to-blue-800 transition-all flex items-center"
            >
              Book a Free Site Visit
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('/testimonials')}
              className="border border-white text-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-xl text-base font-semibold transition"
            >
              View Our Work
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4"
          >
            <div className="flex items-center space-x-3 bg-white/20 backdrop-blur p-3 rounded-lg">
              <Shield className="w-8 h-8 text-white" />
              <div>
                <div className="font-semibold text-sm text-white">100% Safe</div>
                <div className="text-xs text-white/80">Certified & Tested</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/20 backdrop-blur p-3 rounded-lg">
              <Award className="w-8 h-8 text-white" />
              <div>
                <div className="font-semibold text-sm text-white">15+ Years</div>
                <div className="text-xs text-white/80">Industry Experience</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/20 backdrop-blur p-3 rounded-lg">
              <Clock className="w-8 h-8 text-white" />
              <div>
                <div className="font-semibold text-sm text-white">24/7 Support</div>
                <div className="text-xs text-white/80">Emergency Service</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 text-white"
        variants={scrollIndicatorVariants}
        animate="animate"
      >
        <div className="flex flex-col items-center space-y-1">
          <span className="text-xs font-medium">Discover More</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div className="w-1 h-3 bg-blue-500 mt-1 rounded-full"></motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
