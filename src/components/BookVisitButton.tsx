import React, { useState } from 'react';
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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    liftType: '',
    installationYear: '',
    floors: '',
    amc: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setIsFormOpen(false);
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        address: '',
        liftType: '',
        installationYear: '',
        floors: '',
        amc: '',
      });
    }, 2000);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ opacity: 0, x: -20, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -20, scale: 0.9 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed left-2 top-1/2 -translate-y-1/2 z-50 overflow-hidden shadow-md rounded-tr-xl rounded-br-xl"
      >
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-gradient-to-b from-emerald-800 to-emerald-600 text-white px-1 py-3 sm:px-1.5 sm:py-4 flex flex-col items-center justify-center group hover:shadow-lg border border-emerald-800/40 w-9 sm:w-10"
          style={{
            writingMode: 'vertical-lr',
            textOrientation: 'upright',
          }}
          aria-label="Book a visit"
        >
          <Calendar className="w-3.5 h-3.5 mb-1 group-hover:scale-105 transition-transform duration-200" />
          <span className="font-medium text-[10px] sm:text-[11px] tracking-tight leading-tight">
            Book a visit
          </span>
          <ArrowRight className="w-3.5 h-3.5 mt-1 group-hover:scale-105 transition-transform duration-200 rotate-90" />
        </button>
      </motion.div>

      {/* Pop-up Form */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl p-6 w-full max-w-lg relative"
            >
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                <X size={20} />
              </button>

              {formSubmitted ? (
                <div className="text-center py-10">
                  <Send className="mx-auto mb-4 text-emerald-600" size={40} />
                  <h2 className="text-xl font-semibold mb-2">
                    Submitted successfully!
                  </h2>
                  <p className="text-gray-600 text-sm">
                    We’ll get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold mb-4 text-center">
                    Book a Site Visit
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center border rounded-md px-3 py-2">
                      <User className="mr-2 text-gray-400" size={18} />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full outline-none"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="flex items-center border rounded-md px-3 py-2">
                      <Phone className="mr-2 text-gray-400" size={18} />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full outline-none"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="flex items-center border rounded-md px-3 py-2">
                      <MapPin className="mr-2 text-gray-400" size={18} />
                      <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        className="w-full outline-none"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="flex items-center border rounded-md px-3 py-2">
                      <Building className="mr-2 text-gray-400" size={18} />
                      <input
                        type="text"
                        name="liftType"
                        placeholder="Lift Type"
                        className="w-full outline-none"
                        value={formData.liftType}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex items-center border rounded-md px-3 py-2">
                      <Calendar className="mr-2 text-gray-400" size={18} />
                      <input
                        type="text"
                        name="installationYear"
                        placeholder="Installation Year"
                        className="w-full outline-none"
                        value={formData.installationYear}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex items-center border rounded-md px-3 py-2">
                      <Wrench className="mr-2 text-gray-400" size={18} />
                      <input
                        type="text"
                        name="floors"
                        placeholder="Number of Floors"
                        className="w-full outline-none"
                        value={formData.floors}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex items-center border rounded-md px-3 py-2">
                      <Wrench className="mr-2 text-gray-400" size={18} />
                      <input
                        type="text"
                        name="amc"
                        placeholder="AMC Details"
                        className="w-full outline-none"
                        value={formData.amc}
                        onChange={handleInputChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition"
                    >
                      Submit
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookVisitButton;
