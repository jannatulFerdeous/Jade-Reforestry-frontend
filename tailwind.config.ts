import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#052e16 ',
        secondary: '#5f8332',
        disable: '#707070',
        gray: '#707070',
        dark: '#353535',
        lightgray: '#F5F5F5',
        btngray: '#15377D80',
        background:'#f4f1e8',
      },
      fontFamily: {
        primary: ["'Roboto Slab'", "serif"],
        secondary: ["'Tangerine'", "cursive"],
      },
      backgroundImage: {
        hero_image: "url('/computer repair.jpg')",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
