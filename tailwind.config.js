/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img':"url('../Take-assets/masthead.jpg')"
      },
      colors:{
        neutral:{
          'off-white': 'hsl(36, 100%, 99%)',
          'gray': 'hsl(220, 2%, 63%)',
          'off_black': 'hsl(0, 0%, 10%)',
      },
    },
  },
  plugins: [],
}}

