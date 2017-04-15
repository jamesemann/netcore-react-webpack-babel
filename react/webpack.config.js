var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
      publicPath: "/",
      path: path.join(__dirname, '/wwwroot/'),
      //path: __dirname + "/wwwroot",
      filename: 'bundle.js'
  },
  devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, '/src/'),
      watchOptions: {
          aggregateTimeout: 300,
          poll: 1000
      }
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
