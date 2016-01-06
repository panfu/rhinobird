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
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot',
      // RiotControl: 'RiotControl'
    }),
  ],
  devServer: {
    port: 5000,
  },
  devtool: 'source-map',
}
