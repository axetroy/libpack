/**
 * Created by axetroy on 17-4-22.
 */
const path = require('path');

const program = require('caporal');
const spawn = require('cross-spawn');
const _ = require('lodash');
const fs = require('fs-extra');
const co = require('co');

const pkg = require('../package.json');
const root = path.join(__dirname, '../');
const cwd = process.cwd();

const webpack = require('webpack');

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-c, --config <file>', 'which config you want to use')
  .option('-w, --watch', 'watch the file change')
  .option('--cwd', 'current work dir')
  .option('-e, --entry', 'entry file')
  .option('-o --output', 'output dir')
  .action(function(args, options) {
    let WEBPACK_CONFIG_PATH;

    if (options.config) {
      WEBPACK_CONFIG_PATH = path.join(process.cwd(), options.config);
    } else {
      WEBPACK_CONFIG_PATH = path.join(root, 'config', 'webpack.config.es6.js');
    }

    const WEBPACK_CONFIG = require(WEBPACK_CONFIG_PATH);

    const { entry, output } = options;

    if (entry) {
      const entryPath = path.join(cwd, entry);
      const entryPathEntity = path.parse(entryPath);
      WEBPACK_CONFIG.entry = WEBPACK_CONFIG.entry || {};
      WEBPACK_CONFIG.entry[entryPathEntity.name] = entryPath;
    }

    if (output) {
      WEBPACK_CONFIG.output.path = path.join(cwd, output);
    }

    webpack(WEBPACK_CONFIG, function(err) {
      if (err) throw err;
    });
  });

program.parse(process.argv);
