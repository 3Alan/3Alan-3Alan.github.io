module.exports = {
    extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true
    },
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
                tabWidth: 4,
                comments: 120,
                ignoreComments: false,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true
            }
        ]
    }
};
