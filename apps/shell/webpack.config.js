const { merge } = require('webpack-merge');
const webpackBaseConfig = require('../../webpack.base.config');
const { ports } = require('../../webpack.server');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = merge(webpackBaseConfig, {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shellApp',
      remotes: {
        walletApp: `walletApp@http://localhost:${ports.wallet}/remoteEntry.js`,
        marketApp: `marketApp@http://localhost:${ports.market}/remoteEntry.js`,
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
      },
    }),
  ],
  devServer: {
    port: ports.shell,
    liveReload: true,
    historyApiFallback: true,
  },
});
