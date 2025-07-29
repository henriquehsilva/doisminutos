/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#BF247A',
        'brand-purple': '#812B8C',
        'brand-navy': '#2A2359',
        'brand-orange': '#D9731A',
        'brand-red': '#BF3939',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};