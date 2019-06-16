const presets = [
    ['@babel/preset-env', {
        rootMode: 'upward',
    }],
    ['@babel/preset-react']
];
const plugins = [];

module.exports = (api) => {
    api.cache(true);
    return {
        babelrcRoots: [
            '.',
        ],
        presets,
        plugins,
    };
};
