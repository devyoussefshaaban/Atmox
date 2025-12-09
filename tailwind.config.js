/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["var(--font-dmSans)", "sans-serif"],
        bricolage: ["var(--font-bricolage)", "sans-serif"],
      },
      colors: {
        neutral: {
          900: "hsl(243, 96%, 9%)",
          800: "hsl(243, 27%, 20%)",
          700: "hsl(243, 23%, 24%)",
          600: "hsl(243, 23%, 30%)",
          300: "hsl(240, 6%, 70%)",
          200: "hsl(250, 6%, 84%)",
          0: "hsl(0, 0%, 100%)",
        },
        orange: {
          500: "hsl(28, 100%, 52%)",
        },
        blue: {
          500: "hsl(233, 67%, 56%)",
          700: "hsl(248, 70%, 36%)",
        },
      },
      fontSize: {
        base: "18px",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
