/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
      mytheme: {

        "primary": "#F7F7F7",

        "secondary": "#FD9B28",

        "accent": "#FFBB00",

        "neutral": "#3D4451",

        "base-100": "#FFFFFF",

        "info": "#3ABFF8",

        "success": "#36D399",

        "warning": "#FBBD23",

        "error": "#F87272",
      },
    }, 
  ],
  },
  plugins: [require("daisyui")],
}