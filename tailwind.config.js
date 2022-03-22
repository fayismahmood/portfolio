module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "white":"#fff",
      "white-100":"#ffffff96",
      "vividburgundy-100":"#a4243b59",
      "vividburgundy": "#a4243bff",
      "ecru": "#d8c99bff",
      "ecru-100": "#d8c99b66",
      "harvestgold": "#d8973cff",
      "alloyorange": "#bd632fff",
      "charcoal": "#273e47ff",
      "charcoal-200": "#273e4788",
    },
    extend: {
      borderRadius: {
        '4xl': '3rem',
      }
    },
  },
  plugins: [],
};
