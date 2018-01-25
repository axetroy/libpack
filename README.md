# webpack-configless

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/webpack-configless.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/axetroy/webpack-configless.svg?branch=master)](https://travis-ci.org/axetroy/webpack-configless)
[![Dependency](https://david-dm.org/axetroy/webpack-configless.svg)](https://david-dm.org/axetroy/webpack-configless)
![License](https://img.shields.io/badge/license-MIT-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/webpack-configless.svg)](https://badge.fury.io/js/webpack-configless)

CLI tool for quickly develop **Javascript/Typescript/Flow/React/Vue** library without any configuration

Support ES2015/ES2016/ES2017/Flow/Typescript/JSX...and so on

> I hate endless config

## Installation

```bash
npm install webpack-configless -g
```

## Usage

```bash
$ webpack-configless --help

   webpack-configless 0.2.0 - use webpack without config

   USAGE

     webpack-configless

   OPTIONS

     --cwd            current work dir           optional
     -w, --watch      watch the file change      optional
     -e, --entry      entry file                 required      default: "./index.vue"
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
webpack-configless -e ./index.vue -o ./build
```

or here is a boilerplate repo

[webpack-configless-boilerplate](https://github.com/axetroy/webpack-configless-boilerplate)

## Contributing

```bash
git clone https://github.com/axetroy/webpack-configless.git
cd ./webpack-configless
yarn
yarn test
```

You can flow [Contribute Guide](https://github.com/axetroy/webpack-configless/blob/master/contributing.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/axetroy/webpack-configless/commits?author=axetroy) 🔌 [⚠️](https://github.com/axetroy/webpack-configless/commits?author=axetroy) [🐛](https://github.com/axetroy/webpack-configless/issues?q=author%3Aaxetroy) 🎨 |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The [MIT License](https://github.com/axetroy/webpack-configless/blob/master/LICENSE)
