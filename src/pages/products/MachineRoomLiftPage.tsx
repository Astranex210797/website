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
    <div className="pt-16 relative">
      {/* Enhanced Floating Book a Visit Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed left-0 top-1/2 transform -translate-y-1/2 origin-top-left rotate-[-90deg] z-50 
                   bg-gradient-to-r from-bottle-green to-emerald-500 text-white text-sm md:text-base 
                   px-5 py-2.5 font-bold rounded-r-full shadow-xl tracking-wide transition-all 
                   animate-pulse"
        onClick={() => window.location.href = '/contact'}
      >
        Book a Visit
      </motion.button>

      {/* Top Intro Section */}
      <section
        className="relative h-[55vh] flex items-center justify-center bg-cover bg-center text-white px-6 text-center"
        style={{ backgroundImage: 'url(/machine-room-elevator.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Machine Room Elevators
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg mb-6"
          >
            Designed for efficiency and reliability, our machine room elevators provide a robust solution for mid to high-rise buildings.
          </motion.p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-bottle-green font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Book a Visit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-20 bg-white text-bottle-green px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Technical Specifications</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-left max-w-3xl mx-auto">
            {specifications.map((spec, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-bottle-green" />
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-pearlescent-subtle px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-bottle-green">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <feature.icon className="w-8 h-8 text-bottle-green mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MachineRoomLiftPage;
