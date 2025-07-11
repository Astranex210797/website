import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Shield, Smartphone, Palette } from 'lucide-react';

const ModernizationPage = () => {
  const modernizationFeatures = [
    'Advanced control systems',
    'Energy-efficient motors',
    'Modern safety features',
    'Smart destination control',
    'LED lighting systems',
    'Touchscreen interfaces',
    'Emergency communication',
    'Accessibility compliance'
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Enhanced Performance',
      description: 'Faster, smoother, and more reliable elevator operation'
    },
    {
      icon: Shield,
      title: 'Improved Safety',
      description: 'Latest safety technologies protect passengers and property'
    },
    {
      icon: Smartphone,
      title: 'Smart Technology',
      description: 'IoT integration and remote monitoring capabilities'
    },
    {
      icon: Palette,
      title: 'Modern Aesthetics',
      description: 'Contemporary designs that enhance building appeal'
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
                Lift Modernization
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Upgrade safety, speed & style. Transform your old elevator systems with 
                cutting-edge technology and fresh interiors. Symbolizing upgrade, 
                transformation, and future-readiness.
              </p>
              <button className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center group">
                Claim Your Free Technical Visit
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
                src="/oldnew.png"
                alt="Split-frame image showing old vs new elevator with technician holding blueprint symbolizing modernization"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Modernize Your Elevator?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your aging elevator into a modern, efficient, and safe vertical transportation system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Transformation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we transform outdated elevator systems into modern marvels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <span className="text-red-600 font-bold text-xl">OLD</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Before Modernization</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Outdated control systems</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>High energy consumption</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Frequent breakdowns</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Poor ride quality</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Dated interior design</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Limited safety features</span>
                </div>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-200"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <span className="text-green-600 font-bold text-xl">NEW</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">After Modernization</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Smart control systems</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Energy-efficient operation</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Reliable performance</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Smooth, quiet rides</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Contemporary aesthetics</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Advanced safety systems</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modernization Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Modernization
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our modernization process covers every aspect of your elevator system, 
                from mechanical components to aesthetic enhancements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {modernizationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-purple-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Modernization Benefits</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cost Savings</h4>
                    <p className="text-gray-600">Reduce energy costs by up to 50%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">📈</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Property Value</h4>
                    <p className="text-gray-600">Increase building value and appeal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">🔧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Reduced Maintenance</h4>
                    <p className="text-gray-600">Lower maintenance costs and downtime</p>
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
              Ready to Transform Your Elevator?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Don't let an outdated elevator hold your building back. Our modernization 
              experts will assess your current system and design the perfect upgrade solution.
            </p>
            <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center mx-auto group">
              Claim Your Free Technical Visit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ModernizationPage;