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

  const scrollToTestimonials = () => {
    const el = document.getElementById('testimonials');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src="/BG.jpg"
          alt="Modern elevator"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Foreground Content */}
      <motion.div className="relative z-10 w-full max-w-6xl px-4 text-white">
        <div className="flex flex-col items-start justify-center h-full max-h-[90vh] space-y-6">
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-lg">
            Elevating Lives.{' '}
            <span className="text-[#E6FAF4]">
              One Lift at a Time.
            </span>
          </motion.h1>

          <motion.p className="text-lg sm:text-xl md:text-2xl font-semibold drop-shadow-md text-brand-bg">
            Luxury, safety, and innovation — crafted for every journey.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-brand-dark to-brand text-white px-6 py-3 rounded-xl text-base font-semibold hover:from-brand hover:to-brand-dark transition-all flex items-center"
            >
              Book a Free Site Visit
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>

            <button
              onClick={scrollToTestimonials}
              className="border border-brand text-brand hover:bg-brand hover:text-white px-6 py-3 rounded-xl text-base font-semibold transition"
            >
              View Our Work
            </button>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="flex items-center space-x-3 bg-brand/20 backdrop-blur p-3 rounded-lg">
              <Shield className="w-8 h-8 text-brand" />
              <div>
                <div className="font-semibold text-sm text-brand-dark">100% Safe</div>
                <div className="text-xs text-brand-dark/80">Certified & Tested</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-brand/20 backdrop-blur p-3 rounded-lg">
              <Award className="w-8 h-8 text-brand" />
              <div>
                <div className="font-semibold text-sm text-brand-dark">15+ Years</div>
                <div className="text-xs text-brand-dark/80">Industry Experience</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-brand/20 backdrop-blur p-3 rounded-lg">
              <Clock className="w-8 h-8 text-brand" />
              <div>
                <div className="font-semibold text-sm text-brand-dark">24/7 Support</div>
                <div className="text-xs text-brand-dark/80">Emergency Service</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
