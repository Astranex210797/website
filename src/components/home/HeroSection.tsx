import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: 'easeOut' }
        }
      }}
      className="pt-28 pb-20 bg-white perspective-[1000px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-5xl font-extrabold text-bottle-green leading-tight tracking-tight"
          initial={{ opacity: 0, rotateY: 45 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Elevate Life With <span className="text-bottle-green-solid">Peak Precision</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-bottle-green-solid/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Discover the next generation of elevators engineered for comfort, performance, and elegance.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="#products"
            className="inline-block px-8 py-4 rounded-full btn-bottle-green font-semibold text-lg shadow-md hover:shadow-lg transition"
          >
            Explore Products
          </a>
        </motion.div>

        <motion.div
          className="mt-16 max-w-4xl mx-auto aspect-[3/1] rounded-2xl overflow-hidden shadow-lg border border-gray-200/50"
          initial={{ opacity: 0, rotateY: 30 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img
            src="/hero-elevator.jpg"
            alt="Modern elevator view"
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => { e.currentTarget.src = '/placeholder.jpg'; }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
