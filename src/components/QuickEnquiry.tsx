import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const QuickEnquiry = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <button
        onClick={handleClick}
        className="btn-bottle-green px-3 py-8 rounded-l-lg shadow-lg transition-colors duration-300 flex items-center group"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        aria-label="Get in touch"
      >
        <MessageSquare className="w-5 h-5 mb-2 group-hover:scale-110 transition-transform" />
        <span className="font-medium text-sm tracking-wider text-white">Get In Touch</span>
      </button>
    </div>
  );
};

export default QuickEnquiry;