/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';
import scrollbar from 'tailwind-scrollbar';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        roll: 'roll 24s linear infinite',
      },
      keyframes: {
        roll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    flowbite,
    scrollbar,
  ],
};
