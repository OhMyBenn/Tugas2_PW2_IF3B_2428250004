/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vitBlue: "#1e40af", // contoh warna biru Vitmart
        vitGreen: "#047857", // contoh hijau Vitmart
      },
    },
  },
  plugins: [],
};

