import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const QuickEnquiry = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > heroHeight);

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

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <AnimatePresence>
      {isVisible && !isFooterVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 50, scale: 0.8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-50 rounded-l-none rounded-r-xl overflow-hidden"
        >
          <button
            onClick={handleClick}
            className="bg-gradient-to-b from-[#0F3D2D] to-[#135C45] text-white px-1.5 py-3 shadow-md transition-all duration-300 flex flex-col items-center justify-center group hover:scale-105 hover:shadow-lg h-full"
            style={{
              writingMode: 'vertical-lr',
              textOrientation: 'upright',
              borderRadius: '0 12px 12px 0',
            }}
            aria-label="Get in touch"
          >
            <MessageSquare className="w-[14px] h-[14px] mb-1 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-[9px] tracking-wider transform rotate-180">Get In Touch</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickEnquiry;
