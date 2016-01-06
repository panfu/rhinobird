const webpack = require('webpack');
const path = require('path');

module.exports = {
  cache: true,
  entry: {
    app: './web/app',
    vendor: './web/vendor',
  },
  output: {
    path: path.join(__dirname, '/web/dist'),
    publicPath: '/assets/',
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      { test: /\.css$/, include: /web/, loader: 'style!css' },
      { test: /\.html$/, include: /web/, loader: 'riotjs' },
      { test: /\.js$/, include: /web/, loader: 'babel', query: {modules: 'common'} },
    ],
  },
  // externals: {
  //   "jquery": "jQuery"
  // },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot',
      RiotControl: 'riotcontrol',
      Promise: 'promise-polyfill/Promise'
    }),
  ],
  devServer: {
    port: 5000,
  },
  devtool: 'source-map',
}
