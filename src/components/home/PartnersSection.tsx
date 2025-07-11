import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection = () => {
  const partners = [
    'Otis Elevator Company',
    'Schindler Group',
    'KONE Corporation',
    'ThyssenKrupp Elevator',
    'Mitsubishi Electric',
    'Hitachi Elevators',
    'Fujitec Co. Ltd',
    'Hyundai Elevator',
    'Johnson Lifts',
    'Express Lifts',
    'Escon Elevators',
    'Sigma Elevators'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry-leading brands to deliver the highest quality elevator solutions.
          </p>
        </motion.div>

        {/* Scrolling Partners Marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * partners.length] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-16 whitespace-nowrap"
            style={{ width: `${200 * partners.length}%` }}
          >
            {/* First set */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center min-w-[200px] h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-8 h-8 bg-gray-300 rounded mr-3"></div>
                <span className="text-gray-700 font-medium text-sm">{partner}</span>
              </div>
            ))}
            {/* Second set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center min-w-[200px] h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-8 h-8 bg-gray-300 rounded mr-3"></div>
                <span className="text-gray-700 font-medium text-sm">{partner}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;