module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jasmine": true,
        "protractor": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin: import/errors",
        "plugin: import/warnings",
        "plugin: import/typescript",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "@typescript-eslint",
        "prefer-arrow",
        "js-doc"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
