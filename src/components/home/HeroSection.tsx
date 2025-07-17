// HeroSection.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToTestimonials = () => {
    const el = document.getElementById('testimonials');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden m-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/BG.jpg"
          alt="Modern elevator"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center scale-110"
          style={{ objectPosition: 'center 60%' }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl text-white bg-pearlescent-subtle/10 backdrop-blur-lg rounded-3xl border border-white/10 shadow-xl">
        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-xl text-white px-4">
            Elevating Lives.{' '}
            <span className="text-white/90">One Lift at a Time.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-medium drop-shadow text-white/90 max-w-2xl px-4">
            Luxury, safety, and innovation — crafted for every journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 px-4 pb-4">
            <button
              onClick={() => navigate('/contact')}
              className="btn-bottle-green px-6 py-3 rounded-xl text-base font-semibold flex items-center shadow-md"
            >
              Book a Site Visit
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>

            <button
              onClick={scrollToTestimonials}
              className="border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl text-base font-semibold"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
