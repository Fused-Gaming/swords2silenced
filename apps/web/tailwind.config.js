/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{css}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: 'var(--color-navy-deep)',
          red: 'var(--color-red-alert)',
          steel: 'var(--color-steel-gray)',
        },
      },
    },
  },
  plugins: [],
};
