import { createBrowserRouter } from 'react-router';
import { App } from './app/app';
import { lazy, Suspense } from 'react';

const Wallet = lazy(() =>
    // @ts-ignore
    import('wallet/Wallet').then((m) => ({ default: m.Wallet }))
);
const Market = lazy(() =>
    // @ts-ignore
    import('market/Market').then((m) => ({ default: m.Market }))
);

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: 'wallet',
                Component: Wallet,
            },
            {
                path: 'market',
                Component: Market,
            },
        ],
    },
]);

export default router;
