const path = require('path');  // 首先要引入node.js中path 模块，用于处理文件与目录的路径

module.exports = {
    entry: './src/index.js', // 指定入口文件
    output: {
        path: path.resolve(__dirname, './dist'), // 指定出口文件的路径目录
        filename: 'bulid.js', // 制定出口文件的名称
    },
}