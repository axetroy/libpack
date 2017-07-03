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
const root = path.join(__dirname, "../");
const cwd = process.cwd();

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
      WEBPACK_CONFIG_PATH = path.join(process.cwd(), options.config);
    } else {
      WEBPACK_CONFIG_PATH = path.join(root, "config", "webpack.config.js");
    }

    const WEBPACK_CONFIG = require(WEBPACK_CONFIG_PATH);

    const { entry, output } = options;

    if (!entry) throw new Error(`No entry file.`);
    if (!output) throw new Error(`No output dir.`);

    const entryPath = path.join(cwd, entry);

    const entryPathEntity = path.parse(entryPath);
    WEBPACK_CONFIG.entry = WEBPACK_CONFIG.entry || {};
    WEBPACK_CONFIG.entry[entryPathEntity.name] = entryPath;

    WEBPACK_CONFIG.output.path = path.join(cwd, output);

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
