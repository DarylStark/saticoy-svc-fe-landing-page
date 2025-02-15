module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        indent: ['error', 4],
        '@typescript-eslint/no-unused-vars': 'error',
        eqeqeq: ['error', 'always'],
        'no-console': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'comma-dangle': ['error', 'always-multiline'],
        curly: ['error', 'multi'],
    },
};
