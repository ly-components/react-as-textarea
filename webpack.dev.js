const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './demo/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules', './src', './demo'],
    extensions: ['', '.js', '.jsx']
  },
  postcss: [require('autoprefixer')],
  module: {
    loaders: [{
      test: /\.jsx?/,
      loaders: ['babel'],
      include: [path.join(__dirname, 'src'), path.join(__dirname, 'demo')]
    }, {
      test: /\.less/,
      loaders: ['style', 'css', 'postcss', 'less']
    }, {
      test: /\.css$/,
      loaders: ['style', 'css', 'postcss']
    }]
  }
};
