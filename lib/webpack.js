/**
 * Created by axetroy on 17-4-22.
 */
const path = require("path");
const webpack = require("webpack");
const { promisify } = require("util");

const PATHS = require("../config/paths");
const pkg = require(path.join(PATHS.cwd, "package.json"));

const defaultExternals = ["react", "proptypes", "vue"];

function main(options) {
  const WEBPACK_CONFIG_PATH = path.join(
    PATHS.root,
    "config",
    "webpack.config.js"
  );

  const WEBPACK_CONFIG = require(WEBPACK_CONFIG_PATH);
  WEBPACK_CONFIG.plugins = WEBPACK_CONFIG.plugins || [];
  WEBPACK_CONFIG.entry = WEBPACK_CONFIG.entry || {};
  WEBPACK_CONFIG.output = WEBPACK_CONFIG.output || {};

  const { entry, output, watch, prepack, library, libraryTarget } = options;

  const entryPath = path.join(PATHS.cwd, entry);

  const entryPathEntity = path.parse(entryPath);
  WEBPACK_CONFIG.entry[entryPathEntity.name] = entryPath;
  WEBPACK_CONFIG.output.path = path.join(PATHS.cwd, output);

  if (prepack) {
    const PrepackWebpackPlugin = require("prepack-webpack-plugin").default;
    WEBPACK_CONFIG.plugins.push(new PrepackWebpackPlugin({}));
  }

  if (watch) WEBPACK_CONFIG.watch = true;

  WEBPACK_CONFIG.output.library = library || pkg.name;
  WEBPACK_CONFIG.output.libraryTarget = libraryTarget || "umd";

  WEBPACK_CONFIG.externals = (function() {
    const externals = {};
    (options.externals || []).concat(defaultExternals).forEach(function(pkg) {
      externals[pkg] = pkg;
    });
    return externals;
  })();

  // compile the file
  return promisify(webpack)(WEBPACK_CONFIG).then(stats => {
    if (stats.compilation.errors && stats.compilation.errors.length) {
      return Promise.reject(stats.compilation.errors[0]);
    }
  });
}

module.exports = main;
