/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "red-custom": "#FF5630",
        "orange-custom": "#FFAB00",
        "green-custom": "#38CB89",
        "blue-custom": "#377DFF",

        "black-shade-1": "#141718",
        "black-shade-2": "#232627",
        "black-shade-3": "#343839",
        "black-shade-4": "#6C7275",

        "white-shade-1": "#E8ECEF",
        "white-shade-2": "#F3F5F7",
      },
    },
  },
  plugins: [],
};
