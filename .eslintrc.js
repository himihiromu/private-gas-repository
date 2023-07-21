module.exports = {
  env: {
    browser: true,
    es2021: true,
    "node": true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  overrides: [
  ],
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
  }
}
