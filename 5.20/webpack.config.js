const webpack = require("webpack");
const url = require("url");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPLugin = require('html-webpack-plugin');

const plugins = [
    // new CleanWebpackPlugin(), //清除打包之后的文件
    new VueLoaderPlugin(),
    new HtmlWebpackPLugin({
        filename: '../index.html',
        template: './src/index.html',
        minify: {
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            collapseWhitespace: true,
            minimize: true
        }
    })

];

module.exports = {
    // mode: "development" || process.env.NODE_ENV, //模式
    mode: "development",
    entry: "./src/js/index.js",
    output: { //输出文件
        // filename: "bundle.js",
        filename: "[name].js",
        path: path.resolve(__dirname, "./build/assets"),
        // publicPath: "/assets/"
    },
    devServer: { //起服务
        contentBase: "./build",
        // open: true,
        host: "localhost",
        port: 8068
    },
    devtool: "eval-source-map",
    module: { //加载文件的加载器
        rules: [{
            test: /\.(vue)$/,
            use: ["vue-loader"]
        }, {
            test: /\.(js|jsx)$/,
            exclude: "/node_modules",
            use: ["babel-loader"]
        }, {
            test: /\.(css)$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [{
                loader: "file-loader",
                options: {
                    name: "[name].[hash:10].[ext]",
                    limit: 1024
                }
            }]
        }, {
            test: /\.(eot|svg|ttf|woff)$/,
            use: ["url-loader"]
        }]
    },
    // resolve: {
    //     alias: {
    //         'vue': 'vue/dist/vue.esm.js'
    //     }
    // },
    plugins, //需要用到的插件
    //找jquery 分离jquery
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: "vendors"
    //             }
    //         }
    //     }
    // }
};