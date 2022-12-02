/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
          where: {
              Mulish: ['Mulish', 'sans-serif']
          }
      }
    },
  },
  plugins: [],
}