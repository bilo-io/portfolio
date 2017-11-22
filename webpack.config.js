var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');
var marked = require('marked');
var renderer = new marked.Renderer();
var DIST = path.resolve(__dirname, 'dist/');
var SRC = path.resolve(__dirname, 'src/');

var config = {
    entry: SRC + '/index.js',
    output: {
        path: DIST,
        publicPath: '/',
        filename: 'app.js'
    },
    devtool: 'source-map',
    // resolve: {
    //     modules: [
    //         // path.resolve('node_modules'),
    //         // path.resolve('src'),
    //         // path.resolve('src/app'),
    //         // path.resolve('./'),
    //       ]
    // },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.(css|scss)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[ext]'
            }, {
                test: /\.md$/,
                use: [
                    {
                        loader: 'html-loader'
                    }, {
                        loader: 'markdown-loader',
                        options: {
                            pedantic: true,
                            renderer
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new Visualizer({filename: './stats.html'}),
        new HtmlWebpackPlugin({template: './src/index.html', filename: 'index.html', inject: 'body'}),
        new CopyWebpackPlugin([
            {
                from: 'node_modules/highlight.js/styles/monokai.css',
                to: './scss/'
            }
        ])
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    },
    // node: {     fs: 'empty' }
};

module.exports = config;