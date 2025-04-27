const { merge } = require('webpack-merge');
const webpackBaseConfig = require('../../webpack.base.config');
const { ports } = require('../../webpack.server');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = merge(webpackBaseConfig, {
  plugins: [
    new ModuleFederationPlugin({
      name: 'walletApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Wallet': path.resolve(__dirname, './src/app/wallet/wallet.tsx'),
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
      },
    }),
  ],
  devServer: {
    port: ports.wallet,
    liveReload: true,
    historyApiFallback: true,
  },
});
