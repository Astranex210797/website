import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Send, X, User, Phone, MapPin, Building, Calendar, Wrench } from 'lucide-react';

const BookVisitButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls past hero section (approximately 80vh for better trigger point)
      const heroHeight = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Minimal Curved Button - Only appears after scrolling past hero */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed left-3 top-1/2 -translate-y-1/2 z-50"
          >
            <button
              onClick={() => setIsFormOpen(true)}
              className="w-10 h-10 bg-bottle-green hover:bg-bottle-green-solid text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group hover:scale-110 hover:shadow-xl"
              aria-label="Book a site visit"
            >
              <ArrowRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg relative border border-emerald-200/50">
              {/* Close Button */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-emerald-800 hover:text-emerald-900 transition-colors"
                aria-label="Close form"
              >
                <X size={18} />
              </button>

              {/* Form Content */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 id="form-title" className="text-3xl font-bold mb-2 text-emerald-800">
                Schedule a Site Visit
                </h2>
                <p className="text-emerald-600 text-sm">Get expert consultation for your elevator needs</p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-2">Thank You!</h3>
                  <p className="text-emerald-600">Your request has been submitted successfully. We'll contact you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-emerald-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-emerald-900 placeholder-emerald-400/70"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-emerald-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-emerald-900 placeholder-emerald-400/70"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Site Address"
                      className="w-full pl-10 pr-4 py-3 border border-emerald-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-emerald-900 placeholder-emerald-400/70"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" />
                      <input
                        type="number"
                        name="floors"
                        value={formData.floors}
                        onChange={handleChange}
                        placeholder="Number of Floors"
                        className="w-full pl-10 pr-4 py-3 border border-emerald-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-emerald-900 placeholder-emerald-400/70"
                      />
                    </div>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" />
                      <input
                        type="text"
                        name="installationYear"
                        value={formData.installationYear}
                        onChange={handleChange}
                        placeholder="Installation Year"
                        className="w-full pl-10 pr-4 py-3 border border-emerald-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-emerald-900 placeholder-emerald-400/70"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Wrench className="absolute left-3 top-3 w-5 h-5 text-emerald-400" />
                    <textarea
                      name="currentAMC"
                      value={formData.currentAMC}
                      onChange={handleChange}
                      placeholder="Current AMC Details or Additional Requirements"
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 border border-emerald-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-emerald-900 placeholder-emerald-400/70 resize-none"
                    />
                  </div>

                  <select
                    name="liftType"
                    value={formData.liftType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-emerald-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-gray-50 text-emerald-900"
                    aria-label="Select Lift Type"
                  >
                    <option value="">Select Lift Type</option>
                    <option value="MR">Machine Room (MR)</option>
                    <option value="MRL">Machine Room-Less (MRL)</option>
                    <option value="Hydraulic">Hydraulic</option>
                    <option value="Car Lift">Car Lift</option>
                    <option value="Goods Lift">Goods Lift</option>
                  </select>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-bottle-green text-white py-4 rounded-lg flex items-center justify-center gap-3 font-semibold text-base tracking-wider transition-all duration-300 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:scale-[1.02]'
                    }`}
                    aria-label="Submit form"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
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
                        <Send size={20} />
                        Submit Request
                      </>
                    )}
                  </button>
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