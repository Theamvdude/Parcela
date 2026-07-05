/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        'cream-deep': '#F0EBE0',
        forest: '#2D5016',
        'forest-mid': '#4A7C2F',
        amber: '#E8A045',
        'amber-dark': '#C8831E',
        'dark-text': '#1A1A14',
        'body-text': '#4A4540',
        'muted-text': '#8A8278',
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'floatDelayed 3.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatDelayed: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      boxShadow: {
        soft: '0 2px 12px rgba(26,26,20,0.06)',
        card: '0 4px 24px rgba(26,26,20,0.08)',
        lift: '0 12px 40px rgba(26,26,20,0.12)',
      },
    },
  },
  plugins: [],
};
