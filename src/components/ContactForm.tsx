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
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-lg px-4 py-3 bg-white border border-gray-300 placeholder-gray-500 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1ABC9C] focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-lg px-4 py-3 bg-white border border-gray-300 placeholder-gray-500 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1ABC9C] focus:border-transparent transition"
                    placeholder="+91 9999999999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-white border border-gray-300 placeholder-gray-500 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1ABC9C] focus:border-transparent transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-white border border-gray-300 placeholder-gray-500 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1ABC9C] focus:border-transparent transition resize-none"
                  placeholder="Describe your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1ABC9C] hover:bg-[#159f84] text-white font-medium text-base py-3 rounded-lg transition flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 flex flex-col justify-center"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#145943]">Let's Start a Conversation</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Reach out to our team of elevator experts. We're here to discuss your project and provide tailored solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#1ABC9C]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#145943] text-base">Call Us</h4>
                  <p className="text-base text-gray-600">+91 9990858886</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#1ABC9C]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#145943] text-base">Email Us</h4>
                  <p className="text-base text-gray-600">info@peakelevator.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#1ABC9C]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#1ABC9C]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#145943] text-base">Service Area</h4>
                  <p className="text-base text-gray-600">Delhi/NCR, India</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="font-medium text-red-800 mb-2 text-base">Emergency Support</h4>
              <p className="text-sm text-red-600 mb-4">
                Need urgent assistance? Our support team is available 24/7.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium text-sm transition">
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