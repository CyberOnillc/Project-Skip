/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      padding: {
        '10%': '10%',
      },
      paddingBottom: {
        '10%': '10%',
      },
      paddingTop: {
        '10%': '10%',
      },
      paddingLeft: {
        '10%': '10%',
      },
      paddingRight: {
        '10%': '10%',
      },
      fontFamily: {
        display: ["var(--font-sf)", "system-ui", "sans-serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
        rowdies: ["var(--font-rowdies)", "system-ui", "sans-serif"],
        saira: ["var(--font-saira)", "system-ui", "sans-serif"]

      },
      backgroundImage: {
        "gradient-purple": "linear-gradient(to right, #7F56D9, #08129B)", // Add this line
        "gradient-hero": "linear-gradient(to right, #04016C55, #4A16BDCC)",
        "gradient-button": "linear-gradient(to right, #3023B2, #7F56D9)",
        "dotted-background": "radial-gradient(circle,#fff 20%, #00000000, #00000000)",
        "hero": "url('/hero-bg.png')"
      },
      animation: {
        "fade-up": "fade-up 0.5s",
        "fade-down": "fade-down 0.5s",
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
    plugin(function ({ addComponents }) {
      addComponents({
        ".mobile-padding": {
          padding: "1rem", // or whatever value you want
          "@screen sm": {
            padding: "0", // resets the padding for screen sizes >= 640px
          },
        },
      });
    }),
  ],


};
