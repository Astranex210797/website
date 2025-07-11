// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1ABC9C',     // Primary Teal
          dark: '#145943',        // CTA Hover
          text: '#0D3B2E',        // Heading/Dark
          gray: '#6C757D',        // Subtext
          bg: '#F2FCF9',          // Soft light background
        },
      },
      // Custom carousel snap utilities
      spacing: {
        'carousel': 'calc(100vw - 2rem)',
      },
    },
  },
  plugins: [
    // Hide scrollbars utility
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* For Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* For IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      });
    },
  ],
};
