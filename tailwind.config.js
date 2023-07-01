/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'mob': {'min': '320px', 'max': '639px'},
        'tl': {'min': '768px', 'max': '1439px'}
      },
      backgroundImage: {
        'home': "url('https://imageup.me/images/ad65b05b-f279-44f6-9e79-137e211443d0.jpeg?v=26')",
      }
    },
    
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}

