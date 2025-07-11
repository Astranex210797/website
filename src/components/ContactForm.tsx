import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-black via-[#0A302A] to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's design the future of vertical mobility together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-10 shadow-2xl border border-[#1ABC9C]/30"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-[#1ABC9C]/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#1ABC9C] focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-white">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-[#1ABC9C]/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#1ABC9C] focus:outline-none"
                    placeholder="+91 9999999999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-[#1ABC9C]/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#1ABC9C] focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-[#1ABC9C]/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#1ABC9C] focus:outline-none resize-none"
                  placeholder="Describe your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1ABC9C] hover:bg-[#159f84] text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Let’s Start a Conversation</h3>
              <p className="text-gray-300 leading-relaxed">
                Reach out to our team of lift experts. We’re happy to discuss your next project or answer any questions you might have.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#1ABC9C]/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#1ABC9C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Call Us</h4>
                  <p className="text-gray-300">+91 9990858886</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#1ABC9C]/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#1ABC9C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email Us</h4>
                  <p className="text-gray-300">info@peakelevator.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#1ABC9C]/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#1ABC9C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Service Area</h4>
                  <p className="text-gray-300">Delhi/NCR, India</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1ABC9C]/10 p-6 rounded-xl border border-[#1ABC9C]/30">
              <h4 className="font-semibold text-white mb-2">Emergency Support</h4>
              <p className="text-gray-400 mb-4">
                Need urgent assistance? Our support team is available 24/7.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Emergency Contact
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;