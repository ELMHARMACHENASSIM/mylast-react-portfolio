/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "body-color": "#FDF7E4",
    },
    extend: {
    },
    fontFamily: {
      'Akira': ['Akira'] ,
      'Poppins-E' : ['Poppins-E'],
      'Poppins-R' : ['Poppins-R'],
      'Boldstorm' : ['Boldstorm']
    },
  },
  plugins: [],
};
