const path = require("path");
const PROJECT_ROOT = path.resolve(__dirname, "../");

module.exports = {
    projectRoot: PROJECT_ROOT,
    appEntry: path.join(PROJECT_ROOT, "src"),
    outputPath: path.join(PROJECT_ROOT, "dist"),
    elmMake: path.join(PROJECT_ROOT, "node_modules/.bin/elm-make"),
    nodeModules: path.join(PROJECT_ROOT, "node_modules"),
    elmStuff: path.join(PROJECT_ROOT, "elm-stuff")
};
