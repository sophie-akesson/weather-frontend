const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.{js,jsx,ts,tsx,css,scss,md,json}': 'prettier --check',
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};
