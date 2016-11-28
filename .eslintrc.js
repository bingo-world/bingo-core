module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "mocha": true
    },
    "globals": {
        "chai": true,
        "sinon": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};