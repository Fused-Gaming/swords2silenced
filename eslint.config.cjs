module.exports = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['**/.next/**', '**/node_modules/**', '**/coverage/**'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {},
  },
];
