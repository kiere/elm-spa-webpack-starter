const commonConfig = require("./build-utils/webpack.common")
const WebpackMerge = require("webpack-merge")

module.exports = (env) => {

  console.log(env)

  const envConfig = require(`./build-utils/webpack.${env.env}`)
  const mergedConfig = WebpackMerge(commonConfig, envConfig)

  console.log(mergedConfig)
  return mergedConfig
}
