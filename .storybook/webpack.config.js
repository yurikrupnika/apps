module.exports = async ({config, mode}) => {
    config.module.rules.push({
        test: /\.(css|scss|less)$/,
        use: [
            'css-hot-loader',
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {},
                }
            },
            {
                loader: 'sass-loader'
            },
            {
                loader: 'less-loader'
            }
        ],
    });

    return config;
};
