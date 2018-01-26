/**
 * Created by axetroy on 17-4-22.
 */
const path = require("path");
const ShakePlugin = require("webpack-common-shake").Plugin;
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const babelOptions = {
  presets: [
    require("babel-preset-flow"),
    require("babel-preset-react"),
    require("babel-preset-env"),
    require("babel-preset-stage-0"),
    require("babel-preset-stage-1"),
    require("babel-preset-stage-2"),
    require("babel-preset-stage-3")
  ],
  plugins: [
    require("babel-plugin-transform-flow-comments"),
    require("babel-plugin-transform-decorators-legacy").default,
    require("babel-plugin-transform-es3-member-expression-literals"),
    require("babel-plugin-transform-es3-property-literals"),
    require("babel-plugin-transform-strict-mode"),
    [
      require("babel-plugin-transform-runtime"),
      {
        helpers: false,
        polyfill: false,
        regenerator: true,
        moduleName: "babel-runtime"
      }
    ]
  ]
};

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
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: babelOptions
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        loader: "vue-loader",
        options: {
          loaders: {
            js: "babel-loader",
            options: babelOptions
          }
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
  },
  plugins: [new ShakePlugin()].concat(
    process.env.NODE_ENV === "production" ? [UglifyJSPlugin] : []
  ),
  externals: {
  },
  watch: false,
  watchOptions: {
    ignored: /node_modules/
  }
};
