/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#D7D900",
        textColor: "#1F2223",
        lightGreen: "#00A299",
        darkGreen: "#01544D",
        lightGrey: "#A6A6A6",
        darkGrey: "#333333",
      },
      fontFamily: {
        open: ["var(--font-open)"],
        mont: ["var(--font-montserrat)"],
      },
      backgroundImage: {
        heroDesktop: "url('/images/homebig.jpg')",
        heroMobile: "url('/images/home.jpg')",
        contact: "url('/images/contact.jpg')",
      },
    },
  },
  plugins: [],
};
