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
                Machine Room Elevators
              </h1>
              <p className="text-xl text-[#C3E7DF] mb-8 leading-relaxed">
                Traditional power meets modern precision. Our machine room elevators deliver 
                exceptional performance and reliability for high-rise buildings, combining 
                proven technology with contemporary design excellence.
              </p>
              <button className="bg-[#1ABC9C] text-[#145943] hover:bg-[#E6FAF4] hover:text-[#0D3B2E] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center group shadow-lg">
                <Link to="/contact">Book a Free Site Visit</Link>
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
                src="/machine-room-elevator.jpg"
                alt="Modern machine room elevator with elegant interior design"
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
              Why Choose Our Machine Room Elevators?
            </h2>
            <p className="text-xl text-[#1ABC9C] max-w-3xl mx-auto">
              Engineered for performance, designed for comfort, and built to last.
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
                Our machine room elevators are engineered to meet the highest standards 
                of performance, safety, and reliability.
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
                    <h4 className="font-semibold text-[#145943]">Commercial Buildings</h4>
                    <p className="text-[#0D3B2E]">Office complexes, shopping centers, hotels</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold text-2xl">🏠</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Residential Towers</h4>
                    <p className="text-[#0D3B2E]">High-rise apartments, luxury homes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1ABC9C] font-bold text-2xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#145943]">Healthcare Facilities</h4>
                    <p className="text-[#0D3B2E]">Hospitals, clinics, medical centers</p>
                  </div>
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
              Ready to Elevate Your Building?
            </h2>
            <p className="text-xl text-[#C3E7DF] mb-8">
              Let our experts help you choose the perfect machine room elevator solution 
              for your project. Get a free consultation today.
            </p>
            <button className="bg-[#E6FAF4] text-[#145943] hover:bg-[#1ABC9C] hover:text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300 flex items-center mx-auto group shadow-lg">
              <Link to="/contact">Book a Free Site Visit</Link>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MachineRoomLiftPage;
