import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="pt-16 bg-[#0D3B2E] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#145943] via-[#0D3B2E] to-[#1ABC9C] opacity-90 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-2xl tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to design your vertical experience. Reach out for tailored solutions built on innovation, precision, and elegance.
            </p>
          </motion.div>
        </div>

        {/* Background Glow Circles */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#1ABC9C] opacity-30 blur-[200px] rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-[#ffffff] opacity-10 blur-[150px] rounded-full"></div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-10 bg-transparent">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-2xl p-0 rounded-3xl border border-white/10 shadow-2xl"
          >
            <div className="py-16 px-4 sm:px-12 lg:px-32">
              <h2 className="text-4xl font-semibold mb-10 text-white text-center">
                Let's Get in Touch
              </h2>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;