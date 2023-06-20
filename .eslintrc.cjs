module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'next/core-web-vitals',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'eslint-plugin-next', 'prettier'],
    rules: {
        'react/require-default-props': 0,
        'react/jsx-props-no-spreading': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
    root: true,
};
