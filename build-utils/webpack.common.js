const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const commonPaths = require("./common-paths")

const config = {
  entry: commonPaths.appEntry,
  output: {
    path: commonPaths.outputPath,
    filename: "[hash].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: commonPaths.nodeModules,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: "Elm Webpack Starter"
    })
  ]
};

module.exports = config;
