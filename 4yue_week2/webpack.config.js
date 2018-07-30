const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
    new HtmlWebpackPlugin({
        filename: "../index.html",
        template: "./src/index.html",
        minify: {
            minisize: true,
            removeComments: true,
            minifyCSS: true,
            minifyJS: false,
            conservativeCollapse: true,
        }
    }),
    new VueLoaderPlugin(),

    new MiniCssExtractPlugin({
        filename: "[name].[contenthash.6].css"
    })

];

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'blis/assets/')
    },
    devServer: {
        contentBase: './blis',
        port: 8080,
        // open: true,
        host: "localhost",
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.js$/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }, {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }, {
            test: /\.(svg|ttf|woff|eot)$/,
            use: ['url-loader']
        }, {
            test: /\.(png|gif|jpg|svg)$/i,
            use: ['url-loader']
        }]
    },
    plugins: plugins,
}