/**
 * Created by axetroy on 17-4-22.
 */
const webpack = require('webpack');
const path = require('path');
const cwd = process.cwd();

// webpack.config.js
module.exports = {
  entry: {},
  output: {
    path: path.join(cwd, 'build'),
    filename: '[name].js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.coffee', '.js', '.jsx', '.ts']
  },
  module: {
    loaders: [
      {
        test: /\.jsx??$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['flow', 'es2015', 'es2016', 'es2017'],
          plugins: [
            'transform-react-jsx',
            'transform-decorators-legacy',
            'transform-do-expressions',
            'babel-plugin-transform-object-rest-spread',
            'transform-strict-mode',
            'syntax-dynamic-import'
          ]
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  }
};
