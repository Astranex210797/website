import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[90vh] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/BG.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-bottom"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-2xl">
          Elevate Your Space with Precision
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-lg text-white/90">
          Premium Lift Solutions Tailored for Modern Needs
        </p>
        <button
          onClick={() => navigate('/products')}
          className="mt-6 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explore Products <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;