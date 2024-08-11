/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        background:"rgba(var(--background))",
        light_pink:'rgba(var( --light_pink))',
        primary_pink:'rgba(var(--primary_pink))',
        light_blue:'rgba(var(--light_blue))',
        primary_blue:'rgba(var(--primary_blue))',
        light_green:'rgba(var(--light_green))',
        primary_green:'rgba(var(--primary_green))'
      }
    },
  },
  plugins: [],
};
