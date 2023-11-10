/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  daisyui: {
    themes: ['cupcake', 'dracula'],
    darkTheme: 'dracula',
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('autoprefixer'),
    require('daisyui'),
  ],
}
