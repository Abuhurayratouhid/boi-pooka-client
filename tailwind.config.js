/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5653e0",
        sec_primary: "#f5e6d9",
        secondary: "#f5e6d9",
        sec_secondary: "#646464",
        accent: "#f1afc0",
        sec_accent: "#c19789",
        gray: "#EEEEEE",
        sec_gray: "#DBDFEA",
      },
    },
  },
  plugins: [],
};
