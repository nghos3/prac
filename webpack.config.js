const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
module.exports = {
  entry: ['./src/index.js','./src/appstate.js','./src/collAdd.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
  new HtmlWebpackPlugin({
  	filename:'index.html',
  	template:'./index.html'
  })
  ]
};