/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#D7D900",
        darkGrey: "#1F2223",
        lightGreen: "#00A299",
        darkGreen: "#01544D",
        lightGrey: "#A6A6A6",
      },
      fontFamily: {
        open: ["var(--font-open)"],
        mont: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
