const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve('./src/index.tsx'),
  output: {
    path: path.resolve('dist'),
    filename: '[name].[contenthash].bundle.js', // Generates [name].[contenthash].bundle.js
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'Crypto Market',
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=swap_vert',
        },
      ],
    }),
  ],
};
