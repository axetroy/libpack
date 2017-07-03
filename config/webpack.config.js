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
    extensions: [".coffee", ".js", ".jsx", ".ts"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx??$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["flow", "es2015", "es2016", "es2017"],
          plugins: [
            "transform-react-jsx",
            "transform-decorators-legacy",
            "transform-do-expressions",
            "babel-plugin-transform-object-rest-spread",
            "transform-strict-mode",
            "syntax-dynamic-import"
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
  }
};
