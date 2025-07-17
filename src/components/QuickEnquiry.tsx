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
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50"
    >
      <button
        onClick={handleClick}
        className="bg-gradient-to-b from-gray-400 to-gray-300 hover:from-gray-300 hover:to-gray-200 text-gray-800 px-3 py-8 rounded-l-lg shadow-lg transition-colors duration-300 flex items-center group"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <MessageSquare className="w-5 h-5 mb-2 group-hover:scale-110 transition-transform" />
        <span className="font-medium text-sm tracking-wider">GET IN TOUCH</span>
      </button>
    </motion.div>
  );
};

export default QuickEnquiry;