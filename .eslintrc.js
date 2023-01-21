module.exports = {
  env: {
    "jest/globals": true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:storybook/recommended",
    "standard",
    "prettier",
  ],
  plugins: [
    "@typescript-eslint",
    "jest"
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn"
  }
};
