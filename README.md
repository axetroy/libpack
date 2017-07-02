# webpack-configless

用于快速开发的cli工具，基于Webpack打包，无需任何配置。

适用场景: 

1. 开发Javascript/Typescript库，不在需要重复配置Webpack/Babel/Typescript
2. 快速开始开发，无需任何配置

## 特性

- [x] 支持es2015,es2016,es2017
- [x] 支持Flow, Typescript, Jsx

## 使用

```bash
npm intsall webpack-configless -g
webpack-configless -e ./index.js -o ./build
```