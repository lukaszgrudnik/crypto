const { merge } = require('webpack-merge');
const webpackBaseConfig = require('../../webpack.base.config');
const { ports } = require('../../webpack.server');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = merge(webpackBaseConfig, {
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Market': path.resolve(__dirname, './src/app/market/market.tsx'),
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
      },
    }),
  ],
  devServer: {
    port: ports.market,
    liveReload: true,
    historyApiFallback: true,
  },
});
