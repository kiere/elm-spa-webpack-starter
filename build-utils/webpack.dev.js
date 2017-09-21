const commonPaths = require("./common-paths")

const config = {
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [
          commonPaths.elmStuff,
          commonPaths.nodeModules
        ],
        use: [
          "elm-hot-loader",
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
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
}

module.exports = config
