const path = require('path');

module.exports = {
    // 配置入口
    entry: './src/index.js',
    output: {
        // 文件名称
        filename: 'bundle.js', // 配置路径 
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html') })],
    // 配置 source-map ，打包出错定位到源码上 
    devtool: 'source-map',
    resolve: {
        modules: [
            path.resolve(__dirname, ''), path.resolve(__dirname, 'node_modules')
        ]
    },
}