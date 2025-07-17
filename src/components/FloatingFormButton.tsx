import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X } from 'lucide-react';

const FloatingVisitButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    floors: '',
    liftType: '',
    installationYear: '',
    currentAMC: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setIsFormOpen(false);
  };

  return (
    <>
      {/* Vertical Floating Button */}
      <motion.button
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsFormOpen(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-bottle-green text-white text-[12px] px-2 py-3 rounded-r-md shadow-md"
        style={{ writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '1px' }}
      >
        Book a Visit
      </motion.button>

      {/* Centered Popup Form */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <div className="bg-white p-6 rounded-xl shadow-2xl w-[360px] relative border border-gray-200">
              {/* Close Button */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                <X size={20} />
              </button>

              <h2 className="text-xl font-semibold mb-5 text-bottle-green text-center">Book a Visit</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Site Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="number"
                  name="floors"
                  value={formData.floors}
                  onChange={handleChange}
                  placeholder="Number of Floors"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <select
                  name="liftType"
                  value={formData.liftType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select Lift Type</option>
                  <option value="MR">MR</option>
                  <option value="MRL">MRL</option>
                  <option value="Hydraulic">Hydraulic</option>
                </select>
                <input
                  type="text"
                  name="installationYear"
                  value={formData.installationYear}
                  onChange={handleChange}
                  placeholder="Installation Year"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="currentAMC"
                  value={formData.currentAMC}
                  onChange={handleChange}
                  placeholder="Current AMC Details"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />

                <button
                  type="submit"
                  className="w-full bg-bottle-green text-white py-2 rounded-md flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Submit
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingVisitButton;
