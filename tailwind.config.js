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
    animationDelay: {
      2500: '2500ms',
      2700: '2700ms',
      2900: '2900ms',
      3100: '3100ms',
      3300: '3300ms',
      3500: '3500ms'
    },
    extend: {
      colors: {
        dark: '#14213d',
        light: '#E5E5E5',
        yellow: '#FCA311'
      }
    }
  },
  plugins: [require('tailwindcss-animation-delay')]
}
