import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { ports } from '../../config';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { dependencies } from '../../package.json';

export default defineConfig({
    plugins: [
        pluginReact(),
        pluginSass(),
        pluginModuleFederation({
            name: 'wallet',
            exposes: {
                './Wallet': `./src/app/wallet/wallet.tsx`,
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
        port: ports.wallet,
        htmlFallback: 'index',
    },
});
