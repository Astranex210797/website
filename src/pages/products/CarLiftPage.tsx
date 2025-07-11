import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Car, Building, Wrench } from 'lucide-react';

const CarLiftPage = () => {
  const specifications = [
    'Vehicle Weight: Up to 3000 kg',
    'Platform Size: Customizable',
    'Travel Height: Up to 20 meters',
    'Safety Features: Multiple backup systems',
    'Operation: Automatic/Manual control',
    'Power Supply: 415V, 3-phase',
    'Installation: Indoor/Outdoor options',
    'Maintenance: Minimal requirements'
  ];

  const features = [
    {
      icon: Car,
      title: 'Space Optimization',
      description: 'Maximize parking capacity in minimal space with vertical solutions'
    },
    {
      icon: Building,
      title: 'Urban Solution',
      description: 'Perfect for urban areas where space is at a premium'
    },
    {
      icon: Wrench,
      title: 'Reliable Operation',
      description: 'Robust construction ensures years of trouble-free operation'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Vertical Car Lifts
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Vertical mobility for urban spaces. Our car lifts provide innovative solutions 
                for moving vehicles between basement floors, maximizing parking efficiency 
                in space-constrained environments.
              </p>
              <button className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center group">
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
                src="/WhatsApp Image 2025-07-11 at 11.57.25_2ca2df59.jpg"
                alt="Car lift system moving vehicles between floors efficiently"
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
              Why Choose Our Car Lifts?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smart parking solutions that save space and move cars effortlessly.
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
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-purple-600" />
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
                Our car lifts are engineered to handle various vehicle types 
                with maximum safety and efficiency.
              </p>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0" />
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect For:</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Commercial Buildings</h4>
                    <p className="text-gray-600">Office complexes, shopping malls</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">🏠</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Residential Complexes</h4>
                    <p className="text-gray-600">Apartment buildings, condominiums</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">🏭</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Service Centers</h4>
                    <p className="text-gray-600">Auto repair shops, car dealerships</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Maximize Your Parking Space
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Transform your parking challenges into smart solutions. 
              Let our experts design the perfect car lift system for your needs.
            </p>
            <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center mx-auto group">
              Book a Free Site Visit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CarLiftPage;