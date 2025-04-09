module.exports = {
  content: ["./public/**/*.{html,js}", "./src/js/index.js"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["iranyekan"],
      },
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms"),
    require("@tailwindcss/typography"),
  ],
};
