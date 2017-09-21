const commonPaths = require("./common-paths")

const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

const config = {
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [
          commonPaths.elmStuff,
          commonPaths.nodeModules
        ],
        use: [
          {
            loader: "elm-webpack-loader",
            options: {
              warn: true,
              debug: true,
              verbose: true,
              pathToMake: commonPaths.elmMake,
              cwd: commonPaths.projectRoot
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        exclude: commonPaths.nodeModules,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { minimize: true } },
            { loader: 'resolve-url-loader' },
            { loader: 'sass-loader' }
          ],
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name]-[contenthash].css'),
    new UglifyJsPlugin() // Optionally include {sourceMap: true} if using `devtool: "source-map"`
  ]
}

module.exports = config
