/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'Figtree': ['Figtree', 'sans-serif'],
      'Lexend': ['Lexend', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}