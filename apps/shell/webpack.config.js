const { merge } = require('webpack-merge');
const webpackBaseConfig = require('../../webpack.base.config');
const { ports } = require('../../webpack.server');

module.exports = merge(webpackBaseConfig, {
  devServer: {
    port: ports.shell,
    liveReload: true,
  },
});
