/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "green": "#39DB4A",
        "red": "#FF6868",
        "secondary": "#555",
        "primaryBG": "#FCFCFC"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ]
};
