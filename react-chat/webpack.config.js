var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var PATH = require('./webpack.path.js');

const config = {
  entry: {
    app: ['@babel/polyfill',`${PATH.APP_FOLDER}/main.js`], 
  },
  output: {
    path: PATH.BUILD_FOLDER,
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }, 
      {
        test:/\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
          ]
        }),
      }
    ] 
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ['node_modules', 'src'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/containers'),
      stylesheets: path.resolve(__dirname, 'src/stylesheets'),
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      "process.env": { 
          NODE_ENV: JSON.stringify(process.env.NODE_ENV) 
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app.ejs'),
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor"),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
  ]
}

module.exports = config;