module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    jest: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  rules: {
    'jsx-a11y/href-no-hash': ['off'],
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'import/order': 0,
    'no-console': 0,
    'react/self-closing-comp': 0,
    'jsx-a11y/img-redundant-alt': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'dot-notation': 0,
    'react/no-danger': 0,
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'max-len': [
      'warn',
      {
        code: 120,
        tabWidth: 2,
        comments: 120,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    // 用于解决win/linux不同平台下LF/CRLF兼容性的问题
    // windows使用回车和换行来结束一行，mac/linux使用换行来结束一行
    // 可以通过git config --global core.autocrlf true来在提交时把CRLF转换成LF
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
};
