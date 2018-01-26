/**
 * Created by axetroy on 2017/7/2.
 */
const path = require("path");
const fs = require("fs-extra");
const spawn = require("cross-spawn");

(async function() {
  const testDir = path.join(process.cwd(), "tests");
  const files = await fs.readdir(testDir);
  while (files.length) {
    const subDir = files.shift();
    const subFiles = await fs.readdir(path.join(testDir, subDir));
    while (subFiles.length) {
      const file = subFiles.shift();
      const ext = path.extname(file);
      switch (ext) {
        case ".js":
        case ".jsx":
        case ".ts":
        case ".tsx":
        case ".vue":
          console.log("Packing " + path.join(testDir, subDir, file));
          spawn(
            "./bin/libpack",
            [
              "./tests/" + subDir + "/" + file,
              "./build/" + subDir,
              "--library",
              subDir
            ],
            {
              stdio: "inherit"
            }
          );
          break;
      }
    }
  }
})().catch(err => {
  console.error(err);
});
