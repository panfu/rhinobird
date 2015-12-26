const webpack = require('webpack');
const path = require('path');

module.exports = {
  cache: true,
  entry: {
    app: './app.js',
    vendor: './vendor.js',
  },
  output: {
    path: path.join(__dirname, '/public/dist'),
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.css$/, include: /web/, loader: 'style!css' },
      { test: /\.html$/, include: /web/, loader: 'riotjs' },
      { test: /\.js$/, include: /web/, loader: 'babel', query: {modules: 'common'} },
    ],
  },
  plugins: [
    // ["transform-es2015-modules-commonjs", { "allowTopLevelThis": true }],
    new webpack.ProvidePlugin({
      riot: 'riot',
      RiotControl: 'RiotControl'
    }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
  ],
  devServer: {
    port: 5555,
  },
  devtool: 'source-map',
}
