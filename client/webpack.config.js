const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Yusephalopod',
      template: './public/index.html'
    })
  ],
  module: {
    rules: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ],
        test: /\.js$/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}