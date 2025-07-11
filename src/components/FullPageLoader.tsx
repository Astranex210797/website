// Step 1: Create a full-page loader component
import React from 'react';
import { motion } from 'framer-motion';

const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-[#0f1f1b] to-[#122219] flex items-center justify-center z-[9999]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="text-white text-3xl font-semibold flex items-center space-x-3"
      >
        <motion.div
          className="w-4 h-4 rounded-full bg-green-400"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: 'loop', delay: 0.2 }}
        />
        <span>Loading Peak Experience...</span>
        <motion.div
          className="w-4 h-4 rounded-full bg-green-400"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: 'loop', delay: 0.4 }}
        />
      </motion.div>
    </div>
  );
};

export default FullPageLoader;
