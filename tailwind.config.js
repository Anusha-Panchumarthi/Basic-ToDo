/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        'poppins': ['Poppins'],
        'lobster':['Lobster']
      },
      backgroundImage: {
        'hero': "url('../img/bg1.jpg')",
      },
    },
  },
  plugins: [],
}
