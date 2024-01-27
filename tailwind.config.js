/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        fmGreen: "#c5f82a",
        fmGrey: "#333333",
        fmDarkGrey: "#1f1f1f",
        fmOffBlack: "#141414",
      },
    },
  },
  plugins: [],
};
