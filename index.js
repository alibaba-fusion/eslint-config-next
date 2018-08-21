module.exports = {
    extends: [
        './rules/base',
        './rules/import',
        './rules/react'
    ].map(require.resolve),
    plugins: [
        "eslint-plugin-markdown"
    ]
};
