import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#145943] via-[#0D3B2E] to-[#1ABC9C] text-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 text-white drop-shadow-2xl tracking-tight">
            Contact Us
          </h1>
          <p className="text-2xl text-gray-200 max-w-2xl mx-auto mb-8">
            We're here to design your vertical experience. Reach out for tailored solutions built on innovation, precision, and elegance.
          </p>
        </motion.div>
        {/* Decorative Glow Circles */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#1ABC9C] opacity-30 blur-[200px] rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-[#ffffff] opacity-10 blur-[150px] rounded-full"></div>
      </section>

      {/* Contact Form Section */}
      <section className="relative flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto bg-white/5 backdrop-blur-2xl rounded-3xl border border-[#1ABC9C]/20 shadow-2xl p-0"
        >
          <div className="py-20 px-8 sm:px-16 lg:px-32">
            <h2 className="text-5xl font-semibold mb-12 text-white text-center drop-shadow-lg">
              Let's Get in Touch
            </h2>
            <ContactForm />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;