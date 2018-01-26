# libpack

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/libpack.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/axetroy/libpack.svg?branch=master)](https://travis-ci.org/axetroy/libpack)
[![Dependency](https://david-dm.org/axetroy/libpack.svg)](https://david-dm.org/axetroy/libpack)
![License](https://img.shields.io/badge/license-MIT-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/%40axetroy%2Flibpack.svg)](https://badge.fury.io/js/%40axetroy%2Flibpack)

CLI tool for quickly build your library with zero configuration.

Support:

* [x] es2015/es2016/es2017/es2018...
* [x] Flow
* [x] Typescript
* [x] React
* [x] Vue

## Installation

```bash
npm install @axetroy/libpack -g
```

## Usage

```
$ libpack --help

   libpack 0.5.2 - Build your library without tears.

   USAGE

     libpack <entry> <output>

   ARGUMENTS

     <entry>       Entry file path      required      default: "./index.js"
     <output>      Output dir path      required      default: "./build/"  

   OPTIONS

     --cwd <cwd>                          Current work dir                                                                              optional
     -w, --watch                          Watch the file change                                                                         optional      default: false
     --server                             Server the file                                                                               optional      default: false
     --target <target>                    Build target, https://webpack.js.org/concepts/targets/                                        optional      default: "web"
     --prepack                            Prepack the Javascript with facebook/prepack                                                  optional      default: false
     --library <library>                  Output library name, default your package.json name field                                     optional
     --libraryTarget <libraryTarget>      Output library target, https://webpack.js.org/configuration/output/#output-librarytarget      optional      default: "umd"
     --externals <externals>              Externals library, eg. "--externals react,react-dom"                                          optional      default: []

   GLOBAL OPTIONS

     -h, --help         Display help
     -V, --version      Display version
     --no-color         Disable colors
     --quiet            Quiet mode - only displays warn and error messages
     -v, --verbose      Verbose mode - will also output debug messages
```

## API

```javascript
const libpack = require("@axetroy/libpack");

libpack({
  cwd: process.cwd(),
  watch: false,
  entry: "./index.js",
  output: "./build",
  prepack: false,
  library: "my-library-name",
  libraryTarget: "umd",
  externals: [],
  target: "web",
  server: false
})
  .then(function() {
    console.log("build success...");
  })
  .catch(function(err) {
    console.error(err);
  });
```

## Example

```bash
libpack ./index.js ./build
libpack ./index.jsx ./build
libpack ./index.ts ./build
libpack ./index.tsx ./build
libpack ./index.vue ./build
```

## Contributing

```bash
git clone https://github.com/axetroy/libpack.git
cd ./libpack
npm i
npm test
```

You can flow [Contribute Guide](https://github.com/axetroy/libpack/blob/master/contributing.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/axetroy/libpack/commits?author=axetroy) 🔌 [⚠️](https://github.com/axetroy/libpack/commits?author=axetroy) [🐛](https://github.com/axetroy/libpack/issues?q=author%3Aaxetroy) 🎨 |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The [MIT License](https://github.com/axetroy/libpack/blob/master/LICENSE)
