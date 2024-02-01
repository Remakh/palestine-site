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
      innerShadow: {
        'button': '10px 10px 5px lightblue inset',
      },
      colors: {
        "cream" : '#FFFDD0',
        "gold" : '#FFD700', 
        "forest-green": '#2D511C',
        "beige" : "#F5F5DC"
      }
    },
  
  },
  plugins: [],
}

