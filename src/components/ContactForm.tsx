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
    <section className="py-24 bg-gradient-to-br from-black via-[#0A302A] to-black text-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8">
            Get in Touch
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Let's design the future of vertical mobility together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 xl:gap-48">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md rounded-3xl p-16 shadow-2xl border border-[#1ABC9C]/30 flex flex-col justify-center"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name" className="block text-lg font-semibold mb-3 text-white">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-2xl bg-[#121212] border border-[#1ABC9C]/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#1ABC9C] focus:outline-none text-lg shadow-lg transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="block text-lg font-semibold mb-3 text-white">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-2xl bg-[#121212] border border-[#1ABC9C]/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#1ABC9C] focus:outline-none text-lg shadow-lg transition-all duration-300"
                    placeholder="+91 9999999999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-3 text-white">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-5 rounded-xl bg-[#121212] border border-[#1ABC9C]/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#1ABC9C] focus:outline-none text-lg"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-semibold mb-3 text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-5 rounded-xl bg-[#121212] border border-[#1ABC9C]/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#1ABC9C] focus:outline-none text-lg resize-none"
                  placeholder="Describe your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1ABC9C] hover:bg-[#159f84] text-black px-12 py-6 rounded-xl font-bold text-2xl transition-all duration-300 flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-3 w-7 h-7 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-20 flex flex-col justify-center px-2"
          >
            <div>
              <h3 className="text-3xl font-bold mb-8">Let’s Start a Conversation</h3>
              <p className="text-2xl text-gray-300 leading-relaxed">
                Reach out to our team of lift experts. We’re happy to discuss your next project or answer any questions you might have.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex items-center space-x-8">
                <div className="w-16 h-16 bg-[#1ABC9C]/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-[#1ABC9C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-xl">Call Us</h4>
                  <p className="text-2xl text-gray-300">+91 9990858886</p>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="w-16 h-16 bg-[#1ABC9C]/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-[#1ABC9C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-xl">Email Us</h4>
                  <p className="text-2xl text-gray-300">info@peakelevator.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="w-16 h-16 bg-[#1ABC9C]/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-[#1ABC9C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-xl">Service Area</h4>
                  <p className="text-2xl text-gray-300">Delhi/NCR, India</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1ABC9C]/10 p-12 rounded-2xl border border-[#1ABC9C]/30 mt-8">
              <h4 className="font-semibold text-white mb-4 text-2xl">Emergency Support</h4>
              <p className="text-xl text-gray-400 mb-6">
                Need urgent assistance? Our support team is available 24/7.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-medium text-xl transition-colors">
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