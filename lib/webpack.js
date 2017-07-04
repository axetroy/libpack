/**
 * Created by axetroy on 17-4-22.
 */
const path = require('path');
const co = require('co');
const webpack = require('webpack');

const PATHS = require('../config/paths');

function* main(argv, options) {
  const WEBPACK_CONFIG_PATH = path.join(
    PATHS.root,
    'config',
    'webpack.config.js'
  );

  const WEBPACK_CONFIG = require(WEBPACK_CONFIG_PATH);

  const { entry, output, minify, watch } = options;

  const entryPath = path.join(PATHS.cwd, entry);

  const entryPathEntity = path.parse(entryPath);
  WEBPACK_CONFIG.entry = WEBPACK_CONFIG.entry || {};
  WEBPACK_CONFIG.entry[entryPathEntity.name] = entryPath;

  WEBPACK_CONFIG.output.path = path.join(PATHS.cwd, output);

  if (minify) {
    WEBPACK_CONFIG.plugins = WEBPACK_CONFIG.plugins || [];
    WEBPACK_CONFIG.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: false
        }
      })
    );
  }

  if (watch) WEBPACK_CONFIG.watch = true;

  webpack(WEBPACK_CONFIG, function(err, stats) {
    if (err) throw err;
    if (stats.compilation.errors && stats.compilation.errors.length) {
      throw stats.compilation.errors[0];
    } else {
      console.log(`Webpack done!`);
    }
  });
}

module.exports = exports = function(argv, options) {
  return co.wrap(main)(argv, options);
};
