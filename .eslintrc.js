module.exports = {
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: { es6: true, jest: true },
    extends: 'airbnb-base',
    rules: {
        semi: 'error',
        indent: ['error', 4],
        'max-len': ['error', 80],
        'new-cap': [
            'error',
            { newIsCap: true, capIsNewExceptions: ['SHA256'] },
        ],
        'require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: true,
                    ArrowFunctionExpression: true,
                    FunctionExpression: false,
                },
            },
        ],
        'space-before-function-paren': 'off',
        'valid-jsdoc': 'error',
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        curly: ['error', 'multi'],
        'nonblock-statement-body-position': ['error', 'below'],
    },
};
