import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const FloatingFormButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    floors: '',
    liftType: '',
    installationYear: '',
    amcStatus: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsFormOpen(false);
    setFormData({
      name: '',
      phone: '',
      address: '',
      floors: '',
      liftType: '',
      installationYear: '',
      amcStatus: ''
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Book a Visit Button - Left Side Middle */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsFormOpen(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-[55] px-5 py-2 rounded-r-lg bg-bottle-green text-white font-semibold shadow-lg"
        aria-label="Open inquiry form"
      >
        Book a Visit
      </motion.button>

      {/* Form Overlay */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-pearlescent rounded-2xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-bottle-green">Quick Inquiry</h2>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-bottle-green-solid mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-bottle-green-solid mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="+91 9999999999"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-bottle-green-solid mb-2">
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={2}
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full resize-none"
                    placeholder="Your address"
                  />
                </div>

                <div>
                  <label htmlFor="floors" className="block text-sm font-medium text-bottle-green-solid mb-2">
                    Number of Floors
                  </label>
                  <input
                    type="number"
                    id="floors"
                    name="floors"
                    min="1"
                    max="50"
                    value={formData.floors}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="e.g., 5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-bottle-green-solid mb-3">
                    Lift Type
                  </label>
                  <div className="space-y-2">
                    {['MR', 'MRL', 'Hydraulic'].map((type) => (
                      <label key={type} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="liftType"
                          value={type}
                          checked={formData.liftType === type}
                          onChange={handleChange}
                          className="w-4 h-4 text-bottle-green-solid border-gray-300 focus:ring-2 focus:ring-bottle-green-solid"
                        />
                        <span className="text-bottle-green-solid">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="installationYear" className="block text-sm font-medium text-bottle-green-solid mb-2">
                    Installation Year
                  </label>
                  <input
                    type="number"
                    id="installationYear"
                    name="installationYear"
                    min="1990"
                    max={new Date().getFullYear()}
                    value={formData.installationYear}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="e.g., 2020"
                  />
                </div>

                <div>
                  <label htmlFor="amcStatus" className="block text-sm font-medium text-bottle-green-solid mb-2">
                    Current AMC Status
                  </label>
                  <select
                    id="amcStatus"
                    name="amcStatus"
                    value={formData.amcStatus}
                    onChange={handleChange}
                    className="w-full"
                  >
                    <option value="">Select status</option>
                    <option value="active">Active AMC</option>
                    <option value="expired">Expired AMC</option>
                    <option value="none">No AMC</option>
                    <option value="looking">Looking for AMC</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full btn-bottle-green py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 mt-6"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingFormButton;
