/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: { 
        'working-img' : "url('/public/work-process.webp')"
      },
      fontFamily: {
        'primary' : ["Poppins", "sans-serif"],
        'secondary' : ["Syne", "sans-serif"]
      },
      colors: {
        'heroBg' :  "#0e1122",
        'para':"rgb(0 0 0 / 80%)",
        'primary': '#476685'
      }
    },
  },
  plugins: [],
}

