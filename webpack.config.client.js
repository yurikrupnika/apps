const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const dotenv = require('dotenv');

const cwd = process.cwd();

module.exports = (env, argv) => {
    const isProd = env ? !!env.prod : false;
    const isDebug = env ? !!env.debug : false;
    const config = isProd ? dotenv.config() : require(path.resolve(cwd, './src/config')); // eslint-disable-line
    console.log('server env', env); // eslint-disable-line
    console.log('argv', argv); // eslint-disable-line
    console.log('server process.env.port', process.env.port); // eslint-disable-line
    console.log('server process.env.PORT', process.env.PORT); // eslint-disable-line


    return {
        context: path.resolve(process.cwd(), 'src'),
        optimization: {
            minimizer: [
                new TerserPlugin(),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        target: 'web',
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.css', '.scss']
        },
        devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
        entry: './client.jsx',
        output: {
            filename: '[name].js',
            chunkFilename: '[name].js',
            path: path.resolve(process.cwd(), 'dist/assets'),
            publicPath: '/'
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                rootMode: 'upward',
                            }
                        },
                        // {
                        //     loader: 'eslint-loader'
                        // }
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'css-hot-loader',
                        !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: isProd ? '[hash:base64]' : '[local]--[hash:base64:5]'
                                },
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                },
                {
                    test: /\.ejs$/,
                    use: 'raw-loader'
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
                // 'process.env.DEBUG': JSON.stringify(isDebug),
                'process.env.USERS_ENDPOINT': JSON.stringify(process.env.USERS_ENDPOINT),
                'process.env.PORT': JSON.stringify(process.env.PORT),
                'process.env.port': JSON.stringify(process.env.port),
                'process.env.host': JSON.stringify(process.env.host),
                'process.env.HOST': JSON.stringify(process.env.HOST),
                'process.env.dest_port': JSON.stringify(process.env.dest_port),
                'process.env.DEST_PORT': JSON.stringify(process.env.DEST_PORT),
                'process.env.DESTINATION_HOST': JSON.stringify(process.env.DESTINATION_HOST),
                'process.env.DOCKER_HOST': JSON.stringify(process.env.DOCKER_HOST)
            }),
            new HtmlWebpackPlugin({
                template: 'index.ejs',
                filename: 'index.ejs',
                // favicon: 'assets/favicon.ico',
                meta: {
                    charset: 'UTF-8',
                    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
                },
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true
                }
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: !isProd ? '[name].css' : '[name].[hash].css',
                chunkFilename: !isProd ? '[id].css' : '[id].[hash].css',
            }),
            !isProd && process.cwd().includes('webserver') ? new BundleAnalyzerPlugin({}) : () => {}
        ],
        devServer: { // when not prod - NODE_ENV_DOCKER taken from docker-compose env
            port: config.port + 1,
            open: true,
            host: process.env.NODE_ENV_DOCKER ? '0.0.0.0' : 'localhost',
            index: 'index.ejs',
            proxy: {
                '/': { target: `${config.host}:${config.port}` },
            }
        }
    };
};
