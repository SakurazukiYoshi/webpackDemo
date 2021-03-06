/*======================webpack的配置文件===========================*/
var path = require('path');//Node.js path 模块提供了一些用于处理文件路径的小工具
var webpack = require("webpack");
module.exports = {
    entry: {
        main:__dirname +"/src/main.js"
    },
    output: {
        path: path.resolve(__dirname, 'devDependencies'),   //   ./表示的是webpack文件,以webpack文件为基础
        filename: "js/[name].js",//打包后输出文件的文件名，输出的文件+路径   这里的name对应的是entry中的key
        publicPath:"/assets/"    //自动刷新的地址栏,最好path为一个文件，   path/publicPath/filename  就可以自动刷新
    }
    , devServer: {
        contentBase: "./devDependencies", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        port:4040,
        noInfo: true
    }
    ,module: {
        loaders: [
            {
                test: /\.css$/,
                loaders:'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }
    ,devtool: "source-map"
};

//“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录,cmd中运行webpack   时会自动转化为当前文件目录

