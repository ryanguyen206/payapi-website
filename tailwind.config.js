/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary_dark: '#ba4270',
        primary_light: '#fbfcfe',
        secondary_blue: '#36536b',
        secondary_mirage:'#1b262f',
        secondary_pink:'#da6d97',
        secondary_lblue:'#6c8294'
      },
      fontFamily:{
        sans:['Public Sans', 'sans-serif'],
        display:['DM Serif Display', 'sans-serif']
      }
   
  },
  plugins: [],
  }
}