import * as React from 'react';
import { lazy, Suspense } from 'react';

const Market = lazy(() =>
    // @ts-ignore
    import('market/Market').then((module) => ({ default: module.Market }))
);

const Wallet = lazy(() =>
    // @ts-ignore
    import('wallet/Wallet').then((module) => ({ default: module.Wallet }))
);

export const App: React.FC = () => {
    return (
        <Suspense>
            Shell:
            <Market />
            <Wallet />
        </Suspense>
    );
};
