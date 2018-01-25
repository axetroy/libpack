/**
 * Created by axetroy on 2017/7/2.
 */
const path = require("path");
const fs = require("fs-extra");
const spawn = require("cross-spawn");

(async function() {
  const testDir = path.join(__dirname, "testcase");
  const files = await fs.readdir(testDir);
  while (files.length) {
    const subDir = files.shift();
    const subFiles = await fs.readdir(path.join(testDir, subDir));
    while (subFiles.length) {
      const file = subFiles.shift();
      if (/(\.jsx?)|(\.tsx?)$/.test(file)) {
        spawn(
          "./bin/webpack-configless",
          [
            "-e",
            "./testcase/" + subDir + "/" + file,
            "-o",
            "./build/" + subDir,
            "--library",
            subDir
          ],
          {
            stdio: "inherit"
          }
        );
      }
    }
  }
})().catch(err => {
  console.error(err);
});
