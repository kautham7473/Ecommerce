/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rosepink: '#e63b70',
        rosehover: '#cc2d5f',
        lightrose: '#fff1f7'
      },
    },
  }
  ,
  plugins: [],
}
