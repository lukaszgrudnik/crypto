const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'auto',
  },
  // module is any file that Webpack processes (e.g., .js, .ts, .css).
  module: {
    // Out of the box, webpack only understands JavaScript and JSON files.
    // Loaders allow webpack to process other types of files and convert them
    // into valid modules that can be consumed by your application and added
    // to the dependency graph.
    rules: [
      {
        test: /\.(ts|tsx)$/,
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
  // Controls how Webpack finds files when you import them in your code
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'marketApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Market': path.resolve(__dirname, './src/app/market/market.tsx'),
        './Store': path.resolve(__dirname, './src/app/store/store.ts'),
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
        'react-redux': { singleton: true, eager: true },
      },
    }),
  ],
  devServer: {
    port: 8082,
    liveReload: true,
    hot: false,
  },
};
