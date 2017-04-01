const path = require('path')

module.exports = {
  watch: true,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }]
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    historyApiFallback: true
  }
}
