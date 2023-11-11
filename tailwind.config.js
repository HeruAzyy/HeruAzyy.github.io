/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      roboto: "Roboto",
    },
    extend: {
      animationDelay: {
        1600: "1600ms",
        1700: "1700ms",
        1800: "1800ms",
        1900: "1900ms",
        2000: "2000ms",
        2100: "2100ms",
        2200: "2200ms",
        2300: "2300ms",
        2400: "2400ms",
        2500: "2500ms",
        2700: "2700ms",
        2900: "2900ms",
        3100: "3100ms",
        3300: "3300ms",
        3500: "3500ms",
      },
      colors: {
        dark: "#14213d",
        light: "#E5E5E5",
        yellow: "#FCA311",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
