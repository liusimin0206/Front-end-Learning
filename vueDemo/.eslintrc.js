module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-underscore-dangle': 'off',
    'linebreak-style': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': ['error', { functions: false, classes: false }],
  },
};
