/**
 * Created by axetroy on 17-4-22.
 */
const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const paths = require("./paths");

// webpack.config.js
module.exports = function(config) {
  const file = config.file;

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

  const webpackCommonPlugins = [
    new webpack.DefinePlugin(
      (() => {
        let result = {};
        for (let key in process.env) {
          result["process.env." + key] = `"${process.env[key]}"`;
        }
        return result;
      })()
    ),
    new webpack.ProgressPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: path.basename(file) + ".map"
    })
  ];

  const webpackDevPlugins = [new webpack.NamedModulesPlugin()];
  const webpackProdPlugins = [
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        ecma: 5,
        compress: {
          drop_console: true,
          drop_debugger: true,
          unused: true
        }
      }
    })
  ];

  const postcssOptions = {
    ident: "postcss",
    plugins: [require("postcss-import")(), require("autoprefixer")]
  };

  return {
    entry: {},
    output: {
      filename: "[name].js"
    },
    target: "web",
    resolve: {
      modules: ["node_modules"],
      extensions: [".js", ".jsx", ".ts", ".tsx", ".vue", ".css"]
    },
    module: {
      rules: [
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
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: postcssOptions
            }
          ]
        },
        {
          test: /\.less$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: postcssOptions
            },
            "less-loader"
          ]
        },
        {
          test: /\.s(a|c)ss$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: postcssOptions
            },
            "sass-loader"
          ]
        },
        {
          test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          use: "base64-inline-loader?limit=1000&name=[name].[ext]"
        },
        {
          test: /\.(txt)|(md)$/,
          use: "raw-loader"
        },
        { test: /\.xml$/, loader: "xml-loader" } // will load all .xml files with xml-loader by default
      ]
    },
    resolveLoader: {
      modules: [
        paths.node_modules,
        "node_modules",
        path.join(process.cwd(), "node_modules")
      ],
      extensions: [".js", ".json"],
      mainFields: ["loader", "main"]
    },
    mode: process.env.NODE_ENV === "production" ? "production" : "none",
    node: {
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    },
    plugins: webpackCommonPlugins.concat(
      process.env.NODE_ENV === "production"
        ? webpackProdPlugins
        : webpackDevPlugins
    ),
    stats: "verbose",
    profile: true,
    externals: {},
    watch: false,
    watchOptions: {
      ignored: /node_modules/
    }
  };
};
