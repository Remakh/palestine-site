/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontSize : {
        'title': '7rem'
      },
      colors: {
        'cream' : '#FFFDD0'
      }
    },
  
  },
  plugins: [],
}

