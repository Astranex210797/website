import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Shield, Wrench, Phone } from 'lucide-react';

const AMCPage = () => {
  const comprehensiveFeatures = [
    'Complete preventive maintenance',
    'All spare parts included',
    'Emergency breakdown service',
    'Regular safety inspections',
    'Performance optimization',
    'Compliance certifications',
    'Priority response time',
    'Annual safety audit'
  ];

  const nonComprehensiveFeatures = [
    'Scheduled maintenance visits',
    'Basic safety checks',
    'Emergency call-out service',
    'Labor charges included',
    'Breakdown diagnosis',
    'Minor adjustments',
    'Maintenance reports',
    'Technical support'
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock emergency support for critical situations'
    },
    {
      icon: Shield,
      title: 'Safety Assured',
      description: 'Regular safety inspections ensure passenger protection'
    },
    {
      icon: Wrench,
      title: 'Expert Technicians',
      description: 'Certified professionals with years of experience'
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
                Elevator AMC Services
              </h1>
              <p className="text-xl text-[#C3E7DF] mb-8 leading-relaxed">
                Keep your elevators running safely and smoothly with our comprehensive 
                Annual Maintenance Contracts. Trust and precision in focus, ensuring 
                your vertical transportation never lets you down.
              </p>
              <button className="bg-[#E6FAF4] text-[#145943] hover:bg-[#1ABC9C] hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center group shadow-lg">
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
                src="/Technician.png"
                alt="Professional technician inspecting elevator control panel with tablet in modern building"
                className="rounded-2xl shadow-2xl border-4 border-[#1ABC9C]/30"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our AMC Services?
            </h2>
            <p className="text-xl text-[#1ABC9C] max-w-3xl mx-auto">
              Professional maintenance that keeps your elevators safe, reliable, and efficient.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-white hover:bg-[#E6FAF4] transition-colors duration-300 shadow-lg border border-[#1ABC9C]/20"
              >
                <div className="w-16 h-16 bg-[#1ABC9C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-[#1ABC9C]" />
                </div>
                <h3 className="text-xl font-bold text-[#145943] mb-4">{benefit.title}</h3>
                <p className="text-[#0D3B2E]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC Types Section */}
      <section className="py-20 bg-[#E6FAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#145943] mb-6">
              Choose Your AMC Plan
            </h2>
            <p className="text-xl text-[#1ABC9C] max-w-3xl mx-auto">
              We offer two comprehensive maintenance plans to suit different needs and budgets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Comprehensive AMC */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#1ABC9C]/30"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1ABC9C]/10 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-[#1ABC9C]" />
                </div>
                <h3 className="text-2xl font-bold text-[#145943] mb-2">Comprehensive AMC</h3>
                <p className="text-[#0D3B2E]">Complete peace of mind with all-inclusive coverage</p>
              </div>
              <div className="space-y-4 mb-8">
                {comprehensiveFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#1ABC9C] flex-shrink-0" />
                    <span className="text-[#0D3B2E]">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1ABC9C] mb-2">Best Value</div>
                <p className="text-[#0D3B2E] mb-6">Includes all parts and labor</p>
                <button className="w-full bg-[#1ABC9C] hover:bg-[#145943] text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                  Get Quote
                </button>
              </div>
            </motion.div>

            {/* Non-Comprehensive AMC */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-[#1ABC9C]/20"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1ABC9C]/10 rounded-full mb-4">
                  <Wrench className="w-8 h-8 text-[#1ABC9C]" />
                </div>
                <h3 className="text-2xl font-bold text-[#145943] mb-2">Non-Comprehensive AMC</h3>
                <p className="text-[#0D3B2E]">Essential maintenance with cost-effective coverage</p>
              </div>
              <div className="space-y-4 mb-8">
                {nonComprehensiveFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#1ABC9C] flex-shrink-0" />
                    <span className="text-[#0D3B2E]">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#145943] mb-2">Budget Friendly</div>
                <p className="text-[#0D3B2E] mb-6">Parts charged separately</p>
                <button className="w-full bg-[#145943] hover:bg-[#1ABC9C] text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                  Get Quote
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="py-20 bg-[#E74C3C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Phone className="w-16 h-16 mx-auto mb-6 text-[#E6FAF4]" />
            <h2 className="text-4xl font-bold mb-6 text-[#E6FAF4]">
              Emergency Support Available
            </h2>
            <p className="text-xl text-[#C3E7DF] mb-8">
              Elevator breakdown? Don't worry. Our emergency response team is available 
              24/7 to get your elevators back in service quickly and safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#E6FAF4] text-[#E74C3C] hover:bg-[#1ABC9C] hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Call Emergency: +91 9990858886
              </button>
              <button className="border-2 border-[#E6FAF4] text-[#E6FAF4] hover:bg-[#E6FAF4] hover:text-[#E74C3C] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Schedule Maintenance
              </button>
            </div>
          </motion.div>
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
              Protect Your Investment
            </h2>
            <p className="text-xl text-[#C3E7DF] mb-8">
              Regular maintenance extends elevator life, ensures safety, and prevents costly breakdowns. 
              Start your AMC plan today and experience worry-free elevator operation.
            </p>
            <button className="bg-[#E6FAF4] text-[#145943] hover:bg-[#1ABC9C] hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center mx-auto group shadow-lg">
              Claim Your Free Technical Visit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AMCPage;