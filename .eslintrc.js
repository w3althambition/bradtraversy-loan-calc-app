module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2016,
    ecmaVersion: 2017
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
    'prefer-default-export': 0,
    'no-restricted-globals': 0,
    'linebreak-style': 0,
    'no-plusplus': 0,
    'no-console': 0,
    'eol-last': 0,
    'no-alert': 0,
    indent: 0,

    'lines-between-class-members': 1,
    'no-trailing-spaces': 1,
    'no-unused-vars': 1,
    'comma-dangle': 1,
    'spaced-comment': 1
  }
};
