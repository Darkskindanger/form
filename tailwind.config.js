/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "page-1-left": "url(assets/images/bg-sidebar-desktop.svg)",
      },
    },
  },
  plugins: [],
};
