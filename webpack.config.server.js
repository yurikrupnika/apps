const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const dotenv = require('dotenv');

const filename = 'server.js';
const cwd = process.cwd();
const json = require(path.resolve(cwd, './package')); // eslint-disable-line
const entry = json.name.includes('webserver') ? './index.jsx' : './index.js';

module.exports = (env, argv) => {
    const isProd = env ? !!env.prod : false;
    const isDebug = env ? !!env.debug : false;
    isProd ? dotenv.config() : require(path.resolve(cwd, './src/config')); // eslint-disable-line
    return {
        context: path.resolve(cwd, 'src'),
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.css', '.scss']
        },
        target: 'node', // in order to ignore built-in modules like path, fs, etc.
        // node: false,
        externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
        devtool: 'source-map',
        entry,
        output: {
            path: path.resolve(cwd, 'dist'),
            chunkFilename: '[name].js',
            filename,
            publicPath: '/'
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.DEBUG': JSON.stringify(isDebug),
                'process.env.PORT': JSON.stringify(process.env.PORT)
            }),
            new GenerateJsonPlugin('package.json', Object.assign({}, json, {
                main: filename,
                scripts: {
                    start: `node ${filename}`
                },
                devDependencies: {}
            })),
            argv.watch ? new NodemonPlugin({
                script: path.resolve(cwd, 'dist', filename),
                watch: path.resolve(cwd, 'dist', filename),
                verbose: true
            }) : () => {}
        ],
    };
};
