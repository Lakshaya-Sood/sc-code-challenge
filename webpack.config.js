const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const cones = require('./cones.json');

module.exports = {
  mode: 'development',
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{ from: 'public/index.html' }])
  ],
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, './public'),
    hot: true,
    open: true,
    historyApiFallback: true,
    before: function(app) {
      app.get('/api/cones', function(req, res) {
        res.json(cones);
      });
    }
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
