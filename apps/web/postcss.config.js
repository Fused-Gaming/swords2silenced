const fs = require('fs');
const path = require('path');

const hasTailwind = [
  path.join(__dirname, 'node_modules', 'tailwindcss'),
  path.join(__dirname, '..', '..', 'node_modules', 'tailwindcss'),
].some((candidatePath) => fs.existsSync(candidatePath));

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
