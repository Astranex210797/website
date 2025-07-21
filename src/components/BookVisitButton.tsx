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
      // Show button when user scrolls past hero section (approximately 80vh)
      const heroHeight = window.innerHeight * 0.8;
      setShowButton(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
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
          currentAMC: '',
        });
      }, 1500);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed left-0 top-1/2 -translate-y-1/2 z-50"
          >
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-800 hover:to-emerald-700 text-white px-3 py-8 rounded-r-xl shadow-lg transition-all duration-300 flex items-center group hover:scale-105 hover:shadow-2xl hover:pr-4"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
              }}
              aria-label="Book a site visit"
            >
              <Calendar className="w-5 h-5 mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <span className="font-semibold text-sm tracking-wider text-white group-hover:tracking-wide transition-all duration-300">
                Book A Visit
              </span>
              <ArrowRight className="w-4 h-4 mt-3 group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl w-full max-w-lg relative border border-emerald-100 backdrop-blur-sm"
            >
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-50 hover:bg-red-50 flex items-center justify-center text-gray-500 hover:text-red-500 transition-all duration-200 hover:scale-110 hover:rotate-90"
                aria-label="Close form"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6 md:mb-8">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md"
                >
                  <Calendar className="w-8 h-8 text-emerald-600" />
                </motion.div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent mb-2">
                  Schedule a Site Visit
                </h2>
                <p className="text-emerald-600/80 text-sm">Get expert consultation for your elevator needs</p>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Send className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-800 mb-2">Thank You!</h3>
                  <p className="text-emerald-600">We'll be in touch soon to schedule your visit.</p>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField 
                      icon={<Building />} 
                      name="floors" 
                      value={formData.floors} 
                      onChange={handleChange} 
                      placeholder="Number of Floors" 
                      type="number" 
                    />
                    <InputField 
                      icon={<Calendar />} 
                      name="installationYear" 
                      value={formData.installationYear} 
                      onChange={handleChange} 
                      placeholder="Installation Year" 
                    />
                  </div>

                  <div className="relative group">
                    <Wrench className="absolute left-3 top-3 w-5 h-5 text-emerald-400 group-focus-within:text-emerald-600 group-focus-within:scale-110 transition-all duration-200" />
                    <textarea
                      name="currentAMC"
                      value={formData.currentAMC}
                      onChange={handleChange}
                      placeholder="Current AMC or Other Requirements"
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 border border-emerald-200/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 bg-gray-50/50 hover:bg-gray-50 text-emerald-900 placeholder-emerald-400/70 resize-none focus:shadow-md"
                    />
                  </div>

                  <div className="relative group">
                    <select
                      name="liftType"
                      value={formData.liftType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-emerald-200/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 bg-gray-50/50 hover:bg-gray-50 text-emerald-900 transition-all duration-300 focus:shadow-md"
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
                    className={`w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-3 font-semibold text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl group ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
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
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                        Submit Request
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
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
}: {
  icon: React.ReactNode;
  name: string;
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) => (
  <div className="relative group">
    <span className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400 group-focus-within:text-emerald-600 group-focus-within:scale-110 transition-all duration-200">
      {icon}
    </span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full pl-10 pr-4 py-3 border border-emerald-200/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 bg-gray-50/50 hover:bg-gray-50 text-emerald-900 placeholder-emerald-400/70 focus:shadow-md"
    />
  </div>
);

export default BookVisitButton;