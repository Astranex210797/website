import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Award, Users, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[90vh] overflow-hidden flex items-center justify-center">
      {/* Background Image with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/BG.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-bottom"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Subtle gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Main Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-emerald-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg"
          >
            <Award className="w-4 h-4" />
            Premium Lift Solutions
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white drop-shadow-2xl">Elevate Your</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent drop-shadow-lg">
              Space
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">with Precision</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg font-light leading-relaxed"
          >
            Experience cutting-edge elevator technology designed for modern buildings and exceptional performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => navigate('/products')}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Explore Products 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => navigate('/contact')}
              className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get Consultation
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side - Feature Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden lg:flex flex-col gap-6"
        >
          {/* Feature Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <Wrench className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Expert Installation</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Professional installation services with certified technicians and quality assurance.
            </p>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Premium Quality</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Industry-leading elevator systems built with the finest materials and technology.
            </p>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">24/7 Support</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Round-the-clock maintenance and support services for uninterrupted operation.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 shadow-xl">
          <div className="flex items-center gap-8 text-center">
      {/* Text Content */}
              <div className="text-2xl font-bold text-emerald-400">500+</div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-2xl text-white">
          Elevate Your Space with Precision
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-lg text-white/90">
          Premium Lift Solutions Tailored for Modern Needs
        </p>
        <button
          onClick={() => navigate('/products')}
          className="mt-6 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explore Products <ArrowRight size={18} />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
  )
}