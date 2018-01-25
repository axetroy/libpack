/**
 * Created by axetroy on 17-4-22.
 */
const program = require("caporal");

const pkg = require("./package.json");

program
  .version(pkg.version)
  .description(pkg.description)
  .option("--cwd <cwd>", "Current work dir", program.STRING)
  .option("-w, --watch", "Watch the file change", program.BOOLEAN)
  .option(
    "-e, --entry <entry>",
    "Entry file path",
    program.STRING,
    "./index.vue",
    true
  )
  .option(
    "-o --output <output>",
    "Output dir path",
    program.STRING,
    "./build/",
    true
  )
  .option(
    "--prepack",
    "prepack the Javascript with facebook/prepack",
    program.BOOLEAN
  )
  .option(
    "--library <library>",
    "Output library name, default your package.json name field",
    program.STRING
  )
  .option(
    "--libraryTarget <libraryTarget>",
    "Output library target, one of var/assign/this/window/global/commonjs/commonjs2/amd/umd/jsonp",
    program.STRING,
    "umd"
  )
  .action(function(argv, options) {
    require("./lib/webpack")(argv, options).catch(err => {
      console.error(err);
    });
  });

program.parse(process.argv);
