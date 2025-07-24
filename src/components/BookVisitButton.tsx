import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Send,
  X,
  User,
  Phone,
  MapPin,
  Building,
  Calendar,
  Wrench,
} from 'lucide-react';

const BookVisitButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    floors: '',
    liftType: '',
    installationYear: '',
    currentAMC: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setShowButton(window.scrollY > heroHeight);
      
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsFooterVisible(footerRect.top < windowHeight);
      }
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

    const subject = encodeURIComponent('Site Visit Request - Peak Elevator Group');
    const body = encodeURIComponent(`
Site Visit Request Details:

Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Number of Floors: ${formData.floors}
Lift Type: ${formData.liftType}
Installation Year: ${formData.installationYear}
Current AMC/Requirements: ${formData.currentAMC}

Please contact me to schedule a site visit.

Best regards,
${formData.name}
    `);
    
    const mailtoLink = `mailto:Admin@peakelevatorgroup.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
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
          currentAMC: '',
        });
      }, 1500);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {showButton && !isFooterVisible && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-2 top-1/2 -translate-y-1/2 z-50 rounded-r-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-emerald-50/90 hover:bg-emerald-100/90 border border-emerald-200/50 text-emerald-600 px-1.5 py-4 shadow-sm transition-all duration-200 flex flex-col items-center justify-center group hover:shadow-md backdrop-blur-sm"
              style={{
                writingMode: 'vertical-lr',
                textOrientation: 'upright',
              }}
              aria-label="Book a site visit"
            >
              <Calendar className="w-3.5 h-3.5 mb-1.5 group-hover:scale-105 transition-transform duration-200" />
              <span className="font-medium text-[10px] tracking-tight text-emerald-600 transform rotate-180">
                Visit
              </span>
              <ArrowRight className="w-3.5 h-3.5 mt-1.5 group-hover:scale-105 transition-transform duration-200 transform rotate-90" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="bg-white/95 p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-xl w-full max-w-[90vw] sm:max-w-md md:max-w-lg relative border border-emerald-100/50 backdrop-blur-sm max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-100/80 hover:bg-red-100/80 flex items-center justify-center text-gray-500 hover:text-red-500 transition-all duration-200 hover:scale-105"
                aria-label="Close form"
              >
                <X size={14} className="sm:w-5 sm:h-5" />
              </button>

              <div className="text-center mb-3 sm:mb-4 md:mb-5">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-sm"
                >
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                </motion.div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                  Schedule a Site Visit
                </h2>
                <p className="text-emerald-600/80 text-xs sm:text-sm leading-relaxed">Expert consultation for your elevator needs</p>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-center py-6 sm:py-8"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-100 to-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-sm">
                    <Send className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-emerald-800 mb-1 sm:mb-2">Thank You!</h3>
                  <p className="text-xs sm:text-sm text-emerald-600 leading-relaxed">We'll contact you soon to schedule your visit.</p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit} 
                  className="space-y-3 sm:space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <InputField 
                      icon={<User />} 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Your Name" 
                      required 
                    />
                    <InputField 
                      icon={<Phone />} 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="Phone Number" 
                      required 
                    />
                  </div>

                  <InputField 
                    icon={<MapPin />} 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange} 
                    placeholder="Site Address" 
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <InputField 
                      icon={<Building />} 
                      name="floors" 
                      value={formData.floors} 
                      onChange={handleChange} 
                      placeholder="Floors" 
                      type="number" 
                    />
                    <InputField 
                      icon={<Calendar />} 
                      name="installationYear" 
                      value={formData.installationYear} 
                      onChange={handleChange} 
                      placeholder="Install Year" 
                    />
                  </div>

                  <div className="relative group">
                    <Wrench className="absolute left-2.5 top-2.5 w-4 h-4 sm:w-4.5 sm:h-4.5 text-emerald-400 group-focus-within:text-emerald-600 transition-all duration-200" />
                    <textarea
                      name="currentAMC"
                      value={formData.currentAMC}
                      onChange={handleChange}
                      placeholder="AMC or Requirements"
                      rows={2}
                      className="w-full pl-8 pr-2 py-2 sm:pl-9 sm:pr-3 sm:py-2.5 border border-emerald-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 bg-gray-50/50 hover:bg-gray-50 text-emerald-900 placeholder-emerald-400/70 resize-none text-xs sm:text-sm font-normal leading-relaxed"
                    />
                  </div>

                  <div className="relative group">
                    <select
                      name="liftType"
                      value={formData.liftType}
                      onChange={handleChange}
                      className="w-full px-2 sm:px-3 py-2 sm:py-2.5 border border-emerald-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 bg-gray-50/50 hover:bg-gray-50 text-emerald-900 transition-all duration-300 text-xs sm:text-sm font-normal leading-relaxed"
                      aria-label="Select Lift Type"
                    >
                      <option value="">Select Lift Type</option>
                      <option value="MR">Machine Room (MR)</option>
                      <option value="MRL">Machine Room-Less (MRL)</option>
                      <option value="Hydraulic">Hydraulic</option>
                      <option value="Car Lift">Car Lift</option>
                      <option value="Goods Lift">Goods Lift</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg flex items-center justify-center gap-1.5 sm:gap-2 font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg group ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        <span className="hidden sm:inline">Submitting...</span>
                        <span className="sm:hidden">Submit...</span>
                      </>
                    ) : (
                      <>
                        <Send size={12} className="sm:w-4 sm:h-4 group-hover:scale-105 transition-all duration-200" />
                        <span className="hidden sm:inline">Submit Request</span>
                        <span className="sm:hidden">Submit</span>
                        <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const InputField = ({
  icon,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
}) => (
  <div className="relative group">
    <span className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-4.5 sm:h-4.5 text-emerald-400 group-focus-within:text-emerald-600 transition-all duration-200">
      {icon}
    </span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full pl-8 sm:pl-9 pr-2 sm:pr-3 py-2 sm:py-2.5 border border-emerald-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 bg-gray-50/50 hover:bg-gray-50 text-emerald-900 placeholder-emerald-400/70 text-xs sm:text-sm font-normal leading-relaxed"
    />
  </div>
);

export default BookVisitButton;