/**
 * Created by axetroy on 2017/7/2.
 */
const path = require("path");
const fs = require("fs-extra");
const spawn = require("cross-spawn");

fs.readdir(path.join(__dirname, "testcase")).then(function(files) {
  files.forEach(file => {
    if (/(\.jsx?)|(\.tsx?)$/.test(file)) {
      spawn(
        "./bin/webpack-configless",
        ["-e", "./testcase/" + file, "-o", "./build"],
        {
          stdio: "inherit"
        }
      );
    }
  });
});
