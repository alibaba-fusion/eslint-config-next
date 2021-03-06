module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "rules": {
        // Possible Errors
        "no-cond-assign": 2,
        "no-console": 2,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-negated-in-lhs": 2,
        "no-obj-calls": 2,
        "no-regex-spaces": 2,
        "no-sparse-arrays": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "no-unsafe-finally": 2,
        "use-isnan": 2,
        "valid-typeof": 2,
        // Best Practices
        "array-callback-return": 2,
        "curly": 1,
        "dot-location": [2, "property"],
        "dot-notation": 2,
        "eqeqeq": 2,
        "guard-for-in": 1,
        "no-alert": 2,
        "no-caller": 2,
        "no-case-declarations": 1,
        "no-empty-pattern": 2,
        "no-eval": 2,
        "no-extra-bind": 2,
        "no-extra-label": 2,
        "no-fallthrough": 2,
        "no-implied-eval": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-native-reassign": 2,
        "no-new": 2,
        "no-new-wrappers": 2,
        "no-octal": 2,
        "no-return-assign": 1,
        "no-self-assign": 2,
        "no-self-compare": 2,
        "no-throw-literal": 2,
        "no-unused-expressions": [2, { "allowShortCircuit": true, "allowTernary": true }],
        "no-unused-labels": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-useless-escape": 2,
        "no-with": 2,
        // Strict Mode
        "strict": 1,
        // Variables
        "no-delete-var": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-unused-vars": 2,
        "no-use-before-define": [2, { "functions": false, "classes": true }],
        // Stylistic Issues
        "block-spacing": 2,
        "brace-style": 2,
        "camelcase": 2,
        "comma-spacing": 2,
        "computed-property-spacing": 2,
        "eol-last": 2,
        "indent": [2, 4, { "SwitchCase": 1 }],
        "key-spacing": 2,
        "keyword-spacing": 2,
        "new-cap": [2, { "capIsNew": false }],
        "new-parens": 2,
        "no-lonely-if": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-spaced-func": 2,
        "no-trailing-spaces": 2,
        "no-unneeded-ternary": 2,
        "no-whitespace-before-property": 2,
        "operator-linebreak": [2, "after", { "overrides": { "?": "after" } }],
        "quote-props": [2, "as-needed"],
        "quotes": [2, "single"],
        "semi": 2,
        "semi-spacing": 2,
        "space-before-blocks": 2,
        "space-in-parens": 2,
        "space-infix-ops": 2,
        "space-unary-ops": 2,
        // ECMAScript 6
        "arrow-spacing": 2,
        "constructor-super": 2,
        "generator-star-spacing": [2, "after"],
        "no-class-assign": 2,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-duplicate-imports": 2,
        "no-new-symbol": 2,
        "no-this-before-super": 2,
        "no-useless-computed-key": 2,
        "no-useless-constructor": 2,
        "no-useless-rename": 2,
        "no-var": 2,
        "prefer-const": 1,
        "prefer-rest-params": 1,
        "prefer-spread": 1,
        "prefer-template": 1,
        "require-yield": 2,
        "rest-spread-spacing": 2,
        "template-curly-spacing": 2,
        "yield-star-spacing": 2
    }
};
