const path = require('path'); // 引入path模块，用于文件路径配置
// 动态生成入口html文件，放置入口起点名称变化而导致原文件引用失败
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 打包前清理之前打包的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {
  console.log('NODE_ENV: ', env.NODE_ENV) // 'local'
  console.log('Production: ', env.production) // true
  return {
    entry: './src/index.js', // 入口
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: '输出管理'
      })
    ],
    output: { // 出口
      filename: '[name].bundle.js', // 输出文件名称
      path: path.resolve(__dirname, 'dist') // 输出到dist目录下
    }
  }
}