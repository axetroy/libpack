/**
 * Created by axetroy on 17-4-22.
 */
const webpack = require("webpack");
const path = require("path");

// webpack.config.js
module.exports = {
  entry: {},
  output: {
    filename: "[name].js"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".coffee", ".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx??$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: [
            require("babel-preset-flow"),
            require("babel-preset-es2015"),
            require("babel-preset-es2016"),
            require("babel-preset-es2017")
          ],
          plugins: [
            require("babel-plugin-transform-react-jsx"),
            require("babel-plugin-transform-decorators-legacy").default,
            require("babel-plugin-transform-do-expressions"),
            require("babel-plugin-transform-object-rest-spread"),
            require("babel-plugin-transform-strict-mode"),
            require("babel-plugin-syntax-dynamic-import")
          ]
        }
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: "65-90",
                speed: 4
              }
            }
          }
        ]
      },
      {
        test: /\.(txt)|(md)$/,
        use: "raw-loader"
      },
      { test: /\.xml$/, loader: "xml-loader" } // will load all .xml files with xml-loader by default
    ]
  },
  resolveLoader: {
    modules: [path.join(__dirname, "../", "node_modules")],
    extensions: [".js", ".json"],
    mainFields: ["loader", "main"]
  }
};
