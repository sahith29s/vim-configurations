/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./server/template/views/*.hbs",
    "./server/template/partials/*.hbs",
    "./*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

