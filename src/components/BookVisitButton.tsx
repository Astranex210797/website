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
      {/* Floating Button - Vertically Oriented on Left Border */}
      <motion.div
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(13, 59, 46, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFormOpen(true)}
          className="bg-gradient-to-b from-emerald-800 to-emerald-600 text-white px-6 py-4 rounded-r-lg shadow-xl flex items-center gap-2 text-lg font-serif font-medium transition-all duration-300 -rotate-90 origin-left"
          aria-label="Book a site visit"
        >
          Book a Visit
          <ArrowRight size={20} />
        </motion.button>
      </motion.div>

      {/* Popup Form */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="form-title"
          >
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md relative border border-emerald-200/50">
              {/* Close Button */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 text-emerald-800 hover:text-emerald-900 transition-colors"
                aria-label="Close form"
              >
                <X size={24} />
              </button>

              {/* Form Content */}
              <h2 id="form-title" className="text-3xl font-serif font-bold mb-6 text-emerald-800 text-center">
                Schedule a Site Visit
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-emerald-700 font-serif text-lg"
                >
                  Thank you! Your request has been submitted.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 border border-emerald-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-emerald-900 placeholder-emerald-400/70 font-serif"
                      whileFocus={{ scale: 1.01 }}
                      aria-required={field.required}
                      aria-label={field.placeholder}
                    />
                  ))}

                  <motion.select
                    name="liftType"
                    value={formData.liftType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-emerald-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-emerald-900 font-serif"
                    whileFocus={{ scale: 1.01 }}
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
                    className={`w-full bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-serif font-semibold transition-all duration-300 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:bg-gradient-to-r hover:from-emerald-900 hover:to-emerald-700'
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
                        <Send size=>
                        Submit
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