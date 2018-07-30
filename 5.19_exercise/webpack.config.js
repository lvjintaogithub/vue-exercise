const webpack = require("webpack");
const url = require("url");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin"); //删除生成的构建目录
const HtmlWebpackPlugin = require("html-webpack-plugin"); //处理html文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 抽离css
//引入vue-loader
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const plugins = [
    //清除上一次构建的目录
    // new CleanWebpackPlugin(['build']),
    //引入vue插件
    new VueLoaderPlugin(),
    //从页面里面抽取css
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash:10].css'
    }),
    new HtmlWebpackPlugin({
        filename: "../index.html",
        template: "./src/index.html",
        minify: {
            //压缩代码
            minimize: true,
            //移除注释
            removeComments: true,
            //去掉空格 删除空格
            collapseWhitespace: true,
            //压缩行内的css
            minifyCSS: true,
            //压缩行内js
            minifyJS: false
        }
    })
];

module.exports = {
    //构建模式
    // mode: process.env.NODE_ENV || "development",
    mode: "development", // production 生产模式
    //入口文件
    // entry: ["./src/js/index.js"],
    entry: {
        index: "./src/js/index.js",
        vendors: ["jquery"]
    },
    //输出文件
    output: {
        // filename: "bundle.js",
        // filename: '[name].[hash:10].js',
        filename: "[name].js",
        path: path.resolve(__dirname, "./build/assets/"),
        publicPath: "/assets/" //公共资源路径 =>打包之后的都放在这里
    },
    //起服务
    devServer: {
        contentBase: "./build", //静态文件目录
        port: 8054,
        host: "localhost",
        open: true,
        watchContentBase: true,
        setup: function(app) {
            console.log(app);
            app.get("/login", (req, res) => {
                console.log("req...", req, "res...", res);
                //去传过来的值
                let username = req.query.username,
                    password = req.query.password;
                console.log(username, password);
                //判断用户名和密码是否能登录
                let isLogin = username == "zhangsan" && password == "123456";
                console.log(isLogin);
                res.json({
                    code: isLogin ? 1 : 0,
                    msg: isLogin ? "登录成功" : "登录失败"
                });
            });
        }
    },
    //开发配置：是否生成source-map，及如何显示
    devtool: "eval-source-map",
    //模块
    module: {
        rules: [{
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            { //加载js文件
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                use: ["babel-loader"]
            }, { //加载css文件
                test: /\.(css)$/,
                exclude: "/node_modules/",
                // use: ["style-loader", "css-loader"]
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(scss)$/,
                exclude: "/node_modules/",
                // use: ["style-loader", "css-loader", "sass-loader"]
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            { //加载图片
                test: /\.(gif|png|jpe?g|svg)$/i,
                exclude: "/node_modules/",
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[name].[hash:6].[ext]'
                            // limit:""
                    }
                }]
            },
            { //加载icon
                test: /\.(eot|svg|woff|ttf)$/,
                use: ["url-loader"]
            }
        ]
    },
    plugins,
    //找jquery 分离jquery
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors"
                }
            }
        }
    }
};