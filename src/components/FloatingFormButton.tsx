import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Send, X } from 'lucide-react';

const BookVisitButton = () => {
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
      {/* Main Button */}
      <div className="w-full flex justify-center mt-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFormOpen(true)}
          className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-lg shadow-xl flex items-center gap-2 transition-all text-sm sm:text-base font-medium"
        >
          Book a Visit <ArrowRight size={18} />
        </motion.button>
      </div>

      {/* Popup Form */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <div className="bg-white p-6 rounded-2xl shadow-2xl w-[370px] relative border border-gray-200">
              {/* Close Button */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-bold mb-5 text-emerald-700 text-center">Book a Visit</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: 'name', type: 'text', placeholder: 'Your Name' },
                  { name: 'phone', type: 'tel', placeholder: 'Phone Number' },
                  { name: 'address', type: 'text', placeholder: 'Site Address' },
                  { name: 'floors', type: 'number', placeholder: 'Number of Floors' },
                  { name: 'installationYear', type: 'text', placeholder: 'Installation Year' },
                  { name: 'currentAMC', type: 'text', placeholder: 'Current AMC Details' }
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required={field.name === 'name' || field.name === 'phone'}
                  />
                ))}

                <select
                  name="liftType"
                  value={formData.liftType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Select Lift Type</option>
                  <option value="MR">MR</option>
                  <option value="MRL">MRL</option>
                  <option value="Hydraulic">Hydraulic</option>
                </select>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
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

export default BookVisitButton;
