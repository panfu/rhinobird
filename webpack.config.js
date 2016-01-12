const webpack = require('webpack');
const path = require('path');

module.exports = {
  cache: true,
  entry: {
    app: './web/app',
    vendor: './web/vendor',
  },
  output: {
    path: './dist',
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
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot',
      RiotControl: 'riotcontrol',
      Promise: 'promise-polyfill/Promise',
      jQuery: 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 5001,
    contentBase: "./web/public/",
  },
  devtool: 'source-map',

  inline: true,
  stats: { colors: true },
  progress: false, // Defaults to true
  failOnError: false, // don't report error to grunt if webpack find errors
  // Use this if webpack errors are tolerable and grunt should continue
  watch: true, // use webpacks watcher
  // You need to keep the grunt process alive
  keepalive: true // don't finish the grunt task
}
