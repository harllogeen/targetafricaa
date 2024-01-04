/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        xxs: "100px",
        xs: "321px",
        sm: "480px",
        md: "769px",
        lg: "900px",
        xl:'1440px'
      },

      colors: {
        fcPrimary: "#9C7A0A",
        fcSecondary: "#D7AA17",
        fcBlack: "#232323",
        fcBlack2: "#1E1E1E",
        fcGray:'#C4C4C4'
      },
      fontWeight: {
        hairline: 100,
        "extra-light": 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        "extra-bold": 800,
        black: 900,
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans"],
        inter: ["Inter", "sans"],
        "cera-pro": ["Cera Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
