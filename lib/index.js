/**
 * Created by axetroy on 17-4-22.
 */
const path = require("path");

const program = require("caporal");
const spawn = require("cross-spawn");
const _ = require("lodash");
const fs = require("fs-extra");
const co = require("co");

const pkg = require("../package.json");
const PATHS = require("../config/paths");

const webpack = require("webpack");

program
  .version(pkg.version)
  .description(pkg.description)
  .option("-w, --watch", "watch the file change", program.BOOLEAN)
  .option("--cwd", "current work dir", program.STRING)
  .option("-e, --entry", "entry file", program.STRING, "./index.js", true)
  .option("-o --output", "output dir", program.STRING, "./build/", true)
  .option("-m --minify", "minify output file", program.BOOLEAN)
  .action(function(args, options) {
    let WEBPACK_CONFIG_PATH;

    if (options.config) {
      WEBPACK_CONFIG_PATH = path.join(PATHS.cwd, options.config);
    } else {
      WEBPACK_CONFIG_PATH = path.join(
        PATHS.root,
        "config",
        "webpack.config.js"
      );
    }

    const WEBPACK_CONFIG = require(WEBPACK_CONFIG_PATH);

    const { entry, output, minify } = options;

    if (!entry) throw new Error(`No entry file.`);
    if (!output) throw new Error(`No output dir.`);

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

    webpack(WEBPACK_CONFIG, function(err, stats) {
      if (err) throw err;
      if (stats.compilation.errors && stats.compilation.errors.length) {
        throw stats.compilation.errors[0];
      } else {
        console.log(`Webpack done!`);
      }
    });
  });

program.parse(process.argv);
