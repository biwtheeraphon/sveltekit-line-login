/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
  plugins: [
    require('daisyui')
  ]
};