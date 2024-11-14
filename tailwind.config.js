/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderColor:{
        'secondary':'#024fa1'
      }
    },
    fontFamily:{
      'hero-font':'Sriracha'
    }
  },
  plugins: [],
}

