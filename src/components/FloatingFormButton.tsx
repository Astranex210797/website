import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X, Send } from 'lucide-react';

const FloatingFormButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    inquiry: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsFormOpen(false);
  };

  return (
    <>
      {/* Rotated Button on Left Edge */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsFormOpen(true)}
        className="fixed left-0 top-1/2 transform -translate-y-1/2 origin-top-left rotate-[-90deg] z-[55] px-5 py-2 rounded-tr-lg bg-bottle-green text-white font-semibold shadow-lg"
        aria-label="Open inquiry form"
      >
        Book a Visit
      </motion.button>

      {/* Sliding Form */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-lg z-[60] p-6 overflow-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
              aria-label="Close form"
            >
              <X size={24} />
            </button>

            {/* Form Content */}
            <div className="mt-10">
              <div className="flex items-center mb-6 space-x-2 text-bottle-green">
                <FileText size={28} />
                <h2 className="text-2xl font-bold">Book a Visit</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bottle-green/50"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bottle-green/50"
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bottle-green/50"
                />
                <textarea
                  name="inquiry"
                  placeholder="Your Inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bottle-green/50"
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-bottle-green text-white font-semibold py-2 px-4 rounded-md hover:bg-bottle-green-dark transition-all"
                >
                  <Send size={18} />
                  <span>Submit</span>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingFormButton;
