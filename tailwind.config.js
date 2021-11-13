module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0D1117",
        secondary: "#181818",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
