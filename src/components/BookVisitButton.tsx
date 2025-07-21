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
      const trigger = window.innerHeight * 0.1;
      setShowButton(window.scrollY > trigger);
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
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="fixed left-1 top-1/2 -translate-y-1/2 z-50"
          >
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-[#065f46] text-white text-[10px] px-2 py-6 rounded-r-lg shadow-md transition-all duration-300"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
                scale: '0.55',
                letterSpacing: '0.025em',
              }}
              aria-label="Book a site visit"
            >
              Book A Visit
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          >
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-lg relative border border-emerald-200/50">
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-emerald-800 hover:text-emerald-900 transition-colors"
                aria-label="Close form"
              >
                <X size={18} />
              </button>

              <div className="text-center mb-6 md:mb-8">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-7 h-7 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-emerald-800 mb-1">Schedule a Site Visit</h2>
                <p className="text-emerald-600 text-sm">Get expert consultation for your elevator needs</p>
              </div>

              {isSubmitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-2">Thank You!</h3>
                  <p className="text-emerald-600">We’ll be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField icon={<User />} name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                    <InputField icon={<Phone />} name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
                  </div>

                  <InputField icon={<MapPin />} name="address" value={formData.address} onChange={handleChange} placeholder="Site Address" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField icon={<Building />} name="floors" value={formData.floors} onChange={handleChange} placeholder="Number of Floors" type="number" />
                    <InputField icon={<Calendar />} name="installationYear" value={formData.installationYear} onChange={handleChange} placeholder="Installation Year" />
                  </div>

                  <div className="relative">
                    <Wrench className="absolute left-3 top-3 w-5 h-5 text-emerald-400" />
                    <textarea
                      name="currentAMC"
                      value={formData.currentAMC}
                      onChange={handleChange}
                      placeholder="Current AMC or Other Requirements"
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 border border-emerald-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200 bg-gray-50 text-emerald-900 placeholder-emerald-400/70 resize-none"
                    />
                  </div>

                  <select
                    name="liftType"
                    value={formData.liftType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-emerald-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 text-emerald-900"
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
                    className={`w-full bg-emerald-600 text-white py-3 rounded-lg flex items-center justify-center gap-3 font-semibold text-sm tracking-wide transition-all duration-300 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:scale-[1.02]'
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
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
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
  <div className="relative">
    <span className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400">{icon}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full pl-10 pr-4 py-3 border border-emerald-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200 bg-gray-50 text-emerald-900 placeholder-emerald-400/70"
    />
  </div>
);

export default BookVisitButton;
