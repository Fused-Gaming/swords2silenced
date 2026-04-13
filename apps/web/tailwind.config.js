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
          muted: 'var(--color-muted)',
          info: 'var(--color-info)',
          bg: 'var(--color-white-off)',
          border: 'var(--color-border)',
        },
        status: {
          success: 'var(--color-success)',
          warning: 'var(--color-warning)',
          critical: 'var(--color-critical)',
          info: 'var(--color-info)',
        },
      },
    },
  },
  plugins: [],
};
