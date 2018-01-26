/**
 * Created by axetroy on 17-4-22.
 */
// set env first
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const path = require("path");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { promisify } = require("util");

const PATHS = require("../config/paths");
const pkg = require(path.join(PATHS.cwd, "package.json"));

const defaultExternals = [];

/**
 * pack your library
 * @param options
 * @returns {Promise<PromiseLike<T> | Promise<T> | *>}
 */
async function libpack(options) {
  const {
    entry,
    output,
    watch,
    prepack,
    library,
    libraryTarget,
    target,
    externals,
    server
  } = options;

  const WEBPACK_CONFIG_PATH = path.join(
    PATHS.root,
    "config",
    "webpack.config.js"
  );

  const WEBPACK_CONFIG = require(WEBPACK_CONFIG_PATH);
  WEBPACK_CONFIG.plugins = WEBPACK_CONFIG.plugins || [];
  WEBPACK_CONFIG.entry = WEBPACK_CONFIG.entry || {};
  WEBPACK_CONFIG.output = WEBPACK_CONFIG.output || {};

  const entryPath = path.join(PATHS.cwd, entry);

  const entryPathEntity = path.parse(entryPath);
  WEBPACK_CONFIG.entry[entryPathEntity.name] = entryPath;
  WEBPACK_CONFIG.output.path = path.join(PATHS.cwd, output);

  if (prepack) {
    const PrepackWebpackPlugin = require("prepack-webpack-plugin").default;
    WEBPACK_CONFIG.plugins.push(new PrepackWebpackPlugin({}));
  }

  if (watch) WEBPACK_CONFIG.watch = true;

  WEBPACK_CONFIG.target = target || "web";
  WEBPACK_CONFIG.output.library = library || pkg.name;
  WEBPACK_CONFIG.output.libraryTarget = libraryTarget || "umd";

  WEBPACK_CONFIG.externals = (function() {
    const externalsMap = {};
    (externals || []).concat(defaultExternals).forEach(function(pkg) {
      externalsMap[pkg] = pkg;
    });
    return externalsMap;
  })();

  if (server === true) {
    // inject javascript code into html
    WEBPACK_CONFIG.plugins.push(new HtmlWebpackPlugin({}));
    // hot module load
    WEBPACK_CONFIG.plugins.push(new webpack.HotModuleReplacementPlugin({}));
    WEBPACK_CONFIG.devServer = {
      contentBase: path.join(process.cwd()),
      compress: true,
      port: 9000
    };
    const compiler = webpack(WEBPACK_CONFIG);

    const serverOptions = {
      // hot: true, // TODO: compatible it should with Vue/React
      noInfo: true,
      contentBase: path.join(process.cwd()),
      compress: true,
      filename: WEBPACK_CONFIG.output.filename,
      publicPath: WEBPACK_CONFIG.output.publicPath,
      index: "index.html",
      stats: { colors: true }
    };

    WebpackDevServer.addDevServerEntrypoints(WEBPACK_CONFIG, serverOptions);

    const server = new WebpackDevServer(compiler, serverOptions);

    server.listen(WEBPACK_CONFIG.devServer.port, "localhost", function() {
      console.log(
        `Listening at http://0.0.0.0:${WEBPACK_CONFIG.devServer.port}`
      );
    });
    return;
  }

  // compile the file
  return promisify(webpack)(WEBPACK_CONFIG).then(stats => {
    if (stats.compilation.errors && stats.compilation.errors.length) {
      return Promise.reject(stats.compilation.errors[0]);
    }
  });
}

module.exports = libpack;
