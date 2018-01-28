var webpack = require('webpack');
var PATH = require('./webpack.path.js');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:8080/",
    "webpack/hot/only-dev-server",
    "./src/main.js",
  ],
  output: {
    path: PATH.BUILD_FOLDER,
    filename: "bundle.js",
    publicPath: "http://localhost:8080/"
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/containers'),
      stylesheets: path.resolve(__dirname, 'src/stylesheets'),
    }
  },
  module: {
    loaders: [
      {
        test:/\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test:/\.(css|sass|scss)$/,
        use: [  
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              module: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          "postcss-loader",          
          'sass-loader'
        ],
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app.ejs'),
    }),
  ]
}