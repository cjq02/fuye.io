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
      },
    },
  },
  plugins: [],
} 