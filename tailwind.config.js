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
        primary_light: '#b7bcc0',
        secondary_blue: '#36536b',
        secondary_black:'#1b262f',
        secondary_pink:'#da6d97',
        secondary_lblue:'#6c8294',
        secondary_bg:'#edf3f8'
      },
      fontFamily:{
        sans:['Public Sans', 'sans-serif'],
        display:['DM Serif Display', 'sans-serif']
      }
   
  },
  plugins: [],
  }
}