# webpack-comfigless

[![Greenkeeper badge](https://badges.greenkeeper.io/gpmer/webpack-comfigless.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/gpmer/webpack-comfigless.svg?branch=master)](https://travis-ci.org/gpmer/webpack-comfigless)
[![Dependency](https://david-dm.org/gpmer/webpack-comfigless.svg)](https://david-dm.org/gpmer/webpack-comfigless)
![License](https://img.shields.io/badge/license-MIT-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/webpack-comfigless.svg)](https://badge.fury.io/js/webpack-comfigless)

用于快速开发的cli工具

适用与想要快速开发一个Javascript/Typescript库，又不用烦于配置

## Features

- [x] 支持ES2015,ES2016,ES2017
- [x] 支持Flow, Typescript, JSX
- [x] 支持打包图片/css/文件

## Installation
```bash
npm install webpack-comfigless -g
```

## Usage

```bash
$ webpack-configless --help

   webpack-configless 0.1.0 - use webpack without config

   USAGE

     webpack-configless

   OPTIONS

     -w, --watch      watch the file change      optional
     --cwd            current work dir           optional
     -e, --entry      entry file                 required      default: "./index.js"
     -o --output      output dir                 required      default: "./build/"
     -m --minify      minify output file         optional

   GLOBAL OPTIONS

     -h, --help         Display help
     -V, --version      Display version
     --no-color         Disable colors
     --quiet            Quiet mode - only displays warn and error messages
     -v, --verbose      Verbose mode - will also output debug messages

```

## Example

```bash
webpack-configless -e ./index.js -o ./build
```

## Uninstall

```bash
npm uninstall webpack-comfigless -g
```

## Contributing

```bash
git clone https://github.com/gpmer/webpack-comfigless.git
cd ./webpack-comfigless
yarn
./bin/webpack-configless
```

You can flow [Contribute Guide](https://github.com/gpmer/webpack-comfigless/blob/master/contributing.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/gpmer/gpm.js/commits?author=axetroy) 🔌 [⚠️](https://github.com/gpmer/gpm.js/commits?author=axetroy) [🐛](https://github.com/gpmer/gpm.js/issues?q=author%3Aaxetroy) 🎨 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The [MIT License](https://github.com/gpmer/webpack-comfigless/blob/master/LICENSE)
