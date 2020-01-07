const path = require('path');
const reduce = require('lodash/reduce');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const LoadablePlugin = require('@loadable/webpack-plugin');

const cwd = process.cwd();
const json = require(path.resolve(cwd, './package')); // eslint-disable-line

const alias = reduce(json.dependencies, (acc, v, k) => {
    acc[k] = path.resolve(cwd, 'node_modules', k);
    return acc;
}, {});


module.exports = (env) => {
    const isProd = env ? !!env.prod : false;
    return {
        context: path.resolve(process.cwd(), 'src'),
        optimization: {
            minimizer: [
                isProd ? new TerserPlugin() : () => {},
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        target: 'web',
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.css', '.scss'],
            alias
        },
        devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
        entry: './index.js',
        output: {
            filename: 'index.js',
            chunkFilename: '[name].js',
            path: path.resolve(process.cwd(), 'dist/cjs'),
            publicPath: '/',
            library: json.name,
            // libraryTarget: 'global'
            libraryTarget: 'commonjs'
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                        }
                    ]
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
                                }
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
            new webpack.DefinePlugin({}),
            new MiniCssExtractPlugin({
                filename: !isProd ? '[name].css' : '[name].[hash].css',
                chunkFilename: !isProd ? '[id].css' : '[id].[hash].css',
            }),
            // new LoadablePlugin(),
            !isProd && process.cwd().includes('webserver1') ? new BundleAnalyzerPlugin({}) : new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false,

            })
        ]
    };
};
