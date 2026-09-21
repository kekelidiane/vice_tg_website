/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./core/**/*.py",
  ],
  theme: {
    extend: {
      colors: {
        // Vert extrait du logo VICE TOGO (#00923f)
        "vice-green": {
          50: "#eafaf0",
          100: "#cdf2dc",
          200: "#9ce6bc",
          300: "#62d494",
          400: "#2fbb6f",
          500: "#0da354",
          600: "#00923f",
          700: "#007a34",
          800: "#00632a",
          900: "#005022",
        },
        // Jaune/or extrait du logo VICE TOGO (#f6c915)
        "vice-gold": {
          50: "#fffbea",
          100: "#fff3c2",
          200: "#ffe98a",
          300: "#fedb4e",
          400: "#fbcb23",
          500: "#f6c915",
          600: "#d9ab08",
          700: "#b3870a",
          800: "#8f6a0f",
          900: "#765711",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
