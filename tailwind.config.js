/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#2b3945",
        veryDarkBlue: "#202c37",
        veryDarkBlue2: "#111517",
        darkGray: "#858585",
        veryLightGray: "#fafafa",
        white: "#ffffff",
      },
      fontFamily: {
        naru: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
