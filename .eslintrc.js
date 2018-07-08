module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "script"
    },
    "rules": {
        "no-unused-vars":"warn",
        "no-console": [
          "error",{
            "allow": ["warn","error","info"]
          }
        ],
        "indent": [
            "error",
            4
        ],
        "linebreak-style":  [
          "error",
          "windows"
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
