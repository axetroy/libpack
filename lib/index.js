/**
 * Created by axetroy on 17-4-22.
 */
const path = require('path');

const program = require('caporal');
const spawn = require('cross-spawn');
const _ = require('lodash');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs-extra'));
const co = require('co');

const pkg = require('../package.json');
const root = path.join(__dirname, '../');

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-c, --config <file>', 'which config you want to use')
  .option('-w, --watch', 'watch the file change')
  .option('--cwd', 'current work dir')
  .action(function(args, options, logger) {
    let WEBPACK_CONFIG_PATH;

    if (options.config) {
      WEBPACK_CONFIG_PATH = path.join(process.cwd(), options.config);
    } else {
      WEBPACK_CONFIG_PATH = path.join(root, 'config', 'webpack.config.es6.js');
    }

    spawn(
      './node_modules/.bin/webpack',
      [
        '--config',
        WEBPACK_CONFIG_PATH,
        '--display-error-details',
        '--progress',
        '--colors'
      ].concat(options.watch ? ['--watch'] : []),
      {
        env: process.env,
        cwd: options.cwd
          ? path.join(process.cwd(), options.cwd)
          : process.cwd(),
        stdio: 'inherit'
      }
    );
  });

program.parse(process.argv);
