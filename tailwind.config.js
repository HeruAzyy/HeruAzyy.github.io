/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      roboto: 'Roboto'
    },
    extend: {
      colors: {
        dark: '#14213d',
        light: '#E5E5E5',
        yellow: '#FCA311'
      }
    }
  },
  plugins: []
};
