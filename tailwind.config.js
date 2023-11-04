/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      "vivid-magenta": "#ad1fea",
      "royal-blue": "#4661e6",
      white: "#ffffff",
      "powder-blue": "#f2f4ff",
      "alice-blue": "#f7f8fd",
      slategray: "#3a4374",
      "dim-gray": "#647196",
      salmon: "#f49f85",
      "light-steel-blue": "#62bcfa",
    },
    extend: {
      fontFamily: {
        jost: ["Jost", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
