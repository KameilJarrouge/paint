/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F5",
        accent: "#001F3F",
        callToAction: "#39CCCC",
        foreground: "#212121",
      },
      fontFamily: {
        poppins: ["Poppins", "system-ui"],
      },
    },
  },
  plugins: [],
});
