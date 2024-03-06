/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#222831",
        primary: "#393e46",
        secondary: "#00adb5",
        accent: "#eeeeee",
      },
    },
  },
  plugins: [],
};
