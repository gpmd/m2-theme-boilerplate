module.exports = {
  'extends': ['eslint:recommended', 'google'],
  'plugins': [
    'import'
  ],
  'parserOptions': {
    'ecmaVersion': 5,
  },
  'env': {
    'browser': true,
    'jquery': true,
    'amd': true,
  },
  'rules': {
    'no-var': 0,
  }
};
