import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/WhatsApp Image 2025-07-11 at 11.55.53_413f52a1.jpg"
          alt="Modern elevator interior showcasing luxury and safety"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Elevating Lives.{' '}
            <span className="text-blue-400">One Lift at a Time.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
          >
            Luxury, safety, and innovation — built into every ride.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center group">
              Book a Free Site Visit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Our Work
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-400" />
              <div>
                <div className="font-semibold">100% Safe</div>
                <div className="text-sm text-gray-300">Certified & Tested</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-blue-400" />
              <div>
                <div className="font-semibold">15+ Years</div>
                <div className="text-sm text-gray-300">Industry Experience</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-8 h-8 text-blue-400" />
              <div>
                <div className="font-semibold">24/7 Support</div>
                <div className="text-sm text-gray-300">Emergency Service</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;