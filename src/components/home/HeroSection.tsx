import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const navigate = useNavigate();

  // Smoother spring-based transforms
  const bgY = useSpring(useTransform(scrollY, [0, 700], [0, 100]), {
    stiffness: 100,
    damping: 30,
  });

  const opacity = useSpring(useTransform(scrollY, [0, 700], [1, 0.2]), {
    stiffness: 80,
    damping: 25,
  });

  const scale = useSpring(useTransform(scrollY, [0, 700], [1, 0.93]), {
    stiffness: 90,
    damping: 30,
  });

  const scrollToTestimonials = () => {
    const el = document.getElementById('testimonials');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative h-[70vh] flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Background Image with layered parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <motion.img
          src="/BG.jpg"
          alt="Modern elevator"
          className="w-full h-full object-cover object-center scale-110"
          style={{ objectPosition: 'center 60%' }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.3, duration: 1.2 }}
        />
      </motion.div>

      {/* Foreground Content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl px-4 text-white bg-pearlescent-subtle/10 backdrop-blur-lg rounded-3xl p-10 border border-white/10 shadow-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <div className="flex flex-col items-start justify-center h-full space-y-8 max-h-[90vh]">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-xl text-white"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Elevating Lives.{' '}
            <span className="text-white/90">One Lift at a Time.</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-medium drop-shadow text-white/90 max-w-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Luxury, safety, and innovation — crafted for every journey.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.button
              onClick={() => navigate('/contact')}
              className="btn-bottle-green px-6 py-3 rounded-xl text-base font-semibold transition-all flex items-center shadow-md hover:scale-105 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Site Visit
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.button>

            <motion.button
              onClick={scrollToTestimonials}
              className="border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl text-base font-semibold transition-all hover:scale-105 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
