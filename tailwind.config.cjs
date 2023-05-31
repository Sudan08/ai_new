/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#f8fff0",
          200: "#ebf2e4",
          300: "#d2e6be",
          400: "#b3d991",
          500: "#93cc68",
          600: "#74c043",
          700: "#55992e",
          800: "#39731d",
          900: "#224d0f"
        }
      },
      maxWidth: {
        '1/2' : '50%',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
