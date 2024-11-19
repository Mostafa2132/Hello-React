/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',


      'md': '768px',
      

      'lg': '1024px',
      

      'xl': '1280px',
      

      '2xl': '1280px',
      
    },
    extend: {

    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}