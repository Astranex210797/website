import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Shield, Zap, Users } from 'lucide-react';

const MachineRoomLiftPage = () => {
  const specifications = [
    'Capacity: 272–1632 kg',
    'Maximum Stops: 15 floors',
    'Speed: 1.0–2.5 m/s',
    'Auto/Manual Door Options',
    'Suitable for Residential & High-rise',
    'Energy Efficient Drive System',
    'Advanced Safety Features',
    'Customizable Interior Design'
  ];

  const features = [
    {
      icon: Shield,
      title: 'Advanced Safety',
      description: 'Multiple safety systems ensure passenger protection at all times'
    },
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'Modern drive systems reduce energy consumption by up to 40%'
    },
    {
      icon: Users,
      title: 'High Capacity',
      description: 'Designed to handle heavy traffic in commercial and residential buildings'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with background image */}
      <section
        className="relative py-28 text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/machine-room-elevator.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#E6FAF4] via-[#1ABC9C] to-[#145943] text-transparent bg-clip-text"
            >
              Machine Room Elevators
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-xl text-[#C3E7DF] mb-8 leading-relaxed"
            >
              Traditional power meets modern precision. Our machine room elevators deliver
              exceptional performance and reliability for high-rise buildings, combining
              proven technology with contemporary design excellence.
            </motion.p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-[#E6FAF4] to-[#1ABC9C] text-[#0D3B2E] px-8 py-4 rounded-full font-bold text-lg shadow-xl flex items-center gap-3 transition-all duration-300 border-2 border-transparent hover:border-white hover:shadow-[0_0_20px_#E6FAF4]"
              >
                Book Site Visit
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- The rest of your sections (unchanged) --- */}
      {/* You can paste your existing Features, Specifications, and CTA sections below this line. */}
      {/* No changes are needed for them to work with the updated Hero section. */}
    </div>
  );
};

export default MachineRoomLiftPage;
