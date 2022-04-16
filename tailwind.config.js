const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
    colors: {
      red: "#f91944",
      white: "#ffffff",
      blue: colors.blue,
      gray: colors.gray,
    },
  },
  plugins: [],
};
