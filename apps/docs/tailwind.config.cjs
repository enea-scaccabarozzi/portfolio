const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
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
