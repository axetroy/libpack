/**
 * Created by axetroy on 17-7-3.
 */

const path = require("path");

const root = path.join(__dirname, "../");
const cwd = process.cwd();

module.exports = {
  root,
  cwd,
  node_modules: path.join(root, "node_modules"),
  bower_components: path.join(root, "bower_components"),
  test_cases: path.join(root, "testcase")
};
