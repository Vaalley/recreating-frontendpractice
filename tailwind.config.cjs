/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        // '-2xl': { max: '1439px' },
        '-xl': { max: '1279px' },
        '-lg': { max: '1023px' },
        '-md': { max: '767px' },
        '-sm': { max: '639px' },
      },
      colors: {
        'grey': '#333333',
        'black': '#000',
        'white': '#fff',
        'green': '#bcff93',
        'yellow': '#fcff74',
        'orange': '#ffd430',
        'pale': '#ffecd4',
      },
    },
    fontFamily: {
      'dmserifdisplay': ['DM Serif Display'],
      'archivo': ['Archivo'],
    }
  },
  plugins: []
};