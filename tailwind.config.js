module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#072f33",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
