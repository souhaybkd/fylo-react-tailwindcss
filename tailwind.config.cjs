/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(218, 28%, 13%)", // Dark Blue (main background): hsl(218, 28%, 13%)
        secondary: "hsl(216, 53%, 9%)", // (footer background): hsl(216, 53%, 9%)
        dimWhite: "hsl(217, 28%, 15%)", //Dark Blue (intro and email sign up background): hsl(217, 28%, 15%)
        dimBlue: "hsl(219, 30%, 18%)",//(testimonials background): hsl(219, 30%, 18%)
        lightRed: "hsl(0, 100%, 63%)",
        cyan : "hsl(176, 68%, 64%)"
      },
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        raleway: ["Raleway" , "sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}