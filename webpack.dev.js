const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(config, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: '[name].js',
    assetModuleFilename: 'img/[name].[ext]',
    clean: true,
  },
  watch: true,
  plugins: [new MiniCssExtractPlugin({})],
});
