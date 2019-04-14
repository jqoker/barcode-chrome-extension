const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV;

module.exports = {
  mode: mode,
  entry: {
    popup: './src/popup.js',
    background: './src/background.js',
  },
  output: {
    path: path.resolve(__dirname, './barcode'),
    filename: '[name].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/popup.html',
      inject: 'body',
      filename: 'popup.html',
    }),
    new CopyPlugin([
      {
        from: './src/manifest.json',
        to: '',
      },
      {
        from: './src/bicons/',
        to: 'bicons'
      }
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, 'barcode'),
    compress: true,
    port: 9000
  },
}
