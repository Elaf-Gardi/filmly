/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        md: '12px',
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary_blue: "#57708D",
        dark_blue: "#2D2F3B",
        light_purple: "#6C63FF",
        dark_purple: "#3F3D56",
        dark_gray: "#24252D",
        light_gray: "#8C8C8E",
        /** */
        primary_gray:'#363636',
        darkGray:'#1F1F1F',
        primary_green:'#C7F14F'
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    ]
}
