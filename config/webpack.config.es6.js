/**
 * Created by axetroy on 17-4-22.
 */
const webpack = require('webpack');
const path = require('path');
const cwd = process.cwd();

// webpack.config.js
module.exports = {
  entry: {
    bundle: path.join(cwd, 'index.js')
  },
  output: {
    path: path.join(cwd, 'build'),
    filename: '[name].js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.coffee', '.js', '.ts']
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
};
