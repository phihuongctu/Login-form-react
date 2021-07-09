module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        128: "512px",
        "minus-128": "calc(100%  - 512px)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
