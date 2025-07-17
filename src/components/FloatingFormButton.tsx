import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X, Send } from 'lucide-react';

const FloatingFormButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    requirement: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // Optional: Add API or email integration here
    setFormData({ name: '', phone: '', address: '', requirement: '' });
    setIsFormOpen(false);
  };

  return (
    <>
      {/* Vertical "Book a Visit" button on LEFT */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsFormOpen(true)}
        className="fixed left-0 top-1/2 transform -translate-y-1/2 origin-top-left rotate-[-90deg] z-[55] bg-bottle-green text-white text-sm px-3 py-2 rounded-r-full shadow-md tracking-wide"
        aria-label="Open inquiry form"
      >
        Book a Visit
      </motion.button>

      {/* Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[300px] bg-white border border-gray-300 rounded-lg shadow-xl p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-semibold flex items-center gap-1 text-bottle-green">
                <FileText size={18} /> Site Visit Form
              </h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-500 hover:text-red-600"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <input
                type="text"
                name="address"
                placeholder="Site Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <textarea
                name="requirement"
                placeholder="Your Requirement"
                value={formData.requirement}
                onChange={handleChange}
                rows={3}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-1 bg-bottle-green hover:bg-emerald-800 text-white text-sm px-4 py-2 rounded-md"
              >
                <Send size={16} /> Submit
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingFormButton;
