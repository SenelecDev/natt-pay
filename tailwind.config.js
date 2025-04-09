/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': {
          500: '#FF7A00',
          600: '#E06500',
        },
      },
    },
  },
  plugins: [],
}