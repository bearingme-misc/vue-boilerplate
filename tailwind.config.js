/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

const primary = colors.purple;
const secondary = colors.gray;

const setColor = (colorObject, defaultShade = 700) => ({
  ...colorObject,
  DEFAULT: colorObject[defaultShade],
});

export default {
  darkMode: "class",
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: setColor(primary),
        secondary: setColor(secondary),
      },
    },
  },
  plugins: [],
};
