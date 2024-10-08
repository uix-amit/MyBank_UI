module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'src/shared/models'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    quotes: ['error', 'single'],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
