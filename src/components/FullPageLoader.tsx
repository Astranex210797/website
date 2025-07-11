// FullPageLoader.tsx
import React from 'react';
import { motion } from 'framer-motion';

const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#145943] via-[#1ABC9C] to-white">
      {/* Animated Loader Ring */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: 360 }}
        transition={{
          duration: 1.2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        className="w-24 h-24 border-[8px] border-t-white border-b-[#145943] border-l-[#1ABC9C] border-r-transparent rounded-full shadow-2xl"
        style={{
          boxShadow: '0 0 40px 8px #14594344, 0 0 0 4px #fff inset',
          background: 'radial-gradient(circle at 60% 40%, #1ABC9C22 0%, #14594311 100%)',
        }}
      />

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 1.2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="mt-8 text-2xl font-bold tracking-widest text-white drop-shadow-lg"
        style={{
          textShadow: '0 2px 16px #14594388, 0 0 2px #fff',
          letterSpacing: '0.15em',
        }}
      >
        Elevating Experience...
      </motion.div>
    </div>
  );
};

export default FullPageLoader;
