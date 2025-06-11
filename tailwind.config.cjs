/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'telegram-blue': '#0088cc',
        'telegram-light-blue': '#40a9ff',
        purple: {
          100: '#F3E8FF',
          600: '#9333EA',
        },
        pink: {
          100: '#FCE7F3',
          600: '#DB2777',
        },
        rose: {
          100: '#FFE4E6',
          600: '#E11D48',
        },
        fuchsia: {
          100: '#FDF4FF',
          600: '#C026D3',
        },
        violet: {
          100: '#EDE9FE',
          600: '#7C3AED',
        },
        sky: {
          100: '#E0F2FE',
          600: '#0284C7',
        },
        emerald: {
          100: '#D1FAE5',
          600: '#059669',
        },
        cyan: {
          100: '#CFFAFE',
          600: '#06B6D4',
        },
        teal: {
          100: '#CCFBF1',
          600: '#0D9488',
        },
        orange: {
          100: '#FFF7ED',
          600: '#EA580C',
        },
      },
    },
  },
  plugins: [],
} 