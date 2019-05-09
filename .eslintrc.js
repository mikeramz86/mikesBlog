module.exports = {
    extends: ['dslemay','dslemay/react'],
    globals: {
        '__PATH_PREFIX__': true
    },
    rules: {
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/forbid-prop-types': 'off'
    }
}