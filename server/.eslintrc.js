module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: 'airbnb-base',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    // to allow absolute paths
    settings: {
        'import/resolver': {
            node: {
                paths: ['./'],
            },
        },
    },
    rules: {
        'no-console': 0,
        'no-alert': 'error',
        'linebreak-style': 0,
        'no-nested-ternary': 0,
        'arrow-parens': ['error', 'always'],
        indent: ['error', 4],
        'no-use-before-define': ['error', { functions: false, classes: true }],
        'brace-style': ['error', '1tbs'],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['./webpack.*.js'],
            },
        ],
    },
};
