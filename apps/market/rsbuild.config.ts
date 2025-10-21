import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import ports from '../../config.json';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { dependencies } from '../../package.json';
import * as path from 'node:path';

export default defineConfig({
  source: {
    entry: {
      index: path.resolve(__dirname, 'src', 'index.tsx'),
    },
  },
  plugins: [
    pluginReact(),
    pluginSass(),
    pluginModuleFederation({
      name: 'market',
      exposes: {
        './Market': path.resolve(__dirname, 'src', 'app', 'market.tsx'),
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
    }),
  ],
  server: {
    port: ports.market,
  },
});
