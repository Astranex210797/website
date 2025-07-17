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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsFormOpen(false);
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          address: '',
          floors: '',
          liftType: '',
          installationYear: '',
          currentAMC: ''
        });
      }, 1500);
    }, 1000);
  };

  return (
    <>
      {/* Main Button */}
      <div className="w-full flex justify-center mt-10">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFormOpen(true)}
          className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white px-8 py-4 rounded-full shadow-lg flex items-center gap-3 text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-800"
          aria-label="Book a site visit"
        >
          Book a Visit
          <ArrowRight size={20} />
        </motion.button>
      </div>

      {/* Popup Form */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="form-title"
          >
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative border border-emerald-100">
              {/* Close Button */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
                aria-label="Close form"
              >
                <X size={24} />
              </button>

              {/* Form Content */}
              <h2 id="form-title" className="text-2xl font-bold mb-6 text-emerald-700 text-center">
                Book a Site Visit
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-emerald-600 font-semibold"
                >
                  Thank you! Your request has been submitted.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { name: 'name', type: 'text', placeholder: 'Your Name', required: true },
                    { name: 'phone', type: 'tel', placeholder: 'Phone Number', required: true },
                    { name: 'address', type: 'text', placeholder: 'Site Address' },
                    { name: 'floors', type: 'number', placeholder: 'Number of Floors' },
                    { name: 'installationYear', type: 'text', placeholder: 'Installation Year' },
                    { name: 'currentAMC', type: 'text', placeholder: 'Current AMC Details' }
                  ].map((field) => (
                    <motion.input
                      key={field.name}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 bg-gray-50 text-gray-800 placeholder-gray-400"
                      whileFocus={{ scale: 1.02 }}
                      aria-required={field.required}
                      aria-label={field.placeholder}
                    />
                  ))}

                  <motion.select
                    name="liftType"
                    value={formData.liftType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 bg-gray-50 text-gray-800"
                    whileFocus={{ scale: 1.02 }}
                    aria-label="Select Lift Type"
                  >
                    <option value="">Select Lift Type</option>
                    <option value="MR">Machine Room (MR)</option>
                    <option value="MRL">Machine Room-Less (MRL)</option>
                    <option value="Hydraulic">Hydraulic</option>
                  </motion.select>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition-all duration-300 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
                    }`}
                    aria-label="Submit form"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <>
                        <Send size={18} /> Submit
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookVisitButton;