/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1",
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235",
        },
        blue: {
          500: "#2b77e7",
        },
        tealGreen: {
          DEFAULT: "#A3BB63",
          100: "#D5E0B8",
          200: "#C2D8A7",
          300: "#B0D096",
          400: "#9DB885",
          500: "#8BA074",
          600: "#799863",
          700: "#667F52",
          800: "#546741",
          900: "#425030",
        },
        primary: {
          10: "var(--clr-primary-10)",
          20: "var(--clr-primary-20)",
          30: "var(--clr-primary-30)",
          40: "var(--clr-primary-40)",
          50: "var(--clr-primary-50)", // #F7F8FA
        },
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const colors = theme("colors");
      const newUtilities = {};

      const properties = [
        { property: "backgroundColor", prefix: "bg" },
        { property: "borderColor", prefix: "border" },
        { property: "color", prefix: "text" },
        { property: "fill", prefix: "fill" },
        { property: "outlineColor", prefix: "outline" },
      ];

      Object.entries(colors).forEach(([colorKey, colorValue]) => {
        if (typeof colorValue === "object") {
          Object.entries(colorValue).forEach(([shade, shadeValue]) => {
            properties.forEach(({ property, prefix }) => {
              newUtilities[`.${prefix}-${e(colorKey)}-${e(shade)}`] = {
                [property]: shadeValue,
              };
            });
          });
        } else {
          properties.forEach(({ property, prefix }) => {
            newUtilities[`.${prefix}-${e(colorKey)}`] = {
              [property]: colorValue,
            };
          });
        }
      });

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
