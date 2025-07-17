import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Counter animation hook
const useCountUp = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, shouldStart]);
  
  return count;
};

const PartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const projectsCount = useCountUp(500, 2000, isVisible);
  const yearsCount = useCountUp(15, 2000, isVisible);
  const supportHours = useCountUp(24, 1500, isVisible);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const partners = [
    'Otis Elevator Company',
    'Schindler Group',
    'KONE Corporation',
    'ThyssenKrupp Elevator',
    'Mitsubishi Electric',
    'Hitachi Elevators',
    'Fujitec Co. Ltd',
    'Hyundai Elevator',
    'Johnson Lifts',
    'Express Lifts',
    'Escon Elevators',
    'Sigma Elevators'
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-cover bg-center" style={{ backgroundImage: 'url(/bg-texture.png)' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Trusted Partners</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We collaborate with industry-leading brands to deliver the highest quality elevator solutions.
          </p>
        </motion.div>

        {/* Scrolling Partners Marquee */}
        <div className="relative overflow-hidden border-y border-white/10 py-4 backdrop-blur-md">
          <motion.div
            animate={{ x: [0, -100 * partners.length] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-12 whitespace-nowrap"
            style={{ width: `${200 * partners.length}%` }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[220px] h-20 px-4 bg-white/5 hover:bg-white/10 rounded-lg shadow-sm transition-all duration-300"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-100 font-medium text-sm tracking-wide">{partner}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 text-center"
        >
          <div>
            <div className="text-5xl font-extrabold text-green-400 mb-2">{projectsCount}+</div>
            <div className="text-gray-300 text-lg">Projects Completed</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-green-400 mb-2">{yearsCount}+</div>
            <div className="text-gray-300 text-lg">Years Experience</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-green-400 mb-2">{supportHours}/7</div>
            <div className="text-gray-300 text-lg">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;