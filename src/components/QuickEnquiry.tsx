import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const QuickEnquiry = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls past hero section (approximately 80vh)
      const heroHeight = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 50, scale: 0.8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-50"
        >
          <button
            onClick={handleClick}
            className="btn-bottle-green px-2 py-6 rounded-l-lg shadow-lg transition-all duration-300 flex items-center group hover:scale-105 hover:shadow-xl"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            aria-label="Get in touch"
          >
            <MessageSquare className="w-4 h-4 mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-xs tracking-wider text-white">Get In Touch</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickEnquiry;