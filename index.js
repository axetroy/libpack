/**
 * Created by axetroy on 17-4-22.
 */
const path = require('path');
const program = require('caporal');
const co = require('co');

const pkg = require('./package.json');

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-w, --watch', 'watch the file change', program.BOOLEAN)
  .option('--cwd', 'current work dir', program.STRING)
  .option('-e, --entry', 'entry file', program.STRING, './index.js', true)
  .option('-o --output', 'output dir', program.STRING, './build/', true)
  .option('-m --minify', 'minify output file', program.BOOLEAN)
  .action(function(argv, options) {
    co(require('./lib/webpack')(argv, options)).catch(function(err) {
      console.error(err);
    });
  });

program.parse(process.argv);
