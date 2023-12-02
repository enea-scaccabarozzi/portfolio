const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './libs/**/*.{js,tsx}',
    './pages/**/*.{md,mdx,tsx}',
    './theme.config.jsx',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#000',
        gray: colors.neutral,
        blue: colors.blue,
        orange: colors.orange,
        green: colors.green,
        red: colors.red,
        yellow: colors.yellow,
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        betterhover: { raw: '(hover: hover)' },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
