/** @type {import('prettier').Config} */
export default {
  arrowParens: 'avoid',
  trailingComma: 'all',
  endOfLine: 'lf',
  semi: true,
  useTabs: false,
  tabWidth: 2,
  bracketSpacing: true,
  singleQuote: true,
  bracketSameLine: false,
  printWidth: 80,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cva', 'cx', 'tclsx'],
};
