import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Building, Wrench } from 'lucide-react';

const MRLElevatorPage = () => {
  const specifications = [
    'Capacity: 272–1632 kg',
    'Maximum Stops: 15 floors',
    'Speed: 1.0–2.5 m/s',
    'Auto/Manual Door Options',
    'Suitable for Residential & High-rise',
    'Energy Efficient Drive System',
    'Customizable Interior Design',
    'Advanced Safety Systems',
    'Modern Control Technology'
  ];

  const features = [
    {
      icon: Zap,
      title: 'Space Efficient',
      description: 'No machine room required, maximizing usable building space'
    },
    {
      icon: Building,
      title: 'Modern Technology',
      description: 'Latest gearless traction systems for superior performance'
    },
    {
      icon: Wrench,
      title: 'Easy Maintenance',
      description: 'Accessible components reduce maintenance time and costs'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#145943] via-[#1ABC9C] to-[#E6FAF4] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#145943]/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-[#E6FAF4]">
                MRL Elevators
              </h1>
              <p className="text-xl text-[#C3E7DF] mb-8 leading-relaxed">
                Space-saving innovation without compromise. Our Machine Room-Less (MRL) elevators 
                deliver exceptional performance while eliminating the need for a dedicated machine room, 
                maximizing your building's usable space.
              </p>
              <button className="bg-[#1ABC9C] text-[#145943] hover:bg-[#E6FAF4] hover:text-[#0D3B2E] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center group shadow-lg">
                <Link to="/contact">Book Site Visit</Link>
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
                src="/pexels-cottonbro-8453049.jpg"
                alt="Modern MRL elevator with sleek design and space-saving technology"
                className="rounded-2xl shadow-2xl border-4 border-[#1ABC9C]/30"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#F2FCF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#145943] mb-6">
              Why Choose MRL Elevators?
            </h2>
            <p className="text-xl text-[#1ABC9C] max-w-3xl mx-auto">
              Revolutionary design that maximizes space while delivering superior performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-10 rounded-3xl bg-white hover:bg-[#E6FAF4] transition-colors duration-300 shadow-lg border border-[#1ABC9C]/20"
              >
                <div className="w-16 h-16 bg-[#1ABC9C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-[#1ABC9C]" />
                </div>
                <h3 className="text-xl font-bold text-[#145943] mb-4">{feature.title}</h3>
                <p className="text-[#0D3B2E]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-[#E6FAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#145943] mb-6">
                Technical Specifications
              </h2>
              <p className="text-xl text-[#1ABC9C] mb-8">
                Our MRL elevators combine cutting-edge technology with space-efficient design 
                for optimal performance in modern buildings.
              </p>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#1ABC9C] flex-shrink-0" />
                    <span className="text-[#0D3B2E] text-lg">{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-xl border border-[#1ABC9C]/20"
            >
              <h3 className="text-2xl font-bold text-[#145943] mb-6">Perfect For:</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold text-2xl">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Modern Buildings</h4>
                    <p className="text-[#0D3B2E]">New construction with space constraints</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold text-2xl">🏠</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Residential Towers</h4>
                    <p className="text-[#0D3B2E]">Apartments where space is premium</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold text-2xl">🏪</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Commercial Spaces</h4>
                    <p className="text-[#0D3B2E]">Offices, retail, mixed-use developments</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-[#F2FCF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#145943] mb-6">
              MRL vs Traditional Machine Room
            </h2>
            <p className="text-xl text-[#1ABC9C] max-w-3xl mx-auto">
              See why MRL technology is the future of vertical transportation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#E6FAF4] rounded-3xl p-10 shadow-lg border border-[#1ABC9C]/20"
            >
              <h3 className="text-2xl font-bold text-[#145943] mb-6">MRL Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#1ABC9C]" />
                  <span className="text-[#0D3B2E]">No machine room required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#1ABC9C]" />
                  <span className="text-[#0D3B2E]">Lower construction costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#1ABC9C]" />
                  <span className="text-[#0D3B2E]">Maximized building space</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#1ABC9C]" />
                  <span className="text-[#0D3B2E]">Energy efficient operation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#1ABC9C]" />
                  <span className="text-[#0D3B2E]">Easier maintenance access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#1ABC9C]" />
                  <span className="text-[#0D3B2E]">Modern aesthetic appeal</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-lg border border-[#1ABC9C]/20"
            >
              <h3 className="text-2xl font-bold text-[#145943] mb-6">Traditional Machine Room</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600">Requires dedicated machine room</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600">Higher construction costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600">Reduced usable space</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600">Higher energy consumption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600">Complex maintenance access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600">Traditional design limitations</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1ABC9C] to-[#145943] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-[#E6FAF4]">
              Experience Space-Saving Innovation
            </h2>
            <p className="text-xl text-[#C3E7DF] mb-8">
              Discover how MRL technology can maximize your building's potential. 
              Get expert consultation and see why MRL is the smart choice for modern construction.
            </p>
            <button className="bg-[#E6FAF4] text-[#145943] hover:bg-[#1ABC9C] hover:text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300 flex items-center mx-auto group shadow-lg">
              <Link to="/contact">Book Site Visit</Link>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MRLElevatorPage;