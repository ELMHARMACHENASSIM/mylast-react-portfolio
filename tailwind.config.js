/** @type {import('tailwindcss').Config} */
/*global  require*/
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    colors: {
      "body-color": "#FDF7E4",
      deep: "#000000",
      white: "#ffffff",
      red: " #ff0000",
      dark: "#121212",
    },
    extend: {},
    fontFamily: {
      Akira: ["Akira"],
      "Poppins-E": ["Poppins-E"],
      "Poppins-R": ["Poppins-R"],
      Boldstorm: ["Boldstorm"],
      Brush: ["Brush"],
      Sign: ["Sign"],
      Vogue: ["Vogue"],
      KOLAK: ["KOLAK"],
    },
    screens: {
      sm: { max: "767px" },
      // =>  max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2l": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [flowbite.plugin()],
};
