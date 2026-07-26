/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f7f5f2',
          100: '#ece7e0',
          200: '#d8cfc2',
          300: '#b9a98f',
          400: '#9c8463',
          500: '#7d6647',
          600: '#5f4d34',
          700: '#443726',
          800: '#2a2218',
          900: '#1a1510',
          950: '#0f0c08',
        },
        wine: {
          50: '#fbf3f3',
          100: '#f6e0e0',
          200: '#edc0c0',
          300: '#df9696',
          400: '#cc6262',
          500: '#b23f3f',
          600: '#932f2f',
          700: '#762727',
          800: '#5e2424',
          900: '#4d2222',
          950: '#2a0f0f',
        },
        gold: {
          50: '#fbf8f0',
          100: '#f5ecd2',
          200: '#ebd79f',
          300: '#dfbd6b',
          400: '#d4a843',
          500: '#c08c2a',
          600: '#a36d22',
          700: '#82521e',
          800: '#6c441f',
          900: '#5d3a1f',
          950: '#351f0f',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
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
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
      },
    },
  },
  plugins: [],
};
