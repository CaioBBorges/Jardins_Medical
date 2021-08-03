module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        30: "125px",
        100: "1178px",
        99: "598px",
        98: "714px",
        101: "815px",
        102: "950px",
      },
      colors: {
        "green-dark": "#033415",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
