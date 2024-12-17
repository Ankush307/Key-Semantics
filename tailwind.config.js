/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#191A42',
        'dawn-pink': '#ECE8F8',
        'light-gray': '#F7F9FB',
        'lily-white': '#E3F7FA',
        'sky-blue': '#48C3D7',
        'lavender-purple': '#7C7DB9',
        'ghost-gray': '#C9CAD4',
      },
      backgroundImage: {
        'hero-image': "url('../public/assets/image/webp/hero-bg.webp')",
      },
    },
  },
  plugins: [],
}