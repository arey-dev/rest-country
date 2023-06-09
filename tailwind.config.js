/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "hsl(0, 0%, 98%)",
          element: "hsl(0, 0%, 100%)",
          text: "hsl(200, 15%, 8%)",
          input: "hsl(0, 0%, 52%)",
        },
        dark: {
          background: "hsl(207, 26%, 17%)",
          element: "hsl(209, 23%, 22%)",
          text: "hsl(0, 0%, 100%)",
          input: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@tailwindcss/container-queries"),
    // eslint-disable-next-line no-undef
    require("@tailwindcss/forms"),
  ],
};
