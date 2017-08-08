var webpack = require('webpack');
var path = require('path');

var DIST = path.resolve(__dirname, 'dist/');
var SRC = path.resolve(__dirname, 'src/');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const marked = require('marked');
const renderer = new marked.Renderer();

var config = {
    devtool: 'source-map',
    entry: SRC + '/index.js',
    output: {
        path: DIST,
        publicPath: '/',
        filename: 'app.js'

    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(css|scss)$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file-loader?name=assets/[name].[ext]',
        }, {
            test: /\.md$/,
            use: [{
                loader: 'html-loader'
            }, {
                loader: 'markdown-loader',
                options: {
                    pedantic: true,
                    renderer
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    },
    // node: {
    //     fs: 'empty'
    // }
};

module.exports = config;