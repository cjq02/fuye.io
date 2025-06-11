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