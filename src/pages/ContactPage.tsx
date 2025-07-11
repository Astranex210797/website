import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#145943] via-[#1ABC9C] to-[#F2FCF9] text-brand-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-text drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Ready to elevate your space? Get in touch with our experts for personalized
              elevator solutions and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="max-w-2xl mx-auto -mt-16 mb-16 bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-brand-dark">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
