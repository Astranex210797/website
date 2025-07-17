import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[90vh] overflow-hidden flex items-center justify-center pb-1 bg-black/10 backdrop-blur-[2px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/BG.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Text Content with Glass Effect */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Elevate Your Space with Precision
          </h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow">
            Premium Lift Solutions Tailored for Modern Needs
          </p>
          <button
            onClick={() => navigate('/products')}
            className="mt-6 inline-flex items-center gap-2 bg-white text-bottle-green-solid font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Explore Products <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;