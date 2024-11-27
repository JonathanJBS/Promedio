/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: { 'mi-fondo': "url('./img/fondo.jpg')", }
    },
  },
  plugins: [],
}

