/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pry: '#CD9564',
        sec: '[rgb(10,32,8)]',
        sec1: '#93B0D5'
      }
    },
  },
  plugins: [],
}