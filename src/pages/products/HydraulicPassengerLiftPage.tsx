import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Volume2, Home, Gauge } from 'lucide-react';

const HydraulicPassengerLiftPage = () => {
  const specifications = [
    'Speed: 0.5–1.0 m/s',
    'Maximum Stops: Up to 5 floors',
    'Capacity: 320–1000 kg',
    'Smooth & Silent Operation',
    'Ideal for Low-rise Buildings',
    'Cost-effective Installation',
    'Minimal Pit Requirements',
    'Energy Efficient System'
  ];

  const features = [
    {
      icon: Volume2,
      title: 'Whisper Quiet',
      description: 'Advanced hydraulic system ensures virtually silent operation'
    },
    {
      icon: Home,
      title: 'Perfect for Homes',
      description: 'Designed specifically for residential and low-rise applications'
    },
    {
      icon: Gauge,
      title: 'Smooth Performance',
      description: 'Hydraulic technology provides exceptionally smooth rides'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Hydraulic Passenger Lifts
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Smooth journeys, silent operation. Our hydraulic passenger lifts blend power 
                with comfort, making them ideal for homes and low-rise buildings where quality 
                and tranquility matter most.
              </p>
              <button className="bg-white text-green-900 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center group">
                Book a Free Site Visit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/WhatsApp Image 2025-07-11 at 12.04.28_02dceda6.jpg"
                alt="Hydraulic passenger lift with elegant interior and smooth operation"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Hydraulic Passenger Lifts?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect combination of comfort, reliability, and cost-effectiveness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Technical Specifications
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our hydraulic passenger lifts are engineered for optimal performance 
                in residential and low-rise commercial applications.
              </p>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ideal Applications:</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">🏡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Luxury Homes</h4>
                    <p className="text-gray-600">Private residences, villas, bungalows</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Small Offices</h4>
                    <p className="text-gray-600">Boutique offices, small commercial buildings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">🏪</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Retail Spaces</h4>
                    <p className="text-gray-600">Showrooms, small shopping centers</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Experience Smooth & Silent Travel
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Transform your space with our premium hydraulic passenger lifts. 
              Get expert consultation and personalized recommendations.
            </p>
            <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center mx-auto group">
              Book a Free Site Visit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HydraulicPassengerLiftPage;