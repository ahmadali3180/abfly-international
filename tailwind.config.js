/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-custom": "#A83131",
        "gray-custom": "#DCDCDC",
        "blue-custom": "#219ebc",
        "lightblue-custom": "#8ecae6",
        "darkblue-custom": "#023047",
        "yellow-custom": "#ffb703",
        "orange-custom": "#fb8500",
      },
      screens: {
        xs: "480px",
        xxs: "320px",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
