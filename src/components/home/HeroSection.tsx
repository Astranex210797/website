import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 50]); // Parallax effect
  const navigate = useNavigate();

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <img
          src="/WhatsApp Image 2025-07-11 at 11.55.53_413f52a1.jpg"
          alt="Modern elevator interior showcasing luxury and safety"
          className="w-full h-full min-h-screen object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-blue-800/20 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-900"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl">
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-tight mb-6 tracking-tight text-shadow-lg"
          >
            Elevating Lives.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
              One Lift at a Time.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-800 mb-10 leading-relaxed font-light"
          >
            Luxury, safety, and innovation — crafted for every journey.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <button
              onClick={() => navigate('/contact')}
              className="relative bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-400/50"
            >
              Book a Free Site Visit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 rounded-xl bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => navigate('/testimonials')}
              className="relative border-2 border-blue-500/80 hover:border-blue-500 text-gray-900 hover:bg-blue-500/10 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              View Our Work
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
          >
            <div className="flex items-center space-x-4 bg-blue-50/80 backdrop-blur-sm p-4 rounded-lg">
              <Shield className="w-10 h-10 text-blue-500" />
              <div>
                <div className="font-semibold text-lg text-gray-900">100% Safe</div>
                <div className="text-sm text-gray-600">Certified & Tested</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-blue-50/80 backdrop-blur-sm p-4 rounded-lg">
              <Award className="w-10 h-10 text-blue-500" />
              <div>
                <div className="font-semibold text-lg text-gray-900">15+ Years</div>
                <div className="text-sm text-gray-600">Industry Experience</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-blue-50/80 backdrop-blur-sm p-4 rounded-lg">
              <Clock className="w-10 h-10 text-blue-500" />
              <div>
                <div className="font-semibold text-lg text-gray-900">24/7 Support</div>
                <div className="text-sm text-gray-600">Emergency Service</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-900 z-10"
        variants={scrollIndicatorVariants}
        animate="animate"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium tracking-wide">Discover More</span>
          <div className="w-8 h-12 border-2 border-blue-500/80 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-4 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mt-2"
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;