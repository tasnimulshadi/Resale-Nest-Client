/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#65bafc",
          "primary-focus": "#0097fa",
          secondary: "#ff6672",
          "secondary-focus": "#f92f41",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
