const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        dark: {
          DEFAULT: '#070018',
          100: '#020005',
          200: '#03000a',
          300: '#05000f',
          400: '#060014',
          500: '#070018',
          600: '#25007a',
          700: '#4200db',
          800: '#773dff',
          900: '#bb9eff',
        },
        light: {
          DEFAULT: '#e4d8fd',
          100: '#1f0559',
          200: '#3f09b2',
          300: '#6726f4',
          400: '#a57ff8',
          500: '#e4d8fd',
          600: '#e9e0fd',
          700: '#efe8fe',
          800: '#f4effe',
          900: '#faf7ff',
        },
        accent: {
          DEFAULT: '#3f0097',
          100: '#0d001f',
          200: '#19003d',
          300: '#26005c',
          400: '#33007a',
          500: '#3f0097',
          600: '#5d00e0',
          700: '#8229ff',
          800: '#ac70ff',
          900: '#d5b8ff',
        },
      },
    },
  },
  plugins: [],
};
