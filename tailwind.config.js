/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#B557FF",
        "custom-black": "#201925",
        "custom-white": "#FFF5FF",
      },

      padding: {
        "custom-side": "120px",
      },
      margin: {
        "custom-side": "120px",
      },
    },
  },
  plugins: [],
};
